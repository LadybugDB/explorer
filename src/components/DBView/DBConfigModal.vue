<template>
  <div
    ref="modal"
    class="modal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-transparent border-0">
        <div class="db-modal-body">
          <h2>Database</h2>
          <hr>

          <div
            v-if="currentConfig"
            class="db-current"
          >
            <span class="db-label">Current</span>
            <code class="db-path">{{ currentConfig.isInMemory ? 'In-memory' : currentConfig.dbPath }}</code>
          </div>

          <div class="db-options">
            <label class="db-option-card">
              <input
                v-model="mode"
                type="radio"
                value="file"
              >
              <span>
                <i class="fa-solid fa-hard-drive" />&nbsp; File-based
              </span>
            </label>
            <label class="db-option-card">
              <input
                v-model="mode"
                type="radio"
                value="memory"
              >
              <span>
                <i class="fa-solid fa-memory" />&nbsp; In-memory
              </span>
            </label>
          </div>

          <div
            v-if="mode === 'file'"
            class="db-fields"
          >
            <div class="db-field-row">
              <label>Directory</label>
              <input
                v-model="dbDir"
                type="text"
                class="form-control db-input"
                placeholder="/path/to/database/directory"
              >
            </div>
            <div class="db-field-row">
              <label>File name</label>
              <input
                v-model="dbFile"
                type="text"
                class="form-control db-input"
                placeholder="database.kz"
              >
            </div>
          </div>

          <div
            v-if="mode === 'memory'"
            class="db-info-text"
          >
            <i class="fa-solid fa-circle-info" />&nbsp;
            Data will not be persisted. All changes are lost when the server restarts.
          </div>

          <div
            v-if="errorMessage"
            class="db-error"
          >
            <i class="fa-solid fa-triangle-exclamation" />&nbsp; {{ errorMessage }}
          </div>
        </div>

        <div class="modal-footer db-modal-footer d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-pill px-4 py-2"
            @click="hideModal()"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn-apply rounded-pill"
            :disabled="isApplying"
            @click="apply()"
          >
            <span
              v-if="isApplying"
              class="spinner-border spinner-border-sm me-1"
              role="status"
            />
            {{ isApplying ? 'Applying…' : 'Apply' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Modal } from 'bootstrap';
import Axios from "@/utils/AxiosWrapper";

export default {
  name: "DBConfigModal",
  emits: ["reload-schema"],
  data: () => ({
    modal: null,
    currentConfig: null,
    mode: "file",
    dbDir: "",
    dbFile: "",
    isApplying: false,
    errorMessage: "",
  }),
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.$refs.modal.addEventListener("hidden.bs.modal", this.onHide);
  },
  beforeUnmount() {
    this.$refs.modal.removeEventListener("hidden.bs.modal", this.onHide);
    this.modal.dispose();
  },
  methods: {
    async showModal() {
      this.errorMessage = "";
      try {
        const res = await Axios.get("/api/db");
        this.currentConfig = res.data;
        this.mode = res.data.isInMemory ? "memory" : "file";
        this.dbDir = res.data.dbDir || "";
        this.dbFile = res.data.dbFile || "";
      } catch (err) {
        this.currentConfig = null;
      }
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    onHide() {
      this.errorMessage = "";
      this.isApplying = false;
    },
    async apply() {
      this.errorMessage = "";
      this.isApplying = true;
      try {
        const payload = this.mode === "memory"
          ? { inMemory: true }
          : { dbDir: this.dbDir, dbFile: this.dbFile || "database.kz", inMemory: false };
        await Axios.post("/api/db", payload);
        this.$emit("reload-schema");
        this.hideModal();
      } catch (err) {
        this.errorMessage = err.response?.data?.error || err.message || "Failed to apply configuration.";
      } finally {
        this.isApplying = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.db-modal-body {
  border-radius: 1rem 1rem 0 0;
  background-color: var(--bs-body-bg-secondary);
  border: 1px solid var(--bs-body-inactive);
  padding: 2rem;

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
  }

  hr {
    height: 1px;
    margin: 1rem 0;
    background-color: var(--bs-body-inactive);
    border: none;
  }
}

.db-current {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--bs-body-bg);
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.db-label {
  color: var(--bs-body-inactive);
  white-space: nowrap;
}

.db-path {
  color: var(--bs-body-text);
  word-break: break-all;
}

.db-options {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.db-option-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--bs-body-bg);
  border: 1px solid var(--bs-body-inactive);
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.875rem;

  input[type="radio"] {
    accent-color: var(--bs-body-bg-accent);
  }
}

.db-fields {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.db-field-row {
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    min-width: 90px;
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--bs-body-text);
  }
}

.db-input {
  background-color: var(--bs-body-bg);
  border: 1px solid var(--bs-body-inactive);
  color: var(--bs-body-text);
  font-size: 0.875rem;
  border-radius: 0.5rem;
}

.db-info-text {
  font-size: 0.875rem;
  color: var(--bs-body-inactive);
  padding: 0.5rem 0;
}

.db-error {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #dc3545;
}

.db-modal-footer {
  background-color: var(--bs-body-bg-secondary);
  border: 1px solid var(--bs-body-inactive);
  border-top: none;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  gap: 0.75rem;
}

.btn-apply {
  background-color: var(--bs-body-bg-accent);
  color: white;
  padding: 0.5rem 1.5rem;
  border: 0;
  border-radius: 9999px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
