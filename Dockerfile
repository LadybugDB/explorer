FROM node:20-trixie-slim

ARG SKIP_GRAMMAR=false
ARG SKIP_BUILD_APP=false
ARG SKIP_DATASETS=false

ENV DEBIAN_FRONTEND=noninteractive
RUN echo "SKIP_GRAMMAR: $SKIP_GRAMMAR"
RUN echo "SKIP_BUILD_APP: $SKIP_BUILD_APP"
RUN echo "SKIP_DATASETS: $SKIP_DATASETS"
RUN apt-get update && apt-get install -y libatomic1

# Install dependencies
RUN if [ "$SKIP_GRAMMAR" != "true" ] ; then apt-get update && apt-get install -y openjdk-21-jdk python3 python3-pip ; else echo "Skipping openjdk installation as grammar generation is skipped" ; fi
RUN if [ "$SKIP_DATASETS" != "true" ] ; then apt-get update && apt-get install -y git ; else echo "Skipping git installation as dataset fetch is skipped" ; fi
# Copy app
COPY . /home/node/app
RUN chown -R node:node /home/node/app

# Make data and database directories
RUN mkdir -p /database
RUN mkdir -p /data
RUN chown -R node:node /database
RUN chown -R node:node /data

# Switch to node user
USER node

# Set working directory
WORKDIR /home/node/app

# Install dependencies, generate grammar, and reduce size of lbug node module
# Done in one step to reduce image size
RUN npm install &&\
    if [ "$SKIP_GRAMMAR" != "true" ] ; then npm run generate-grammar-prod ; else echo "Skipping grammar generation" ; fi &&\
    rm -rf node_modules/lbug/prebuilt node_modules/lbug/lbug-source

# Fetch datasets
RUN if [ "$SKIP_DATASETS" != "true" ] ; then npm run fetch-datasets ; else echo "Skipping dataset fetch" ; fi

# Build app
# Increase Node.js heap size to avoid out of memory errors during build
RUN if [ "$SKIP_BUILD_APP" != "true" ] ; then NODE_OPTIONS="--max-old-space-size=4096" npm run build ; else echo "Skipping build" ; fi

# Expose port
EXPOSE 8000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8000
ENV LBUG_DIR=/database

# Run app
ENTRYPOINT ["node", "src/server/index.js"]
