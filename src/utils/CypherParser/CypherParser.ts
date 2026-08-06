// Generated from Cypher.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class CypherParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly T__41 = 42;
    public static readonly T__42 = 43;
    public static readonly T__43 = 44;
    public static readonly ACYCLIC = 45;
    public static readonly ANY = 46;
    public static readonly ADD = 47;
    public static readonly ALL = 48;
    public static readonly ALTER = 49;
    public static readonly ANALYZE = 50;
    public static readonly AND = 51;
    public static readonly AS = 52;
    public static readonly ASC = 53;
    public static readonly ASCENDING = 54;
    public static readonly ATTACH = 55;
    public static readonly BEGIN = 56;
    public static readonly BY = 57;
    public static readonly CALL = 58;
    public static readonly CASE = 59;
    public static readonly CAST = 60;
    public static readonly CHECKPOINT = 61;
    public static readonly COLUMN = 62;
    public static readonly COMMENT = 63;
    public static readonly COMMIT = 64;
    public static readonly COMMIT_SKIP_CHECKPOINT = 65;
    public static readonly CONTAINS = 66;
    public static readonly COPY = 67;
    public static readonly COUNT = 68;
    public static readonly CREATE = 69;
    public static readonly CYCLE = 70;
    public static readonly DATABASE = 71;
    public static readonly DBTYPE = 72;
    public static readonly DEFAULT = 73;
    public static readonly DELETE = 74;
    public static readonly DESC = 75;
    public static readonly DESCENDING = 76;
    public static readonly DETACH = 77;
    public static readonly DISTINCT = 78;
    public static readonly DROP = 79;
    public static readonly ELSE = 80;
    public static readonly END = 81;
    public static readonly ENDS = 82;
    public static readonly EXISTS = 83;
    public static readonly EXPLAIN = 84;
    public static readonly EXPORT = 85;
    public static readonly EXTENSION = 86;
    public static readonly FALSE = 87;
    public static readonly FROM = 88;
    public static readonly FORCE = 89;
    public static readonly FOR = 90;
    public static readonly GLOB = 91;
    public static readonly GRAPH = 92;
    public static readonly GROUP = 93;
    public static readonly HEADERS = 94;
    public static readonly HINT = 95;
    public static readonly IMPORT = 96;
    public static readonly INDEX = 97;
    public static readonly IF = 98;
    public static readonly IN = 99;
    public static readonly INCREMENT = 100;
    public static readonly INSTALL = 101;
    public static readonly IS = 102;
    public static readonly JOIN = 103;
    public static readonly KEY = 104;
    public static readonly LIMIT = 105;
    public static readonly LOAD = 106;
    public static readonly LOGICAL = 107;
    public static readonly MACRO = 108;
    public static readonly MATCH = 109;
    public static readonly MAXVALUE = 110;
    public static readonly MERGE = 111;
    public static readonly MINVALUE = 112;
    public static readonly MULTI_JOIN = 113;
    public static readonly NO = 114;
    public static readonly NODE = 115;
    public static readonly NOT = 116;
    public static readonly NONE = 117;
    public static readonly NULL = 118;
    public static readonly ON = 119;
    public static readonly ONLY = 120;
    public static readonly OPTIONS = 121;
    public static readonly OPTIONAL = 122;
    public static readonly OR = 123;
    public static readonly ORDER = 124;
    public static readonly PRIMARY = 125;
    public static readonly PROFILE = 126;
    public static readonly PROJECT = 127;
    public static readonly READ = 128;
    public static readonly REL = 129;
    public static readonly RENAME = 130;
    public static readonly RETURN = 131;
    public static readonly ROLLBACK = 132;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 133;
    public static readonly SEQUENCE = 134;
    public static readonly SET = 135;
    public static readonly SORTED = 136;
    public static readonly SHORTEST = 137;
    public static readonly START = 138;
    public static readonly STARTS = 139;
    public static readonly STRUCT = 140;
    public static readonly TABLE = 141;
    public static readonly THEN = 142;
    public static readonly TO = 143;
    public static readonly TRAIL = 144;
    public static readonly TRANSACTION = 145;
    public static readonly TRUE = 146;
    public static readonly TYPE = 147;
    public static readonly UNION = 148;
    public static readonly UNWIND = 149;
    public static readonly UNINSTALL = 150;
    public static readonly UPDATE = 151;
    public static readonly USE = 152;
    public static readonly WHEN = 153;
    public static readonly WHERE = 154;
    public static readonly WITH = 155;
    public static readonly WRITE = 156;
    public static readonly WSHORTEST = 157;
    public static readonly XOR = 158;
    public static readonly SINGLE = 159;
    public static readonly YIELD = 160;
    public static readonly USER = 161;
    public static readonly PASSWORD = 162;
    public static readonly ROLE = 163;
    public static readonly MAP = 164;
    public static readonly DECIMAL = 165;
    public static readonly STAR = 166;
    public static readonly L_SKIP = 167;
    public static readonly INVALID_NOT_EQUAL = 168;
    public static readonly COLON = 169;
    public static readonly DOTDOT = 170;
    public static readonly MINUS = 171;
    public static readonly FACTORIAL = 172;
    public static readonly StringLiteral = 173;
    public static readonly EscapedChar = 174;
    public static readonly DecimalInteger = 175;
    public static readonly HexLetter = 176;
    public static readonly HexDigit = 177;
    public static readonly Digit = 178;
    public static readonly NonZeroDigit = 179;
    public static readonly NonZeroOctDigit = 180;
    public static readonly ZeroDigit = 181;
    public static readonly ExponentDecimalReal = 182;
    public static readonly RegularDecimalReal = 183;
    public static readonly UnescapedSymbolicName = 184;
    public static readonly IdentifierStart = 185;
    public static readonly IdentifierPart = 186;
    public static readonly EscapedSymbolicName = 187;
    public static readonly SP = 188;
    public static readonly WHITESPACE = 189;
    public static readonly CypherComment = 190;
    public static readonly Unknown = 191;
    public static readonly RULE_iC_Statements = 0;
    public static readonly RULE_oC_Cypher = 1;
    public static readonly RULE_oC_Statement = 2;
    public static readonly RULE_iC_CopyFrom = 3;
    public static readonly RULE_iC_ColumnNames = 4;
    public static readonly RULE_iC_ScanSource = 5;
    public static readonly RULE_iC_CopyFromByColumn = 6;
    public static readonly RULE_iC_CopyTO = 7;
    public static readonly RULE_iC_ExportDatabase = 8;
    public static readonly RULE_iC_ImportDatabase = 9;
    public static readonly RULE_iC_AttachDatabase = 10;
    public static readonly RULE_iC_Option = 11;
    public static readonly RULE_iC_OptionQualifier = 12;
    public static readonly RULE_iC_Options = 13;
    public static readonly RULE_iC_DetachDatabase = 14;
    public static readonly RULE_iC_UseDatabase = 15;
    public static readonly RULE_iC_CreateGraph = 16;
    public static readonly RULE_iC_UseGraph = 17;
    public static readonly RULE_iC_Analyze = 18;
    public static readonly RULE_iC_StandaloneCall = 19;
    public static readonly RULE_iC_CommentOn = 20;
    public static readonly RULE_iC_CreateMacro = 21;
    public static readonly RULE_iC_PositionalArgs = 22;
    public static readonly RULE_iC_DefaultArg = 23;
    public static readonly RULE_iC_FilePaths = 24;
    public static readonly RULE_iC_IfNotExists = 25;
    public static readonly RULE_iC_CreateNodeTable = 26;
    public static readonly RULE_iC_CreateRelTable = 27;
    public static readonly RULE_iC_CreateIndex = 28;
    public static readonly RULE_iC_IndexPattern = 29;
    public static readonly RULE_iC_IndexNodePattern = 30;
    public static readonly RULE_iC_IndexRelationshipPattern = 31;
    public static readonly RULE_iC_IndexPropertyPattern = 32;
    public static readonly RULE_iC_CreateFromToConnections = 33;
    public static readonly RULE_iC_CreateFromToConnection = 34;
    public static readonly RULE_iC_FromToConnections = 35;
    public static readonly RULE_iC_FromToConnection = 36;
    public static readonly RULE_iC_CreateSequence = 37;
    public static readonly RULE_iC_CreateType = 38;
    public static readonly RULE_iC_SequenceOptions = 39;
    public static readonly RULE_iC_WithPasswd = 40;
    public static readonly RULE_iC_CreateUser = 41;
    public static readonly RULE_iC_CreateRole = 42;
    public static readonly RULE_iC_IncrementBy = 43;
    public static readonly RULE_iC_MinValue = 44;
    public static readonly RULE_iC_MaxValue = 45;
    public static readonly RULE_iC_StartWith = 46;
    public static readonly RULE_iC_Cycle = 47;
    public static readonly RULE_iC_IfExists = 48;
    public static readonly RULE_iC_Drop = 49;
    public static readonly RULE_iC_DropIndexName = 50;
    public static readonly RULE_iC_AlterTable = 51;
    public static readonly RULE_iC_AlterOptions = 52;
    public static readonly RULE_iC_AddProperty = 53;
    public static readonly RULE_iC_Default = 54;
    public static readonly RULE_iC_DropProperty = 55;
    public static readonly RULE_iC_RenameTable = 56;
    public static readonly RULE_iC_RenameProperty = 57;
    public static readonly RULE_iC_AddFromToConnection = 58;
    public static readonly RULE_iC_DropFromToConnection = 59;
    public static readonly RULE_iC_SetSortedBy = 60;
    public static readonly RULE_iC_SortedByItem = 61;
    public static readonly RULE_iC_ColumnDefinitions = 62;
    public static readonly RULE_iC_ColumnDefinition = 63;
    public static readonly RULE_iC_PropertyDefinitions = 64;
    public static readonly RULE_iC_PropertyDefinition = 65;
    public static readonly RULE_iC_CreateNodeConstraint = 66;
    public static readonly RULE_iC_UnionType = 67;
    public static readonly RULE_iC_StructType = 68;
    public static readonly RULE_iC_MapType = 69;
    public static readonly RULE_iC_DecimalType = 70;
    public static readonly RULE_iC_DataType = 71;
    public static readonly RULE_iC_ListIdentifiers = 72;
    public static readonly RULE_iC_ListIdentifier = 73;
    public static readonly RULE_oC_AnyCypherOption = 74;
    public static readonly RULE_oC_Explain = 75;
    public static readonly RULE_oC_Profile = 76;
    public static readonly RULE_iC_Transaction = 77;
    public static readonly RULE_iC_Extension = 78;
    public static readonly RULE_iC_LoadExtension = 79;
    public static readonly RULE_iC_InstallExtension = 80;
    public static readonly RULE_iC_UninstallExtension = 81;
    public static readonly RULE_iC_UpdateExtension = 82;
    public static readonly RULE_oC_Query = 83;
    public static readonly RULE_oC_RegularQuery = 84;
    public static readonly RULE_oC_Union = 85;
    public static readonly RULE_oC_SingleQuery = 86;
    public static readonly RULE_oC_SinglePartQuery = 87;
    public static readonly RULE_oC_MultiPartQuery = 88;
    public static readonly RULE_iC_QueryPart = 89;
    public static readonly RULE_oC_UpdatingClause = 90;
    public static readonly RULE_oC_ReadingClause = 91;
    public static readonly RULE_iC_LoadFrom = 92;
    public static readonly RULE_oC_YieldItem = 93;
    public static readonly RULE_oC_YieldItems = 94;
    public static readonly RULE_iC_InQueryCall = 95;
    public static readonly RULE_oC_Match = 96;
    public static readonly RULE_iC_Hint = 97;
    public static readonly RULE_iC_JoinNode = 98;
    public static readonly RULE_oC_Unwind = 99;
    public static readonly RULE_oC_Create = 100;
    public static readonly RULE_oC_Merge = 101;
    public static readonly RULE_oC_MergeAction = 102;
    public static readonly RULE_oC_Set = 103;
    public static readonly RULE_oC_SetItem = 104;
    public static readonly RULE_oC_Delete = 105;
    public static readonly RULE_oC_With = 106;
    public static readonly RULE_oC_Return = 107;
    public static readonly RULE_oC_ProjectionBody = 108;
    public static readonly RULE_oC_ProjectionItems = 109;
    public static readonly RULE_oC_ProjectionItem = 110;
    public static readonly RULE_oC_Order = 111;
    public static readonly RULE_oC_Skip = 112;
    public static readonly RULE_oC_Limit = 113;
    public static readonly RULE_oC_SortItem = 114;
    public static readonly RULE_oC_Where = 115;
    public static readonly RULE_oC_Pattern = 116;
    public static readonly RULE_oC_PatternPart = 117;
    public static readonly RULE_oC_AnonymousPatternPart = 118;
    public static readonly RULE_oC_PatternElement = 119;
    public static readonly RULE_oC_NodePattern = 120;
    public static readonly RULE_oC_PatternElementChain = 121;
    public static readonly RULE_oC_RelationshipPattern = 122;
    public static readonly RULE_oC_RelationshipDetail = 123;
    public static readonly RULE_iC_Properties = 124;
    public static readonly RULE_oC_RelationshipTypes = 125;
    public static readonly RULE_oC_NodeLabels = 126;
    public static readonly RULE_iC_RecursiveDetail = 127;
    public static readonly RULE_iC_RecursiveType = 128;
    public static readonly RULE_oC_RangeLiteral = 129;
    public static readonly RULE_iC_RecursiveComprehension = 130;
    public static readonly RULE_iC_RecursiveProjectionItems = 131;
    public static readonly RULE_oC_LowerBound = 132;
    public static readonly RULE_oC_UpperBound = 133;
    public static readonly RULE_oC_LabelName = 134;
    public static readonly RULE_oC_RelTypeName = 135;
    public static readonly RULE_oC_Expression = 136;
    public static readonly RULE_oC_OrExpression = 137;
    public static readonly RULE_oC_XorExpression = 138;
    public static readonly RULE_oC_AndExpression = 139;
    public static readonly RULE_oC_NotExpression = 140;
    public static readonly RULE_oC_ComparisonExpression = 141;
    public static readonly RULE_iC_ComparisonOperator = 142;
    public static readonly RULE_iC_BitwiseOrOperatorExpression = 143;
    public static readonly RULE_iC_BitwiseAndOperatorExpression = 144;
    public static readonly RULE_iC_BitShiftOperatorExpression = 145;
    public static readonly RULE_iC_BitShiftOperator = 146;
    public static readonly RULE_oC_AddOrSubtractExpression = 147;
    public static readonly RULE_iC_AddOrSubtractOperator = 148;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 149;
    public static readonly RULE_iC_MultiplyDivideModuloOperator = 150;
    public static readonly RULE_oC_PowerOfExpression = 151;
    public static readonly RULE_oC_StringListNullOperatorExpression = 152;
    public static readonly RULE_oC_ListOperatorExpression = 153;
    public static readonly RULE_oC_StringOperatorExpression = 154;
    public static readonly RULE_oC_RegularExpression = 155;
    public static readonly RULE_oC_NullOperatorExpression = 156;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 157;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 158;
    public static readonly RULE_oC_Atom = 159;
    public static readonly RULE_oC_Quantifier = 160;
    public static readonly RULE_oC_FilterExpression = 161;
    public static readonly RULE_oC_IdInColl = 162;
    public static readonly RULE_oC_Literal = 163;
    public static readonly RULE_oC_BooleanLiteral = 164;
    public static readonly RULE_oC_ListLiteral = 165;
    public static readonly RULE_iC_ListEntry = 166;
    public static readonly RULE_iC_StructLiteral = 167;
    public static readonly RULE_iC_StructField = 168;
    public static readonly RULE_oC_ParenthesizedExpression = 169;
    public static readonly RULE_oC_FunctionInvocation = 170;
    public static readonly RULE_oC_FunctionName = 171;
    public static readonly RULE_iC_FunctionParameter = 172;
    public static readonly RULE_iC_LambdaParameter = 173;
    public static readonly RULE_iC_LambdaVars = 174;
    public static readonly RULE_oC_PathPatterns = 175;
    public static readonly RULE_oC_ExistCountSubquery = 176;
    public static readonly RULE_oC_PropertyLookup = 177;
    public static readonly RULE_oC_CaseExpression = 178;
    public static readonly RULE_oC_CaseAlternative = 179;
    public static readonly RULE_oC_Variable = 180;
    public static readonly RULE_oC_NumberLiteral = 181;
    public static readonly RULE_oC_Parameter = 182;
    public static readonly RULE_oC_PropertyExpression = 183;
    public static readonly RULE_oC_PropertyKeyName = 184;
    public static readonly RULE_oC_IntegerLiteral = 185;
    public static readonly RULE_oC_DoubleLiteral = 186;
    public static readonly RULE_oC_SchemaName = 187;
    public static readonly RULE_oC_SymbolicName = 188;
    public static readonly RULE_iC_NonReservedKeywords = 189;
    public static readonly RULE_oC_LeftArrowHead = 190;
    public static readonly RULE_oC_RightArrowHead = 191;
    public static readonly RULE_oC_Dash = 192;

    public static readonly literalNames = [
        null, "';'", "'('", "')'", "','", "'.'", "'='", "'['", "']'", "'{'", 
        "'}'", "'|'", "'<>'", "'<'", "'<='", "'>'", "'>='", "'&'", "'>>'", 
        "'<<'", "'+'", "'/'", "'%'", "'^'", "'=~'", "'$'", "'\\u27E8'", 
        "'\\u3008'", "'\\uFE64'", "'\\uFF1C'", "'\\u27E9'", "'\\u3009'", 
        "'\\uFE65'", "'\\uFF1E'", "'\\u00AD'", "'\\u2010'", "'\\u2011'", 
        "'\\u2012'", "'\\u2013'", "'\\u2014'", "'\\u2015'", "'\\u2212'", 
        "'\\uFE58'", "'\\uFE63'", "'\\uFF0D'", null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "'*'", null, "'!='", "':'", 
        "'..'", "'-'", "'!'", null, null, null, null, null, null, null, 
        null, "'0'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "ACYCLIC", "ANY", "ADD", "ALL", "ALTER", "ANALYZE", "AND", 
        "AS", "ASC", "ASCENDING", "ATTACH", "BEGIN", "BY", "CALL", "CASE", 
        "CAST", "CHECKPOINT", "COLUMN", "COMMENT", "COMMIT", "COMMIT_SKIP_CHECKPOINT", 
        "CONTAINS", "COPY", "COUNT", "CREATE", "CYCLE", "DATABASE", "DBTYPE", 
        "DEFAULT", "DELETE", "DESC", "DESCENDING", "DETACH", "DISTINCT", 
        "DROP", "ELSE", "END", "ENDS", "EXISTS", "EXPLAIN", "EXPORT", "EXTENSION", 
        "FALSE", "FROM", "FORCE", "FOR", "GLOB", "GRAPH", "GROUP", "HEADERS", 
        "HINT", "IMPORT", "INDEX", "IF", "IN", "INCREMENT", "INSTALL", "IS", 
        "JOIN", "KEY", "LIMIT", "LOAD", "LOGICAL", "MACRO", "MATCH", "MAXVALUE", 
        "MERGE", "MINVALUE", "MULTI_JOIN", "NO", "NODE", "NOT", "NONE", 
        "NULL", "ON", "ONLY", "OPTIONS", "OPTIONAL", "OR", "ORDER", "PRIMARY", 
        "PROFILE", "PROJECT", "READ", "REL", "RENAME", "RETURN", "ROLLBACK", 
        "ROLLBACK_SKIP_CHECKPOINT", "SEQUENCE", "SET", "SORTED", "SHORTEST", 
        "START", "STARTS", "STRUCT", "TABLE", "THEN", "TO", "TRAIL", "TRANSACTION", 
        "TRUE", "TYPE", "UNION", "UNWIND", "UNINSTALL", "UPDATE", "USE", 
        "WHEN", "WHERE", "WITH", "WRITE", "WSHORTEST", "XOR", "SINGLE", 
        "YIELD", "USER", "PASSWORD", "ROLE", "MAP", "DECIMAL", "STAR", "L_SKIP", 
        "INVALID_NOT_EQUAL", "COLON", "DOTDOT", "MINUS", "FACTORIAL", "StringLiteral", 
        "EscapedChar", "DecimalInteger", "HexLetter", "HexDigit", "Digit", 
        "NonZeroDigit", "NonZeroOctDigit", "ZeroDigit", "ExponentDecimalReal", 
        "RegularDecimalReal", "UnescapedSymbolicName", "IdentifierStart", 
        "IdentifierPart", "EscapedSymbolicName", "SP", "WHITESPACE", "CypherComment", 
        "Unknown"
    ];
    public static readonly ruleNames = [
        "iC_Statements", "oC_Cypher", "oC_Statement", "iC_CopyFrom", "iC_ColumnNames", 
        "iC_ScanSource", "iC_CopyFromByColumn", "iC_CopyTO", "iC_ExportDatabase", 
        "iC_ImportDatabase", "iC_AttachDatabase", "iC_Option", "iC_OptionQualifier", 
        "iC_Options", "iC_DetachDatabase", "iC_UseDatabase", "iC_CreateGraph", 
        "iC_UseGraph", "iC_Analyze", "iC_StandaloneCall", "iC_CommentOn", 
        "iC_CreateMacro", "iC_PositionalArgs", "iC_DefaultArg", "iC_FilePaths", 
        "iC_IfNotExists", "iC_CreateNodeTable", "iC_CreateRelTable", "iC_CreateIndex", 
        "iC_IndexPattern", "iC_IndexNodePattern", "iC_IndexRelationshipPattern", 
        "iC_IndexPropertyPattern", "iC_CreateFromToConnections", "iC_CreateFromToConnection", 
        "iC_FromToConnections", "iC_FromToConnection", "iC_CreateSequence", 
        "iC_CreateType", "iC_SequenceOptions", "iC_WithPasswd", "iC_CreateUser", 
        "iC_CreateRole", "iC_IncrementBy", "iC_MinValue", "iC_MaxValue", 
        "iC_StartWith", "iC_Cycle", "iC_IfExists", "iC_Drop", "iC_DropIndexName", 
        "iC_AlterTable", "iC_AlterOptions", "iC_AddProperty", "iC_Default", 
        "iC_DropProperty", "iC_RenameTable", "iC_RenameProperty", "iC_AddFromToConnection", 
        "iC_DropFromToConnection", "iC_SetSortedBy", "iC_SortedByItem", 
        "iC_ColumnDefinitions", "iC_ColumnDefinition", "iC_PropertyDefinitions", 
        "iC_PropertyDefinition", "iC_CreateNodeConstraint", "iC_UnionType", 
        "iC_StructType", "iC_MapType", "iC_DecimalType", "iC_DataType", 
        "iC_ListIdentifiers", "iC_ListIdentifier", "oC_AnyCypherOption", 
        "oC_Explain", "oC_Profile", "iC_Transaction", "iC_Extension", "iC_LoadExtension", 
        "iC_InstallExtension", "iC_UninstallExtension", "iC_UpdateExtension", 
        "oC_Query", "oC_RegularQuery", "oC_Union", "oC_SingleQuery", "oC_SinglePartQuery", 
        "oC_MultiPartQuery", "iC_QueryPart", "oC_UpdatingClause", "oC_ReadingClause", 
        "iC_LoadFrom", "oC_YieldItem", "oC_YieldItems", "iC_InQueryCall", 
        "oC_Match", "iC_Hint", "iC_JoinNode", "oC_Unwind", "oC_Create", 
        "oC_Merge", "oC_MergeAction", "oC_Set", "oC_SetItem", "oC_Delete", 
        "oC_With", "oC_Return", "oC_ProjectionBody", "oC_ProjectionItems", 
        "oC_ProjectionItem", "oC_Order", "oC_Skip", "oC_Limit", "oC_SortItem", 
        "oC_Where", "oC_Pattern", "oC_PatternPart", "oC_AnonymousPatternPart", 
        "oC_PatternElement", "oC_NodePattern", "oC_PatternElementChain", 
        "oC_RelationshipPattern", "oC_RelationshipDetail", "iC_Properties", 
        "oC_RelationshipTypes", "oC_NodeLabels", "iC_RecursiveDetail", "iC_RecursiveType", 
        "oC_RangeLiteral", "iC_RecursiveComprehension", "iC_RecursiveProjectionItems", 
        "oC_LowerBound", "oC_UpperBound", "oC_LabelName", "oC_RelTypeName", 
        "oC_Expression", "oC_OrExpression", "oC_XorExpression", "oC_AndExpression", 
        "oC_NotExpression", "oC_ComparisonExpression", "iC_ComparisonOperator", 
        "iC_BitwiseOrOperatorExpression", "iC_BitwiseAndOperatorExpression", 
        "iC_BitShiftOperatorExpression", "iC_BitShiftOperator", "oC_AddOrSubtractExpression", 
        "iC_AddOrSubtractOperator", "oC_MultiplyDivideModuloExpression", 
        "iC_MultiplyDivideModuloOperator", "oC_PowerOfExpression", "oC_StringListNullOperatorExpression", 
        "oC_ListOperatorExpression", "oC_StringOperatorExpression", "oC_RegularExpression", 
        "oC_NullOperatorExpression", "oC_UnaryAddSubtractOrFactorialExpression", 
        "oC_PropertyOrLabelsExpression", "oC_Atom", "oC_Quantifier", "oC_FilterExpression", 
        "oC_IdInColl", "oC_Literal", "oC_BooleanLiteral", "oC_ListLiteral", 
        "iC_ListEntry", "iC_StructLiteral", "iC_StructField", "oC_ParenthesizedExpression", 
        "oC_FunctionInvocation", "oC_FunctionName", "iC_FunctionParameter", 
        "iC_LambdaParameter", "iC_LambdaVars", "oC_PathPatterns", "oC_ExistCountSubquery", 
        "oC_PropertyLookup", "oC_CaseExpression", "oC_CaseAlternative", 
        "oC_Variable", "oC_NumberLiteral", "oC_Parameter", "oC_PropertyExpression", 
        "oC_PropertyKeyName", "oC_IntegerLiteral", "oC_DoubleLiteral", "oC_SchemaName", 
        "oC_SymbolicName", "iC_NonReservedKeywords", "oC_LeftArrowHead", 
        "oC_RightArrowHead", "oC_Dash",
    ];

    public get grammarFileName(): string { return "Cypher.g4"; }
    public get literalNames(): (string | null)[] { return CypherParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return CypherParser.symbolicNames; }
    public get ruleNames(): string[] { return CypherParser.ruleNames; }
    public get serializedATN(): number[] { return CypherParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this._interp = new antlr.ParserATNSimulator(this, CypherParser._ATN, CypherParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public iC_Statements(): IC_StatementsContext {
        let localctx: IC_StatementsContext = new IC_StatementsContext(this._ctx, this.state);
        this.enterRule(localctx, 0, CypherParser.RULE_iC_Statements);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 386;
            this.oC_Cypher();
            this.state = 397;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 388;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 387;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 390;
                    this.match(CypherParser.T__0);
                    this.state = 392;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 391;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 394;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 399;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 401;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 400;
                this.match(CypherParser.SP);
                }
            }

            this.state = 403;
            this.match(CypherParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Cypher(): OC_CypherContext {
        let localctx: OC_CypherContext = new OC_CypherContext(this._ctx, this.state);
        this.enterRule(localctx, 2, CypherParser.RULE_oC_Cypher);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===84 || _la===126) {
                {
                this.state = 405;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 409;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 408;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 411;
            this.oC_Statement();
            }
            this.state = 416;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 413;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 412;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 415;
                this.match(CypherParser.T__0);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Statement(): OC_StatementContext {
        let localctx: OC_StatementContext = new OC_StatementContext(this._ctx, this.state);
        this.enterRule(localctx, 4, CypherParser.RULE_oC_Statement);
        try {
            this.state = 444;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 418;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 419;
                this.iC_Analyze();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 420;
                this.iC_CreateUser();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 421;
                this.iC_CreateRole();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 422;
                this.iC_CreateNodeTable();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 423;
                this.iC_CreateRelTable();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 424;
                this.iC_CreateIndex();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 425;
                this.iC_CreateSequence();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 426;
                this.iC_CreateType();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 427;
                this.iC_Drop();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 428;
                this.iC_AlterTable();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 429;
                this.iC_CopyFrom();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 430;
                this.iC_CopyFromByColumn();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 431;
                this.iC_CopyTO();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 432;
                this.iC_StandaloneCall();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 433;
                this.iC_CreateMacro();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 434;
                this.iC_CommentOn();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 435;
                this.iC_Transaction();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 436;
                this.iC_Extension();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 437;
                this.iC_ExportDatabase();
                }
                break;
            case 21:
                this.enterOuterAlt(localctx, 21);
                {
                this.state = 438;
                this.iC_ImportDatabase();
                }
                break;
            case 22:
                this.enterOuterAlt(localctx, 22);
                {
                this.state = 439;
                this.iC_AttachDatabase();
                }
                break;
            case 23:
                this.enterOuterAlt(localctx, 23);
                {
                this.state = 440;
                this.iC_DetachDatabase();
                }
                break;
            case 24:
                this.enterOuterAlt(localctx, 24);
                {
                this.state = 441;
                this.iC_UseDatabase();
                }
                break;
            case 25:
                this.enterOuterAlt(localctx, 25);
                {
                this.state = 442;
                this.iC_CreateGraph();
                }
                break;
            case 26:
                this.enterOuterAlt(localctx, 26);
                {
                this.state = 443;
                this.iC_UseGraph();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CopyFrom(): IC_CopyFromContext {
        let localctx: IC_CopyFromContext = new IC_CopyFromContext(this._ctx, this.state);
        this.enterRule(localctx, 6, CypherParser.RULE_iC_CopyFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 446;
            this.match(CypherParser.COPY);
            this.state = 447;
            this.match(CypherParser.SP);
            this.state = 448;
            this.oC_SchemaName();
            this.state = 450;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
            case 1:
                {
                this.state = 449;
                this.iC_ColumnNames();
                }
                break;
            }
            this.state = 452;
            this.match(CypherParser.SP);
            this.state = 453;
            this.match(CypherParser.FROM);
            this.state = 454;
            this.match(CypherParser.SP);
            this.state = 455;
            this.iC_ScanSource();
            this.state = 469;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 457;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 456;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 459;
                this.match(CypherParser.T__1);
                this.state = 461;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 460;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 463;
                this.iC_Options();
                this.state = 465;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 464;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 467;
                this.match(CypherParser.T__2);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ColumnNames(): IC_ColumnNamesContext {
        let localctx: IC_ColumnNamesContext = new IC_ColumnNamesContext(this._ctx, this.state);
        this.enterRule(localctx, 8, CypherParser.RULE_iC_ColumnNames);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 472;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 471;
                this.match(CypherParser.SP);
                }
            }

            this.state = 474;
            this.match(CypherParser.T__1);
            this.state = 476;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 475;
                this.match(CypherParser.SP);
                }
            }

            this.state = 495;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237012269) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693025) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383259) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 25043861) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & 2305) !== 0)) {
                {
                this.state = 478;
                this.oC_SchemaName();
                this.state = 489;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 480;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 479;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 482;
                        this.match(CypherParser.T__3);
                        this.state = 484;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 483;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 486;
                        this.oC_SchemaName();
                        }
                        }
                    }
                    this.state = 491;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                }
                this.state = 493;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 492;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 497;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ScanSource(): IC_ScanSourceContext {
        let localctx: IC_ScanSourceContext = new IC_ScanSourceContext(this._ctx, this.state);
        this.enterRule(localctx, 10, CypherParser.RULE_iC_ScanSource);
        let _la: number;
        try {
            this.state = 520;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 499;
                this.iC_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 500;
                this.match(CypherParser.T__1);
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 501;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 504;
                this.oC_Query();
                this.state = 506;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 505;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 508;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 510;
                this.oC_Parameter();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 511;
                this.oC_Variable();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 512;
                this.oC_Variable();
                this.state = 513;
                this.match(CypherParser.T__4);
                this.state = 515;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 514;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 517;
                this.oC_SchemaName();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 519;
                this.oC_FunctionInvocation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CopyFromByColumn(): IC_CopyFromByColumnContext {
        let localctx: IC_CopyFromByColumnContext = new IC_CopyFromByColumnContext(this._ctx, this.state);
        this.enterRule(localctx, 12, CypherParser.RULE_iC_CopyFromByColumn);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 522;
            this.match(CypherParser.COPY);
            this.state = 523;
            this.match(CypherParser.SP);
            this.state = 524;
            this.oC_SchemaName();
            this.state = 525;
            this.match(CypherParser.SP);
            this.state = 526;
            this.match(CypherParser.FROM);
            this.state = 527;
            this.match(CypherParser.SP);
            this.state = 528;
            this.match(CypherParser.T__1);
            this.state = 530;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 529;
                this.match(CypherParser.SP);
                }
            }

            this.state = 532;
            this.match(CypherParser.StringLiteral);
            this.state = 543;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===188) {
                {
                {
                this.state = 534;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 533;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 536;
                this.match(CypherParser.T__3);
                this.state = 538;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 537;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 540;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 545;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 546;
            this.match(CypherParser.T__2);
            this.state = 547;
            this.match(CypherParser.SP);
            this.state = 548;
            this.match(CypherParser.BY);
            this.state = 549;
            this.match(CypherParser.SP);
            this.state = 550;
            this.match(CypherParser.COLUMN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CopyTO(): IC_CopyTOContext {
        let localctx: IC_CopyTOContext = new IC_CopyTOContext(this._ctx, this.state);
        this.enterRule(localctx, 14, CypherParser.RULE_iC_CopyTO);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 552;
            this.match(CypherParser.COPY);
            this.state = 553;
            this.match(CypherParser.SP);
            this.state = 554;
            this.match(CypherParser.T__1);
            this.state = 556;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 555;
                this.match(CypherParser.SP);
                }
            }

            this.state = 558;
            this.oC_Query();
            this.state = 560;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 559;
                this.match(CypherParser.SP);
                }
            }

            this.state = 562;
            this.match(CypherParser.T__2);
            this.state = 563;
            this.match(CypherParser.SP);
            this.state = 564;
            this.match(CypherParser.TO);
            this.state = 565;
            this.match(CypherParser.SP);
            this.state = 566;
            this.match(CypherParser.StringLiteral);
            this.state = 580;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                {
                this.state = 568;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 567;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 570;
                this.match(CypherParser.T__1);
                this.state = 572;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 571;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 574;
                this.iC_Options();
                this.state = 576;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 575;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 578;
                this.match(CypherParser.T__2);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ExportDatabase(): IC_ExportDatabaseContext {
        let localctx: IC_ExportDatabaseContext = new IC_ExportDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 16, CypherParser.RULE_iC_ExportDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 582;
            this.match(CypherParser.EXPORT);
            this.state = 583;
            this.match(CypherParser.SP);
            this.state = 584;
            this.match(CypherParser.DATABASE);
            this.state = 585;
            this.match(CypherParser.SP);
            this.state = 586;
            this.match(CypherParser.StringLiteral);
            this.state = 600;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
            case 1:
                {
                this.state = 588;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 587;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 590;
                this.match(CypherParser.T__1);
                this.state = 592;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 591;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 594;
                this.iC_Options();
                this.state = 596;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 595;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 598;
                this.match(CypherParser.T__2);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ImportDatabase(): IC_ImportDatabaseContext {
        let localctx: IC_ImportDatabaseContext = new IC_ImportDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 18, CypherParser.RULE_iC_ImportDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 602;
            this.match(CypherParser.IMPORT);
            this.state = 603;
            this.match(CypherParser.SP);
            this.state = 604;
            this.match(CypherParser.DATABASE);
            this.state = 605;
            this.match(CypherParser.SP);
            this.state = 606;
            this.match(CypherParser.StringLiteral);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_AttachDatabase(): IC_AttachDatabaseContext {
        let localctx: IC_AttachDatabaseContext = new IC_AttachDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 20, CypherParser.RULE_iC_AttachDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 608;
            this.match(CypherParser.ATTACH);
            this.state = 609;
            this.match(CypherParser.SP);
            this.state = 610;
            this.match(CypherParser.StringLiteral);
            this.state = 615;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
            case 1:
                {
                this.state = 611;
                this.match(CypherParser.SP);
                this.state = 612;
                this.match(CypherParser.AS);
                this.state = 613;
                this.match(CypherParser.SP);
                this.state = 614;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 617;
            this.match(CypherParser.SP);
            this.state = 618;
            this.match(CypherParser.T__1);
            this.state = 620;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 619;
                this.match(CypherParser.SP);
                }
            }

            this.state = 622;
            this.match(CypherParser.DBTYPE);
            this.state = 623;
            this.match(CypherParser.SP);
            this.state = 624;
            this.oC_SymbolicName();
            this.state = 633;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                {
                this.state = 626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 625;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 628;
                this.match(CypherParser.T__3);
                this.state = 630;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 629;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 632;
                this.iC_Options();
                }
                break;
            }
            this.state = 636;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 635;
                this.match(CypherParser.SP);
                }
            }

            this.state = 638;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Option(): IC_OptionContext {
        let localctx: IC_OptionContext = new IC_OptionContext(this._ctx, this.state);
        this.enterRule(localctx, 22, CypherParser.RULE_iC_Option);
        let _la: number;
        try {
            this.state = 664;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 640;
                this.oC_SymbolicName();
                this.state = 654;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
                case 1:
                    {
                    this.state = 642;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 641;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 644;
                    this.match(CypherParser.T__5);
                    this.state = 646;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 645;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 651;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===188) {
                        {
                        {
                        this.state = 648;
                        this.match(CypherParser.SP);
                        }
                        }
                        this.state = 653;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                    break;
                }
                this.state = 656;
                this.oC_Literal();
                this.state = 661;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
                case 1:
                    {
                    this.state = 658;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 657;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 660;
                    this.iC_OptionQualifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 663;
                this.oC_SymbolicName();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_OptionQualifier(): IC_OptionQualifierContext {
        let localctx: IC_OptionQualifierContext = new IC_OptionQualifierContext(this._ctx, this.state);
        this.enterRule(localctx, 24, CypherParser.RULE_iC_OptionQualifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 666;
            this.match(CypherParser.T__1);
            this.state = 668;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 667;
                this.match(CypherParser.SP);
                }
            }

            this.state = 670;
            this.oC_SymbolicName();
            this.state = 672;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 671;
                this.match(CypherParser.SP);
                }
            }

            this.state = 674;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Options(): IC_OptionsContext {
        let localctx: IC_OptionsContext = new IC_OptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 26, CypherParser.RULE_iC_Options);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 676;
            this.iC_Option();
            this.state = 687;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 678;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 677;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 680;
                    this.match(CypherParser.T__3);
                    this.state = 682;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 681;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 684;
                    this.iC_Option();
                    }
                    }
                }
                this.state = 689;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_DetachDatabase(): IC_DetachDatabaseContext {
        let localctx: IC_DetachDatabaseContext = new IC_DetachDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 28, CypherParser.RULE_iC_DetachDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 690;
            this.match(CypherParser.DETACH);
            this.state = 691;
            this.match(CypherParser.SP);
            this.state = 692;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_UseDatabase(): IC_UseDatabaseContext {
        let localctx: IC_UseDatabaseContext = new IC_UseDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 30, CypherParser.RULE_iC_UseDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 694;
            this.match(CypherParser.USE);
            this.state = 695;
            this.match(CypherParser.SP);
            this.state = 696;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateGraph(): IC_CreateGraphContext {
        let localctx: IC_CreateGraphContext = new IC_CreateGraphContext(this._ctx, this.state);
        this.enterRule(localctx, 32, CypherParser.RULE_iC_CreateGraph);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 698;
            this.match(CypherParser.CREATE);
            this.state = 699;
            this.match(CypherParser.SP);
            this.state = 700;
            this.match(CypherParser.GRAPH);
            this.state = 701;
            this.match(CypherParser.SP);
            this.state = 702;
            this.oC_SchemaName();
            this.state = 705;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
            case 1:
                {
                this.state = 703;
                this.match(CypherParser.SP);
                this.state = 704;
                this.match(CypherParser.ANY);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_UseGraph(): IC_UseGraphContext {
        let localctx: IC_UseGraphContext = new IC_UseGraphContext(this._ctx, this.state);
        this.enterRule(localctx, 34, CypherParser.RULE_iC_UseGraph);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 707;
            this.match(CypherParser.USE);
            this.state = 708;
            this.match(CypherParser.SP);
            this.state = 709;
            this.match(CypherParser.GRAPH);
            this.state = 710;
            this.match(CypherParser.SP);
            this.state = 711;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Analyze(): IC_AnalyzeContext {
        let localctx: IC_AnalyzeContext = new IC_AnalyzeContext(this._ctx, this.state);
        this.enterRule(localctx, 36, CypherParser.RULE_iC_Analyze);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 713;
            this.match(CypherParser.ANALYZE);
            this.state = 716;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
            case 1:
                {
                this.state = 714;
                this.match(CypherParser.SP);
                this.state = 715;
                this.oC_SchemaName();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_StandaloneCall(): IC_StandaloneCallContext {
        let localctx: IC_StandaloneCallContext = new IC_StandaloneCallContext(this._ctx, this.state);
        this.enterRule(localctx, 38, CypherParser.RULE_iC_StandaloneCall);
        let _la: number;
        try {
            this.state = 733;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 718;
                this.match(CypherParser.CALL);
                this.state = 719;
                this.match(CypherParser.SP);
                this.state = 720;
                this.oC_SymbolicName();
                this.state = 722;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 721;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 724;
                this.match(CypherParser.T__5);
                this.state = 726;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 725;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 728;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 730;
                this.match(CypherParser.CALL);
                this.state = 731;
                this.match(CypherParser.SP);
                this.state = 732;
                this.oC_FunctionInvocation();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CommentOn(): IC_CommentOnContext {
        let localctx: IC_CommentOnContext = new IC_CommentOnContext(this._ctx, this.state);
        this.enterRule(localctx, 40, CypherParser.RULE_iC_CommentOn);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 735;
            this.match(CypherParser.COMMENT);
            this.state = 736;
            this.match(CypherParser.SP);
            this.state = 737;
            this.match(CypherParser.ON);
            this.state = 738;
            this.match(CypherParser.SP);
            this.state = 739;
            this.match(CypherParser.TABLE);
            this.state = 740;
            this.match(CypherParser.SP);
            this.state = 741;
            this.oC_SchemaName();
            this.state = 742;
            this.match(CypherParser.SP);
            this.state = 743;
            this.match(CypherParser.IS);
            this.state = 744;
            this.match(CypherParser.SP);
            this.state = 745;
            this.match(CypherParser.StringLiteral);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateMacro(): IC_CreateMacroContext {
        let localctx: IC_CreateMacroContext = new IC_CreateMacroContext(this._ctx, this.state);
        this.enterRule(localctx, 42, CypherParser.RULE_iC_CreateMacro);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 747;
            this.match(CypherParser.CREATE);
            this.state = 748;
            this.match(CypherParser.SP);
            this.state = 749;
            this.match(CypherParser.MACRO);
            this.state = 750;
            this.match(CypherParser.SP);
            this.state = 751;
            this.oC_FunctionName();
            this.state = 753;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 752;
                this.match(CypherParser.SP);
                }
            }

            this.state = 755;
            this.match(CypherParser.T__1);
            this.state = 757;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
            case 1:
                {
                this.state = 756;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 760;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
            case 1:
                {
                this.state = 759;
                this.iC_PositionalArgs();
                }
                break;
            }
            this.state = 763;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
            case 1:
                {
                this.state = 762;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 766;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237012269) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693025) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383259) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 25043861) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & 2305) !== 0)) {
                {
                this.state = 765;
                this.iC_DefaultArg();
                }
            }

            this.state = 778;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 769;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 768;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 771;
                    this.match(CypherParser.T__3);
                    this.state = 773;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 772;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 775;
                    this.iC_DefaultArg();
                    }
                    }
                }
                this.state = 780;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
            }
            this.state = 782;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 781;
                this.match(CypherParser.SP);
                }
            }

            this.state = 784;
            this.match(CypherParser.T__2);
            this.state = 785;
            this.match(CypherParser.SP);
            this.state = 786;
            this.match(CypherParser.AS);
            this.state = 787;
            this.match(CypherParser.SP);
            this.state = 788;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_PositionalArgs(): IC_PositionalArgsContext {
        let localctx: IC_PositionalArgsContext = new IC_PositionalArgsContext(this._ctx, this.state);
        this.enterRule(localctx, 44, CypherParser.RULE_iC_PositionalArgs);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 790;
            this.oC_SymbolicName();
            this.state = 801;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 792;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 791;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 794;
                    this.match(CypherParser.T__3);
                    this.state = 796;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 795;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 798;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 803;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_DefaultArg(): IC_DefaultArgContext {
        let localctx: IC_DefaultArgContext = new IC_DefaultArgContext(this._ctx, this.state);
        this.enterRule(localctx, 46, CypherParser.RULE_iC_DefaultArg);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 804;
            this.oC_SymbolicName();
            this.state = 806;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 805;
                this.match(CypherParser.SP);
                }
            }

            this.state = 808;
            this.match(CypherParser.COLON);
            this.state = 809;
            this.match(CypherParser.T__5);
            this.state = 811;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 810;
                this.match(CypherParser.SP);
                }
            }

            this.state = 813;
            this.oC_Literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_FilePaths(): IC_FilePathsContext {
        let localctx: IC_FilePathsContext = new IC_FilePathsContext(this._ctx, this.state);
        this.enterRule(localctx, 48, CypherParser.RULE_iC_FilePaths);
        let _la: number;
        try {
            this.state = 848;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 815;
                this.match(CypherParser.T__6);
                this.state = 817;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 816;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 819;
                this.match(CypherParser.StringLiteral);
                this.state = 830;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===188) {
                    {
                    {
                    this.state = 821;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 820;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 823;
                    this.match(CypherParser.T__3);
                    this.state = 825;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 824;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 827;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 832;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 833;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 834;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 835;
                this.match(CypherParser.GLOB);
                this.state = 837;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 836;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 839;
                this.match(CypherParser.T__1);
                this.state = 841;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 840;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 843;
                this.match(CypherParser.StringLiteral);
                this.state = 845;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 844;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 847;
                this.match(CypherParser.T__2);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        let localctx: IC_IfNotExistsContext = new IC_IfNotExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 50, CypherParser.RULE_iC_IfNotExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 850;
            this.match(CypherParser.IF);
            this.state = 851;
            this.match(CypherParser.SP);
            this.state = 852;
            this.match(CypherParser.NOT);
            this.state = 853;
            this.match(CypherParser.SP);
            this.state = 854;
            this.match(CypherParser.EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateNodeTable(): IC_CreateNodeTableContext {
        let localctx: IC_CreateNodeTableContext = new IC_CreateNodeTableContext(this._ctx, this.state);
        this.enterRule(localctx, 52, CypherParser.RULE_iC_CreateNodeTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 856;
            this.match(CypherParser.CREATE);
            this.state = 857;
            this.match(CypherParser.SP);
            this.state = 858;
            this.match(CypherParser.NODE);
            this.state = 859;
            this.match(CypherParser.SP);
            this.state = 860;
            this.match(CypherParser.TABLE);
            this.state = 861;
            this.match(CypherParser.SP);
            this.state = 865;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
            case 1:
                {
                this.state = 862;
                this.iC_IfNotExists();
                this.state = 863;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 867;
            this.oC_SchemaName();
            this.state = 895;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
            case 1:
                {
                this.state = 869;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 868;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 871;
                this.match(CypherParser.T__1);
                this.state = 873;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 872;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 875;
                this.iC_PropertyDefinitions();
                this.state = 877;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
                case 1:
                    {
                    this.state = 876;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 884;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===4) {
                    {
                    this.state = 879;
                    this.match(CypherParser.T__3);
                    this.state = 881;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 880;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 883;
                    this.iC_CreateNodeConstraint();
                    }
                }

                this.state = 887;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 886;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 889;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                {
                this.state = 891;
                this.match(CypherParser.SP);
                this.state = 892;
                this.match(CypherParser.AS);
                this.state = 893;
                this.match(CypherParser.SP);
                this.state = 894;
                this.oC_Query();
                }
                break;
            }
            this.state = 912;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
            case 1:
                {
                this.state = 897;
                this.match(CypherParser.SP);
                this.state = 898;
                this.match(CypherParser.WITH);
                this.state = 900;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 899;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 902;
                this.match(CypherParser.T__1);
                this.state = 904;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 903;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 906;
                this.iC_Options();
                this.state = 908;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 907;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 910;
                this.match(CypherParser.T__2);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateRelTable(): IC_CreateRelTableContext {
        let localctx: IC_CreateRelTableContext = new IC_CreateRelTableContext(this._ctx, this.state);
        this.enterRule(localctx, 54, CypherParser.RULE_iC_CreateRelTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 914;
            this.match(CypherParser.CREATE);
            this.state = 915;
            this.match(CypherParser.SP);
            this.state = 916;
            this.match(CypherParser.REL);
            this.state = 917;
            this.match(CypherParser.SP);
            this.state = 918;
            this.match(CypherParser.TABLE);
            this.state = 921;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
            case 1:
                {
                this.state = 919;
                this.match(CypherParser.SP);
                this.state = 920;
                this.match(CypherParser.GROUP);
                }
                break;
            }
            this.state = 925;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
            case 1:
                {
                this.state = 923;
                this.match(CypherParser.SP);
                this.state = 924;
                this.iC_IfNotExists();
                }
                break;
            }
            this.state = 927;
            this.match(CypherParser.SP);
            this.state = 928;
            this.oC_SchemaName();
            this.state = 930;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 929;
                this.match(CypherParser.SP);
                }
            }

            this.state = 932;
            this.match(CypherParser.T__1);
            this.state = 934;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 933;
                this.match(CypherParser.SP);
                }
            }

            this.state = 936;
            this.iC_CreateFromToConnections();
            this.state = 938;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 937;
                this.match(CypherParser.SP);
                }
            }

            this.state = 966;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
            case 1:
                {
                this.state = 948;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
                case 1:
                    {
                    this.state = 940;
                    this.match(CypherParser.T__3);
                    this.state = 942;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 941;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 944;
                    this.iC_PropertyDefinitions();
                    this.state = 946;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 945;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===4) {
                    {
                    this.state = 950;
                    this.match(CypherParser.T__3);
                    this.state = 952;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 951;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 954;
                    this.oC_SymbolicName();
                    this.state = 956;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 955;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 960;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                {
                this.state = 961;
                this.match(CypherParser.T__2);
                this.state = 962;
                this.match(CypherParser.SP);
                this.state = 963;
                this.match(CypherParser.AS);
                this.state = 964;
                this.match(CypherParser.SP);
                this.state = 965;
                this.oC_Query();
                }
                break;
            }
            this.state = 983;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
            case 1:
                {
                this.state = 968;
                this.match(CypherParser.SP);
                this.state = 969;
                this.match(CypherParser.WITH);
                this.state = 971;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 970;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 973;
                this.match(CypherParser.T__1);
                this.state = 975;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 974;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 977;
                this.iC_Options();
                this.state = 979;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 978;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 981;
                this.match(CypherParser.T__2);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateIndex(): IC_CreateIndexContext {
        let localctx: IC_CreateIndexContext = new IC_CreateIndexContext(this._ctx, this.state);
        this.enterRule(localctx, 56, CypherParser.RULE_iC_CreateIndex);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 985;
            this.match(CypherParser.CREATE);
            this.state = 988;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
            case 1:
                {
                this.state = 986;
                this.match(CypherParser.SP);
                this.state = 987;
                this.oC_SymbolicName();
                }
                break;
            }
            this.state = 990;
            this.match(CypherParser.SP);
            this.state = 991;
            this.match(CypherParser.INDEX);
            this.state = 994;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
            case 1:
                {
                this.state = 992;
                this.match(CypherParser.SP);
                this.state = 993;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 998;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
            case 1:
                {
                this.state = 996;
                this.match(CypherParser.SP);
                this.state = 997;
                this.iC_IfNotExists();
                }
                break;
            }
            this.state = 1000;
            this.match(CypherParser.SP);
            this.state = 1001;
            this.match(CypherParser.FOR);
            this.state = 1002;
            this.match(CypherParser.SP);
            this.state = 1003;
            this.iC_IndexPattern();
            this.state = 1004;
            this.match(CypherParser.SP);
            this.state = 1005;
            this.match(CypherParser.ON);
            this.state = 1006;
            this.match(CypherParser.SP);
            this.state = 1007;
            this.iC_IndexPropertyPattern();
            this.state = 1024;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
            case 1:
                {
                this.state = 1008;
                this.match(CypherParser.SP);
                this.state = 1009;
                this.match(CypherParser.OPTIONS);
                this.state = 1011;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1010;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1013;
                this.match(CypherParser.T__8);
                this.state = 1015;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
                case 1:
                    {
                    this.state = 1014;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1018;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237012269) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693025) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383259) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 25043861) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & 2305) !== 0)) {
                    {
                    this.state = 1017;
                    this.iC_Options();
                    }
                }

                this.state = 1021;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1020;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1023;
                this.match(CypherParser.T__9);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_IndexPattern(): IC_IndexPatternContext {
        let localctx: IC_IndexPatternContext = new IC_IndexPatternContext(this._ctx, this.state);
        this.enterRule(localctx, 58, CypherParser.RULE_iC_IndexPattern);
        try {
            this.state = 1028;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1026;
                this.iC_IndexNodePattern();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1027;
                this.iC_IndexRelationshipPattern();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_IndexNodePattern(): IC_IndexNodePatternContext {
        let localctx: IC_IndexNodePatternContext = new IC_IndexNodePatternContext(this._ctx, this.state);
        this.enterRule(localctx, 60, CypherParser.RULE_iC_IndexNodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1030;
            this.match(CypherParser.T__1);
            this.state = 1032;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
            case 1:
                {
                this.state = 1031;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1035;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237012269) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693025) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383259) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 25043861) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & 2305) !== 0)) {
                {
                this.state = 1034;
                this.oC_Variable();
                }
            }

            this.state = 1038;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1037;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1040;
            this.match(CypherParser.COLON);
            this.state = 1042;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1041;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1044;
            this.oC_LabelName();
            this.state = 1046;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1045;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1048;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_IndexRelationshipPattern(): IC_IndexRelationshipPatternContext {
        let localctx: IC_IndexRelationshipPatternContext = new IC_IndexRelationshipPatternContext(this._ctx, this.state);
        this.enterRule(localctx, 62, CypherParser.RULE_iC_IndexRelationshipPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1050;
            this.match(CypherParser.T__1);
            this.state = 1052;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1051;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1054;
            this.match(CypherParser.T__2);
            this.state = 1056;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1055;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1058;
            this.oC_RelationshipPattern();
            this.state = 1060;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1059;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1062;
            this.match(CypherParser.T__1);
            this.state = 1064;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1063;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1066;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_IndexPropertyPattern(): IC_IndexPropertyPatternContext {
        let localctx: IC_IndexPropertyPatternContext = new IC_IndexPropertyPatternContext(this._ctx, this.state);
        this.enterRule(localctx, 64, CypherParser.RULE_iC_IndexPropertyPattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1068;
            this.match(CypherParser.T__1);
            this.state = 1070;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1069;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1072;
            this.oC_Variable();
            this.state = 1074;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1073;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1076;
            this.match(CypherParser.T__4);
            this.state = 1078;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1077;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1080;
            this.oC_PropertyKeyName();
            this.state = 1082;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1081;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1084;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateFromToConnections(): IC_CreateFromToConnectionsContext {
        let localctx: IC_CreateFromToConnectionsContext = new IC_CreateFromToConnectionsContext(this._ctx, this.state);
        this.enterRule(localctx, 66, CypherParser.RULE_iC_CreateFromToConnections);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1086;
            this.iC_CreateFromToConnection();
            this.state = 1097;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1088;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1087;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1090;
                    this.match(CypherParser.T__3);
                    this.state = 1092;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1091;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1094;
                    this.iC_CreateFromToConnection();
                    }
                    }
                }
                this.state = 1099;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateFromToConnection(): IC_CreateFromToConnectionContext {
        let localctx: IC_CreateFromToConnectionContext = new IC_CreateFromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 68, CypherParser.RULE_iC_CreateFromToConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1100;
            this.match(CypherParser.FROM);
            this.state = 1101;
            this.match(CypherParser.SP);
            this.state = 1102;
            this.oC_SchemaName();
            this.state = 1103;
            this.match(CypherParser.SP);
            this.state = 1104;
            this.match(CypherParser.TO);
            this.state = 1105;
            this.match(CypherParser.SP);
            this.state = 1106;
            this.oC_SchemaName();
            this.state = 1109;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 137, this._ctx) ) {
            case 1:
                {
                this.state = 1107;
                this.match(CypherParser.SP);
                this.state = 1108;
                this.oC_SymbolicName();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_FromToConnections(): IC_FromToConnectionsContext {
        let localctx: IC_FromToConnectionsContext = new IC_FromToConnectionsContext(this._ctx, this.state);
        this.enterRule(localctx, 70, CypherParser.RULE_iC_FromToConnections);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1111;
            this.iC_FromToConnection();
            this.state = 1122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===188) {
                {
                {
                this.state = 1113;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1112;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1115;
                this.match(CypherParser.T__3);
                this.state = 1117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1116;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1119;
                this.iC_FromToConnection();
                }
                }
                this.state = 1124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_FromToConnection(): IC_FromToConnectionContext {
        let localctx: IC_FromToConnectionContext = new IC_FromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 72, CypherParser.RULE_iC_FromToConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1125;
            this.match(CypherParser.FROM);
            this.state = 1126;
            this.match(CypherParser.SP);
            this.state = 1127;
            this.oC_SchemaName();
            this.state = 1128;
            this.match(CypherParser.SP);
            this.state = 1129;
            this.match(CypherParser.TO);
            this.state = 1130;
            this.match(CypherParser.SP);
            this.state = 1131;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateSequence(): IC_CreateSequenceContext {
        let localctx: IC_CreateSequenceContext = new IC_CreateSequenceContext(this._ctx, this.state);
        this.enterRule(localctx, 74, CypherParser.RULE_iC_CreateSequence);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1133;
            this.match(CypherParser.CREATE);
            this.state = 1134;
            this.match(CypherParser.SP);
            this.state = 1135;
            this.match(CypherParser.SEQUENCE);
            this.state = 1136;
            this.match(CypherParser.SP);
            this.state = 1140;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
            case 1:
                {
                this.state = 1137;
                this.iC_IfNotExists();
                this.state = 1138;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1142;
            this.oC_SchemaName();
            this.state = 1147;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1143;
                    this.match(CypherParser.SP);
                    this.state = 1144;
                    this.iC_SequenceOptions();
                    }
                    }
                }
                this.state = 1149;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateType(): IC_CreateTypeContext {
        let localctx: IC_CreateTypeContext = new IC_CreateTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 76, CypherParser.RULE_iC_CreateType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1150;
            this.match(CypherParser.CREATE);
            this.state = 1151;
            this.match(CypherParser.SP);
            this.state = 1152;
            this.match(CypherParser.TYPE);
            this.state = 1153;
            this.match(CypherParser.SP);
            this.state = 1154;
            this.oC_SchemaName();
            this.state = 1155;
            this.match(CypherParser.SP);
            this.state = 1156;
            this.match(CypherParser.AS);
            this.state = 1157;
            this.match(CypherParser.SP);
            this.state = 1158;
            this.iC_DataType(0);
            this.state = 1160;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
            case 1:
                {
                this.state = 1159;
                this.match(CypherParser.SP);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_SequenceOptions(): IC_SequenceOptionsContext {
        let localctx: IC_SequenceOptionsContext = new IC_SequenceOptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 78, CypherParser.RULE_iC_SequenceOptions);
        try {
            this.state = 1167;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1162;
                this.iC_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1163;
                this.iC_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1164;
                this.iC_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1165;
                this.iC_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1166;
                this.iC_Cycle();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_WithPasswd(): IC_WithPasswdContext {
        let localctx: IC_WithPasswdContext = new IC_WithPasswdContext(this._ctx, this.state);
        this.enterRule(localctx, 80, CypherParser.RULE_iC_WithPasswd);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1169;
            this.match(CypherParser.SP);
            this.state = 1170;
            this.match(CypherParser.WITH);
            this.state = 1171;
            this.match(CypherParser.SP);
            this.state = 1172;
            this.match(CypherParser.PASSWORD);
            this.state = 1173;
            this.match(CypherParser.SP);
            this.state = 1174;
            this.match(CypherParser.StringLiteral);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateUser(): IC_CreateUserContext {
        let localctx: IC_CreateUserContext = new IC_CreateUserContext(this._ctx, this.state);
        this.enterRule(localctx, 82, CypherParser.RULE_iC_CreateUser);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1176;
            this.match(CypherParser.CREATE);
            this.state = 1177;
            this.match(CypherParser.SP);
            this.state = 1178;
            this.match(CypherParser.USER);
            this.state = 1179;
            this.match(CypherParser.SP);
            this.state = 1183;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 145, this._ctx) ) {
            case 1:
                {
                this.state = 1180;
                this.iC_IfNotExists();
                this.state = 1181;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1185;
            this.oC_Variable();
            this.state = 1187;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
            case 1:
                {
                this.state = 1186;
                this.iC_WithPasswd();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateRole(): IC_CreateRoleContext {
        let localctx: IC_CreateRoleContext = new IC_CreateRoleContext(this._ctx, this.state);
        this.enterRule(localctx, 84, CypherParser.RULE_iC_CreateRole);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1189;
            this.match(CypherParser.CREATE);
            this.state = 1190;
            this.match(CypherParser.SP);
            this.state = 1191;
            this.match(CypherParser.ROLE);
            this.state = 1192;
            this.match(CypherParser.SP);
            this.state = 1196;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 147, this._ctx) ) {
            case 1:
                {
                this.state = 1193;
                this.iC_IfNotExists();
                this.state = 1194;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1198;
            this.oC_Variable();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_IncrementBy(): IC_IncrementByContext {
        let localctx: IC_IncrementByContext = new IC_IncrementByContext(this._ctx, this.state);
        this.enterRule(localctx, 86, CypherParser.RULE_iC_IncrementBy);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1200;
            this.match(CypherParser.INCREMENT);
            this.state = 1201;
            this.match(CypherParser.SP);
            this.state = 1204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===57) {
                {
                this.state = 1202;
                this.match(CypherParser.BY);
                this.state = 1203;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===171) {
                {
                this.state = 1206;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 1209;
            this.oC_IntegerLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_MinValue(): IC_MinValueContext {
        let localctx: IC_MinValueContext = new IC_MinValueContext(this._ctx, this.state);
        this.enterRule(localctx, 88, CypherParser.RULE_iC_MinValue);
        let _la: number;
        try {
            this.state = 1220;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1211;
                this.match(CypherParser.NO);
                this.state = 1212;
                this.match(CypherParser.SP);
                this.state = 1213;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1214;
                this.match(CypherParser.MINVALUE);
                this.state = 1215;
                this.match(CypherParser.SP);
                this.state = 1217;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===171) {
                    {
                    this.state = 1216;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 1219;
                this.oC_IntegerLiteral();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_MaxValue(): IC_MaxValueContext {
        let localctx: IC_MaxValueContext = new IC_MaxValueContext(this._ctx, this.state);
        this.enterRule(localctx, 90, CypherParser.RULE_iC_MaxValue);
        let _la: number;
        try {
            this.state = 1231;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1222;
                this.match(CypherParser.NO);
                this.state = 1223;
                this.match(CypherParser.SP);
                this.state = 1224;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1225;
                this.match(CypherParser.MAXVALUE);
                this.state = 1226;
                this.match(CypherParser.SP);
                this.state = 1228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===171) {
                    {
                    this.state = 1227;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 1230;
                this.oC_IntegerLiteral();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_StartWith(): IC_StartWithContext {
        let localctx: IC_StartWithContext = new IC_StartWithContext(this._ctx, this.state);
        this.enterRule(localctx, 92, CypherParser.RULE_iC_StartWith);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1233;
            this.match(CypherParser.START);
            this.state = 1234;
            this.match(CypherParser.SP);
            this.state = 1237;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===155) {
                {
                this.state = 1235;
                this.match(CypherParser.WITH);
                this.state = 1236;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===171) {
                {
                this.state = 1239;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 1242;
            this.oC_IntegerLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Cycle(): IC_CycleContext {
        let localctx: IC_CycleContext = new IC_CycleContext(this._ctx, this.state);
        this.enterRule(localctx, 94, CypherParser.RULE_iC_Cycle);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===114) {
                {
                this.state = 1244;
                this.match(CypherParser.NO);
                this.state = 1245;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1248;
            this.match(CypherParser.CYCLE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_IfExists(): IC_IfExistsContext {
        let localctx: IC_IfExistsContext = new IC_IfExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 96, CypherParser.RULE_iC_IfExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1250;
            this.match(CypherParser.IF);
            this.state = 1251;
            this.match(CypherParser.SP);
            this.state = 1252;
            this.match(CypherParser.EXISTS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Drop(): IC_DropContext {
        let localctx: IC_DropContext = new IC_DropContext(this._ctx, this.state);
        this.enterRule(localctx, 98, CypherParser.RULE_iC_Drop);
        let _la: number;
        try {
            this.state = 1274;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 159, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1254;
                this.match(CypherParser.DROP);
                this.state = 1255;
                this.match(CypherParser.SP);
                this.state = 1256;
                _la = this._input.LA(1);
                if(!(_la===92 || _la===108 || _la===134 || _la===141)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1257;
                this.match(CypherParser.SP);
                this.state = 1261;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
                case 1:
                    {
                    this.state = 1258;
                    this.iC_IfExists();
                    this.state = 1259;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1263;
                this.oC_SchemaName();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1264;
                this.match(CypherParser.DROP);
                this.state = 1265;
                this.match(CypherParser.SP);
                this.state = 1266;
                this.match(CypherParser.INDEX);
                this.state = 1267;
                this.match(CypherParser.SP);
                this.state = 1271;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
                case 1:
                    {
                    this.state = 1268;
                    this.iC_IfExists();
                    this.state = 1269;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1273;
                this.iC_DropIndexName();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_DropIndexName(): IC_DropIndexNameContext {
        let localctx: IC_DropIndexNameContext = new IC_DropIndexNameContext(this._ctx, this.state);
        this.enterRule(localctx, 100, CypherParser.RULE_iC_DropIndexName);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1276;
            this.oC_SchemaName();
            this.state = 1278;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1277;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1280;
            this.match(CypherParser.T__4);
            this.state = 1282;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1281;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1284;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_AlterTable(): IC_AlterTableContext {
        let localctx: IC_AlterTableContext = new IC_AlterTableContext(this._ctx, this.state);
        this.enterRule(localctx, 102, CypherParser.RULE_iC_AlterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1286;
            this.match(CypherParser.ALTER);
            this.state = 1287;
            this.match(CypherParser.SP);
            this.state = 1288;
            this.match(CypherParser.TABLE);
            this.state = 1289;
            this.match(CypherParser.SP);
            this.state = 1290;
            this.oC_SchemaName();
            this.state = 1291;
            this.match(CypherParser.SP);
            this.state = 1292;
            this.iC_AlterOptions();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_AlterOptions(): IC_AlterOptionsContext {
        let localctx: IC_AlterOptionsContext = new IC_AlterOptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 104, CypherParser.RULE_iC_AlterOptions);
        try {
            this.state = 1301;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 162, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1294;
                this.iC_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1295;
                this.iC_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1296;
                this.iC_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1297;
                this.iC_RenameProperty();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1298;
                this.iC_AddFromToConnection();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1299;
                this.iC_DropFromToConnection();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 1300;
                this.iC_SetSortedBy();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_AddProperty(): IC_AddPropertyContext {
        let localctx: IC_AddPropertyContext = new IC_AddPropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 106, CypherParser.RULE_iC_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1303;
            this.match(CypherParser.ADD);
            this.state = 1304;
            this.match(CypherParser.SP);
            this.state = 1308;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
            case 1:
                {
                this.state = 1305;
                this.iC_IfNotExists();
                this.state = 1306;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1310;
            this.oC_PropertyKeyName();
            this.state = 1311;
            this.match(CypherParser.SP);
            this.state = 1312;
            this.iC_DataType(0);
            this.state = 1315;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 164, this._ctx) ) {
            case 1:
                {
                this.state = 1313;
                this.match(CypherParser.SP);
                this.state = 1314;
                this.iC_Default();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Default(): IC_DefaultContext {
        let localctx: IC_DefaultContext = new IC_DefaultContext(this._ctx, this.state);
        this.enterRule(localctx, 108, CypherParser.RULE_iC_Default);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1317;
            this.match(CypherParser.DEFAULT);
            this.state = 1318;
            this.match(CypherParser.SP);
            this.state = 1319;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_DropProperty(): IC_DropPropertyContext {
        let localctx: IC_DropPropertyContext = new IC_DropPropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 110, CypherParser.RULE_iC_DropProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1321;
            this.match(CypherParser.DROP);
            this.state = 1322;
            this.match(CypherParser.SP);
            this.state = 1326;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
            case 1:
                {
                this.state = 1323;
                this.iC_IfExists();
                this.state = 1324;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1328;
            this.oC_PropertyKeyName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_RenameTable(): IC_RenameTableContext {
        let localctx: IC_RenameTableContext = new IC_RenameTableContext(this._ctx, this.state);
        this.enterRule(localctx, 112, CypherParser.RULE_iC_RenameTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1330;
            this.match(CypherParser.RENAME);
            this.state = 1331;
            this.match(CypherParser.SP);
            this.state = 1332;
            this.match(CypherParser.TO);
            this.state = 1333;
            this.match(CypherParser.SP);
            this.state = 1334;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_RenameProperty(): IC_RenamePropertyContext {
        let localctx: IC_RenamePropertyContext = new IC_RenamePropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 114, CypherParser.RULE_iC_RenameProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1336;
            this.match(CypherParser.RENAME);
            this.state = 1337;
            this.match(CypherParser.SP);
            this.state = 1338;
            this.oC_PropertyKeyName();
            this.state = 1339;
            this.match(CypherParser.SP);
            this.state = 1340;
            this.match(CypherParser.TO);
            this.state = 1341;
            this.match(CypherParser.SP);
            this.state = 1342;
            this.oC_PropertyKeyName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_AddFromToConnection(): IC_AddFromToConnectionContext {
        let localctx: IC_AddFromToConnectionContext = new IC_AddFromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 116, CypherParser.RULE_iC_AddFromToConnection);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1344;
            this.match(CypherParser.ADD);
            this.state = 1345;
            this.match(CypherParser.SP);
            this.state = 1349;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===98) {
                {
                this.state = 1346;
                this.iC_IfNotExists();
                this.state = 1347;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1351;
            this.iC_FromToConnection();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_DropFromToConnection(): IC_DropFromToConnectionContext {
        let localctx: IC_DropFromToConnectionContext = new IC_DropFromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 118, CypherParser.RULE_iC_DropFromToConnection);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1353;
            this.match(CypherParser.DROP);
            this.state = 1354;
            this.match(CypherParser.SP);
            this.state = 1358;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===98) {
                {
                this.state = 1355;
                this.iC_IfExists();
                this.state = 1356;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1360;
            this.iC_FromToConnection();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_SetSortedBy(): IC_SetSortedByContext {
        let localctx: IC_SetSortedByContext = new IC_SetSortedByContext(this._ctx, this.state);
        this.enterRule(localctx, 120, CypherParser.RULE_iC_SetSortedBy);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1362;
            this.match(CypherParser.SET);
            this.state = 1363;
            this.match(CypherParser.SP);
            this.state = 1364;
            this.match(CypherParser.SORTED);
            this.state = 1365;
            this.match(CypherParser.SP);
            this.state = 1366;
            this.match(CypherParser.BY);
            this.state = 1368;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1367;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1370;
            this.match(CypherParser.T__1);
            this.state = 1372;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1371;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1374;
            this.iC_SortedByItem();
            this.state = 1385;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1376;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1375;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1378;
                    this.match(CypherParser.T__3);
                    this.state = 1380;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1379;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1382;
                    this.iC_SortedByItem();
                    }
                    }
                }
                this.state = 1387;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 172, this._ctx);
            }
            this.state = 1389;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1388;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1391;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_SortedByItem(): IC_SortedByItemContext {
        let localctx: IC_SortedByItemContext = new IC_SortedByItemContext(this._ctx, this.state);
        this.enterRule(localctx, 122, CypherParser.RULE_iC_SortedByItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1393;
            this.oC_PropertyKeyName();
            this.state = 1394;
            this.match(CypherParser.SP);
            this.state = 1395;
            _la = this._input.LA(1);
            if(!(_la===53 || _la===75)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ColumnDefinitions(): IC_ColumnDefinitionsContext {
        let localctx: IC_ColumnDefinitionsContext = new IC_ColumnDefinitionsContext(this._ctx, this.state);
        this.enterRule(localctx, 124, CypherParser.RULE_iC_ColumnDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1397;
            this.iC_ColumnDefinition();
            this.state = 1408;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1399;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1398;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1401;
                    this.match(CypherParser.T__3);
                    this.state = 1403;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1402;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1405;
                    this.iC_ColumnDefinition();
                    }
                    }
                }
                this.state = 1410;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ColumnDefinition(): IC_ColumnDefinitionContext {
        let localctx: IC_ColumnDefinitionContext = new IC_ColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 126, CypherParser.RULE_iC_ColumnDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1411;
            this.oC_PropertyKeyName();
            this.state = 1412;
            this.match(CypherParser.SP);
            this.state = 1413;
            this.iC_DataType(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_PropertyDefinitions(): IC_PropertyDefinitionsContext {
        let localctx: IC_PropertyDefinitionsContext = new IC_PropertyDefinitionsContext(this._ctx, this.state);
        this.enterRule(localctx, 128, CypherParser.RULE_iC_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1415;
            this.iC_PropertyDefinition();
            this.state = 1426;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1417;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1416;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1419;
                    this.match(CypherParser.T__3);
                    this.state = 1421;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1420;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1423;
                    this.iC_PropertyDefinition();
                    }
                    }
                }
                this.state = 1428;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_PropertyDefinition(): IC_PropertyDefinitionContext {
        let localctx: IC_PropertyDefinitionContext = new IC_PropertyDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 130, CypherParser.RULE_iC_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1429;
            this.iC_ColumnDefinition();
            this.state = 1432;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
            case 1:
                {
                this.state = 1430;
                this.match(CypherParser.SP);
                this.state = 1431;
                this.iC_Default();
                }
                break;
            }
            this.state = 1438;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 181, this._ctx) ) {
            case 1:
                {
                this.state = 1434;
                this.match(CypherParser.SP);
                this.state = 1435;
                this.match(CypherParser.PRIMARY);
                this.state = 1436;
                this.match(CypherParser.SP);
                this.state = 1437;
                this.match(CypherParser.KEY);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_CreateNodeConstraint(): IC_CreateNodeConstraintContext {
        let localctx: IC_CreateNodeConstraintContext = new IC_CreateNodeConstraintContext(this._ctx, this.state);
        this.enterRule(localctx, 132, CypherParser.RULE_iC_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1440;
            this.match(CypherParser.PRIMARY);
            this.state = 1441;
            this.match(CypherParser.SP);
            this.state = 1442;
            this.match(CypherParser.KEY);
            this.state = 1444;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1443;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1446;
            this.match(CypherParser.T__1);
            this.state = 1448;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1447;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1450;
            this.oC_PropertyKeyName();
            this.state = 1452;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1451;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1454;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_UnionType(): IC_UnionTypeContext {
        let localctx: IC_UnionTypeContext = new IC_UnionTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 134, CypherParser.RULE_iC_UnionType);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1456;
            this.match(CypherParser.UNION);
            this.state = 1458;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1457;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1460;
            this.match(CypherParser.T__1);
            this.state = 1462;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1461;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1464;
            this.iC_ColumnDefinitions();
            this.state = 1466;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1465;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1468;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_StructType(): IC_StructTypeContext {
        let localctx: IC_StructTypeContext = new IC_StructTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 136, CypherParser.RULE_iC_StructType);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1470;
            this.match(CypherParser.STRUCT);
            this.state = 1472;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1471;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1474;
            this.match(CypherParser.T__1);
            this.state = 1476;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1475;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1478;
            this.iC_ColumnDefinitions();
            this.state = 1480;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1479;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1482;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_MapType(): IC_MapTypeContext {
        let localctx: IC_MapTypeContext = new IC_MapTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 138, CypherParser.RULE_iC_MapType);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1484;
            this.match(CypherParser.MAP);
            this.state = 1486;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1485;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1488;
            this.match(CypherParser.T__1);
            this.state = 1490;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1489;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1492;
            this.iC_DataType(0);
            this.state = 1494;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1493;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1496;
            this.match(CypherParser.T__3);
            this.state = 1498;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1497;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1500;
            this.iC_DataType(0);
            this.state = 1502;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1501;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1504;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_DecimalType(): IC_DecimalTypeContext {
        let localctx: IC_DecimalTypeContext = new IC_DecimalTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 140, CypherParser.RULE_iC_DecimalType);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1506;
            this.match(CypherParser.DECIMAL);
            this.state = 1508;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1507;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1510;
            this.match(CypherParser.T__1);
            this.state = 1512;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1511;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1514;
            this.oC_IntegerLiteral();
            this.state = 1516;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1515;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1518;
            this.match(CypherParser.T__3);
            this.state = 1520;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1519;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1522;
            this.oC_IntegerLiteral();
            this.state = 1524;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1523;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1526;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public iC_DataType(): IC_DataTypeContext;
    public iC_DataType(_p: number): IC_DataTypeContext;
    public iC_DataType(_p?: number): IC_DataTypeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new IC_DataTypeContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 142;
        this.enterRecursionRule(localctx, 142, CypherParser.RULE_iC_DataType, _p);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1534;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 201, this._ctx) ) {
            case 1:
                {
                this.state = 1529;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1530;
                this.iC_UnionType();
                }
                break;
            case 3:
                {
                this.state = 1531;
                this.iC_StructType();
                }
                break;
            case 4:
                {
                this.state = 1532;
                this.iC_MapType();
                }
                break;
            case 5:
                {
                this.state = 1533;
                this.iC_DecimalType();
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1540;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 202, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    {
                    localctx = new IC_DataTypeContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_iC_DataType);
                    this.state = 1536;
                    if (!(this.precpred(this._ctx, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                    }
                    this.state = 1537;
                    this.iC_ListIdentifiers();
                    }
                    }
                }
                this.state = 1542;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 202, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public iC_ListIdentifiers(): IC_ListIdentifiersContext {
        let localctx: IC_ListIdentifiersContext = new IC_ListIdentifiersContext(this._ctx, this.state);
        this.enterRule(localctx, 144, CypherParser.RULE_iC_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1543;
            this.iC_ListIdentifier();
            this.state = 1547;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1544;
                    this.iC_ListIdentifier();
                    }
                    }
                }
                this.state = 1549;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ListIdentifier(): IC_ListIdentifierContext {
        let localctx: IC_ListIdentifierContext = new IC_ListIdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 146, CypherParser.RULE_iC_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1550;
            this.match(CypherParser.T__6);
            this.state = 1552;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===175) {
                {
                this.state = 1551;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1554;
            this.match(CypherParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_AnyCypherOption(): OC_AnyCypherOptionContext {
        let localctx: OC_AnyCypherOptionContext = new OC_AnyCypherOptionContext(this._ctx, this.state);
        this.enterRule(localctx, 148, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 1558;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1556;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1557;
                this.oC_Profile();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Explain(): OC_ExplainContext {
        let localctx: OC_ExplainContext = new OC_ExplainContext(this._ctx, this.state);
        this.enterRule(localctx, 150, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1560;
            this.match(CypherParser.EXPLAIN);
            this.state = 1563;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 206, this._ctx) ) {
            case 1:
                {
                this.state = 1561;
                this.match(CypherParser.SP);
                this.state = 1562;
                this.match(CypherParser.LOGICAL);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Profile(): OC_ProfileContext {
        let localctx: OC_ProfileContext = new OC_ProfileContext(this._ctx, this.state);
        this.enterRule(localctx, 152, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1565;
            this.match(CypherParser.PROFILE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Transaction(): IC_TransactionContext {
        let localctx: IC_TransactionContext = new IC_TransactionContext(this._ctx, this.state);
        this.enterRule(localctx, 154, CypherParser.RULE_iC_Transaction);
        try {
            this.state = 1580;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 207, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1567;
                this.match(CypherParser.BEGIN);
                this.state = 1568;
                this.match(CypherParser.SP);
                this.state = 1569;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1570;
                this.match(CypherParser.BEGIN);
                this.state = 1571;
                this.match(CypherParser.SP);
                this.state = 1572;
                this.match(CypherParser.TRANSACTION);
                this.state = 1573;
                this.match(CypherParser.SP);
                this.state = 1574;
                this.match(CypherParser.READ);
                this.state = 1575;
                this.match(CypherParser.SP);
                this.state = 1576;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1577;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1578;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1579;
                this.match(CypherParser.CHECKPOINT);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Extension(): IC_ExtensionContext {
        let localctx: IC_ExtensionContext = new IC_ExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 156, CypherParser.RULE_iC_Extension);
        try {
            this.state = 1586;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1582;
                this.iC_LoadExtension();
                }
                break;
            case CypherParser.FORCE:
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1583;
                this.iC_InstallExtension();
                }
                break;
            case CypherParser.UNINSTALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1584;
                this.iC_UninstallExtension();
                }
                break;
            case CypherParser.UPDATE:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1585;
                this.iC_UpdateExtension();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_LoadExtension(): IC_LoadExtensionContext {
        let localctx: IC_LoadExtensionContext = new IC_LoadExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 158, CypherParser.RULE_iC_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1588;
            this.match(CypherParser.LOAD);
            this.state = 1589;
            this.match(CypherParser.SP);
            this.state = 1592;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
            case 1:
                {
                this.state = 1590;
                this.match(CypherParser.EXTENSION);
                this.state = 1591;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1596;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1594;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1595;
                this.oC_Variable();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_InstallExtension(): IC_InstallExtensionContext {
        let localctx: IC_InstallExtensionContext = new IC_InstallExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 160, CypherParser.RULE_iC_InstallExtension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1600;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===89) {
                {
                this.state = 1598;
                this.match(CypherParser.FORCE);
                this.state = 1599;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1602;
            this.match(CypherParser.INSTALL);
            this.state = 1603;
            this.match(CypherParser.SP);
            this.state = 1604;
            this.oC_Variable();
            this.state = 1609;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 212, this._ctx) ) {
            case 1:
                {
                this.state = 1605;
                this.match(CypherParser.SP);
                this.state = 1606;
                this.match(CypherParser.FROM);
                this.state = 1607;
                this.match(CypherParser.SP);
                this.state = 1608;
                this.match(CypherParser.StringLiteral);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_UninstallExtension(): IC_UninstallExtensionContext {
        let localctx: IC_UninstallExtensionContext = new IC_UninstallExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 162, CypherParser.RULE_iC_UninstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1611;
            this.match(CypherParser.UNINSTALL);
            this.state = 1612;
            this.match(CypherParser.SP);
            this.state = 1613;
            this.oC_Variable();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_UpdateExtension(): IC_UpdateExtensionContext {
        let localctx: IC_UpdateExtensionContext = new IC_UpdateExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 164, CypherParser.RULE_iC_UpdateExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1615;
            this.match(CypherParser.UPDATE);
            this.state = 1616;
            this.match(CypherParser.SP);
            this.state = 1617;
            this.oC_Variable();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Query(): OC_QueryContext {
        let localctx: OC_QueryContext = new OC_QueryContext(this._ctx, this.state);
        this.enterRule(localctx, 166, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1619;
            this.oC_RegularQuery();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RegularQuery(): OC_RegularQueryContext {
        let localctx: OC_RegularQueryContext = new OC_RegularQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 168, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1642;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1621;
                this.oC_SingleQuery();
                this.state = 1628;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1623;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 1622;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1625;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1630;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 214, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1635;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1631;
                        this.oC_Return();
                        this.state = 1633;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 1632;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1637;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 216, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1639;
                this.oC_SingleQuery();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Union(): OC_UnionContext {
        let localctx: OC_UnionContext = new OC_UnionContext(this._ctx, this.state);
        this.enterRule(localctx, 170, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 1656;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1644;
                this.match(CypherParser.UNION);
                this.state = 1645;
                this.match(CypherParser.SP);
                this.state = 1646;
                this.match(CypherParser.ALL);
                this.state = 1648;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1647;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1650;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1651;
                this.match(CypherParser.UNION);
                this.state = 1653;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1652;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1655;
                this.oC_SingleQuery();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SingleQuery(): OC_SingleQueryContext {
        let localctx: OC_SingleQueryContext = new OC_SingleQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 172, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1660;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 221, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1658;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1659;
                this.oC_MultiPartQuery();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SinglePartQuery(): OC_SinglePartQueryContext {
        let localctx: OC_SinglePartQueryContext = new OC_SinglePartQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 174, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1697;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1668;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 65545) !== 0) || _la===149) {
                    {
                    {
                    this.state = 1662;
                    this.oC_ReadingClause();
                    this.state = 1664;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1663;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1670;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1671;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1678;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===58 || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 65545) !== 0) || _la===149) {
                    {
                    {
                    this.state = 1672;
                    this.oC_ReadingClause();
                    this.state = 1674;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1673;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1680;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1681;
                this.oC_UpdatingClause();
                this.state = 1688;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 227, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1683;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 1682;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1685;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1690;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 227, this._ctx);
                }
                this.state = 1695;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
                case 1:
                    {
                    this.state = 1692;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1691;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1694;
                    this.oC_Return();
                    }
                    break;
                }
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_MultiPartQuery(): OC_MultiPartQueryContext {
        let localctx: OC_MultiPartQueryContext = new OC_MultiPartQueryContext(this._ctx, this.state);
        this.enterRule(localctx, 176, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1703;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1699;
                    this.iC_QueryPart();
                    this.state = 1701;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1700;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1705;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 232, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1707;
            this.oC_SinglePartQuery();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_QueryPart(): IC_QueryPartContext {
        let localctx: IC_QueryPartContext = new IC_QueryPartContext(this._ctx, this.state);
        this.enterRule(localctx, 178, CypherParser.RULE_iC_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1715;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===58 || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 65545) !== 0) || _la===149) {
                {
                {
                this.state = 1709;
                this.oC_ReadingClause();
                this.state = 1711;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1710;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1717;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1724;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 289) !== 0) || _la===111 || _la===135) {
                {
                {
                this.state = 1718;
                this.oC_UpdatingClause();
                this.state = 1720;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1719;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1726;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1727;
            this.oC_With();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_UpdatingClause(): OC_UpdatingClauseContext {
        let localctx: OC_UpdatingClauseContext = new OC_UpdatingClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 180, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1733;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1729;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1730;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1731;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1732;
                this.oC_Delete();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ReadingClause(): OC_ReadingClauseContext {
        let localctx: OC_ReadingClauseContext = new OC_ReadingClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 182, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1739;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1735;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1736;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1737;
                this.iC_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1738;
                this.iC_LoadFrom();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_LoadFrom(): IC_LoadFromContext {
        let localctx: IC_LoadFromContext = new IC_LoadFromContext(this._ctx, this.state);
        this.enterRule(localctx, 184, CypherParser.RULE_iC_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1741;
            this.match(CypherParser.LOAD);
            this.state = 1759;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
            case 1:
                {
                this.state = 1742;
                this.match(CypherParser.SP);
                this.state = 1743;
                this.match(CypherParser.WITH);
                this.state = 1744;
                this.match(CypherParser.SP);
                this.state = 1745;
                this.match(CypherParser.HEADERS);
                this.state = 1747;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1746;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1749;
                this.match(CypherParser.T__1);
                this.state = 1751;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1750;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1753;
                this.iC_ColumnDefinitions();
                this.state = 1755;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1754;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1757;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1761;
            this.match(CypherParser.SP);
            this.state = 1762;
            this.match(CypherParser.FROM);
            this.state = 1763;
            this.match(CypherParser.SP);
            this.state = 1764;
            this.iC_ScanSource();
            this.state = 1778;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
            case 1:
                {
                this.state = 1766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1765;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1768;
                this.match(CypherParser.T__1);
                this.state = 1770;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1769;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1772;
                this.iC_Options();
                this.state = 1774;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1773;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1776;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1784;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 248, this._ctx) ) {
            case 1:
                {
                this.state = 1781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1780;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1783;
                this.oC_Where();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_YieldItem(): OC_YieldItemContext {
        let localctx: OC_YieldItemContext = new OC_YieldItemContext(this._ctx, this.state);
        this.enterRule(localctx, 186, CypherParser.RULE_oC_YieldItem);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1791;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 249, this._ctx) ) {
            case 1:
                {
                this.state = 1786;
                this.oC_Variable();
                this.state = 1787;
                this.match(CypherParser.SP);
                this.state = 1788;
                this.match(CypherParser.AS);
                this.state = 1789;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1793;
            this.oC_Variable();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_YieldItems(): OC_YieldItemsContext {
        let localctx: OC_YieldItemsContext = new OC_YieldItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 188, CypherParser.RULE_oC_YieldItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1795;
            this.oC_YieldItem();
            this.state = 1806;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 252, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1797;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1796;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1799;
                    this.match(CypherParser.T__3);
                    this.state = 1801;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1800;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1803;
                    this.oC_YieldItem();
                    }
                    }
                }
                this.state = 1808;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 252, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_InQueryCall(): IC_InQueryCallContext {
        let localctx: IC_InQueryCallContext = new IC_InQueryCallContext(this._ctx, this.state);
        this.enterRule(localctx, 190, CypherParser.RULE_iC_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1809;
            this.match(CypherParser.CALL);
            this.state = 1810;
            this.match(CypherParser.SP);
            this.state = 1811;
            this.oC_FunctionInvocation();
            this.state = 1816;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
            case 1:
                {
                this.state = 1813;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1812;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1815;
                this.oC_Where();
                }
                break;
            }
            this.state = 1824;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
            case 1:
                {
                this.state = 1819;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1818;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1821;
                this.match(CypherParser.YIELD);
                this.state = 1822;
                this.match(CypherParser.SP);
                this.state = 1823;
                this.oC_YieldItems();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Match(): OC_MatchContext {
        let localctx: OC_MatchContext = new OC_MatchContext(this._ctx, this.state);
        this.enterRule(localctx, 192, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1828;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===122) {
                {
                this.state = 1826;
                this.match(CypherParser.OPTIONAL);
                this.state = 1827;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1830;
            this.match(CypherParser.MATCH);
            this.state = 1832;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1831;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1834;
            this.oC_Pattern();
            this.state = 1837;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
            case 1:
                {
                this.state = 1835;
                this.match(CypherParser.SP);
                this.state = 1836;
                this.oC_Where();
                }
                break;
            }
            this.state = 1841;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
            case 1:
                {
                this.state = 1839;
                this.match(CypherParser.SP);
                this.state = 1840;
                this.iC_Hint();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Hint(): IC_HintContext {
        let localctx: IC_HintContext = new IC_HintContext(this._ctx, this.state);
        this.enterRule(localctx, 194, CypherParser.RULE_iC_Hint);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1843;
            this.match(CypherParser.HINT);
            this.state = 1844;
            this.match(CypherParser.SP);
            this.state = 1845;
            this.iC_JoinNode(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public iC_JoinNode(): IC_JoinNodeContext;
    public iC_JoinNode(_p: number): IC_JoinNodeContext;
    public iC_JoinNode(_p?: number): IC_JoinNodeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new IC_JoinNodeContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 196;
        this.enterRecursionRule(localctx, 196, CypherParser.RULE_iC_JoinNode, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1859;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1848;
                this.match(CypherParser.T__1);
                this.state = 1850;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1849;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1852;
                this.iC_JoinNode(0);
                this.state = 1854;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1853;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1856;
                this.match(CypherParser.T__2);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 1858;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1877;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 266, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1875;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 265, this._ctx) ) {
                    case 1:
                        {
                        localctx = new IC_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_iC_JoinNode);
                        this.state = 1861;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1862;
                        this.match(CypherParser.SP);
                        this.state = 1863;
                        this.match(CypherParser.JOIN);
                        this.state = 1864;
                        this.match(CypherParser.SP);
                        this.state = 1865;
                        this.iC_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new IC_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_iC_JoinNode);
                        this.state = 1866;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1871;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1867;
                                this.match(CypherParser.SP);
                                this.state = 1868;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1869;
                                this.match(CypherParser.SP);
                                this.state = 1870;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1873;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 264, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1879;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 266, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public oC_Unwind(): OC_UnwindContext {
        let localctx: OC_UnwindContext = new OC_UnwindContext(this._ctx, this.state);
        this.enterRule(localctx, 198, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1880;
            this.match(CypherParser.UNWIND);
            this.state = 1882;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1881;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1884;
            this.oC_Expression();
            this.state = 1885;
            this.match(CypherParser.SP);
            this.state = 1886;
            this.match(CypherParser.AS);
            this.state = 1887;
            this.match(CypherParser.SP);
            this.state = 1888;
            this.oC_Variable();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Create(): OC_CreateContext {
        let localctx: OC_CreateContext = new OC_CreateContext(this._ctx, this.state);
        this.enterRule(localctx, 200, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1890;
            this.match(CypherParser.CREATE);
            this.state = 1892;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1891;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1894;
            this.oC_Pattern();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Merge(): OC_MergeContext {
        let localctx: OC_MergeContext = new OC_MergeContext(this._ctx, this.state);
        this.enterRule(localctx, 202, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1896;
            this.match(CypherParser.MERGE);
            this.state = 1898;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1897;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1900;
            this.oC_Pattern();
            this.state = 1905;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 270, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1901;
                    this.match(CypherParser.SP);
                    this.state = 1902;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1907;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 270, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_MergeAction(): OC_MergeActionContext {
        let localctx: OC_MergeActionContext = new OC_MergeActionContext(this._ctx, this.state);
        this.enterRule(localctx, 204, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1918;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 271, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1908;
                this.match(CypherParser.ON);
                this.state = 1909;
                this.match(CypherParser.SP);
                this.state = 1910;
                this.match(CypherParser.MATCH);
                this.state = 1911;
                this.match(CypherParser.SP);
                this.state = 1912;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1913;
                this.match(CypherParser.ON);
                this.state = 1914;
                this.match(CypherParser.SP);
                this.state = 1915;
                this.match(CypherParser.CREATE);
                this.state = 1916;
                this.match(CypherParser.SP);
                this.state = 1917;
                this.oC_Set();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Set(): OC_SetContext {
        let localctx: OC_SetContext = new OC_SetContext(this._ctx, this.state);
        this.enterRule(localctx, 206, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1952;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 279, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1920;
                this.match(CypherParser.SET);
                this.state = 1922;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1921;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1924;
                this.oC_SetItem();
                this.state = 1935;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 275, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1926;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 1925;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1928;
                        this.match(CypherParser.T__3);
                        this.state = 1930;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 1929;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1932;
                        this.oC_SetItem();
                        }
                        }
                    }
                    this.state = 1937;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 275, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1938;
                this.match(CypherParser.SET);
                this.state = 1940;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1939;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1942;
                this.oC_Atom();
                this.state = 1944;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1943;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1946;
                this.match(CypherParser.T__5);
                this.state = 1948;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1947;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1950;
                this.iC_Properties();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SetItem(): OC_SetItemContext {
        let localctx: OC_SetItemContext = new OC_SetItemContext(this._ctx, this.state);
        this.enterRule(localctx, 208, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1954;
            this.oC_PropertyExpression();
            this.state = 1956;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1955;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1958;
            this.match(CypherParser.T__5);
            this.state = 1960;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1959;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1962;
            this.oC_Expression();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Delete(): OC_DeleteContext {
        let localctx: OC_DeleteContext = new OC_DeleteContext(this._ctx, this.state);
        this.enterRule(localctx, 210, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1966;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===77) {
                {
                this.state = 1964;
                this.match(CypherParser.DETACH);
                this.state = 1965;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1968;
            this.match(CypherParser.DELETE);
            this.state = 1970;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 1969;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1972;
            this.oC_Expression();
            this.state = 1983;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 286, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1974;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1973;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1976;
                    this.match(CypherParser.T__3);
                    this.state = 1978;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 1977;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1980;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1985;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 286, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_With(): OC_WithContext {
        let localctx: OC_WithContext = new OC_WithContext(this._ctx, this.state);
        this.enterRule(localctx, 212, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1986;
            this.match(CypherParser.WITH);
            this.state = 1987;
            this.oC_ProjectionBody();
            this.state = 1992;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
            case 1:
                {
                this.state = 1989;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1988;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1991;
                this.oC_Where();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Return(): OC_ReturnContext {
        let localctx: OC_ReturnContext = new OC_ReturnContext(this._ctx, this.state);
        this.enterRule(localctx, 214, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1994;
            this.match(CypherParser.RETURN);
            this.state = 1995;
            this.oC_ProjectionBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ProjectionBody(): OC_ProjectionBodyContext {
        let localctx: OC_ProjectionBodyContext = new OC_ProjectionBodyContext(this._ctx, this.state);
        this.enterRule(localctx, 216, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2001;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 290, this._ctx) ) {
            case 1:
                {
                this.state = 1998;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 1997;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2000;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 2003;
            this.match(CypherParser.SP);
            this.state = 2004;
            this.oC_ProjectionItems();
            this.state = 2007;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 291, this._ctx) ) {
            case 1:
                {
                this.state = 2005;
                this.match(CypherParser.SP);
                this.state = 2006;
                this.oC_Order();
                }
                break;
            }
            this.state = 2011;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 292, this._ctx) ) {
            case 1:
                {
                this.state = 2009;
                this.match(CypherParser.SP);
                this.state = 2010;
                this.oC_Skip();
                }
                break;
            }
            this.state = 2015;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 293, this._ctx) ) {
            case 1:
                {
                this.state = 2013;
                this.match(CypherParser.SP);
                this.state = 2014;
                this.oC_Limit();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ProjectionItems(): OC_ProjectionItemsContext {
        let localctx: OC_ProjectionItemsContext = new OC_ProjectionItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 218, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2045;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2017;
                this.match(CypherParser.STAR);
                this.state = 2028;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 296, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 2019;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2018;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2021;
                        this.match(CypherParser.T__3);
                        this.state = 2023;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2022;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2025;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 2030;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 296, this._ctx);
                }
                }
                }
                break;
            case CypherParser.T__1:
            case CypherParser.T__6:
            case CypherParser.T__8:
            case CypherParser.T__24:
            case CypherParser.ANY:
            case CypherParser.ADD:
            case CypherParser.ALL:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CASE:
            case CypherParser.CAST:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXISTS:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FALSE:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.NOT:
            case CypherParser.NONE:
            case CypherParser.NULL:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TRUE:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.SINGLE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.MINUS:
            case CypherParser.StringLiteral:
            case CypherParser.DecimalInteger:
            case CypherParser.HexLetter:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2031;
                this.oC_ProjectionItem();
                this.state = 2042;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 299, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 2033;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2032;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2035;
                        this.match(CypherParser.T__3);
                        this.state = 2037;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2036;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2039;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 2044;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 299, this._ctx);
                }
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ProjectionItem(): OC_ProjectionItemContext {
        let localctx: OC_ProjectionItemContext = new OC_ProjectionItemContext(this._ctx, this.state);
        this.enterRule(localctx, 220, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 2054;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 301, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2047;
                this.oC_Expression();
                this.state = 2048;
                this.match(CypherParser.SP);
                this.state = 2049;
                this.match(CypherParser.AS);
                this.state = 2050;
                this.match(CypherParser.SP);
                this.state = 2051;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2053;
                this.oC_Expression();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Order(): OC_OrderContext {
        let localctx: OC_OrderContext = new OC_OrderContext(this._ctx, this.state);
        this.enterRule(localctx, 222, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2056;
            this.match(CypherParser.ORDER);
            this.state = 2057;
            this.match(CypherParser.SP);
            this.state = 2058;
            this.match(CypherParser.BY);
            this.state = 2059;
            this.match(CypherParser.SP);
            this.state = 2060;
            this.oC_SortItem();
            this.state = 2068;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2061;
                this.match(CypherParser.T__3);
                this.state = 2063;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2062;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2065;
                this.oC_SortItem();
                }
                }
                this.state = 2070;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Skip(): OC_SkipContext {
        let localctx: OC_SkipContext = new OC_SkipContext(this._ctx, this.state);
        this.enterRule(localctx, 224, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2071;
            this.match(CypherParser.L_SKIP);
            this.state = 2072;
            this.match(CypherParser.SP);
            this.state = 2073;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Limit(): OC_LimitContext {
        let localctx: OC_LimitContext = new OC_LimitContext(this._ctx, this.state);
        this.enterRule(localctx, 226, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2075;
            this.match(CypherParser.LIMIT);
            this.state = 2076;
            this.match(CypherParser.SP);
            this.state = 2077;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SortItem(): OC_SortItemContext {
        let localctx: OC_SortItemContext = new OC_SortItemContext(this._ctx, this.state);
        this.enterRule(localctx, 228, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2079;
            this.oC_Expression();
            this.state = 2084;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 305, this._ctx) ) {
            case 1:
                {
                this.state = 2081;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2080;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2083;
                _la = this._input.LA(1);
                if(!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 12582915) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Where(): OC_WhereContext {
        let localctx: OC_WhereContext = new OC_WhereContext(this._ctx, this.state);
        this.enterRule(localctx, 230, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2086;
            this.match(CypherParser.WHERE);
            this.state = 2087;
            this.match(CypherParser.SP);
            this.state = 2088;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Pattern(): OC_PatternContext {
        let localctx: OC_PatternContext = new OC_PatternContext(this._ctx, this.state);
        this.enterRule(localctx, 232, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2090;
            this.oC_PatternPart();
            this.state = 2101;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 308, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2092;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2091;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2094;
                    this.match(CypherParser.T__3);
                    this.state = 2096;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2095;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2098;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 2103;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 308, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PatternPart(): OC_PatternPartContext {
        let localctx: OC_PatternPartContext = new OC_PatternPartContext(this._ctx, this.state);
        this.enterRule(localctx, 234, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 2115;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2104;
                this.oC_Variable();
                this.state = 2106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2105;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2108;
                this.match(CypherParser.T__5);
                this.state = 2110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2109;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2112;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2114;
                this.oC_AnonymousPatternPart();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
        let localctx: OC_AnonymousPatternPartContext = new OC_AnonymousPatternPartContext(this._ctx, this.state);
        this.enterRule(localctx, 236, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2117;
            this.oC_PatternElement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PatternElement(): OC_PatternElementContext {
        let localctx: OC_PatternElementContext = new OC_PatternElementContext(this._ctx, this.state);
        this.enterRule(localctx, 238, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2133;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 314, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2119;
                this.oC_NodePattern();
                this.state = 2126;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 313, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 2121;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2120;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2123;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 2128;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 313, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2129;
                this.match(CypherParser.T__1);
                this.state = 2130;
                this.oC_PatternElement();
                this.state = 2131;
                this.match(CypherParser.T__2);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NodePattern(): OC_NodePatternContext {
        let localctx: OC_NodePatternContext = new OC_NodePatternContext(this._ctx, this.state);
        this.enterRule(localctx, 240, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2135;
            this.match(CypherParser.T__1);
            this.state = 2137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2136;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237012269) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693025) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383259) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 25043861) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & 2305) !== 0)) {
                {
                this.state = 2139;
                this.oC_Variable();
                this.state = 2141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2140;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===169) {
                {
                this.state = 2145;
                this.oC_NodeLabels();
                this.state = 2147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2146;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2155;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 2151;
                this.iC_Properties();
                this.state = 2153;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2152;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2157;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PatternElementChain(): OC_PatternElementChainContext {
        let localctx: OC_PatternElementChainContext = new OC_PatternElementChainContext(this._ctx, this.state);
        this.enterRule(localctx, 242, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2159;
            this.oC_RelationshipPattern();
            this.state = 2161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2160;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2163;
            this.oC_NodePattern();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RelationshipPattern(): OC_RelationshipPatternContext {
        let localctx: OC_RelationshipPatternContext = new OC_RelationshipPatternContext(this._ctx, this.state);
        this.enterRule(localctx, 244, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 2209;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 334, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2165;
                this.oC_LeftArrowHead();
                this.state = 2167;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2166;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2169;
                this.oC_Dash();
                this.state = 2171;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
                case 1:
                    {
                    this.state = 2170;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2174;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 2173;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 2177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2176;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2179;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2181;
                this.oC_Dash();
                this.state = 2183;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 327, this._ctx) ) {
                case 1:
                    {
                    this.state = 2182;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2186;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 2185;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 2189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2188;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2191;
                this.oC_Dash();
                this.state = 2193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2192;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2195;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2197;
                this.oC_Dash();
                this.state = 2199;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 331, this._ctx) ) {
                case 1:
                    {
                    this.state = 2198;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 2201;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 2205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2204;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2207;
                this.oC_Dash();
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RelationshipDetail(): OC_RelationshipDetailContext {
        let localctx: OC_RelationshipDetailContext = new OC_RelationshipDetailContext(this._ctx, this.state);
        this.enterRule(localctx, 246, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2211;
            this.match(CypherParser.T__6);
            this.state = 2213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2212;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237012269) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693025) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383259) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 25043861) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & 2305) !== 0)) {
                {
                this.state = 2215;
                this.oC_Variable();
                this.state = 2217;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2216;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===169) {
                {
                this.state = 2221;
                this.oC_RelationshipTypes();
                this.state = 2223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2222;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 2227;
                this.iC_RecursiveDetail();
                this.state = 2229;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2228;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2237;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 2233;
                this.iC_Properties();
                this.state = 2235;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2234;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2239;
            this.match(CypherParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_Properties(): IC_PropertiesContext {
        let localctx: IC_PropertiesContext = new IC_PropertiesContext(this._ctx, this.state);
        this.enterRule(localctx, 248, CypherParser.RULE_iC_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2241;
            this.match(CypherParser.T__8);
            this.state = 2243;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2242;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2278;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237012269) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693025) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383259) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 25043861) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & 2305) !== 0)) {
                {
                this.state = 2245;
                this.oC_PropertyKeyName();
                this.state = 2247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2246;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2249;
                this.match(CypherParser.COLON);
                this.state = 2251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2250;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2253;
                this.oC_Expression();
                this.state = 2255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2254;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2257;
                    this.match(CypherParser.T__3);
                    this.state = 2259;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2258;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2261;
                    this.oC_PropertyKeyName();
                    this.state = 2263;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2262;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2265;
                    this.match(CypherParser.COLON);
                    this.state = 2267;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2266;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2269;
                    this.oC_Expression();
                    this.state = 2271;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2270;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2277;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2280;
            this.match(CypherParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RelationshipTypes(): OC_RelationshipTypesContext {
        let localctx: OC_RelationshipTypesContext = new OC_RelationshipTypesContext(this._ctx, this.state);
        this.enterRule(localctx, 250, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2282;
            this.match(CypherParser.COLON);
            this.state = 2284;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2283;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2286;
            this.oC_RelTypeName();
            this.state = 2300;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 358, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2288;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2287;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2290;
                    this.match(CypherParser.T__10);
                    this.state = 2292;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===169) {
                        {
                        this.state = 2291;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 2295;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2294;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2297;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 2302;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 358, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NodeLabels(): OC_NodeLabelsContext {
        let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
        this.enterRule(localctx, 252, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2303;
            this.match(CypherParser.COLON);
            this.state = 2305;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2304;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2307;
            this.oC_LabelName();
            this.state = 2324;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 364, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2309;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2308;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2316;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                    case CypherParser.T__10:
                        {
                        this.state = 2311;
                        this.match(CypherParser.T__10);
                        this.state = 2313;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===169) {
                            {
                            this.state = 2312;
                            this.match(CypherParser.COLON);
                            }
                        }

                        }
                        break;
                    case CypherParser.COLON:
                        {
                        this.state = 2315;
                        this.match(CypherParser.COLON);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2319;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2318;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2321;
                    this.oC_LabelName();
                    }
                    }
                }
                this.state = 2326;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 364, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_RecursiveDetail(): IC_RecursiveDetailContext {
        let localctx: IC_RecursiveDetailContext = new IC_RecursiveDetailContext(this._ctx, this.state);
        this.enterRule(localctx, 254, CypherParser.RULE_iC_RecursiveDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2327;
            this.match(CypherParser.STAR);
            this.state = 2332;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 366, this._ctx) ) {
            case 1:
                {
                this.state = 2329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2328;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2331;
                this.iC_RecursiveType();
                }
                break;
            }
            this.state = 2338;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 368, this._ctx) ) {
            case 1:
                {
                this.state = 2335;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 367, this._ctx) ) {
                case 1:
                    {
                    this.state = 2334;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2337;
                this.oC_RangeLiteral();
                }
                break;
            }
            this.state = 2344;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 370, this._ctx) ) {
            case 1:
                {
                this.state = 2341;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2340;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2343;
                this.iC_RecursiveComprehension();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_RecursiveType(): IC_RecursiveTypeContext {
        let localctx: IC_RecursiveTypeContext = new IC_RecursiveTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 256, CypherParser.RULE_iC_RecursiveType);
        let _la: number;
        try {
            this.state = 2370;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 375, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===48) {
                    {
                    this.state = 2346;
                    this.match(CypherParser.ALL);
                    this.state = 2347;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2350;
                this.match(CypherParser.WSHORTEST);
                this.state = 2352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2351;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2354;
                this.match(CypherParser.T__1);
                this.state = 2356;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2355;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2358;
                this.oC_PropertyKeyName();
                this.state = 2360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2359;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2362;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2364;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2365;
                this.match(CypherParser.ALL);
                this.state = 2366;
                this.match(CypherParser.SP);
                this.state = 2367;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2368;
                this.match(CypherParser.TRAIL);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2369;
                this.match(CypherParser.ACYCLIC);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RangeLiteral(): OC_RangeLiteralContext {
        let localctx: OC_RangeLiteralContext = new OC_RangeLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 258, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.state = 2386;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 380, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2372;
                    this.oC_LowerBound();
                    }
                }

                this.state = 2376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2375;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2378;
                this.match(CypherParser.DOTDOT);
                this.state = 2380;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 378, this._ctx) ) {
                case 1:
                    {
                    this.state = 2379;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2383;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===175) {
                    {
                    this.state = 2382;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2385;
                this.oC_IntegerLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_RecursiveComprehension(): IC_RecursiveComprehensionContext {
        let localctx: IC_RecursiveComprehensionContext = new IC_RecursiveComprehensionContext(this._ctx, this.state);
        this.enterRule(localctx, 260, CypherParser.RULE_iC_RecursiveComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2388;
            this.match(CypherParser.T__1);
            this.state = 2390;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2389;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2392;
            this.oC_Variable();
            this.state = 2394;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2393;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2396;
            this.match(CypherParser.T__3);
            this.state = 2398;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2397;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2400;
            this.oC_Variable();
            this.state = 2412;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 387, this._ctx) ) {
            case 1:
                {
                this.state = 2402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2401;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2404;
                this.match(CypherParser.T__10);
                this.state = 2406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2405;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2408;
                this.oC_Where();
                this.state = 2410;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 386, this._ctx) ) {
                case 1:
                    {
                    this.state = 2409;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2433;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===188) {
                {
                this.state = 2415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2414;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2417;
                this.match(CypherParser.T__10);
                this.state = 2419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2418;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2421;
                this.iC_RecursiveProjectionItems();
                this.state = 2423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2422;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2425;
                this.match(CypherParser.T__3);
                this.state = 2427;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2426;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2429;
                this.iC_RecursiveProjectionItems();
                this.state = 2431;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2430;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2435;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_RecursiveProjectionItems(): IC_RecursiveProjectionItemsContext {
        let localctx: IC_RecursiveProjectionItemsContext = new IC_RecursiveProjectionItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 262, CypherParser.RULE_iC_RecursiveProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2437;
            this.match(CypherParser.T__8);
            this.state = 2439;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 394, this._ctx) ) {
            case 1:
                {
                this.state = 2438;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2442;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2474049119) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693297) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383483) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 1375675293) !== 0) || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 4995) !== 0)) {
                {
                this.state = 2441;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2445;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2444;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2447;
            this.match(CypherParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_LowerBound(): OC_LowerBoundContext {
        let localctx: OC_LowerBoundContext = new OC_LowerBoundContext(this._ctx, this.state);
        this.enterRule(localctx, 264, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2449;
            this.match(CypherParser.DecimalInteger);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_UpperBound(): OC_UpperBoundContext {
        let localctx: OC_UpperBoundContext = new OC_UpperBoundContext(this._ctx, this.state);
        this.enterRule(localctx, 266, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2451;
            this.match(CypherParser.DecimalInteger);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_LabelName(): OC_LabelNameContext {
        let localctx: OC_LabelNameContext = new OC_LabelNameContext(this._ctx, this.state);
        this.enterRule(localctx, 268, CypherParser.RULE_oC_LabelName);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2453;
            this.oC_SchemaName();
            this.state = 2456;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===5) {
                {
                this.state = 2454;
                this.match(CypherParser.T__4);
                this.state = 2455;
                this.oC_SchemaName();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RelTypeName(): OC_RelTypeNameContext {
        let localctx: OC_RelTypeNameContext = new OC_RelTypeNameContext(this._ctx, this.state);
        this.enterRule(localctx, 270, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2458;
            this.oC_SchemaName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Expression(): OC_ExpressionContext {
        let localctx: OC_ExpressionContext = new OC_ExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 272, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2460;
            this.oC_OrExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_OrExpression(): OC_OrExpressionContext {
        let localctx: OC_OrExpressionContext = new OC_OrExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 274, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2462;
            this.oC_XorExpression();
            this.state = 2469;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 398, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2463;
                    this.match(CypherParser.SP);
                    this.state = 2464;
                    this.match(CypherParser.OR);
                    this.state = 2465;
                    this.match(CypherParser.SP);
                    this.state = 2466;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2471;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 398, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_XorExpression(): OC_XorExpressionContext {
        let localctx: OC_XorExpressionContext = new OC_XorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 276, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2472;
            this.oC_AndExpression();
            this.state = 2479;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 399, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2473;
                    this.match(CypherParser.SP);
                    this.state = 2474;
                    this.match(CypherParser.XOR);
                    this.state = 2475;
                    this.match(CypherParser.SP);
                    this.state = 2476;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2481;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 399, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_AndExpression(): OC_AndExpressionContext {
        let localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 278, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2482;
            this.oC_NotExpression();
            this.state = 2489;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 400, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2483;
                    this.match(CypherParser.SP);
                    this.state = 2484;
                    this.match(CypherParser.AND);
                    this.state = 2485;
                    this.match(CypherParser.SP);
                    this.state = 2486;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2491;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 400, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NotExpression(): OC_NotExpressionContext {
        let localctx: OC_NotExpressionContext = new OC_NotExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 280, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2498;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===116) {
                {
                {
                this.state = 2492;
                this.match(CypherParser.NOT);
                this.state = 2494;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2493;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2500;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2501;
            this.oC_ComparisonExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
        let localctx: OC_ComparisonExpressionContext = new OC_ComparisonExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 282, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2551;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 413, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2503;
                this.iC_BitwiseOrOperatorExpression();
                this.state = 2513;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 405, this._ctx) ) {
                case 1:
                    {
                    this.state = 2505;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2504;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2507;
                    this.iC_ComparisonOperator();
                    this.state = 2509;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2508;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2511;
                    this.iC_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2515;
                this.iC_BitwiseOrOperatorExpression();
                {
                this.state = 2517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2516;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2519;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2520;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2523;
                this.iC_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2527;
                this.iC_BitwiseOrOperatorExpression();
                this.state = 2529;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2528;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2531;
                this.iC_ComparisonOperator();
                this.state = 2533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2532;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2535;
                this.iC_BitwiseOrOperatorExpression();
                this.state = 2545;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2537;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2536;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2539;
                        this.iC_ComparisonOperator();
                        this.state = 2541;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2540;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2543;
                        this.iC_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2547;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 412, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ComparisonOperator(): IC_ComparisonOperatorContext {
        let localctx: IC_ComparisonOperatorContext = new IC_ComparisonOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 284, CypherParser.RULE_iC_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2553;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 127040) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_BitwiseOrOperatorExpression(): IC_BitwiseOrOperatorExpressionContext {
        let localctx: IC_BitwiseOrOperatorExpressionContext = new IC_BitwiseOrOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 286, CypherParser.RULE_iC_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2555;
            this.iC_BitwiseAndOperatorExpression();
            this.state = 2566;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 416, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2557;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2556;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2559;
                    this.match(CypherParser.T__10);
                    this.state = 2561;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2560;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2563;
                    this.iC_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2568;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 416, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_BitwiseAndOperatorExpression(): IC_BitwiseAndOperatorExpressionContext {
        let localctx: IC_BitwiseAndOperatorExpressionContext = new IC_BitwiseAndOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 288, CypherParser.RULE_iC_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2569;
            this.iC_BitShiftOperatorExpression();
            this.state = 2580;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 419, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2571;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2570;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2573;
                    this.match(CypherParser.T__16);
                    this.state = 2575;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2574;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2577;
                    this.iC_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2582;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 419, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_BitShiftOperatorExpression(): IC_BitShiftOperatorExpressionContext {
        let localctx: IC_BitShiftOperatorExpressionContext = new IC_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 290, CypherParser.RULE_iC_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2583;
            this.oC_AddOrSubtractExpression();
            this.state = 2595;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 422, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2585;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2584;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2587;
                    this.iC_BitShiftOperator();
                    this.state = 2589;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2588;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2591;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2597;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 422, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_BitShiftOperator(): IC_BitShiftOperatorContext {
        let localctx: IC_BitShiftOperatorContext = new IC_BitShiftOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 292, CypherParser.RULE_iC_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2598;
            _la = this._input.LA(1);
            if(!(_la===18 || _la===19)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
        let localctx: OC_AddOrSubtractExpressionContext = new OC_AddOrSubtractExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 294, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2600;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2612;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 425, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2602;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2601;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2604;
                    this.iC_AddOrSubtractOperator();
                    this.state = 2606;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2605;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2608;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2614;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 425, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_AddOrSubtractOperator(): IC_AddOrSubtractOperatorContext {
        let localctx: IC_AddOrSubtractOperatorContext = new IC_AddOrSubtractOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 296, CypherParser.RULE_iC_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2615;
            _la = this._input.LA(1);
            if(!(_la===20 || _la===171)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_MultiplyDivideModuloExpression(): OC_MultiplyDivideModuloExpressionContext {
        let localctx: OC_MultiplyDivideModuloExpressionContext = new OC_MultiplyDivideModuloExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 298, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2617;
            this.oC_PowerOfExpression();
            this.state = 2629;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 428, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2619;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2618;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2621;
                    this.iC_MultiplyDivideModuloOperator();
                    this.state = 2623;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2622;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2625;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2631;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 428, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_MultiplyDivideModuloOperator(): IC_MultiplyDivideModuloOperatorContext {
        let localctx: IC_MultiplyDivideModuloOperatorContext = new IC_MultiplyDivideModuloOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 300, CypherParser.RULE_iC_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2632;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===22 || _la===166)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PowerOfExpression(): OC_PowerOfExpressionContext {
        let localctx: OC_PowerOfExpressionContext = new OC_PowerOfExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 302, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2634;
            this.oC_StringListNullOperatorExpression();
            this.state = 2645;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 431, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2636;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2635;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2638;
                    this.match(CypherParser.T__22);
                    this.state = 2640;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2639;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2642;
                    this.oC_StringListNullOperatorExpression();
                    }
                    }
                }
                this.state = 2647;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 431, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_StringListNullOperatorExpression(): OC_StringListNullOperatorExpressionContext {
        let localctx: OC_StringListNullOperatorExpressionContext = new OC_StringListNullOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 304, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2648;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2656;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 433, this._ctx) ) {
            case 1:
                {
                this.state = 2649;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2651;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2650;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2653;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 432, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2655;
                this.oC_NullOperatorExpression();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ListOperatorExpression(): OC_ListOperatorExpressionContext {
        let localctx: OC_ListOperatorExpressionContext = new OC_ListOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 306, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 2677;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 437, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2658;
                this.match(CypherParser.SP);
                this.state = 2659;
                this.match(CypherParser.IN);
                this.state = 2661;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2660;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2663;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2664;
                this.match(CypherParser.T__6);
                this.state = 2665;
                this.oC_Expression();
                this.state = 2666;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2668;
                this.match(CypherParser.T__6);
                this.state = 2670;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2474049119) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693297) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383483) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 1367286685) !== 0) || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 4995) !== 0)) {
                    {
                    this.state = 2669;
                    this.oC_Expression();
                    }
                }

                this.state = 2672;
                _la = this._input.LA(1);
                if(!(_la===169 || _la===170)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2674;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2474049119) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693297) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383483) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 1367286685) !== 0) || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 4995) !== 0)) {
                    {
                    this.state = 2673;
                    this.oC_Expression();
                    }
                }

                this.state = 2676;
                this.match(CypherParser.T__7);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext {
        let localctx: OC_StringOperatorExpressionContext = new OC_StringOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 308, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2690;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 438, this._ctx) ) {
            case 1:
                {
                this.state = 2679;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2680;
                this.match(CypherParser.SP);
                this.state = 2681;
                this.match(CypherParser.STARTS);
                this.state = 2682;
                this.match(CypherParser.SP);
                this.state = 2683;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2684;
                this.match(CypherParser.SP);
                this.state = 2685;
                this.match(CypherParser.ENDS);
                this.state = 2686;
                this.match(CypherParser.SP);
                this.state = 2687;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2688;
                this.match(CypherParser.SP);
                this.state = 2689;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2693;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2692;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2695;
            this.oC_PropertyOrLabelsExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RegularExpression(): OC_RegularExpressionContext {
        let localctx: OC_RegularExpressionContext = new OC_RegularExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 310, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2698;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2697;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2700;
            this.match(CypherParser.T__23);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NullOperatorExpression(): OC_NullOperatorExpressionContext {
        let localctx: OC_NullOperatorExpressionContext = new OC_NullOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 312, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 2712;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 441, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2702;
                this.match(CypherParser.SP);
                this.state = 2703;
                this.match(CypherParser.IS);
                this.state = 2704;
                this.match(CypherParser.SP);
                this.state = 2705;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2706;
                this.match(CypherParser.SP);
                this.state = 2707;
                this.match(CypherParser.IS);
                this.state = 2708;
                this.match(CypherParser.SP);
                this.state = 2709;
                this.match(CypherParser.NOT);
                this.state = 2710;
                this.match(CypherParser.SP);
                this.state = 2711;
                this.match(CypherParser.NULL);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_UnaryAddSubtractOrFactorialExpression(): OC_UnaryAddSubtractOrFactorialExpressionContext {
        let localctx: OC_UnaryAddSubtractOrFactorialExpressionContext = new OC_UnaryAddSubtractOrFactorialExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 314, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2720;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===171) {
                {
                {
                this.state = 2714;
                this.match(CypherParser.MINUS);
                this.state = 2716;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2715;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2722;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2723;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2728;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 445, this._ctx) ) {
            case 1:
                {
                this.state = 2725;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2724;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2727;
                this.match(CypherParser.FACTORIAL);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        let localctx: OC_PropertyOrLabelsExpressionContext = new OC_PropertyOrLabelsExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 316, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2730;
            this.oC_Atom();
            this.state = 2737;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 447, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2732;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2731;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2734;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2739;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 447, this._ctx);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Atom(): OC_AtomContext {
        let localctx: OC_AtomContext = new OC_AtomContext(this._ctx, this.state);
        this.enterRule(localctx, 318, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2749;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 448, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2740;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2741;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2742;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2743;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2744;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2745;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2746;
                this.oC_ExistCountSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2747;
                this.oC_Variable();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2748;
                this.oC_Quantifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Quantifier(): OC_QuantifierContext {
        let localctx: OC_QuantifierContext = new OC_QuantifierContext(this._ctx, this.state);
        this.enterRule(localctx, 320, CypherParser.RULE_oC_Quantifier);
        let _la: number;
        try {
            this.state = 2807;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2751;
                this.match(CypherParser.ALL);
                this.state = 2753;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2752;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2755;
                this.match(CypherParser.T__1);
                this.state = 2757;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2756;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2759;
                this.oC_FilterExpression();
                this.state = 2761;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2760;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2763;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.ANY:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2765;
                this.match(CypherParser.ANY);
                this.state = 2767;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2766;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2769;
                this.match(CypherParser.T__1);
                this.state = 2771;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2770;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2773;
                this.oC_FilterExpression();
                this.state = 2775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2774;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2777;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.NONE:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2779;
                this.match(CypherParser.NONE);
                this.state = 2781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2780;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2783;
                this.match(CypherParser.T__1);
                this.state = 2785;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2784;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2787;
                this.oC_FilterExpression();
                this.state = 2789;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2788;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2791;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.SINGLE:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 2793;
                this.match(CypherParser.SINGLE);
                this.state = 2795;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2794;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2797;
                this.match(CypherParser.T__1);
                this.state = 2799;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2798;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2801;
                this.oC_FilterExpression();
                this.state = 2803;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2802;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2805;
                this.match(CypherParser.T__2);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_FilterExpression(): OC_FilterExpressionContext {
        let localctx: OC_FilterExpressionContext = new OC_FilterExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 322, CypherParser.RULE_oC_FilterExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2809;
            this.oC_IdInColl();
            this.state = 2810;
            this.match(CypherParser.SP);
            this.state = 2811;
            this.oC_Where();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_IdInColl(): OC_IdInCollContext {
        let localctx: OC_IdInCollContext = new OC_IdInCollContext(this._ctx, this.state);
        this.enterRule(localctx, 324, CypherParser.RULE_oC_IdInColl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2813;
            this.oC_Variable();
            this.state = 2814;
            this.match(CypherParser.SP);
            this.state = 2815;
            this.match(CypherParser.IN);
            this.state = 2816;
            this.match(CypherParser.SP);
            this.state = 2817;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Literal(): OC_LiteralContext {
        let localctx: OC_LiteralContext = new OC_LiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 326, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2825;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2819;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2820;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2821;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2822;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2823;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2824;
                this.iC_StructLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_BooleanLiteral(): OC_BooleanLiteralContext {
        let localctx: OC_BooleanLiteralContext = new OC_BooleanLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 328, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2827;
            _la = this._input.LA(1);
            if(!(_la===87 || _la===146)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ListLiteral(): OC_ListLiteralContext {
        let localctx: OC_ListLiteralContext = new OC_ListLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 330, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2829;
            this.match(CypherParser.T__6);
            this.state = 2831;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2830;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2846;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2474049119) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693297) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383483) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 1367286685) !== 0) || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 4995) !== 0)) {
                {
                this.state = 2833;
                this.oC_Expression();
                this.state = 2835;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2834;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2843;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2837;
                    this.iC_ListEntry();
                    this.state = 2839;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2838;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2845;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2848;
            this.match(CypherParser.T__7);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_ListEntry(): IC_ListEntryContext {
        let localctx: IC_ListEntryContext = new IC_ListEntryContext(this._ctx, this.state);
        this.enterRule(localctx, 332, CypherParser.RULE_iC_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2850;
            this.match(CypherParser.T__3);
            this.state = 2852;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 468, this._ctx) ) {
            case 1:
                {
                this.state = 2851;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2855;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2474049119) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693297) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383483) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 1367286685) !== 0) || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 4995) !== 0)) {
                {
                this.state = 2854;
                this.oC_Expression();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_StructLiteral(): IC_StructLiteralContext {
        let localctx: IC_StructLiteralContext = new IC_StructLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 334, CypherParser.RULE_iC_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2857;
            this.match(CypherParser.T__8);
            this.state = 2859;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2858;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2861;
            this.iC_StructField();
            this.state = 2863;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2862;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2875;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2865;
                this.match(CypherParser.T__3);
                this.state = 2867;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2866;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2869;
                this.iC_StructField();
                this.state = 2871;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2870;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2877;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2878;
            this.match(CypherParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_StructField(): IC_StructFieldContext {
        let localctx: IC_StructFieldContext = new IC_StructFieldContext(this._ctx, this.state);
        this.enterRule(localctx, 336, CypherParser.RULE_iC_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2882;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 2880;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2881;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2885;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2884;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2887;
            this.match(CypherParser.COLON);
            this.state = 2889;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2888;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2891;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext {
        let localctx: OC_ParenthesizedExpressionContext = new OC_ParenthesizedExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 338, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2893;
            this.match(CypherParser.T__1);
            this.state = 2895;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2894;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2897;
            this.oC_Expression();
            this.state = 2899;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 2898;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2901;
            this.match(CypherParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        let localctx: OC_FunctionInvocationContext = new OC_FunctionInvocationContext(this._ctx, this.state);
        this.enterRule(localctx, 340, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2980;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 499, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2903;
                this.match(CypherParser.COUNT);
                this.state = 2905;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2904;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2907;
                this.match(CypherParser.T__1);
                this.state = 2909;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2908;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2911;
                this.match(CypherParser.STAR);
                this.state = 2913;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2912;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2915;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2916;
                this.match(CypherParser.CAST);
                this.state = 2918;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2917;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2920;
                this.match(CypherParser.T__1);
                this.state = 2922;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2921;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2924;
                this.iC_FunctionParameter();
                this.state = 2926;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2925;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2938;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2928;
                    this.match(CypherParser.AS);
                    this.state = 2930;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2929;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2932;
                    this.iC_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__3:
                    {
                    {
                    this.state = 2933;
                    this.match(CypherParser.T__3);
                    this.state = 2935;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2934;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2937;
                    this.iC_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2941;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2940;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2943;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2945;
                this.oC_FunctionName();
                this.state = 2947;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2946;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2949;
                this.match(CypherParser.T__1);
                this.state = 2951;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 2950;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2957;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===78) {
                    {
                    this.state = 2953;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2955;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2954;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2976;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 2474049119) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693297) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383483) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 1367286685) !== 0) || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & 4995) !== 0)) {
                    {
                    this.state = 2959;
                    this.iC_FunctionParameter();
                    this.state = 2961;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2960;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2973;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2963;
                        this.match(CypherParser.T__3);
                        this.state = 2965;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2964;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2967;
                        this.iC_FunctionParameter();
                        this.state = 2969;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 2968;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2975;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2978;
                this.match(CypherParser.T__2);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_FunctionName(): OC_FunctionNameContext {
        let localctx: OC_FunctionNameContext = new OC_FunctionNameContext(this._ctx, this.state);
        this.enterRule(localctx, 342, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2982;
            this.oC_SymbolicName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_FunctionParameter(): IC_FunctionParameterContext {
        let localctx: IC_FunctionParameterContext = new IC_FunctionParameterContext(this._ctx, this.state);
        this.enterRule(localctx, 344, CypherParser.RULE_iC_FunctionParameter);
        let _la: number;
        try {
            this.state = 2997;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 503, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2993;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 502, this._ctx) ) {
                case 1:
                    {
                    this.state = 2984;
                    this.oC_SymbolicName();
                    this.state = 2986;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2985;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2988;
                    this.match(CypherParser.COLON);
                    this.state = 2989;
                    this.match(CypherParser.T__5);
                    this.state = 2991;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 2990;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2995;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2996;
                this.iC_LambdaParameter();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_LambdaParameter(): IC_LambdaParameterContext {
        let localctx: IC_LambdaParameterContext = new IC_LambdaParameterContext(this._ctx, this.state);
        this.enterRule(localctx, 346, CypherParser.RULE_iC_LambdaParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2999;
            this.iC_LambdaVars();
            this.state = 3001;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3000;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3003;
            this.match(CypherParser.MINUS);
            this.state = 3004;
            this.match(CypherParser.T__14);
            this.state = 3006;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3005;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3008;
            this.oC_Expression();
            this.state = 3010;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 506, this._ctx) ) {
            case 1:
                {
                this.state = 3009;
                this.match(CypherParser.SP);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_LambdaVars(): IC_LambdaVarsContext {
        let localctx: IC_LambdaVarsContext = new IC_LambdaVarsContext(this._ctx, this.state);
        this.enterRule(localctx, 348, CypherParser.RULE_iC_LambdaVars);
        let _la: number;
        try {
            this.state = 3036;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 3012;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 3013;
                this.match(CypherParser.T__1);
                this.state = 3015;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 3014;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 3017;
                this.oC_SymbolicName();
                this.state = 3019;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 3018;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 3031;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 3021;
                    this.match(CypherParser.T__3);
                    this.state = 3023;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 3022;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 3025;
                    this.oC_SymbolicName();
                    this.state = 3027;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 3026;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 3033;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 3034;
                this.match(CypherParser.T__2);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PathPatterns(): OC_PathPatternsContext {
        let localctx: OC_PathPatternsContext = new OC_PathPatternsContext(this._ctx, this.state);
        this.enterRule(localctx, 350, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3038;
            this.oC_NodePattern();
            this.state = 3043;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 3040;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===188) {
                        {
                        this.state = 3039;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 3042;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 3045;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 514, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_ExistCountSubquery(): OC_ExistCountSubqueryContext {
        let localctx: OC_ExistCountSubqueryContext = new OC_ExistCountSubqueryContext(this._ctx, this.state);
        this.enterRule(localctx, 352, CypherParser.RULE_oC_ExistCountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3047;
            _la = this._input.LA(1);
            if(!(_la===68 || _la===83)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 3049;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3048;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3051;
            this.match(CypherParser.T__8);
            this.state = 3053;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3052;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3055;
            this.match(CypherParser.MATCH);
            this.state = 3057;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3056;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3059;
            this.oC_Pattern();
            this.state = 3064;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 519, this._ctx) ) {
            case 1:
                {
                this.state = 3061;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 3060;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 3063;
                this.oC_Where();
                }
                break;
            }
            this.state = 3070;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 521, this._ctx) ) {
            case 1:
                {
                this.state = 3067;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 3066;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 3069;
                this.iC_Hint();
                }
                break;
            }
            this.state = 3073;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3072;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3075;
            this.match(CypherParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PropertyLookup(): OC_PropertyLookupContext {
        let localctx: OC_PropertyLookupContext = new OC_PropertyLookupContext(this._ctx, this.state);
        this.enterRule(localctx, 354, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3077;
            this.match(CypherParser.T__4);
            this.state = 3079;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3078;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3083;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 3081;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 3082;
                this.match(CypherParser.STAR);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_CaseExpression(): OC_CaseExpressionContext {
        let localctx: OC_CaseExpressionContext = new OC_CaseExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 356, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3107;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 530, this._ctx) ) {
            case 1:
                {
                {
                this.state = 3085;
                this.match(CypherParser.CASE);
                this.state = 3090;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 3087;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 3086;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 3089;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 3092;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 526, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 3094;
                this.match(CypherParser.CASE);
                this.state = 3096;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 3095;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 3098;
                this.oC_Expression();
                this.state = 3103;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 3100;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===188) {
                            {
                            this.state = 3099;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 3102;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 3105;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 529, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 3117;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 533, this._ctx) ) {
            case 1:
                {
                this.state = 3110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 3109;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 3112;
                this.match(CypherParser.ELSE);
                this.state = 3114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===188) {
                    {
                    this.state = 3113;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 3116;
                this.oC_Expression();
                }
                break;
            }
            this.state = 3120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3119;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3122;
            this.match(CypherParser.END);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_CaseAlternative(): OC_CaseAlternativeContext {
        let localctx: OC_CaseAlternativeContext = new OC_CaseAlternativeContext(this._ctx, this.state);
        this.enterRule(localctx, 358, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3124;
            this.match(CypherParser.WHEN);
            this.state = 3126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3125;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3128;
            this.oC_Expression();
            this.state = 3130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3129;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3132;
            this.match(CypherParser.THEN);
            this.state = 3134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3133;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3136;
            this.oC_Expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Variable(): OC_VariableContext {
        let localctx: OC_VariableContext = new OC_VariableContext(this._ctx, this.state);
        this.enterRule(localctx, 360, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3138;
            this.oC_SymbolicName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_NumberLiteral(): OC_NumberLiteralContext {
        let localctx: OC_NumberLiteralContext = new OC_NumberLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 362, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 3142;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 3140;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 3141;
                this.oC_IntegerLiteral();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Parameter(): OC_ParameterContext {
        let localctx: OC_ParameterContext = new OC_ParameterContext(this._ctx, this.state);
        this.enterRule(localctx, 364, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3144;
            this.match(CypherParser.T__24);
            this.state = 3147;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
            case CypherParser.HexLetter:
            case CypherParser.UnescapedSymbolicName:
            case CypherParser.EscapedSymbolicName:
                {
                this.state = 3145;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 3146;
                this.match(CypherParser.DecimalInteger);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PropertyExpression(): OC_PropertyExpressionContext {
        let localctx: OC_PropertyExpressionContext = new OC_PropertyExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 366, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3149;
            this.oC_Atom();
            this.state = 3151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===188) {
                {
                this.state = 3150;
                this.match(CypherParser.SP);
                }
            }

            this.state = 3153;
            this.oC_PropertyLookup();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        let localctx: OC_PropertyKeyNameContext = new OC_PropertyKeyNameContext(this._ctx, this.state);
        this.enterRule(localctx, 368, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3155;
            this.oC_SymbolicName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        let localctx: OC_IntegerLiteralContext = new OC_IntegerLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 370, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3157;
            this.match(CypherParser.DecimalInteger);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_DoubleLiteral(): OC_DoubleLiteralContext {
        let localctx: OC_DoubleLiteralContext = new OC_DoubleLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 372, CypherParser.RULE_oC_DoubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3159;
            _la = this._input.LA(1);
            if(!(_la===182 || _la===183)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        let localctx: OC_SchemaNameContext = new OC_SchemaNameContext(this._ctx, this.state);
        this.enterRule(localctx, 374, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3161;
            this.oC_SymbolicName();
            this.state = 3164;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 541, this._ctx) ) {
            case 1:
                {
                this.state = 3162;
                this.match(CypherParser.T__4);
                this.state = 3163;
                this.oC_SymbolicName();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        let localctx: OC_SymbolicNameContext = new OC_SymbolicNameContext(this._ctx, this.state);
        this.enterRule(localctx, 376, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 3171;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 3166;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 3167;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 3169;
                this.match(CypherParser.HexLetter);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
            case CypherParser.ANALYZE:
            case CypherParser.AS:
            case CypherParser.ATTACH:
            case CypherParser.BEGIN:
            case CypherParser.BY:
            case CypherParser.CALL:
            case CypherParser.CHECKPOINT:
            case CypherParser.COMMENT:
            case CypherParser.COMMIT:
            case CypherParser.CONTAINS:
            case CypherParser.COPY:
            case CypherParser.COUNT:
            case CypherParser.CYCLE:
            case CypherParser.DATABASE:
            case CypherParser.DELETE:
            case CypherParser.DETACH:
            case CypherParser.DROP:
            case CypherParser.EXPLAIN:
            case CypherParser.EXPORT:
            case CypherParser.EXTENSION:
            case CypherParser.FROM:
            case CypherParser.FORCE:
            case CypherParser.GRAPH:
            case CypherParser.IMPORT:
            case CypherParser.IF:
            case CypherParser.INCREMENT:
            case CypherParser.IS:
            case CypherParser.KEY:
            case CypherParser.LIMIT:
            case CypherParser.LOAD:
            case CypherParser.LOGICAL:
            case CypherParser.MATCH:
            case CypherParser.MAXVALUE:
            case CypherParser.MERGE:
            case CypherParser.MINVALUE:
            case CypherParser.NO:
            case CypherParser.NODE:
            case CypherParser.PROJECT:
            case CypherParser.READ:
            case CypherParser.REL:
            case CypherParser.RENAME:
            case CypherParser.RETURN:
            case CypherParser.ROLLBACK:
            case CypherParser.SEQUENCE:
            case CypherParser.SET:
            case CypherParser.START:
            case CypherParser.STRUCT:
            case CypherParser.TO:
            case CypherParser.TRANSACTION:
            case CypherParser.TYPE:
            case CypherParser.UNINSTALL:
            case CypherParser.UPDATE:
            case CypherParser.USE:
            case CypherParser.WRITE:
            case CypherParser.YIELD:
            case CypherParser.USER:
            case CypherParser.PASSWORD:
            case CypherParser.ROLE:
            case CypherParser.MAP:
            case CypherParser.DECIMAL:
            case CypherParser.L_SKIP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 3170;
                this.iC_NonReservedKeywords();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public iC_NonReservedKeywords(): IC_NonReservedKeywordsContext {
        let localctx: IC_NonReservedKeywordsContext = new IC_NonReservedKeywordsContext(this._ctx, this.state);
        this.enterRule(localctx, 378, CypherParser.RULE_iC_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3173;
            _la = this._input.LA(1);
            if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 1237012269) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 3735693025) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 700383259) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 25043861) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_LeftArrowHead(): OC_LeftArrowHeadContext {
        let localctx: OC_LeftArrowHeadContext = new OC_LeftArrowHeadContext(this._ctx, this.state);
        this.enterRule(localctx, 380, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3175;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1006641152) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_RightArrowHead(): OC_RightArrowHeadContext {
        let localctx: OC_RightArrowHeadContext = new OC_RightArrowHeadContext(this._ctx, this.state);
        this.enterRule(localctx, 382, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3177;
            _la = this._input.LA(1);
            if(!(((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & 491521) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public oC_Dash(): OC_DashContext {
        let localctx: OC_DashContext = new OC_DashContext(this._ctx, this.state);
        this.enterRule(localctx, 384, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 3179;
            _la = this._input.LA(1);
            if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 2047) !== 0) || _la===171)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public override sempred(localctx: antlr.RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 71:
            return this.iC_DataType_sempred(localctx as IC_DataTypeContext, predIndex);
        case 98:
            return this.iC_JoinNode_sempred(localctx as IC_JoinNodeContext, predIndex);
        }
        return true;
    }
    private iC_DataType_sempred(localctx: IC_DataTypeContext, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 5);
        }
        return true;
    }
    private iC_JoinNode_sempred(localctx: IC_JoinNodeContext, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this._ctx, 4);
        case 2:
            return this.precpred(this._ctx, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,191,3182,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,
        7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,
        2,192,7,192,1,0,1,0,3,0,389,8,0,1,0,1,0,3,0,393,8,0,1,0,5,0,396,
        8,0,10,0,12,0,399,9,0,1,0,3,0,402,8,0,1,0,1,0,1,1,3,1,407,8,1,1,
        1,3,1,410,8,1,1,1,1,1,3,1,414,8,1,1,1,3,1,417,8,1,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,445,8,2,1,3,1,3,1,3,1,3,3,3,451,8,
        3,1,3,1,3,1,3,1,3,1,3,3,3,458,8,3,1,3,1,3,3,3,462,8,3,1,3,1,3,3,
        3,466,8,3,1,3,1,3,3,3,470,8,3,1,4,3,4,473,8,4,1,4,1,4,3,4,477,8,
        4,1,4,1,4,3,4,481,8,4,1,4,1,4,3,4,485,8,4,1,4,5,4,488,8,4,10,4,12,
        4,491,9,4,1,4,3,4,494,8,4,3,4,496,8,4,1,4,1,4,1,5,1,5,1,5,3,5,503,
        8,5,1,5,1,5,3,5,507,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,516,8,5,
        1,5,1,5,1,5,3,5,521,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,531,
        8,6,1,6,1,6,3,6,535,8,6,1,6,1,6,3,6,539,8,6,1,6,5,6,542,8,6,10,6,
        12,6,545,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,557,8,7,
        1,7,1,7,3,7,561,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,569,8,7,1,7,1,7,
        3,7,573,8,7,1,7,1,7,3,7,577,8,7,1,7,1,7,3,7,581,8,7,1,8,1,8,1,8,
        1,8,1,8,1,8,3,8,589,8,8,1,8,1,8,3,8,593,8,8,1,8,1,8,3,8,597,8,8,
        1,8,1,8,3,8,601,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,3,10,616,8,10,1,10,1,10,1,10,3,10,621,8,10,1,10,1,
        10,1,10,1,10,3,10,627,8,10,1,10,1,10,3,10,631,8,10,1,10,3,10,634,
        8,10,1,10,3,10,637,8,10,1,10,1,10,1,11,1,11,3,11,643,8,11,1,11,1,
        11,3,11,647,8,11,1,11,5,11,650,8,11,10,11,12,11,653,9,11,3,11,655,
        8,11,1,11,1,11,3,11,659,8,11,1,11,3,11,662,8,11,1,11,3,11,665,8,
        11,1,12,1,12,3,12,669,8,12,1,12,1,12,3,12,673,8,12,1,12,1,12,1,13,
        1,13,3,13,679,8,13,1,13,1,13,3,13,683,8,13,1,13,5,13,686,8,13,10,
        13,12,13,689,9,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,
        16,1,16,1,16,1,16,1,16,1,16,3,16,706,8,16,1,17,1,17,1,17,1,17,1,
        17,1,17,1,18,1,18,1,18,3,18,717,8,18,1,19,1,19,1,19,1,19,3,19,723,
        8,19,1,19,1,19,3,19,727,8,19,1,19,1,19,1,19,1,19,1,19,3,19,734,8,
        19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
        21,1,21,1,21,1,21,1,21,1,21,3,21,754,8,21,1,21,1,21,3,21,758,8,21,
        1,21,3,21,761,8,21,1,21,3,21,764,8,21,1,21,3,21,767,8,21,1,21,3,
        21,770,8,21,1,21,1,21,3,21,774,8,21,1,21,5,21,777,8,21,10,21,12,
        21,780,9,21,1,21,3,21,783,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,
        1,22,3,22,793,8,22,1,22,1,22,3,22,797,8,22,1,22,5,22,800,8,22,10,
        22,12,22,803,9,22,1,23,1,23,3,23,807,8,23,1,23,1,23,1,23,3,23,812,
        8,23,1,23,1,23,1,24,1,24,3,24,818,8,24,1,24,1,24,3,24,822,8,24,1,
        24,1,24,3,24,826,8,24,1,24,5,24,829,8,24,10,24,12,24,832,9,24,1,
        24,1,24,1,24,1,24,3,24,838,8,24,1,24,1,24,3,24,842,8,24,1,24,1,24,
        3,24,846,8,24,1,24,3,24,849,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,
        26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,866,8,26,1,26,1,
        26,3,26,870,8,26,1,26,1,26,3,26,874,8,26,1,26,1,26,3,26,878,8,26,
        1,26,1,26,3,26,882,8,26,1,26,3,26,885,8,26,1,26,3,26,888,8,26,1,
        26,1,26,1,26,1,26,1,26,1,26,3,26,896,8,26,1,26,1,26,1,26,3,26,901,
        8,26,1,26,1,26,3,26,905,8,26,1,26,1,26,3,26,909,8,26,1,26,1,26,3,
        26,913,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,922,8,27,1,27,
        1,27,3,27,926,8,27,1,27,1,27,1,27,3,27,931,8,27,1,27,1,27,3,27,935,
        8,27,1,27,1,27,3,27,939,8,27,1,27,1,27,3,27,943,8,27,1,27,1,27,3,
        27,947,8,27,3,27,949,8,27,1,27,1,27,3,27,953,8,27,1,27,1,27,3,27,
        957,8,27,3,27,959,8,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,967,8,
        27,1,27,1,27,1,27,3,27,972,8,27,1,27,1,27,3,27,976,8,27,1,27,1,27,
        3,27,980,8,27,1,27,1,27,3,27,984,8,27,1,28,1,28,1,28,3,28,989,8,
        28,1,28,1,28,1,28,1,28,3,28,995,8,28,1,28,1,28,3,28,999,8,28,1,28,
        1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,1012,8,28,
        1,28,1,28,3,28,1016,8,28,1,28,3,28,1019,8,28,1,28,3,28,1022,8,28,
        1,28,3,28,1025,8,28,1,29,1,29,3,29,1029,8,29,1,30,1,30,3,30,1033,
        8,30,1,30,3,30,1036,8,30,1,30,3,30,1039,8,30,1,30,1,30,3,30,1043,
        8,30,1,30,1,30,3,30,1047,8,30,1,30,1,30,1,31,1,31,3,31,1053,8,31,
        1,31,1,31,3,31,1057,8,31,1,31,1,31,3,31,1061,8,31,1,31,1,31,3,31,
        1065,8,31,1,31,1,31,1,32,1,32,3,32,1071,8,32,1,32,1,32,3,32,1075,
        8,32,1,32,1,32,3,32,1079,8,32,1,32,1,32,3,32,1083,8,32,1,32,1,32,
        1,33,1,33,3,33,1089,8,33,1,33,1,33,3,33,1093,8,33,1,33,5,33,1096,
        8,33,10,33,12,33,1099,9,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
        34,1,34,3,34,1110,8,34,1,35,1,35,3,35,1114,8,35,1,35,1,35,3,35,1118,
        8,35,1,35,5,35,1121,8,35,10,35,12,35,1124,9,35,1,36,1,36,1,36,1,
        36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,1141,
        8,37,1,37,1,37,1,37,5,37,1146,8,37,10,37,12,37,1149,9,37,1,38,1,
        38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,1161,8,38,1,39,1,
        39,1,39,1,39,1,39,3,39,1168,8,39,1,40,1,40,1,40,1,40,1,40,1,40,1,
        40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,1184,8,41,1,41,1,41,3,
        41,1188,8,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,1197,8,42,1,
        42,1,42,1,43,1,43,1,43,1,43,3,43,1205,8,43,1,43,3,43,1208,8,43,1,
        43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,3,44,1218,8,44,1,44,3,44,1221,
        8,44,1,45,1,45,1,45,1,45,1,45,1,45,3,45,1229,8,45,1,45,3,45,1232,
        8,45,1,46,1,46,1,46,1,46,3,46,1238,8,46,1,46,3,46,1241,8,46,1,46,
        1,46,1,47,1,47,3,47,1247,8,47,1,47,1,47,1,48,1,48,1,48,1,48,1,49,
        1,49,1,49,1,49,1,49,1,49,1,49,3,49,1262,8,49,1,49,1,49,1,49,1,49,
        1,49,1,49,1,49,1,49,3,49,1272,8,49,1,49,3,49,1275,8,49,1,50,1,50,
        3,50,1279,8,50,1,50,1,50,3,50,1283,8,50,1,50,1,50,1,51,1,51,1,51,
        1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,3,52,
        1302,8,52,1,53,1,53,1,53,1,53,1,53,3,53,1309,8,53,1,53,1,53,1,53,
        1,53,1,53,3,53,1316,8,53,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,
        1,55,3,55,1327,8,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,57,
        1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,3,58,
        1350,8,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,3,59,1359,8,59,1,59,
        1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1369,8,60,1,60,1,60,3,60,
        1373,8,60,1,60,1,60,3,60,1377,8,60,1,60,1,60,3,60,1381,8,60,1,60,
        5,60,1384,8,60,10,60,12,60,1387,9,60,1,60,3,60,1390,8,60,1,60,1,
        60,1,61,1,61,1,61,1,61,1,62,1,62,3,62,1400,8,62,1,62,1,62,3,62,1404,
        8,62,1,62,5,62,1407,8,62,10,62,12,62,1410,9,62,1,63,1,63,1,63,1,
        63,1,64,1,64,3,64,1418,8,64,1,64,1,64,3,64,1422,8,64,1,64,5,64,1425,
        8,64,10,64,12,64,1428,9,64,1,65,1,65,1,65,3,65,1433,8,65,1,65,1,
        65,1,65,1,65,3,65,1439,8,65,1,66,1,66,1,66,1,66,3,66,1445,8,66,1,
        66,1,66,3,66,1449,8,66,1,66,1,66,3,66,1453,8,66,1,66,1,66,1,67,1,
        67,3,67,1459,8,67,1,67,1,67,3,67,1463,8,67,1,67,1,67,3,67,1467,8,
        67,1,67,1,67,1,68,1,68,3,68,1473,8,68,1,68,1,68,3,68,1477,8,68,1,
        68,1,68,3,68,1481,8,68,1,68,1,68,1,69,1,69,3,69,1487,8,69,1,69,1,
        69,3,69,1491,8,69,1,69,1,69,3,69,1495,8,69,1,69,1,69,3,69,1499,8,
        69,1,69,1,69,3,69,1503,8,69,1,69,1,69,1,70,1,70,3,70,1509,8,70,1,
        70,1,70,3,70,1513,8,70,1,70,1,70,3,70,1517,8,70,1,70,1,70,3,70,1521,
        8,70,1,70,1,70,3,70,1525,8,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,
        1,71,3,71,1535,8,71,1,71,1,71,5,71,1539,8,71,10,71,12,71,1542,9,
        71,1,72,1,72,5,72,1546,8,72,10,72,12,72,1549,9,72,1,73,1,73,3,73,
        1553,8,73,1,73,1,73,1,74,1,74,3,74,1559,8,74,1,75,1,75,1,75,3,75,
        1564,8,75,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,1,77,3,77,1581,8,77,1,78,1,78,1,78,1,78,3,78,1587,
        8,78,1,79,1,79,1,79,1,79,3,79,1593,8,79,1,79,1,79,3,79,1597,8,79,
        1,80,1,80,3,80,1601,8,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,
        1610,8,80,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,83,1,83,1,84,
        1,84,3,84,1624,8,84,1,84,5,84,1627,8,84,10,84,12,84,1630,9,84,1,
        84,1,84,3,84,1634,8,84,4,84,1636,8,84,11,84,12,84,1637,1,84,1,84,
        1,84,3,84,1643,8,84,1,85,1,85,1,85,1,85,3,85,1649,8,85,1,85,1,85,
        1,85,3,85,1654,8,85,1,85,3,85,1657,8,85,1,86,1,86,3,86,1661,8,86,
        1,87,1,87,3,87,1665,8,87,5,87,1667,8,87,10,87,12,87,1670,9,87,1,
        87,1,87,1,87,3,87,1675,8,87,5,87,1677,8,87,10,87,12,87,1680,9,87,
        1,87,1,87,3,87,1684,8,87,1,87,5,87,1687,8,87,10,87,12,87,1690,9,
        87,1,87,3,87,1693,8,87,1,87,3,87,1696,8,87,3,87,1698,8,87,1,88,1,
        88,3,88,1702,8,88,4,88,1704,8,88,11,88,12,88,1705,1,88,1,88,1,89,
        1,89,3,89,1712,8,89,5,89,1714,8,89,10,89,12,89,1717,9,89,1,89,1,
        89,3,89,1721,8,89,5,89,1723,8,89,10,89,12,89,1726,9,89,1,89,1,89,
        1,90,1,90,1,90,1,90,3,90,1734,8,90,1,91,1,91,1,91,1,91,3,91,1740,
        8,91,1,92,1,92,1,92,1,92,1,92,1,92,3,92,1748,8,92,1,92,1,92,3,92,
        1752,8,92,1,92,1,92,3,92,1756,8,92,1,92,1,92,3,92,1760,8,92,1,92,
        1,92,1,92,1,92,1,92,3,92,1767,8,92,1,92,1,92,3,92,1771,8,92,1,92,
        1,92,3,92,1775,8,92,1,92,1,92,3,92,1779,8,92,1,92,3,92,1782,8,92,
        1,92,3,92,1785,8,92,1,93,1,93,1,93,1,93,1,93,3,93,1792,8,93,1,93,
        1,93,1,94,1,94,3,94,1798,8,94,1,94,1,94,3,94,1802,8,94,1,94,5,94,
        1805,8,94,10,94,12,94,1808,9,94,1,95,1,95,1,95,1,95,3,95,1814,8,
        95,1,95,3,95,1817,8,95,1,95,3,95,1820,8,95,1,95,1,95,1,95,3,95,1825,
        8,95,1,96,1,96,3,96,1829,8,96,1,96,1,96,3,96,1833,8,96,1,96,1,96,
        1,96,3,96,1838,8,96,1,96,1,96,3,96,1842,8,96,1,97,1,97,1,97,1,97,
        1,98,1,98,1,98,3,98,1851,8,98,1,98,1,98,3,98,1855,8,98,1,98,1,98,
        1,98,3,98,1860,8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
        1,98,4,98,1872,8,98,11,98,12,98,1873,5,98,1876,8,98,10,98,12,98,
        1879,9,98,1,99,1,99,3,99,1883,8,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,100,1,100,3,100,1893,8,100,1,100,1,100,1,101,1,101,3,101,1899,
        8,101,1,101,1,101,1,101,5,101,1904,8,101,10,101,12,101,1907,9,101,
        1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,3,102,
        1919,8,102,1,103,1,103,3,103,1923,8,103,1,103,1,103,3,103,1927,8,
        103,1,103,1,103,3,103,1931,8,103,1,103,5,103,1934,8,103,10,103,12,
        103,1937,9,103,1,103,1,103,3,103,1941,8,103,1,103,1,103,3,103,1945,
        8,103,1,103,1,103,3,103,1949,8,103,1,103,1,103,3,103,1953,8,103,
        1,104,1,104,3,104,1957,8,104,1,104,1,104,3,104,1961,8,104,1,104,
        1,104,1,105,1,105,3,105,1967,8,105,1,105,1,105,3,105,1971,8,105,
        1,105,1,105,3,105,1975,8,105,1,105,1,105,3,105,1979,8,105,1,105,
        5,105,1982,8,105,10,105,12,105,1985,9,105,1,106,1,106,1,106,3,106,
        1990,8,106,1,106,3,106,1993,8,106,1,107,1,107,1,107,1,108,3,108,
        1999,8,108,1,108,3,108,2002,8,108,1,108,1,108,1,108,1,108,3,108,
        2008,8,108,1,108,1,108,3,108,2012,8,108,1,108,1,108,3,108,2016,8,
        108,1,109,1,109,3,109,2020,8,109,1,109,1,109,3,109,2024,8,109,1,
        109,5,109,2027,8,109,10,109,12,109,2030,9,109,1,109,1,109,3,109,
        2034,8,109,1,109,1,109,3,109,2038,8,109,1,109,5,109,2041,8,109,10,
        109,12,109,2044,9,109,3,109,2046,8,109,1,110,1,110,1,110,1,110,1,
        110,1,110,1,110,3,110,2055,8,110,1,111,1,111,1,111,1,111,1,111,1,
        111,1,111,3,111,2064,8,111,1,111,5,111,2067,8,111,10,111,12,111,
        2070,9,111,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,114,
        1,114,3,114,2082,8,114,1,114,3,114,2085,8,114,1,115,1,115,1,115,
        1,115,1,116,1,116,3,116,2093,8,116,1,116,1,116,3,116,2097,8,116,
        1,116,5,116,2100,8,116,10,116,12,116,2103,9,116,1,117,1,117,3,117,
        2107,8,117,1,117,1,117,3,117,2111,8,117,1,117,1,117,1,117,3,117,
        2116,8,117,1,118,1,118,1,119,1,119,3,119,2122,8,119,1,119,5,119,
        2125,8,119,10,119,12,119,2128,9,119,1,119,1,119,1,119,1,119,3,119,
        2134,8,119,1,120,1,120,3,120,2138,8,120,1,120,1,120,3,120,2142,8,
        120,3,120,2144,8,120,1,120,1,120,3,120,2148,8,120,3,120,2150,8,120,
        1,120,1,120,3,120,2154,8,120,3,120,2156,8,120,1,120,1,120,1,121,
        1,121,3,121,2162,8,121,1,121,1,121,1,122,1,122,3,122,2168,8,122,
        1,122,1,122,3,122,2172,8,122,1,122,3,122,2175,8,122,1,122,3,122,
        2178,8,122,1,122,1,122,1,122,1,122,3,122,2184,8,122,1,122,3,122,
        2187,8,122,1,122,3,122,2190,8,122,1,122,1,122,3,122,2194,8,122,1,
        122,1,122,1,122,1,122,3,122,2200,8,122,1,122,3,122,2203,8,122,1,
        122,3,122,2206,8,122,1,122,1,122,3,122,2210,8,122,1,123,1,123,3,
        123,2214,8,123,1,123,1,123,3,123,2218,8,123,3,123,2220,8,123,1,123,
        1,123,3,123,2224,8,123,3,123,2226,8,123,1,123,1,123,3,123,2230,8,
        123,3,123,2232,8,123,1,123,1,123,3,123,2236,8,123,3,123,2238,8,123,
        1,123,1,123,1,124,1,124,3,124,2244,8,124,1,124,1,124,3,124,2248,
        8,124,1,124,1,124,3,124,2252,8,124,1,124,1,124,3,124,2256,8,124,
        1,124,1,124,3,124,2260,8,124,1,124,1,124,3,124,2264,8,124,1,124,
        1,124,3,124,2268,8,124,1,124,1,124,3,124,2272,8,124,5,124,2274,8,
        124,10,124,12,124,2277,9,124,3,124,2279,8,124,1,124,1,124,1,125,
        1,125,3,125,2285,8,125,1,125,1,125,3,125,2289,8,125,1,125,1,125,
        3,125,2293,8,125,1,125,3,125,2296,8,125,1,125,5,125,2299,8,125,10,
        125,12,125,2302,9,125,1,126,1,126,3,126,2306,8,126,1,126,1,126,3,
        126,2310,8,126,1,126,1,126,3,126,2314,8,126,1,126,3,126,2317,8,126,
        1,126,3,126,2320,8,126,1,126,5,126,2323,8,126,10,126,12,126,2326,
        9,126,1,127,1,127,3,127,2330,8,127,1,127,3,127,2333,8,127,1,127,
        3,127,2336,8,127,1,127,3,127,2339,8,127,1,127,3,127,2342,8,127,1,
        127,3,127,2345,8,127,1,128,1,128,3,128,2349,8,128,1,128,1,128,3,
        128,2353,8,128,1,128,1,128,3,128,2357,8,128,1,128,1,128,3,128,2361,
        8,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,3,128,2371,
        8,128,1,129,3,129,2374,8,129,1,129,3,129,2377,8,129,1,129,1,129,
        3,129,2381,8,129,1,129,3,129,2384,8,129,1,129,3,129,2387,8,129,1,
        130,1,130,3,130,2391,8,130,1,130,1,130,3,130,2395,8,130,1,130,1,
        130,3,130,2399,8,130,1,130,1,130,3,130,2403,8,130,1,130,1,130,3,
        130,2407,8,130,1,130,1,130,3,130,2411,8,130,3,130,2413,8,130,1,130,
        3,130,2416,8,130,1,130,1,130,3,130,2420,8,130,1,130,1,130,3,130,
        2424,8,130,1,130,1,130,3,130,2428,8,130,1,130,1,130,3,130,2432,8,
        130,3,130,2434,8,130,1,130,1,130,1,131,1,131,3,131,2440,8,131,1,
        131,3,131,2443,8,131,1,131,3,131,2446,8,131,1,131,1,131,1,132,1,
        132,1,133,1,133,1,134,1,134,1,134,3,134,2457,8,134,1,135,1,135,1,
        136,1,136,1,137,1,137,1,137,1,137,1,137,5,137,2468,8,137,10,137,
        12,137,2471,9,137,1,138,1,138,1,138,1,138,1,138,5,138,2478,8,138,
        10,138,12,138,2481,9,138,1,139,1,139,1,139,1,139,1,139,5,139,2488,
        8,139,10,139,12,139,2491,9,139,1,140,1,140,3,140,2495,8,140,5,140,
        2497,8,140,10,140,12,140,2500,9,140,1,140,1,140,1,141,1,141,3,141,
        2506,8,141,1,141,1,141,3,141,2510,8,141,1,141,1,141,3,141,2514,8,
        141,1,141,1,141,3,141,2518,8,141,1,141,1,141,3,141,2522,8,141,1,
        141,1,141,1,141,1,141,1,141,1,141,3,141,2530,8,141,1,141,1,141,3,
        141,2534,8,141,1,141,1,141,3,141,2538,8,141,1,141,1,141,3,141,2542,
        8,141,1,141,1,141,4,141,2546,8,141,11,141,12,141,2547,1,141,1,141,
        3,141,2552,8,141,1,142,1,142,1,143,1,143,3,143,2558,8,143,1,143,
        1,143,3,143,2562,8,143,1,143,5,143,2565,8,143,10,143,12,143,2568,
        9,143,1,144,1,144,3,144,2572,8,144,1,144,1,144,3,144,2576,8,144,
        1,144,5,144,2579,8,144,10,144,12,144,2582,9,144,1,145,1,145,3,145,
        2586,8,145,1,145,1,145,3,145,2590,8,145,1,145,1,145,5,145,2594,8,
        145,10,145,12,145,2597,9,145,1,146,1,146,1,147,1,147,3,147,2603,
        8,147,1,147,1,147,3,147,2607,8,147,1,147,1,147,5,147,2611,8,147,
        10,147,12,147,2614,9,147,1,148,1,148,1,149,1,149,3,149,2620,8,149,
        1,149,1,149,3,149,2624,8,149,1,149,1,149,5,149,2628,8,149,10,149,
        12,149,2631,9,149,1,150,1,150,1,151,1,151,3,151,2637,8,151,1,151,
        1,151,3,151,2641,8,151,1,151,5,151,2644,8,151,10,151,12,151,2647,
        9,151,1,152,1,152,1,152,4,152,2652,8,152,11,152,12,152,2653,1,152,
        3,152,2657,8,152,1,153,1,153,1,153,3,153,2662,8,153,1,153,1,153,
        1,153,1,153,1,153,1,153,1,153,3,153,2671,8,153,1,153,1,153,3,153,
        2675,8,153,1,153,3,153,2678,8,153,1,154,1,154,1,154,1,154,1,154,
        1,154,1,154,1,154,1,154,1,154,1,154,3,154,2691,8,154,1,154,3,154,
        2694,8,154,1,154,1,154,1,155,3,155,2699,8,155,1,155,1,155,1,156,
        1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,156,3,156,2713,
        8,156,1,157,1,157,3,157,2717,8,157,5,157,2719,8,157,10,157,12,157,
        2722,9,157,1,157,1,157,3,157,2726,8,157,1,157,3,157,2729,8,157,1,
        158,1,158,3,158,2733,8,158,1,158,5,158,2736,8,158,10,158,12,158,
        2739,9,158,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,
        3,159,2750,8,159,1,160,1,160,3,160,2754,8,160,1,160,1,160,3,160,
        2758,8,160,1,160,1,160,3,160,2762,8,160,1,160,1,160,1,160,1,160,
        3,160,2768,8,160,1,160,1,160,3,160,2772,8,160,1,160,1,160,3,160,
        2776,8,160,1,160,1,160,1,160,1,160,3,160,2782,8,160,1,160,1,160,
        3,160,2786,8,160,1,160,1,160,3,160,2790,8,160,1,160,1,160,1,160,
        1,160,3,160,2796,8,160,1,160,1,160,3,160,2800,8,160,1,160,1,160,
        3,160,2804,8,160,1,160,1,160,3,160,2808,8,160,1,161,1,161,1,161,
        1,161,1,162,1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,
        1,163,1,163,3,163,2826,8,163,1,164,1,164,1,165,1,165,3,165,2832,
        8,165,1,165,1,165,3,165,2836,8,165,1,165,1,165,3,165,2840,8,165,
        5,165,2842,8,165,10,165,12,165,2845,9,165,3,165,2847,8,165,1,165,
        1,165,1,166,1,166,3,166,2853,8,166,1,166,3,166,2856,8,166,1,167,
        1,167,3,167,2860,8,167,1,167,1,167,3,167,2864,8,167,1,167,1,167,
        3,167,2868,8,167,1,167,1,167,3,167,2872,8,167,5,167,2874,8,167,10,
        167,12,167,2877,9,167,1,167,1,167,1,168,1,168,3,168,2883,8,168,1,
        168,3,168,2886,8,168,1,168,1,168,3,168,2890,8,168,1,168,1,168,1,
        169,1,169,3,169,2896,8,169,1,169,1,169,3,169,2900,8,169,1,169,1,
        169,1,170,1,170,3,170,2906,8,170,1,170,1,170,3,170,2910,8,170,1,
        170,1,170,3,170,2914,8,170,1,170,1,170,1,170,3,170,2919,8,170,1,
        170,1,170,3,170,2923,8,170,1,170,1,170,3,170,2927,8,170,1,170,1,
        170,3,170,2931,8,170,1,170,1,170,1,170,3,170,2936,8,170,1,170,3,
        170,2939,8,170,1,170,3,170,2942,8,170,1,170,1,170,1,170,1,170,3,
        170,2948,8,170,1,170,1,170,3,170,2952,8,170,1,170,1,170,3,170,2956,
        8,170,3,170,2958,8,170,1,170,1,170,3,170,2962,8,170,1,170,1,170,
        3,170,2966,8,170,1,170,1,170,3,170,2970,8,170,5,170,2972,8,170,10,
        170,12,170,2975,9,170,3,170,2977,8,170,1,170,1,170,3,170,2981,8,
        170,1,171,1,171,1,172,1,172,3,172,2987,8,172,1,172,1,172,1,172,3,
        172,2992,8,172,3,172,2994,8,172,1,172,1,172,3,172,2998,8,172,1,173,
        1,173,3,173,3002,8,173,1,173,1,173,1,173,3,173,3007,8,173,1,173,
        1,173,3,173,3011,8,173,1,174,1,174,1,174,3,174,3016,8,174,1,174,
        1,174,3,174,3020,8,174,1,174,1,174,3,174,3024,8,174,1,174,1,174,
        3,174,3028,8,174,5,174,3030,8,174,10,174,12,174,3033,9,174,1,174,
        1,174,3,174,3037,8,174,1,175,1,175,3,175,3041,8,175,1,175,4,175,
        3044,8,175,11,175,12,175,3045,1,176,1,176,3,176,3050,8,176,1,176,
        1,176,3,176,3054,8,176,1,176,1,176,3,176,3058,8,176,1,176,1,176,
        3,176,3062,8,176,1,176,3,176,3065,8,176,1,176,3,176,3068,8,176,1,
        176,3,176,3071,8,176,1,176,3,176,3074,8,176,1,176,1,176,1,177,1,
        177,3,177,3080,8,177,1,177,1,177,3,177,3084,8,177,1,178,1,178,3,
        178,3088,8,178,1,178,4,178,3091,8,178,11,178,12,178,3092,1,178,1,
        178,3,178,3097,8,178,1,178,1,178,3,178,3101,8,178,1,178,4,178,3104,
        8,178,11,178,12,178,3105,3,178,3108,8,178,1,178,3,178,3111,8,178,
        1,178,1,178,3,178,3115,8,178,1,178,3,178,3118,8,178,1,178,3,178,
        3121,8,178,1,178,1,178,1,179,1,179,3,179,3127,8,179,1,179,1,179,
        3,179,3131,8,179,1,179,1,179,3,179,3135,8,179,1,179,1,179,1,180,
        1,180,1,181,1,181,3,181,3143,8,181,1,182,1,182,1,182,3,182,3148,
        8,182,1,183,1,183,3,183,3152,8,183,1,183,1,183,1,184,1,184,1,185,
        1,185,1,186,1,186,1,187,1,187,1,187,3,187,3165,8,187,1,188,1,188,
        1,188,1,188,1,188,3,188,3172,8,188,1,189,1,189,1,190,1,190,1,191,
        1,191,1,192,1,192,1,192,0,2,142,196,193,0,2,4,6,8,10,12,14,16,18,
        20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
        64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
        106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,
        138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,
        170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,
        202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,
        234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,
        266,268,270,272,274,276,278,280,282,284,286,288,290,292,294,296,
        298,300,302,304,306,308,310,312,314,316,318,320,322,324,326,328,
        330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,
        362,364,366,368,370,372,374,376,378,380,382,384,0,15,4,0,92,92,108,
        108,134,134,141,141,2,0,53,53,75,75,2,0,53,54,75,76,2,0,6,6,12,16,
        1,0,18,19,2,0,20,20,171,171,2,0,21,22,166,166,1,0,169,170,2,0,87,
        87,146,146,2,0,68,68,83,83,1,0,182,183,32,0,47,47,49,50,52,52,55,
        58,61,61,63,64,66,68,70,71,74,74,77,77,79,79,84,86,88,89,92,92,96,
        96,98,98,100,100,102,102,104,107,109,112,114,115,127,132,134,135,
        138,138,140,140,143,143,145,145,147,147,150,152,156,156,160,165,
        167,167,2,0,13,13,26,29,2,0,15,15,30,33,2,0,34,44,171,171,3606,0,
        386,1,0,0,0,2,406,1,0,0,0,4,444,1,0,0,0,6,446,1,0,0,0,8,472,1,0,
        0,0,10,520,1,0,0,0,12,522,1,0,0,0,14,552,1,0,0,0,16,582,1,0,0,0,
        18,602,1,0,0,0,20,608,1,0,0,0,22,664,1,0,0,0,24,666,1,0,0,0,26,676,
        1,0,0,0,28,690,1,0,0,0,30,694,1,0,0,0,32,698,1,0,0,0,34,707,1,0,
        0,0,36,713,1,0,0,0,38,733,1,0,0,0,40,735,1,0,0,0,42,747,1,0,0,0,
        44,790,1,0,0,0,46,804,1,0,0,0,48,848,1,0,0,0,50,850,1,0,0,0,52,856,
        1,0,0,0,54,914,1,0,0,0,56,985,1,0,0,0,58,1028,1,0,0,0,60,1030,1,
        0,0,0,62,1050,1,0,0,0,64,1068,1,0,0,0,66,1086,1,0,0,0,68,1100,1,
        0,0,0,70,1111,1,0,0,0,72,1125,1,0,0,0,74,1133,1,0,0,0,76,1150,1,
        0,0,0,78,1167,1,0,0,0,80,1169,1,0,0,0,82,1176,1,0,0,0,84,1189,1,
        0,0,0,86,1200,1,0,0,0,88,1220,1,0,0,0,90,1231,1,0,0,0,92,1233,1,
        0,0,0,94,1246,1,0,0,0,96,1250,1,0,0,0,98,1274,1,0,0,0,100,1276,1,
        0,0,0,102,1286,1,0,0,0,104,1301,1,0,0,0,106,1303,1,0,0,0,108,1317,
        1,0,0,0,110,1321,1,0,0,0,112,1330,1,0,0,0,114,1336,1,0,0,0,116,1344,
        1,0,0,0,118,1353,1,0,0,0,120,1362,1,0,0,0,122,1393,1,0,0,0,124,1397,
        1,0,0,0,126,1411,1,0,0,0,128,1415,1,0,0,0,130,1429,1,0,0,0,132,1440,
        1,0,0,0,134,1456,1,0,0,0,136,1470,1,0,0,0,138,1484,1,0,0,0,140,1506,
        1,0,0,0,142,1534,1,0,0,0,144,1543,1,0,0,0,146,1550,1,0,0,0,148,1558,
        1,0,0,0,150,1560,1,0,0,0,152,1565,1,0,0,0,154,1580,1,0,0,0,156,1586,
        1,0,0,0,158,1588,1,0,0,0,160,1600,1,0,0,0,162,1611,1,0,0,0,164,1615,
        1,0,0,0,166,1619,1,0,0,0,168,1642,1,0,0,0,170,1656,1,0,0,0,172,1660,
        1,0,0,0,174,1697,1,0,0,0,176,1703,1,0,0,0,178,1715,1,0,0,0,180,1733,
        1,0,0,0,182,1739,1,0,0,0,184,1741,1,0,0,0,186,1791,1,0,0,0,188,1795,
        1,0,0,0,190,1809,1,0,0,0,192,1828,1,0,0,0,194,1843,1,0,0,0,196,1859,
        1,0,0,0,198,1880,1,0,0,0,200,1890,1,0,0,0,202,1896,1,0,0,0,204,1918,
        1,0,0,0,206,1952,1,0,0,0,208,1954,1,0,0,0,210,1966,1,0,0,0,212,1986,
        1,0,0,0,214,1994,1,0,0,0,216,2001,1,0,0,0,218,2045,1,0,0,0,220,2054,
        1,0,0,0,222,2056,1,0,0,0,224,2071,1,0,0,0,226,2075,1,0,0,0,228,2079,
        1,0,0,0,230,2086,1,0,0,0,232,2090,1,0,0,0,234,2115,1,0,0,0,236,2117,
        1,0,0,0,238,2133,1,0,0,0,240,2135,1,0,0,0,242,2159,1,0,0,0,244,2209,
        1,0,0,0,246,2211,1,0,0,0,248,2241,1,0,0,0,250,2282,1,0,0,0,252,2303,
        1,0,0,0,254,2327,1,0,0,0,256,2370,1,0,0,0,258,2386,1,0,0,0,260,2388,
        1,0,0,0,262,2437,1,0,0,0,264,2449,1,0,0,0,266,2451,1,0,0,0,268,2453,
        1,0,0,0,270,2458,1,0,0,0,272,2460,1,0,0,0,274,2462,1,0,0,0,276,2472,
        1,0,0,0,278,2482,1,0,0,0,280,2498,1,0,0,0,282,2551,1,0,0,0,284,2553,
        1,0,0,0,286,2555,1,0,0,0,288,2569,1,0,0,0,290,2583,1,0,0,0,292,2598,
        1,0,0,0,294,2600,1,0,0,0,296,2615,1,0,0,0,298,2617,1,0,0,0,300,2632,
        1,0,0,0,302,2634,1,0,0,0,304,2648,1,0,0,0,306,2677,1,0,0,0,308,2690,
        1,0,0,0,310,2698,1,0,0,0,312,2712,1,0,0,0,314,2720,1,0,0,0,316,2730,
        1,0,0,0,318,2749,1,0,0,0,320,2807,1,0,0,0,322,2809,1,0,0,0,324,2813,
        1,0,0,0,326,2825,1,0,0,0,328,2827,1,0,0,0,330,2829,1,0,0,0,332,2850,
        1,0,0,0,334,2857,1,0,0,0,336,2882,1,0,0,0,338,2893,1,0,0,0,340,2980,
        1,0,0,0,342,2982,1,0,0,0,344,2997,1,0,0,0,346,2999,1,0,0,0,348,3036,
        1,0,0,0,350,3038,1,0,0,0,352,3047,1,0,0,0,354,3077,1,0,0,0,356,3107,
        1,0,0,0,358,3124,1,0,0,0,360,3138,1,0,0,0,362,3142,1,0,0,0,364,3144,
        1,0,0,0,366,3149,1,0,0,0,368,3155,1,0,0,0,370,3157,1,0,0,0,372,3159,
        1,0,0,0,374,3161,1,0,0,0,376,3171,1,0,0,0,378,3173,1,0,0,0,380,3175,
        1,0,0,0,382,3177,1,0,0,0,384,3179,1,0,0,0,386,397,3,2,1,0,387,389,
        5,188,0,0,388,387,1,0,0,0,388,389,1,0,0,0,389,390,1,0,0,0,390,392,
        5,1,0,0,391,393,5,188,0,0,392,391,1,0,0,0,392,393,1,0,0,0,393,394,
        1,0,0,0,394,396,3,2,1,0,395,388,1,0,0,0,396,399,1,0,0,0,397,395,
        1,0,0,0,397,398,1,0,0,0,398,401,1,0,0,0,399,397,1,0,0,0,400,402,
        5,188,0,0,401,400,1,0,0,0,401,402,1,0,0,0,402,403,1,0,0,0,403,404,
        5,0,0,1,404,1,1,0,0,0,405,407,3,148,74,0,406,405,1,0,0,0,406,407,
        1,0,0,0,407,409,1,0,0,0,408,410,5,188,0,0,409,408,1,0,0,0,409,410,
        1,0,0,0,410,411,1,0,0,0,411,416,3,4,2,0,412,414,5,188,0,0,413,412,
        1,0,0,0,413,414,1,0,0,0,414,415,1,0,0,0,415,417,5,1,0,0,416,413,
        1,0,0,0,416,417,1,0,0,0,417,3,1,0,0,0,418,445,3,166,83,0,419,445,
        3,36,18,0,420,445,3,82,41,0,421,445,3,84,42,0,422,445,3,52,26,0,
        423,445,3,54,27,0,424,445,3,56,28,0,425,445,3,74,37,0,426,445,3,
        76,38,0,427,445,3,98,49,0,428,445,3,102,51,0,429,445,3,6,3,0,430,
        445,3,12,6,0,431,445,3,14,7,0,432,445,3,38,19,0,433,445,3,42,21,
        0,434,445,3,40,20,0,435,445,3,154,77,0,436,445,3,156,78,0,437,445,
        3,16,8,0,438,445,3,18,9,0,439,445,3,20,10,0,440,445,3,28,14,0,441,
        445,3,30,15,0,442,445,3,32,16,0,443,445,3,34,17,0,444,418,1,0,0,
        0,444,419,1,0,0,0,444,420,1,0,0,0,444,421,1,0,0,0,444,422,1,0,0,
        0,444,423,1,0,0,0,444,424,1,0,0,0,444,425,1,0,0,0,444,426,1,0,0,
        0,444,427,1,0,0,0,444,428,1,0,0,0,444,429,1,0,0,0,444,430,1,0,0,
        0,444,431,1,0,0,0,444,432,1,0,0,0,444,433,1,0,0,0,444,434,1,0,0,
        0,444,435,1,0,0,0,444,436,1,0,0,0,444,437,1,0,0,0,444,438,1,0,0,
        0,444,439,1,0,0,0,444,440,1,0,0,0,444,441,1,0,0,0,444,442,1,0,0,
        0,444,443,1,0,0,0,445,5,1,0,0,0,446,447,5,67,0,0,447,448,5,188,0,
        0,448,450,3,374,187,0,449,451,3,8,4,0,450,449,1,0,0,0,450,451,1,
        0,0,0,451,452,1,0,0,0,452,453,5,188,0,0,453,454,5,88,0,0,454,455,
        5,188,0,0,455,469,3,10,5,0,456,458,5,188,0,0,457,456,1,0,0,0,457,
        458,1,0,0,0,458,459,1,0,0,0,459,461,5,2,0,0,460,462,5,188,0,0,461,
        460,1,0,0,0,461,462,1,0,0,0,462,463,1,0,0,0,463,465,3,26,13,0,464,
        466,5,188,0,0,465,464,1,0,0,0,465,466,1,0,0,0,466,467,1,0,0,0,467,
        468,5,3,0,0,468,470,1,0,0,0,469,457,1,0,0,0,469,470,1,0,0,0,470,
        7,1,0,0,0,471,473,5,188,0,0,472,471,1,0,0,0,472,473,1,0,0,0,473,
        474,1,0,0,0,474,476,5,2,0,0,475,477,5,188,0,0,476,475,1,0,0,0,476,
        477,1,0,0,0,477,495,1,0,0,0,478,489,3,374,187,0,479,481,5,188,0,
        0,480,479,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,484,5,4,0,
        0,483,485,5,188,0,0,484,483,1,0,0,0,484,485,1,0,0,0,485,486,1,0,
        0,0,486,488,3,374,187,0,487,480,1,0,0,0,488,491,1,0,0,0,489,487,
        1,0,0,0,489,490,1,0,0,0,490,493,1,0,0,0,491,489,1,0,0,0,492,494,
        5,188,0,0,493,492,1,0,0,0,493,494,1,0,0,0,494,496,1,0,0,0,495,478,
        1,0,0,0,495,496,1,0,0,0,496,497,1,0,0,0,497,498,5,3,0,0,498,9,1,
        0,0,0,499,521,3,48,24,0,500,502,5,2,0,0,501,503,5,188,0,0,502,501,
        1,0,0,0,502,503,1,0,0,0,503,504,1,0,0,0,504,506,3,166,83,0,505,507,
        5,188,0,0,506,505,1,0,0,0,506,507,1,0,0,0,507,508,1,0,0,0,508,509,
        5,3,0,0,509,521,1,0,0,0,510,521,3,364,182,0,511,521,3,360,180,0,
        512,513,3,360,180,0,513,515,5,5,0,0,514,516,5,188,0,0,515,514,1,
        0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,518,3,374,187,0,518,521,
        1,0,0,0,519,521,3,340,170,0,520,499,1,0,0,0,520,500,1,0,0,0,520,
        510,1,0,0,0,520,511,1,0,0,0,520,512,1,0,0,0,520,519,1,0,0,0,521,
        11,1,0,0,0,522,523,5,67,0,0,523,524,5,188,0,0,524,525,3,374,187,
        0,525,526,5,188,0,0,526,527,5,88,0,0,527,528,5,188,0,0,528,530,5,
        2,0,0,529,531,5,188,0,0,530,529,1,0,0,0,530,531,1,0,0,0,531,532,
        1,0,0,0,532,543,5,173,0,0,533,535,5,188,0,0,534,533,1,0,0,0,534,
        535,1,0,0,0,535,536,1,0,0,0,536,538,5,4,0,0,537,539,5,188,0,0,538,
        537,1,0,0,0,538,539,1,0,0,0,539,540,1,0,0,0,540,542,5,173,0,0,541,
        534,1,0,0,0,542,545,1,0,0,0,543,541,1,0,0,0,543,544,1,0,0,0,544,
        546,1,0,0,0,545,543,1,0,0,0,546,547,5,3,0,0,547,548,5,188,0,0,548,
        549,5,57,0,0,549,550,5,188,0,0,550,551,5,62,0,0,551,13,1,0,0,0,552,
        553,5,67,0,0,553,554,5,188,0,0,554,556,5,2,0,0,555,557,5,188,0,0,
        556,555,1,0,0,0,556,557,1,0,0,0,557,558,1,0,0,0,558,560,3,166,83,
        0,559,561,5,188,0,0,560,559,1,0,0,0,560,561,1,0,0,0,561,562,1,0,
        0,0,562,563,5,3,0,0,563,564,5,188,0,0,564,565,5,143,0,0,565,566,
        5,188,0,0,566,580,5,173,0,0,567,569,5,188,0,0,568,567,1,0,0,0,568,
        569,1,0,0,0,569,570,1,0,0,0,570,572,5,2,0,0,571,573,5,188,0,0,572,
        571,1,0,0,0,572,573,1,0,0,0,573,574,1,0,0,0,574,576,3,26,13,0,575,
        577,5,188,0,0,576,575,1,0,0,0,576,577,1,0,0,0,577,578,1,0,0,0,578,
        579,5,3,0,0,579,581,1,0,0,0,580,568,1,0,0,0,580,581,1,0,0,0,581,
        15,1,0,0,0,582,583,5,85,0,0,583,584,5,188,0,0,584,585,5,71,0,0,585,
        586,5,188,0,0,586,600,5,173,0,0,587,589,5,188,0,0,588,587,1,0,0,
        0,588,589,1,0,0,0,589,590,1,0,0,0,590,592,5,2,0,0,591,593,5,188,
        0,0,592,591,1,0,0,0,592,593,1,0,0,0,593,594,1,0,0,0,594,596,3,26,
        13,0,595,597,5,188,0,0,596,595,1,0,0,0,596,597,1,0,0,0,597,598,1,
        0,0,0,598,599,5,3,0,0,599,601,1,0,0,0,600,588,1,0,0,0,600,601,1,
        0,0,0,601,17,1,0,0,0,602,603,5,96,0,0,603,604,5,188,0,0,604,605,
        5,71,0,0,605,606,5,188,0,0,606,607,5,173,0,0,607,19,1,0,0,0,608,
        609,5,55,0,0,609,610,5,188,0,0,610,615,5,173,0,0,611,612,5,188,0,
        0,612,613,5,52,0,0,613,614,5,188,0,0,614,616,3,374,187,0,615,611,
        1,0,0,0,615,616,1,0,0,0,616,617,1,0,0,0,617,618,5,188,0,0,618,620,
        5,2,0,0,619,621,5,188,0,0,620,619,1,0,0,0,620,621,1,0,0,0,621,622,
        1,0,0,0,622,623,5,72,0,0,623,624,5,188,0,0,624,633,3,376,188,0,625,
        627,5,188,0,0,626,625,1,0,0,0,626,627,1,0,0,0,627,628,1,0,0,0,628,
        630,5,4,0,0,629,631,5,188,0,0,630,629,1,0,0,0,630,631,1,0,0,0,631,
        632,1,0,0,0,632,634,3,26,13,0,633,626,1,0,0,0,633,634,1,0,0,0,634,
        636,1,0,0,0,635,637,5,188,0,0,636,635,1,0,0,0,636,637,1,0,0,0,637,
        638,1,0,0,0,638,639,5,3,0,0,639,21,1,0,0,0,640,654,3,376,188,0,641,
        643,5,188,0,0,642,641,1,0,0,0,642,643,1,0,0,0,643,644,1,0,0,0,644,
        646,5,6,0,0,645,647,5,188,0,0,646,645,1,0,0,0,646,647,1,0,0,0,647,
        655,1,0,0,0,648,650,5,188,0,0,649,648,1,0,0,0,650,653,1,0,0,0,651,
        649,1,0,0,0,651,652,1,0,0,0,652,655,1,0,0,0,653,651,1,0,0,0,654,
        642,1,0,0,0,654,651,1,0,0,0,655,656,1,0,0,0,656,661,3,326,163,0,
        657,659,5,188,0,0,658,657,1,0,0,0,658,659,1,0,0,0,659,660,1,0,0,
        0,660,662,3,24,12,0,661,658,1,0,0,0,661,662,1,0,0,0,662,665,1,0,
        0,0,663,665,3,376,188,0,664,640,1,0,0,0,664,663,1,0,0,0,665,23,1,
        0,0,0,666,668,5,2,0,0,667,669,5,188,0,0,668,667,1,0,0,0,668,669,
        1,0,0,0,669,670,1,0,0,0,670,672,3,376,188,0,671,673,5,188,0,0,672,
        671,1,0,0,0,672,673,1,0,0,0,673,674,1,0,0,0,674,675,5,3,0,0,675,
        25,1,0,0,0,676,687,3,22,11,0,677,679,5,188,0,0,678,677,1,0,0,0,678,
        679,1,0,0,0,679,680,1,0,0,0,680,682,5,4,0,0,681,683,5,188,0,0,682,
        681,1,0,0,0,682,683,1,0,0,0,683,684,1,0,0,0,684,686,3,22,11,0,685,
        678,1,0,0,0,686,689,1,0,0,0,687,685,1,0,0,0,687,688,1,0,0,0,688,
        27,1,0,0,0,689,687,1,0,0,0,690,691,5,77,0,0,691,692,5,188,0,0,692,
        693,3,374,187,0,693,29,1,0,0,0,694,695,5,152,0,0,695,696,5,188,0,
        0,696,697,3,374,187,0,697,31,1,0,0,0,698,699,5,69,0,0,699,700,5,
        188,0,0,700,701,5,92,0,0,701,702,5,188,0,0,702,705,3,374,187,0,703,
        704,5,188,0,0,704,706,5,46,0,0,705,703,1,0,0,0,705,706,1,0,0,0,706,
        33,1,0,0,0,707,708,5,152,0,0,708,709,5,188,0,0,709,710,5,92,0,0,
        710,711,5,188,0,0,711,712,3,374,187,0,712,35,1,0,0,0,713,716,5,50,
        0,0,714,715,5,188,0,0,715,717,3,374,187,0,716,714,1,0,0,0,716,717,
        1,0,0,0,717,37,1,0,0,0,718,719,5,58,0,0,719,720,5,188,0,0,720,722,
        3,376,188,0,721,723,5,188,0,0,722,721,1,0,0,0,722,723,1,0,0,0,723,
        724,1,0,0,0,724,726,5,6,0,0,725,727,5,188,0,0,726,725,1,0,0,0,726,
        727,1,0,0,0,727,728,1,0,0,0,728,729,3,272,136,0,729,734,1,0,0,0,
        730,731,5,58,0,0,731,732,5,188,0,0,732,734,3,340,170,0,733,718,1,
        0,0,0,733,730,1,0,0,0,734,39,1,0,0,0,735,736,5,63,0,0,736,737,5,
        188,0,0,737,738,5,119,0,0,738,739,5,188,0,0,739,740,5,141,0,0,740,
        741,5,188,0,0,741,742,3,374,187,0,742,743,5,188,0,0,743,744,5,102,
        0,0,744,745,5,188,0,0,745,746,5,173,0,0,746,41,1,0,0,0,747,748,5,
        69,0,0,748,749,5,188,0,0,749,750,5,108,0,0,750,751,5,188,0,0,751,
        753,3,342,171,0,752,754,5,188,0,0,753,752,1,0,0,0,753,754,1,0,0,
        0,754,755,1,0,0,0,755,757,5,2,0,0,756,758,5,188,0,0,757,756,1,0,
        0,0,757,758,1,0,0,0,758,760,1,0,0,0,759,761,3,44,22,0,760,759,1,
        0,0,0,760,761,1,0,0,0,761,763,1,0,0,0,762,764,5,188,0,0,763,762,
        1,0,0,0,763,764,1,0,0,0,764,766,1,0,0,0,765,767,3,46,23,0,766,765,
        1,0,0,0,766,767,1,0,0,0,767,778,1,0,0,0,768,770,5,188,0,0,769,768,
        1,0,0,0,769,770,1,0,0,0,770,771,1,0,0,0,771,773,5,4,0,0,772,774,
        5,188,0,0,773,772,1,0,0,0,773,774,1,0,0,0,774,775,1,0,0,0,775,777,
        3,46,23,0,776,769,1,0,0,0,777,780,1,0,0,0,778,776,1,0,0,0,778,779,
        1,0,0,0,779,782,1,0,0,0,780,778,1,0,0,0,781,783,5,188,0,0,782,781,
        1,0,0,0,782,783,1,0,0,0,783,784,1,0,0,0,784,785,5,3,0,0,785,786,
        5,188,0,0,786,787,5,52,0,0,787,788,5,188,0,0,788,789,3,272,136,0,
        789,43,1,0,0,0,790,801,3,376,188,0,791,793,5,188,0,0,792,791,1,0,
        0,0,792,793,1,0,0,0,793,794,1,0,0,0,794,796,5,4,0,0,795,797,5,188,
        0,0,796,795,1,0,0,0,796,797,1,0,0,0,797,798,1,0,0,0,798,800,3,376,
        188,0,799,792,1,0,0,0,800,803,1,0,0,0,801,799,1,0,0,0,801,802,1,
        0,0,0,802,45,1,0,0,0,803,801,1,0,0,0,804,806,3,376,188,0,805,807,
        5,188,0,0,806,805,1,0,0,0,806,807,1,0,0,0,807,808,1,0,0,0,808,809,
        5,169,0,0,809,811,5,6,0,0,810,812,5,188,0,0,811,810,1,0,0,0,811,
        812,1,0,0,0,812,813,1,0,0,0,813,814,3,326,163,0,814,47,1,0,0,0,815,
        817,5,7,0,0,816,818,5,188,0,0,817,816,1,0,0,0,817,818,1,0,0,0,818,
        819,1,0,0,0,819,830,5,173,0,0,820,822,5,188,0,0,821,820,1,0,0,0,
        821,822,1,0,0,0,822,823,1,0,0,0,823,825,5,4,0,0,824,826,5,188,0,
        0,825,824,1,0,0,0,825,826,1,0,0,0,826,827,1,0,0,0,827,829,5,173,
        0,0,828,821,1,0,0,0,829,832,1,0,0,0,830,828,1,0,0,0,830,831,1,0,
        0,0,831,833,1,0,0,0,832,830,1,0,0,0,833,849,5,8,0,0,834,849,5,173,
        0,0,835,837,5,91,0,0,836,838,5,188,0,0,837,836,1,0,0,0,837,838,1,
        0,0,0,838,839,1,0,0,0,839,841,5,2,0,0,840,842,5,188,0,0,841,840,
        1,0,0,0,841,842,1,0,0,0,842,843,1,0,0,0,843,845,5,173,0,0,844,846,
        5,188,0,0,845,844,1,0,0,0,845,846,1,0,0,0,846,847,1,0,0,0,847,849,
        5,3,0,0,848,815,1,0,0,0,848,834,1,0,0,0,848,835,1,0,0,0,849,49,1,
        0,0,0,850,851,5,98,0,0,851,852,5,188,0,0,852,853,5,116,0,0,853,854,
        5,188,0,0,854,855,5,83,0,0,855,51,1,0,0,0,856,857,5,69,0,0,857,858,
        5,188,0,0,858,859,5,115,0,0,859,860,5,188,0,0,860,861,5,141,0,0,
        861,865,5,188,0,0,862,863,3,50,25,0,863,864,5,188,0,0,864,866,1,
        0,0,0,865,862,1,0,0,0,865,866,1,0,0,0,866,867,1,0,0,0,867,895,3,
        374,187,0,868,870,5,188,0,0,869,868,1,0,0,0,869,870,1,0,0,0,870,
        871,1,0,0,0,871,873,5,2,0,0,872,874,5,188,0,0,873,872,1,0,0,0,873,
        874,1,0,0,0,874,875,1,0,0,0,875,877,3,128,64,0,876,878,5,188,0,0,
        877,876,1,0,0,0,877,878,1,0,0,0,878,884,1,0,0,0,879,881,5,4,0,0,
        880,882,5,188,0,0,881,880,1,0,0,0,881,882,1,0,0,0,882,883,1,0,0,
        0,883,885,3,132,66,0,884,879,1,0,0,0,884,885,1,0,0,0,885,887,1,0,
        0,0,886,888,5,188,0,0,887,886,1,0,0,0,887,888,1,0,0,0,888,889,1,
        0,0,0,889,890,5,3,0,0,890,896,1,0,0,0,891,892,5,188,0,0,892,893,
        5,52,0,0,893,894,5,188,0,0,894,896,3,166,83,0,895,869,1,0,0,0,895,
        891,1,0,0,0,896,912,1,0,0,0,897,898,5,188,0,0,898,900,5,155,0,0,
        899,901,5,188,0,0,900,899,1,0,0,0,900,901,1,0,0,0,901,902,1,0,0,
        0,902,904,5,2,0,0,903,905,5,188,0,0,904,903,1,0,0,0,904,905,1,0,
        0,0,905,906,1,0,0,0,906,908,3,26,13,0,907,909,5,188,0,0,908,907,
        1,0,0,0,908,909,1,0,0,0,909,910,1,0,0,0,910,911,5,3,0,0,911,913,
        1,0,0,0,912,897,1,0,0,0,912,913,1,0,0,0,913,53,1,0,0,0,914,915,5,
        69,0,0,915,916,5,188,0,0,916,917,5,129,0,0,917,918,5,188,0,0,918,
        921,5,141,0,0,919,920,5,188,0,0,920,922,5,93,0,0,921,919,1,0,0,0,
        921,922,1,0,0,0,922,925,1,0,0,0,923,924,5,188,0,0,924,926,3,50,25,
        0,925,923,1,0,0,0,925,926,1,0,0,0,926,927,1,0,0,0,927,928,5,188,
        0,0,928,930,3,374,187,0,929,931,5,188,0,0,930,929,1,0,0,0,930,931,
        1,0,0,0,931,932,1,0,0,0,932,934,5,2,0,0,933,935,5,188,0,0,934,933,
        1,0,0,0,934,935,1,0,0,0,935,936,1,0,0,0,936,938,3,66,33,0,937,939,
        5,188,0,0,938,937,1,0,0,0,938,939,1,0,0,0,939,966,1,0,0,0,940,942,
        5,4,0,0,941,943,5,188,0,0,942,941,1,0,0,0,942,943,1,0,0,0,943,944,
        1,0,0,0,944,946,3,128,64,0,945,947,5,188,0,0,946,945,1,0,0,0,946,
        947,1,0,0,0,947,949,1,0,0,0,948,940,1,0,0,0,948,949,1,0,0,0,949,
        958,1,0,0,0,950,952,5,4,0,0,951,953,5,188,0,0,952,951,1,0,0,0,952,
        953,1,0,0,0,953,954,1,0,0,0,954,956,3,376,188,0,955,957,5,188,0,
        0,956,955,1,0,0,0,956,957,1,0,0,0,957,959,1,0,0,0,958,950,1,0,0,
        0,958,959,1,0,0,0,959,960,1,0,0,0,960,967,5,3,0,0,961,962,5,3,0,
        0,962,963,5,188,0,0,963,964,5,52,0,0,964,965,5,188,0,0,965,967,3,
        166,83,0,966,948,1,0,0,0,966,961,1,0,0,0,967,983,1,0,0,0,968,969,
        5,188,0,0,969,971,5,155,0,0,970,972,5,188,0,0,971,970,1,0,0,0,971,
        972,1,0,0,0,972,973,1,0,0,0,973,975,5,2,0,0,974,976,5,188,0,0,975,
        974,1,0,0,0,975,976,1,0,0,0,976,977,1,0,0,0,977,979,3,26,13,0,978,
        980,5,188,0,0,979,978,1,0,0,0,979,980,1,0,0,0,980,981,1,0,0,0,981,
        982,5,3,0,0,982,984,1,0,0,0,983,968,1,0,0,0,983,984,1,0,0,0,984,
        55,1,0,0,0,985,988,5,69,0,0,986,987,5,188,0,0,987,989,3,376,188,
        0,988,986,1,0,0,0,988,989,1,0,0,0,989,990,1,0,0,0,990,991,5,188,
        0,0,991,994,5,97,0,0,992,993,5,188,0,0,993,995,3,374,187,0,994,992,
        1,0,0,0,994,995,1,0,0,0,995,998,1,0,0,0,996,997,5,188,0,0,997,999,
        3,50,25,0,998,996,1,0,0,0,998,999,1,0,0,0,999,1000,1,0,0,0,1000,
        1001,5,188,0,0,1001,1002,5,90,0,0,1002,1003,5,188,0,0,1003,1004,
        3,58,29,0,1004,1005,5,188,0,0,1005,1006,5,119,0,0,1006,1007,5,188,
        0,0,1007,1024,3,64,32,0,1008,1009,5,188,0,0,1009,1011,5,121,0,0,
        1010,1012,5,188,0,0,1011,1010,1,0,0,0,1011,1012,1,0,0,0,1012,1013,
        1,0,0,0,1013,1015,5,9,0,0,1014,1016,5,188,0,0,1015,1014,1,0,0,0,
        1015,1016,1,0,0,0,1016,1018,1,0,0,0,1017,1019,3,26,13,0,1018,1017,
        1,0,0,0,1018,1019,1,0,0,0,1019,1021,1,0,0,0,1020,1022,5,188,0,0,
        1021,1020,1,0,0,0,1021,1022,1,0,0,0,1022,1023,1,0,0,0,1023,1025,
        5,10,0,0,1024,1008,1,0,0,0,1024,1025,1,0,0,0,1025,57,1,0,0,0,1026,
        1029,3,60,30,0,1027,1029,3,62,31,0,1028,1026,1,0,0,0,1028,1027,1,
        0,0,0,1029,59,1,0,0,0,1030,1032,5,2,0,0,1031,1033,5,188,0,0,1032,
        1031,1,0,0,0,1032,1033,1,0,0,0,1033,1035,1,0,0,0,1034,1036,3,360,
        180,0,1035,1034,1,0,0,0,1035,1036,1,0,0,0,1036,1038,1,0,0,0,1037,
        1039,5,188,0,0,1038,1037,1,0,0,0,1038,1039,1,0,0,0,1039,1040,1,0,
        0,0,1040,1042,5,169,0,0,1041,1043,5,188,0,0,1042,1041,1,0,0,0,1042,
        1043,1,0,0,0,1043,1044,1,0,0,0,1044,1046,3,268,134,0,1045,1047,5,
        188,0,0,1046,1045,1,0,0,0,1046,1047,1,0,0,0,1047,1048,1,0,0,0,1048,
        1049,5,3,0,0,1049,61,1,0,0,0,1050,1052,5,2,0,0,1051,1053,5,188,0,
        0,1052,1051,1,0,0,0,1052,1053,1,0,0,0,1053,1054,1,0,0,0,1054,1056,
        5,3,0,0,1055,1057,5,188,0,0,1056,1055,1,0,0,0,1056,1057,1,0,0,0,
        1057,1058,1,0,0,0,1058,1060,3,244,122,0,1059,1061,5,188,0,0,1060,
        1059,1,0,0,0,1060,1061,1,0,0,0,1061,1062,1,0,0,0,1062,1064,5,2,0,
        0,1063,1065,5,188,0,0,1064,1063,1,0,0,0,1064,1065,1,0,0,0,1065,1066,
        1,0,0,0,1066,1067,5,3,0,0,1067,63,1,0,0,0,1068,1070,5,2,0,0,1069,
        1071,5,188,0,0,1070,1069,1,0,0,0,1070,1071,1,0,0,0,1071,1072,1,0,
        0,0,1072,1074,3,360,180,0,1073,1075,5,188,0,0,1074,1073,1,0,0,0,
        1074,1075,1,0,0,0,1075,1076,1,0,0,0,1076,1078,5,5,0,0,1077,1079,
        5,188,0,0,1078,1077,1,0,0,0,1078,1079,1,0,0,0,1079,1080,1,0,0,0,
        1080,1082,3,368,184,0,1081,1083,5,188,0,0,1082,1081,1,0,0,0,1082,
        1083,1,0,0,0,1083,1084,1,0,0,0,1084,1085,5,3,0,0,1085,65,1,0,0,0,
        1086,1097,3,68,34,0,1087,1089,5,188,0,0,1088,1087,1,0,0,0,1088,1089,
        1,0,0,0,1089,1090,1,0,0,0,1090,1092,5,4,0,0,1091,1093,5,188,0,0,
        1092,1091,1,0,0,0,1092,1093,1,0,0,0,1093,1094,1,0,0,0,1094,1096,
        3,68,34,0,1095,1088,1,0,0,0,1096,1099,1,0,0,0,1097,1095,1,0,0,0,
        1097,1098,1,0,0,0,1098,67,1,0,0,0,1099,1097,1,0,0,0,1100,1101,5,
        88,0,0,1101,1102,5,188,0,0,1102,1103,3,374,187,0,1103,1104,5,188,
        0,0,1104,1105,5,143,0,0,1105,1106,5,188,0,0,1106,1109,3,374,187,
        0,1107,1108,5,188,0,0,1108,1110,3,376,188,0,1109,1107,1,0,0,0,1109,
        1110,1,0,0,0,1110,69,1,0,0,0,1111,1122,3,72,36,0,1112,1114,5,188,
        0,0,1113,1112,1,0,0,0,1113,1114,1,0,0,0,1114,1115,1,0,0,0,1115,1117,
        5,4,0,0,1116,1118,5,188,0,0,1117,1116,1,0,0,0,1117,1118,1,0,0,0,
        1118,1119,1,0,0,0,1119,1121,3,72,36,0,1120,1113,1,0,0,0,1121,1124,
        1,0,0,0,1122,1120,1,0,0,0,1122,1123,1,0,0,0,1123,71,1,0,0,0,1124,
        1122,1,0,0,0,1125,1126,5,88,0,0,1126,1127,5,188,0,0,1127,1128,3,
        374,187,0,1128,1129,5,188,0,0,1129,1130,5,143,0,0,1130,1131,5,188,
        0,0,1131,1132,3,374,187,0,1132,73,1,0,0,0,1133,1134,5,69,0,0,1134,
        1135,5,188,0,0,1135,1136,5,134,0,0,1136,1140,5,188,0,0,1137,1138,
        3,50,25,0,1138,1139,5,188,0,0,1139,1141,1,0,0,0,1140,1137,1,0,0,
        0,1140,1141,1,0,0,0,1141,1142,1,0,0,0,1142,1147,3,374,187,0,1143,
        1144,5,188,0,0,1144,1146,3,78,39,0,1145,1143,1,0,0,0,1146,1149,1,
        0,0,0,1147,1145,1,0,0,0,1147,1148,1,0,0,0,1148,75,1,0,0,0,1149,1147,
        1,0,0,0,1150,1151,5,69,0,0,1151,1152,5,188,0,0,1152,1153,5,147,0,
        0,1153,1154,5,188,0,0,1154,1155,3,374,187,0,1155,1156,5,188,0,0,
        1156,1157,5,52,0,0,1157,1158,5,188,0,0,1158,1160,3,142,71,0,1159,
        1161,5,188,0,0,1160,1159,1,0,0,0,1160,1161,1,0,0,0,1161,77,1,0,0,
        0,1162,1168,3,86,43,0,1163,1168,3,88,44,0,1164,1168,3,90,45,0,1165,
        1168,3,92,46,0,1166,1168,3,94,47,0,1167,1162,1,0,0,0,1167,1163,1,
        0,0,0,1167,1164,1,0,0,0,1167,1165,1,0,0,0,1167,1166,1,0,0,0,1168,
        79,1,0,0,0,1169,1170,5,188,0,0,1170,1171,5,155,0,0,1171,1172,5,188,
        0,0,1172,1173,5,162,0,0,1173,1174,5,188,0,0,1174,1175,5,173,0,0,
        1175,81,1,0,0,0,1176,1177,5,69,0,0,1177,1178,5,188,0,0,1178,1179,
        5,161,0,0,1179,1183,5,188,0,0,1180,1181,3,50,25,0,1181,1182,5,188,
        0,0,1182,1184,1,0,0,0,1183,1180,1,0,0,0,1183,1184,1,0,0,0,1184,1185,
        1,0,0,0,1185,1187,3,360,180,0,1186,1188,3,80,40,0,1187,1186,1,0,
        0,0,1187,1188,1,0,0,0,1188,83,1,0,0,0,1189,1190,5,69,0,0,1190,1191,
        5,188,0,0,1191,1192,5,163,0,0,1192,1196,5,188,0,0,1193,1194,3,50,
        25,0,1194,1195,5,188,0,0,1195,1197,1,0,0,0,1196,1193,1,0,0,0,1196,
        1197,1,0,0,0,1197,1198,1,0,0,0,1198,1199,3,360,180,0,1199,85,1,0,
        0,0,1200,1201,5,100,0,0,1201,1204,5,188,0,0,1202,1203,5,57,0,0,1203,
        1205,5,188,0,0,1204,1202,1,0,0,0,1204,1205,1,0,0,0,1205,1207,1,0,
        0,0,1206,1208,5,171,0,0,1207,1206,1,0,0,0,1207,1208,1,0,0,0,1208,
        1209,1,0,0,0,1209,1210,3,370,185,0,1210,87,1,0,0,0,1211,1212,5,114,
        0,0,1212,1213,5,188,0,0,1213,1221,5,112,0,0,1214,1215,5,112,0,0,
        1215,1217,5,188,0,0,1216,1218,5,171,0,0,1217,1216,1,0,0,0,1217,1218,
        1,0,0,0,1218,1219,1,0,0,0,1219,1221,3,370,185,0,1220,1211,1,0,0,
        0,1220,1214,1,0,0,0,1221,89,1,0,0,0,1222,1223,5,114,0,0,1223,1224,
        5,188,0,0,1224,1232,5,110,0,0,1225,1226,5,110,0,0,1226,1228,5,188,
        0,0,1227,1229,5,171,0,0,1228,1227,1,0,0,0,1228,1229,1,0,0,0,1229,
        1230,1,0,0,0,1230,1232,3,370,185,0,1231,1222,1,0,0,0,1231,1225,1,
        0,0,0,1232,91,1,0,0,0,1233,1234,5,138,0,0,1234,1237,5,188,0,0,1235,
        1236,5,155,0,0,1236,1238,5,188,0,0,1237,1235,1,0,0,0,1237,1238,1,
        0,0,0,1238,1240,1,0,0,0,1239,1241,5,171,0,0,1240,1239,1,0,0,0,1240,
        1241,1,0,0,0,1241,1242,1,0,0,0,1242,1243,3,370,185,0,1243,93,1,0,
        0,0,1244,1245,5,114,0,0,1245,1247,5,188,0,0,1246,1244,1,0,0,0,1246,
        1247,1,0,0,0,1247,1248,1,0,0,0,1248,1249,5,70,0,0,1249,95,1,0,0,
        0,1250,1251,5,98,0,0,1251,1252,5,188,0,0,1252,1253,5,83,0,0,1253,
        97,1,0,0,0,1254,1255,5,79,0,0,1255,1256,5,188,0,0,1256,1257,7,0,
        0,0,1257,1261,5,188,0,0,1258,1259,3,96,48,0,1259,1260,5,188,0,0,
        1260,1262,1,0,0,0,1261,1258,1,0,0,0,1261,1262,1,0,0,0,1262,1263,
        1,0,0,0,1263,1275,3,374,187,0,1264,1265,5,79,0,0,1265,1266,5,188,
        0,0,1266,1267,5,97,0,0,1267,1271,5,188,0,0,1268,1269,3,96,48,0,1269,
        1270,5,188,0,0,1270,1272,1,0,0,0,1271,1268,1,0,0,0,1271,1272,1,0,
        0,0,1272,1273,1,0,0,0,1273,1275,3,100,50,0,1274,1254,1,0,0,0,1274,
        1264,1,0,0,0,1275,99,1,0,0,0,1276,1278,3,374,187,0,1277,1279,5,188,
        0,0,1278,1277,1,0,0,0,1278,1279,1,0,0,0,1279,1280,1,0,0,0,1280,1282,
        5,5,0,0,1281,1283,5,188,0,0,1282,1281,1,0,0,0,1282,1283,1,0,0,0,
        1283,1284,1,0,0,0,1284,1285,3,374,187,0,1285,101,1,0,0,0,1286,1287,
        5,49,0,0,1287,1288,5,188,0,0,1288,1289,5,141,0,0,1289,1290,5,188,
        0,0,1290,1291,3,374,187,0,1291,1292,5,188,0,0,1292,1293,3,104,52,
        0,1293,103,1,0,0,0,1294,1302,3,106,53,0,1295,1302,3,110,55,0,1296,
        1302,3,112,56,0,1297,1302,3,114,57,0,1298,1302,3,116,58,0,1299,1302,
        3,118,59,0,1300,1302,3,120,60,0,1301,1294,1,0,0,0,1301,1295,1,0,
        0,0,1301,1296,1,0,0,0,1301,1297,1,0,0,0,1301,1298,1,0,0,0,1301,1299,
        1,0,0,0,1301,1300,1,0,0,0,1302,105,1,0,0,0,1303,1304,5,47,0,0,1304,
        1308,5,188,0,0,1305,1306,3,50,25,0,1306,1307,5,188,0,0,1307,1309,
        1,0,0,0,1308,1305,1,0,0,0,1308,1309,1,0,0,0,1309,1310,1,0,0,0,1310,
        1311,3,368,184,0,1311,1312,5,188,0,0,1312,1315,3,142,71,0,1313,1314,
        5,188,0,0,1314,1316,3,108,54,0,1315,1313,1,0,0,0,1315,1316,1,0,0,
        0,1316,107,1,0,0,0,1317,1318,5,73,0,0,1318,1319,5,188,0,0,1319,1320,
        3,272,136,0,1320,109,1,0,0,0,1321,1322,5,79,0,0,1322,1326,5,188,
        0,0,1323,1324,3,96,48,0,1324,1325,5,188,0,0,1325,1327,1,0,0,0,1326,
        1323,1,0,0,0,1326,1327,1,0,0,0,1327,1328,1,0,0,0,1328,1329,3,368,
        184,0,1329,111,1,0,0,0,1330,1331,5,130,0,0,1331,1332,5,188,0,0,1332,
        1333,5,143,0,0,1333,1334,5,188,0,0,1334,1335,3,374,187,0,1335,113,
        1,0,0,0,1336,1337,5,130,0,0,1337,1338,5,188,0,0,1338,1339,3,368,
        184,0,1339,1340,5,188,0,0,1340,1341,5,143,0,0,1341,1342,5,188,0,
        0,1342,1343,3,368,184,0,1343,115,1,0,0,0,1344,1345,5,47,0,0,1345,
        1349,5,188,0,0,1346,1347,3,50,25,0,1347,1348,5,188,0,0,1348,1350,
        1,0,0,0,1349,1346,1,0,0,0,1349,1350,1,0,0,0,1350,1351,1,0,0,0,1351,
        1352,3,72,36,0,1352,117,1,0,0,0,1353,1354,5,79,0,0,1354,1358,5,188,
        0,0,1355,1356,3,96,48,0,1356,1357,5,188,0,0,1357,1359,1,0,0,0,1358,
        1355,1,0,0,0,1358,1359,1,0,0,0,1359,1360,1,0,0,0,1360,1361,3,72,
        36,0,1361,119,1,0,0,0,1362,1363,5,135,0,0,1363,1364,5,188,0,0,1364,
        1365,5,136,0,0,1365,1366,5,188,0,0,1366,1368,5,57,0,0,1367,1369,
        5,188,0,0,1368,1367,1,0,0,0,1368,1369,1,0,0,0,1369,1370,1,0,0,0,
        1370,1372,5,2,0,0,1371,1373,5,188,0,0,1372,1371,1,0,0,0,1372,1373,
        1,0,0,0,1373,1374,1,0,0,0,1374,1385,3,122,61,0,1375,1377,5,188,0,
        0,1376,1375,1,0,0,0,1376,1377,1,0,0,0,1377,1378,1,0,0,0,1378,1380,
        5,4,0,0,1379,1381,5,188,0,0,1380,1379,1,0,0,0,1380,1381,1,0,0,0,
        1381,1382,1,0,0,0,1382,1384,3,122,61,0,1383,1376,1,0,0,0,1384,1387,
        1,0,0,0,1385,1383,1,0,0,0,1385,1386,1,0,0,0,1386,1389,1,0,0,0,1387,
        1385,1,0,0,0,1388,1390,5,188,0,0,1389,1388,1,0,0,0,1389,1390,1,0,
        0,0,1390,1391,1,0,0,0,1391,1392,5,3,0,0,1392,121,1,0,0,0,1393,1394,
        3,368,184,0,1394,1395,5,188,0,0,1395,1396,7,1,0,0,1396,123,1,0,0,
        0,1397,1408,3,126,63,0,1398,1400,5,188,0,0,1399,1398,1,0,0,0,1399,
        1400,1,0,0,0,1400,1401,1,0,0,0,1401,1403,5,4,0,0,1402,1404,5,188,
        0,0,1403,1402,1,0,0,0,1403,1404,1,0,0,0,1404,1405,1,0,0,0,1405,1407,
        3,126,63,0,1406,1399,1,0,0,0,1407,1410,1,0,0,0,1408,1406,1,0,0,0,
        1408,1409,1,0,0,0,1409,125,1,0,0,0,1410,1408,1,0,0,0,1411,1412,3,
        368,184,0,1412,1413,5,188,0,0,1413,1414,3,142,71,0,1414,127,1,0,
        0,0,1415,1426,3,130,65,0,1416,1418,5,188,0,0,1417,1416,1,0,0,0,1417,
        1418,1,0,0,0,1418,1419,1,0,0,0,1419,1421,5,4,0,0,1420,1422,5,188,
        0,0,1421,1420,1,0,0,0,1421,1422,1,0,0,0,1422,1423,1,0,0,0,1423,1425,
        3,130,65,0,1424,1417,1,0,0,0,1425,1428,1,0,0,0,1426,1424,1,0,0,0,
        1426,1427,1,0,0,0,1427,129,1,0,0,0,1428,1426,1,0,0,0,1429,1432,3,
        126,63,0,1430,1431,5,188,0,0,1431,1433,3,108,54,0,1432,1430,1,0,
        0,0,1432,1433,1,0,0,0,1433,1438,1,0,0,0,1434,1435,5,188,0,0,1435,
        1436,5,125,0,0,1436,1437,5,188,0,0,1437,1439,5,104,0,0,1438,1434,
        1,0,0,0,1438,1439,1,0,0,0,1439,131,1,0,0,0,1440,1441,5,125,0,0,1441,
        1442,5,188,0,0,1442,1444,5,104,0,0,1443,1445,5,188,0,0,1444,1443,
        1,0,0,0,1444,1445,1,0,0,0,1445,1446,1,0,0,0,1446,1448,5,2,0,0,1447,
        1449,5,188,0,0,1448,1447,1,0,0,0,1448,1449,1,0,0,0,1449,1450,1,0,
        0,0,1450,1452,3,368,184,0,1451,1453,5,188,0,0,1452,1451,1,0,0,0,
        1452,1453,1,0,0,0,1453,1454,1,0,0,0,1454,1455,5,3,0,0,1455,133,1,
        0,0,0,1456,1458,5,148,0,0,1457,1459,5,188,0,0,1458,1457,1,0,0,0,
        1458,1459,1,0,0,0,1459,1460,1,0,0,0,1460,1462,5,2,0,0,1461,1463,
        5,188,0,0,1462,1461,1,0,0,0,1462,1463,1,0,0,0,1463,1464,1,0,0,0,
        1464,1466,3,124,62,0,1465,1467,5,188,0,0,1466,1465,1,0,0,0,1466,
        1467,1,0,0,0,1467,1468,1,0,0,0,1468,1469,5,3,0,0,1469,135,1,0,0,
        0,1470,1472,5,140,0,0,1471,1473,5,188,0,0,1472,1471,1,0,0,0,1472,
        1473,1,0,0,0,1473,1474,1,0,0,0,1474,1476,5,2,0,0,1475,1477,5,188,
        0,0,1476,1475,1,0,0,0,1476,1477,1,0,0,0,1477,1478,1,0,0,0,1478,1480,
        3,124,62,0,1479,1481,5,188,0,0,1480,1479,1,0,0,0,1480,1481,1,0,0,
        0,1481,1482,1,0,0,0,1482,1483,5,3,0,0,1483,137,1,0,0,0,1484,1486,
        5,164,0,0,1485,1487,5,188,0,0,1486,1485,1,0,0,0,1486,1487,1,0,0,
        0,1487,1488,1,0,0,0,1488,1490,5,2,0,0,1489,1491,5,188,0,0,1490,1489,
        1,0,0,0,1490,1491,1,0,0,0,1491,1492,1,0,0,0,1492,1494,3,142,71,0,
        1493,1495,5,188,0,0,1494,1493,1,0,0,0,1494,1495,1,0,0,0,1495,1496,
        1,0,0,0,1496,1498,5,4,0,0,1497,1499,5,188,0,0,1498,1497,1,0,0,0,
        1498,1499,1,0,0,0,1499,1500,1,0,0,0,1500,1502,3,142,71,0,1501,1503,
        5,188,0,0,1502,1501,1,0,0,0,1502,1503,1,0,0,0,1503,1504,1,0,0,0,
        1504,1505,5,3,0,0,1505,139,1,0,0,0,1506,1508,5,165,0,0,1507,1509,
        5,188,0,0,1508,1507,1,0,0,0,1508,1509,1,0,0,0,1509,1510,1,0,0,0,
        1510,1512,5,2,0,0,1511,1513,5,188,0,0,1512,1511,1,0,0,0,1512,1513,
        1,0,0,0,1513,1514,1,0,0,0,1514,1516,3,370,185,0,1515,1517,5,188,
        0,0,1516,1515,1,0,0,0,1516,1517,1,0,0,0,1517,1518,1,0,0,0,1518,1520,
        5,4,0,0,1519,1521,5,188,0,0,1520,1519,1,0,0,0,1520,1521,1,0,0,0,
        1521,1522,1,0,0,0,1522,1524,3,370,185,0,1523,1525,5,188,0,0,1524,
        1523,1,0,0,0,1524,1525,1,0,0,0,1525,1526,1,0,0,0,1526,1527,5,3,0,
        0,1527,141,1,0,0,0,1528,1529,6,71,-1,0,1529,1535,3,376,188,0,1530,
        1535,3,134,67,0,1531,1535,3,136,68,0,1532,1535,3,138,69,0,1533,1535,
        3,140,70,0,1534,1528,1,0,0,0,1534,1530,1,0,0,0,1534,1531,1,0,0,0,
        1534,1532,1,0,0,0,1534,1533,1,0,0,0,1535,1540,1,0,0,0,1536,1537,
        10,5,0,0,1537,1539,3,144,72,0,1538,1536,1,0,0,0,1539,1542,1,0,0,
        0,1540,1538,1,0,0,0,1540,1541,1,0,0,0,1541,143,1,0,0,0,1542,1540,
        1,0,0,0,1543,1547,3,146,73,0,1544,1546,3,146,73,0,1545,1544,1,0,
        0,0,1546,1549,1,0,0,0,1547,1545,1,0,0,0,1547,1548,1,0,0,0,1548,145,
        1,0,0,0,1549,1547,1,0,0,0,1550,1552,5,7,0,0,1551,1553,3,370,185,
        0,1552,1551,1,0,0,0,1552,1553,1,0,0,0,1553,1554,1,0,0,0,1554,1555,
        5,8,0,0,1555,147,1,0,0,0,1556,1559,3,150,75,0,1557,1559,3,152,76,
        0,1558,1556,1,0,0,0,1558,1557,1,0,0,0,1559,149,1,0,0,0,1560,1563,
        5,84,0,0,1561,1562,5,188,0,0,1562,1564,5,107,0,0,1563,1561,1,0,0,
        0,1563,1564,1,0,0,0,1564,151,1,0,0,0,1565,1566,5,126,0,0,1566,153,
        1,0,0,0,1567,1568,5,56,0,0,1568,1569,5,188,0,0,1569,1581,5,145,0,
        0,1570,1571,5,56,0,0,1571,1572,5,188,0,0,1572,1573,5,145,0,0,1573,
        1574,5,188,0,0,1574,1575,5,128,0,0,1575,1576,5,188,0,0,1576,1581,
        5,120,0,0,1577,1581,5,64,0,0,1578,1581,5,132,0,0,1579,1581,5,61,
        0,0,1580,1567,1,0,0,0,1580,1570,1,0,0,0,1580,1577,1,0,0,0,1580,1578,
        1,0,0,0,1580,1579,1,0,0,0,1581,155,1,0,0,0,1582,1587,3,158,79,0,
        1583,1587,3,160,80,0,1584,1587,3,162,81,0,1585,1587,3,164,82,0,1586,
        1582,1,0,0,0,1586,1583,1,0,0,0,1586,1584,1,0,0,0,1586,1585,1,0,0,
        0,1587,157,1,0,0,0,1588,1589,5,106,0,0,1589,1592,5,188,0,0,1590,
        1591,5,86,0,0,1591,1593,5,188,0,0,1592,1590,1,0,0,0,1592,1593,1,
        0,0,0,1593,1596,1,0,0,0,1594,1597,5,173,0,0,1595,1597,3,360,180,
        0,1596,1594,1,0,0,0,1596,1595,1,0,0,0,1597,159,1,0,0,0,1598,1599,
        5,89,0,0,1599,1601,5,188,0,0,1600,1598,1,0,0,0,1600,1601,1,0,0,0,
        1601,1602,1,0,0,0,1602,1603,5,101,0,0,1603,1604,5,188,0,0,1604,1609,
        3,360,180,0,1605,1606,5,188,0,0,1606,1607,5,88,0,0,1607,1608,5,188,
        0,0,1608,1610,5,173,0,0,1609,1605,1,0,0,0,1609,1610,1,0,0,0,1610,
        161,1,0,0,0,1611,1612,5,150,0,0,1612,1613,5,188,0,0,1613,1614,3,
        360,180,0,1614,163,1,0,0,0,1615,1616,5,151,0,0,1616,1617,5,188,0,
        0,1617,1618,3,360,180,0,1618,165,1,0,0,0,1619,1620,3,168,84,0,1620,
        167,1,0,0,0,1621,1628,3,172,86,0,1622,1624,5,188,0,0,1623,1622,1,
        0,0,0,1623,1624,1,0,0,0,1624,1625,1,0,0,0,1625,1627,3,170,85,0,1626,
        1623,1,0,0,0,1627,1630,1,0,0,0,1628,1626,1,0,0,0,1628,1629,1,0,0,
        0,1629,1643,1,0,0,0,1630,1628,1,0,0,0,1631,1633,3,214,107,0,1632,
        1634,5,188,0,0,1633,1632,1,0,0,0,1633,1634,1,0,0,0,1634,1636,1,0,
        0,0,1635,1631,1,0,0,0,1636,1637,1,0,0,0,1637,1635,1,0,0,0,1637,1638,
        1,0,0,0,1638,1639,1,0,0,0,1639,1640,3,172,86,0,1640,1641,6,84,-1,
        0,1641,1643,1,0,0,0,1642,1621,1,0,0,0,1642,1635,1,0,0,0,1643,169,
        1,0,0,0,1644,1645,5,148,0,0,1645,1646,5,188,0,0,1646,1648,5,48,0,
        0,1647,1649,5,188,0,0,1648,1647,1,0,0,0,1648,1649,1,0,0,0,1649,1650,
        1,0,0,0,1650,1657,3,172,86,0,1651,1653,5,148,0,0,1652,1654,5,188,
        0,0,1653,1652,1,0,0,0,1653,1654,1,0,0,0,1654,1655,1,0,0,0,1655,1657,
        3,172,86,0,1656,1644,1,0,0,0,1656,1651,1,0,0,0,1657,171,1,0,0,0,
        1658,1661,3,174,87,0,1659,1661,3,176,88,0,1660,1658,1,0,0,0,1660,
        1659,1,0,0,0,1661,173,1,0,0,0,1662,1664,3,182,91,0,1663,1665,5,188,
        0,0,1664,1663,1,0,0,0,1664,1665,1,0,0,0,1665,1667,1,0,0,0,1666,1662,
        1,0,0,0,1667,1670,1,0,0,0,1668,1666,1,0,0,0,1668,1669,1,0,0,0,1669,
        1671,1,0,0,0,1670,1668,1,0,0,0,1671,1698,3,214,107,0,1672,1674,3,
        182,91,0,1673,1675,5,188,0,0,1674,1673,1,0,0,0,1674,1675,1,0,0,0,
        1675,1677,1,0,0,0,1676,1672,1,0,0,0,1677,1680,1,0,0,0,1678,1676,
        1,0,0,0,1678,1679,1,0,0,0,1679,1681,1,0,0,0,1680,1678,1,0,0,0,1681,
        1688,3,180,90,0,1682,1684,5,188,0,0,1683,1682,1,0,0,0,1683,1684,
        1,0,0,0,1684,1685,1,0,0,0,1685,1687,3,180,90,0,1686,1683,1,0,0,0,
        1687,1690,1,0,0,0,1688,1686,1,0,0,0,1688,1689,1,0,0,0,1689,1695,
        1,0,0,0,1690,1688,1,0,0,0,1691,1693,5,188,0,0,1692,1691,1,0,0,0,
        1692,1693,1,0,0,0,1693,1694,1,0,0,0,1694,1696,3,214,107,0,1695,1692,
        1,0,0,0,1695,1696,1,0,0,0,1696,1698,1,0,0,0,1697,1668,1,0,0,0,1697,
        1678,1,0,0,0,1698,175,1,0,0,0,1699,1701,3,178,89,0,1700,1702,5,188,
        0,0,1701,1700,1,0,0,0,1701,1702,1,0,0,0,1702,1704,1,0,0,0,1703,1699,
        1,0,0,0,1704,1705,1,0,0,0,1705,1703,1,0,0,0,1705,1706,1,0,0,0,1706,
        1707,1,0,0,0,1707,1708,3,174,87,0,1708,177,1,0,0,0,1709,1711,3,182,
        91,0,1710,1712,5,188,0,0,1711,1710,1,0,0,0,1711,1712,1,0,0,0,1712,
        1714,1,0,0,0,1713,1709,1,0,0,0,1714,1717,1,0,0,0,1715,1713,1,0,0,
        0,1715,1716,1,0,0,0,1716,1724,1,0,0,0,1717,1715,1,0,0,0,1718,1720,
        3,180,90,0,1719,1721,5,188,0,0,1720,1719,1,0,0,0,1720,1721,1,0,0,
        0,1721,1723,1,0,0,0,1722,1718,1,0,0,0,1723,1726,1,0,0,0,1724,1722,
        1,0,0,0,1724,1725,1,0,0,0,1725,1727,1,0,0,0,1726,1724,1,0,0,0,1727,
        1728,3,212,106,0,1728,179,1,0,0,0,1729,1734,3,200,100,0,1730,1734,
        3,202,101,0,1731,1734,3,206,103,0,1732,1734,3,210,105,0,1733,1729,
        1,0,0,0,1733,1730,1,0,0,0,1733,1731,1,0,0,0,1733,1732,1,0,0,0,1734,
        181,1,0,0,0,1735,1740,3,192,96,0,1736,1740,3,198,99,0,1737,1740,
        3,190,95,0,1738,1740,3,184,92,0,1739,1735,1,0,0,0,1739,1736,1,0,
        0,0,1739,1737,1,0,0,0,1739,1738,1,0,0,0,1740,183,1,0,0,0,1741,1759,
        5,106,0,0,1742,1743,5,188,0,0,1743,1744,5,155,0,0,1744,1745,5,188,
        0,0,1745,1747,5,94,0,0,1746,1748,5,188,0,0,1747,1746,1,0,0,0,1747,
        1748,1,0,0,0,1748,1749,1,0,0,0,1749,1751,5,2,0,0,1750,1752,5,188,
        0,0,1751,1750,1,0,0,0,1751,1752,1,0,0,0,1752,1753,1,0,0,0,1753,1755,
        3,124,62,0,1754,1756,5,188,0,0,1755,1754,1,0,0,0,1755,1756,1,0,0,
        0,1756,1757,1,0,0,0,1757,1758,5,3,0,0,1758,1760,1,0,0,0,1759,1742,
        1,0,0,0,1759,1760,1,0,0,0,1760,1761,1,0,0,0,1761,1762,5,188,0,0,
        1762,1763,5,88,0,0,1763,1764,5,188,0,0,1764,1778,3,10,5,0,1765,1767,
        5,188,0,0,1766,1765,1,0,0,0,1766,1767,1,0,0,0,1767,1768,1,0,0,0,
        1768,1770,5,2,0,0,1769,1771,5,188,0,0,1770,1769,1,0,0,0,1770,1771,
        1,0,0,0,1771,1772,1,0,0,0,1772,1774,3,26,13,0,1773,1775,5,188,0,
        0,1774,1773,1,0,0,0,1774,1775,1,0,0,0,1775,1776,1,0,0,0,1776,1777,
        5,3,0,0,1777,1779,1,0,0,0,1778,1766,1,0,0,0,1778,1779,1,0,0,0,1779,
        1784,1,0,0,0,1780,1782,5,188,0,0,1781,1780,1,0,0,0,1781,1782,1,0,
        0,0,1782,1783,1,0,0,0,1783,1785,3,230,115,0,1784,1781,1,0,0,0,1784,
        1785,1,0,0,0,1785,185,1,0,0,0,1786,1787,3,360,180,0,1787,1788,5,
        188,0,0,1788,1789,5,52,0,0,1789,1790,5,188,0,0,1790,1792,1,0,0,0,
        1791,1786,1,0,0,0,1791,1792,1,0,0,0,1792,1793,1,0,0,0,1793,1794,
        3,360,180,0,1794,187,1,0,0,0,1795,1806,3,186,93,0,1796,1798,5,188,
        0,0,1797,1796,1,0,0,0,1797,1798,1,0,0,0,1798,1799,1,0,0,0,1799,1801,
        5,4,0,0,1800,1802,5,188,0,0,1801,1800,1,0,0,0,1801,1802,1,0,0,0,
        1802,1803,1,0,0,0,1803,1805,3,186,93,0,1804,1797,1,0,0,0,1805,1808,
        1,0,0,0,1806,1804,1,0,0,0,1806,1807,1,0,0,0,1807,189,1,0,0,0,1808,
        1806,1,0,0,0,1809,1810,5,58,0,0,1810,1811,5,188,0,0,1811,1816,3,
        340,170,0,1812,1814,5,188,0,0,1813,1812,1,0,0,0,1813,1814,1,0,0,
        0,1814,1815,1,0,0,0,1815,1817,3,230,115,0,1816,1813,1,0,0,0,1816,
        1817,1,0,0,0,1817,1824,1,0,0,0,1818,1820,5,188,0,0,1819,1818,1,0,
        0,0,1819,1820,1,0,0,0,1820,1821,1,0,0,0,1821,1822,5,160,0,0,1822,
        1823,5,188,0,0,1823,1825,3,188,94,0,1824,1819,1,0,0,0,1824,1825,
        1,0,0,0,1825,191,1,0,0,0,1826,1827,5,122,0,0,1827,1829,5,188,0,0,
        1828,1826,1,0,0,0,1828,1829,1,0,0,0,1829,1830,1,0,0,0,1830,1832,
        5,109,0,0,1831,1833,5,188,0,0,1832,1831,1,0,0,0,1832,1833,1,0,0,
        0,1833,1834,1,0,0,0,1834,1837,3,232,116,0,1835,1836,5,188,0,0,1836,
        1838,3,230,115,0,1837,1835,1,0,0,0,1837,1838,1,0,0,0,1838,1841,1,
        0,0,0,1839,1840,5,188,0,0,1840,1842,3,194,97,0,1841,1839,1,0,0,0,
        1841,1842,1,0,0,0,1842,193,1,0,0,0,1843,1844,5,95,0,0,1844,1845,
        5,188,0,0,1845,1846,3,196,98,0,1846,195,1,0,0,0,1847,1848,6,98,-1,
        0,1848,1850,5,2,0,0,1849,1851,5,188,0,0,1850,1849,1,0,0,0,1850,1851,
        1,0,0,0,1851,1852,1,0,0,0,1852,1854,3,196,98,0,1853,1855,5,188,0,
        0,1854,1853,1,0,0,0,1854,1855,1,0,0,0,1855,1856,1,0,0,0,1856,1857,
        5,3,0,0,1857,1860,1,0,0,0,1858,1860,3,374,187,0,1859,1847,1,0,0,
        0,1859,1858,1,0,0,0,1860,1877,1,0,0,0,1861,1862,10,4,0,0,1862,1863,
        5,188,0,0,1863,1864,5,103,0,0,1864,1865,5,188,0,0,1865,1876,3,196,
        98,5,1866,1871,10,3,0,0,1867,1868,5,188,0,0,1868,1869,5,113,0,0,
        1869,1870,5,188,0,0,1870,1872,3,374,187,0,1871,1867,1,0,0,0,1872,
        1873,1,0,0,0,1873,1871,1,0,0,0,1873,1874,1,0,0,0,1874,1876,1,0,0,
        0,1875,1861,1,0,0,0,1875,1866,1,0,0,0,1876,1879,1,0,0,0,1877,1875,
        1,0,0,0,1877,1878,1,0,0,0,1878,197,1,0,0,0,1879,1877,1,0,0,0,1880,
        1882,5,149,0,0,1881,1883,5,188,0,0,1882,1881,1,0,0,0,1882,1883,1,
        0,0,0,1883,1884,1,0,0,0,1884,1885,3,272,136,0,1885,1886,5,188,0,
        0,1886,1887,5,52,0,0,1887,1888,5,188,0,0,1888,1889,3,360,180,0,1889,
        199,1,0,0,0,1890,1892,5,69,0,0,1891,1893,5,188,0,0,1892,1891,1,0,
        0,0,1892,1893,1,0,0,0,1893,1894,1,0,0,0,1894,1895,3,232,116,0,1895,
        201,1,0,0,0,1896,1898,5,111,0,0,1897,1899,5,188,0,0,1898,1897,1,
        0,0,0,1898,1899,1,0,0,0,1899,1900,1,0,0,0,1900,1905,3,232,116,0,
        1901,1902,5,188,0,0,1902,1904,3,204,102,0,1903,1901,1,0,0,0,1904,
        1907,1,0,0,0,1905,1903,1,0,0,0,1905,1906,1,0,0,0,1906,203,1,0,0,
        0,1907,1905,1,0,0,0,1908,1909,5,119,0,0,1909,1910,5,188,0,0,1910,
        1911,5,109,0,0,1911,1912,5,188,0,0,1912,1919,3,206,103,0,1913,1914,
        5,119,0,0,1914,1915,5,188,0,0,1915,1916,5,69,0,0,1916,1917,5,188,
        0,0,1917,1919,3,206,103,0,1918,1908,1,0,0,0,1918,1913,1,0,0,0,1919,
        205,1,0,0,0,1920,1922,5,135,0,0,1921,1923,5,188,0,0,1922,1921,1,
        0,0,0,1922,1923,1,0,0,0,1923,1924,1,0,0,0,1924,1935,3,208,104,0,
        1925,1927,5,188,0,0,1926,1925,1,0,0,0,1926,1927,1,0,0,0,1927,1928,
        1,0,0,0,1928,1930,5,4,0,0,1929,1931,5,188,0,0,1930,1929,1,0,0,0,
        1930,1931,1,0,0,0,1931,1932,1,0,0,0,1932,1934,3,208,104,0,1933,1926,
        1,0,0,0,1934,1937,1,0,0,0,1935,1933,1,0,0,0,1935,1936,1,0,0,0,1936,
        1953,1,0,0,0,1937,1935,1,0,0,0,1938,1940,5,135,0,0,1939,1941,5,188,
        0,0,1940,1939,1,0,0,0,1940,1941,1,0,0,0,1941,1942,1,0,0,0,1942,1944,
        3,318,159,0,1943,1945,5,188,0,0,1944,1943,1,0,0,0,1944,1945,1,0,
        0,0,1945,1946,1,0,0,0,1946,1948,5,6,0,0,1947,1949,5,188,0,0,1948,
        1947,1,0,0,0,1948,1949,1,0,0,0,1949,1950,1,0,0,0,1950,1951,3,248,
        124,0,1951,1953,1,0,0,0,1952,1920,1,0,0,0,1952,1938,1,0,0,0,1953,
        207,1,0,0,0,1954,1956,3,366,183,0,1955,1957,5,188,0,0,1956,1955,
        1,0,0,0,1956,1957,1,0,0,0,1957,1958,1,0,0,0,1958,1960,5,6,0,0,1959,
        1961,5,188,0,0,1960,1959,1,0,0,0,1960,1961,1,0,0,0,1961,1962,1,0,
        0,0,1962,1963,3,272,136,0,1963,209,1,0,0,0,1964,1965,5,77,0,0,1965,
        1967,5,188,0,0,1966,1964,1,0,0,0,1966,1967,1,0,0,0,1967,1968,1,0,
        0,0,1968,1970,5,74,0,0,1969,1971,5,188,0,0,1970,1969,1,0,0,0,1970,
        1971,1,0,0,0,1971,1972,1,0,0,0,1972,1983,3,272,136,0,1973,1975,5,
        188,0,0,1974,1973,1,0,0,0,1974,1975,1,0,0,0,1975,1976,1,0,0,0,1976,
        1978,5,4,0,0,1977,1979,5,188,0,0,1978,1977,1,0,0,0,1978,1979,1,0,
        0,0,1979,1980,1,0,0,0,1980,1982,3,272,136,0,1981,1974,1,0,0,0,1982,
        1985,1,0,0,0,1983,1981,1,0,0,0,1983,1984,1,0,0,0,1984,211,1,0,0,
        0,1985,1983,1,0,0,0,1986,1987,5,155,0,0,1987,1992,3,216,108,0,1988,
        1990,5,188,0,0,1989,1988,1,0,0,0,1989,1990,1,0,0,0,1990,1991,1,0,
        0,0,1991,1993,3,230,115,0,1992,1989,1,0,0,0,1992,1993,1,0,0,0,1993,
        213,1,0,0,0,1994,1995,5,131,0,0,1995,1996,3,216,108,0,1996,215,1,
        0,0,0,1997,1999,5,188,0,0,1998,1997,1,0,0,0,1998,1999,1,0,0,0,1999,
        2000,1,0,0,0,2000,2002,5,78,0,0,2001,1998,1,0,0,0,2001,2002,1,0,
        0,0,2002,2003,1,0,0,0,2003,2004,5,188,0,0,2004,2007,3,218,109,0,
        2005,2006,5,188,0,0,2006,2008,3,222,111,0,2007,2005,1,0,0,0,2007,
        2008,1,0,0,0,2008,2011,1,0,0,0,2009,2010,5,188,0,0,2010,2012,3,224,
        112,0,2011,2009,1,0,0,0,2011,2012,1,0,0,0,2012,2015,1,0,0,0,2013,
        2014,5,188,0,0,2014,2016,3,226,113,0,2015,2013,1,0,0,0,2015,2016,
        1,0,0,0,2016,217,1,0,0,0,2017,2028,5,166,0,0,2018,2020,5,188,0,0,
        2019,2018,1,0,0,0,2019,2020,1,0,0,0,2020,2021,1,0,0,0,2021,2023,
        5,4,0,0,2022,2024,5,188,0,0,2023,2022,1,0,0,0,2023,2024,1,0,0,0,
        2024,2025,1,0,0,0,2025,2027,3,220,110,0,2026,2019,1,0,0,0,2027,2030,
        1,0,0,0,2028,2026,1,0,0,0,2028,2029,1,0,0,0,2029,2046,1,0,0,0,2030,
        2028,1,0,0,0,2031,2042,3,220,110,0,2032,2034,5,188,0,0,2033,2032,
        1,0,0,0,2033,2034,1,0,0,0,2034,2035,1,0,0,0,2035,2037,5,4,0,0,2036,
        2038,5,188,0,0,2037,2036,1,0,0,0,2037,2038,1,0,0,0,2038,2039,1,0,
        0,0,2039,2041,3,220,110,0,2040,2033,1,0,0,0,2041,2044,1,0,0,0,2042,
        2040,1,0,0,0,2042,2043,1,0,0,0,2043,2046,1,0,0,0,2044,2042,1,0,0,
        0,2045,2017,1,0,0,0,2045,2031,1,0,0,0,2046,219,1,0,0,0,2047,2048,
        3,272,136,0,2048,2049,5,188,0,0,2049,2050,5,52,0,0,2050,2051,5,188,
        0,0,2051,2052,3,360,180,0,2052,2055,1,0,0,0,2053,2055,3,272,136,
        0,2054,2047,1,0,0,0,2054,2053,1,0,0,0,2055,221,1,0,0,0,2056,2057,
        5,124,0,0,2057,2058,5,188,0,0,2058,2059,5,57,0,0,2059,2060,5,188,
        0,0,2060,2068,3,228,114,0,2061,2063,5,4,0,0,2062,2064,5,188,0,0,
        2063,2062,1,0,0,0,2063,2064,1,0,0,0,2064,2065,1,0,0,0,2065,2067,
        3,228,114,0,2066,2061,1,0,0,0,2067,2070,1,0,0,0,2068,2066,1,0,0,
        0,2068,2069,1,0,0,0,2069,223,1,0,0,0,2070,2068,1,0,0,0,2071,2072,
        5,167,0,0,2072,2073,5,188,0,0,2073,2074,3,272,136,0,2074,225,1,0,
        0,0,2075,2076,5,105,0,0,2076,2077,5,188,0,0,2077,2078,3,272,136,
        0,2078,227,1,0,0,0,2079,2084,3,272,136,0,2080,2082,5,188,0,0,2081,
        2080,1,0,0,0,2081,2082,1,0,0,0,2082,2083,1,0,0,0,2083,2085,7,2,0,
        0,2084,2081,1,0,0,0,2084,2085,1,0,0,0,2085,229,1,0,0,0,2086,2087,
        5,154,0,0,2087,2088,5,188,0,0,2088,2089,3,272,136,0,2089,231,1,0,
        0,0,2090,2101,3,234,117,0,2091,2093,5,188,0,0,2092,2091,1,0,0,0,
        2092,2093,1,0,0,0,2093,2094,1,0,0,0,2094,2096,5,4,0,0,2095,2097,
        5,188,0,0,2096,2095,1,0,0,0,2096,2097,1,0,0,0,2097,2098,1,0,0,0,
        2098,2100,3,234,117,0,2099,2092,1,0,0,0,2100,2103,1,0,0,0,2101,2099,
        1,0,0,0,2101,2102,1,0,0,0,2102,233,1,0,0,0,2103,2101,1,0,0,0,2104,
        2106,3,360,180,0,2105,2107,5,188,0,0,2106,2105,1,0,0,0,2106,2107,
        1,0,0,0,2107,2108,1,0,0,0,2108,2110,5,6,0,0,2109,2111,5,188,0,0,
        2110,2109,1,0,0,0,2110,2111,1,0,0,0,2111,2112,1,0,0,0,2112,2113,
        3,236,118,0,2113,2116,1,0,0,0,2114,2116,3,236,118,0,2115,2104,1,
        0,0,0,2115,2114,1,0,0,0,2116,235,1,0,0,0,2117,2118,3,238,119,0,2118,
        237,1,0,0,0,2119,2126,3,240,120,0,2120,2122,5,188,0,0,2121,2120,
        1,0,0,0,2121,2122,1,0,0,0,2122,2123,1,0,0,0,2123,2125,3,242,121,
        0,2124,2121,1,0,0,0,2125,2128,1,0,0,0,2126,2124,1,0,0,0,2126,2127,
        1,0,0,0,2127,2134,1,0,0,0,2128,2126,1,0,0,0,2129,2130,5,2,0,0,2130,
        2131,3,238,119,0,2131,2132,5,3,0,0,2132,2134,1,0,0,0,2133,2119,1,
        0,0,0,2133,2129,1,0,0,0,2134,239,1,0,0,0,2135,2137,5,2,0,0,2136,
        2138,5,188,0,0,2137,2136,1,0,0,0,2137,2138,1,0,0,0,2138,2143,1,0,
        0,0,2139,2141,3,360,180,0,2140,2142,5,188,0,0,2141,2140,1,0,0,0,
        2141,2142,1,0,0,0,2142,2144,1,0,0,0,2143,2139,1,0,0,0,2143,2144,
        1,0,0,0,2144,2149,1,0,0,0,2145,2147,3,252,126,0,2146,2148,5,188,
        0,0,2147,2146,1,0,0,0,2147,2148,1,0,0,0,2148,2150,1,0,0,0,2149,2145,
        1,0,0,0,2149,2150,1,0,0,0,2150,2155,1,0,0,0,2151,2153,3,248,124,
        0,2152,2154,5,188,0,0,2153,2152,1,0,0,0,2153,2154,1,0,0,0,2154,2156,
        1,0,0,0,2155,2151,1,0,0,0,2155,2156,1,0,0,0,2156,2157,1,0,0,0,2157,
        2158,5,3,0,0,2158,241,1,0,0,0,2159,2161,3,244,122,0,2160,2162,5,
        188,0,0,2161,2160,1,0,0,0,2161,2162,1,0,0,0,2162,2163,1,0,0,0,2163,
        2164,3,240,120,0,2164,243,1,0,0,0,2165,2167,3,380,190,0,2166,2168,
        5,188,0,0,2167,2166,1,0,0,0,2167,2168,1,0,0,0,2168,2169,1,0,0,0,
        2169,2171,3,384,192,0,2170,2172,5,188,0,0,2171,2170,1,0,0,0,2171,
        2172,1,0,0,0,2172,2174,1,0,0,0,2173,2175,3,246,123,0,2174,2173,1,
        0,0,0,2174,2175,1,0,0,0,2175,2177,1,0,0,0,2176,2178,5,188,0,0,2177,
        2176,1,0,0,0,2177,2178,1,0,0,0,2178,2179,1,0,0,0,2179,2180,3,384,
        192,0,2180,2210,1,0,0,0,2181,2183,3,384,192,0,2182,2184,5,188,0,
        0,2183,2182,1,0,0,0,2183,2184,1,0,0,0,2184,2186,1,0,0,0,2185,2187,
        3,246,123,0,2186,2185,1,0,0,0,2186,2187,1,0,0,0,2187,2189,1,0,0,
        0,2188,2190,5,188,0,0,2189,2188,1,0,0,0,2189,2190,1,0,0,0,2190,2191,
        1,0,0,0,2191,2193,3,384,192,0,2192,2194,5,188,0,0,2193,2192,1,0,
        0,0,2193,2194,1,0,0,0,2194,2195,1,0,0,0,2195,2196,3,382,191,0,2196,
        2210,1,0,0,0,2197,2199,3,384,192,0,2198,2200,5,188,0,0,2199,2198,
        1,0,0,0,2199,2200,1,0,0,0,2200,2202,1,0,0,0,2201,2203,3,246,123,
        0,2202,2201,1,0,0,0,2202,2203,1,0,0,0,2203,2205,1,0,0,0,2204,2206,
        5,188,0,0,2205,2204,1,0,0,0,2205,2206,1,0,0,0,2206,2207,1,0,0,0,
        2207,2208,3,384,192,0,2208,2210,1,0,0,0,2209,2165,1,0,0,0,2209,2181,
        1,0,0,0,2209,2197,1,0,0,0,2210,245,1,0,0,0,2211,2213,5,7,0,0,2212,
        2214,5,188,0,0,2213,2212,1,0,0,0,2213,2214,1,0,0,0,2214,2219,1,0,
        0,0,2215,2217,3,360,180,0,2216,2218,5,188,0,0,2217,2216,1,0,0,0,
        2217,2218,1,0,0,0,2218,2220,1,0,0,0,2219,2215,1,0,0,0,2219,2220,
        1,0,0,0,2220,2225,1,0,0,0,2221,2223,3,250,125,0,2222,2224,5,188,
        0,0,2223,2222,1,0,0,0,2223,2224,1,0,0,0,2224,2226,1,0,0,0,2225,2221,
        1,0,0,0,2225,2226,1,0,0,0,2226,2231,1,0,0,0,2227,2229,3,254,127,
        0,2228,2230,5,188,0,0,2229,2228,1,0,0,0,2229,2230,1,0,0,0,2230,2232,
        1,0,0,0,2231,2227,1,0,0,0,2231,2232,1,0,0,0,2232,2237,1,0,0,0,2233,
        2235,3,248,124,0,2234,2236,5,188,0,0,2235,2234,1,0,0,0,2235,2236,
        1,0,0,0,2236,2238,1,0,0,0,2237,2233,1,0,0,0,2237,2238,1,0,0,0,2238,
        2239,1,0,0,0,2239,2240,5,8,0,0,2240,247,1,0,0,0,2241,2243,5,9,0,
        0,2242,2244,5,188,0,0,2243,2242,1,0,0,0,2243,2244,1,0,0,0,2244,2278,
        1,0,0,0,2245,2247,3,368,184,0,2246,2248,5,188,0,0,2247,2246,1,0,
        0,0,2247,2248,1,0,0,0,2248,2249,1,0,0,0,2249,2251,5,169,0,0,2250,
        2252,5,188,0,0,2251,2250,1,0,0,0,2251,2252,1,0,0,0,2252,2253,1,0,
        0,0,2253,2255,3,272,136,0,2254,2256,5,188,0,0,2255,2254,1,0,0,0,
        2255,2256,1,0,0,0,2256,2275,1,0,0,0,2257,2259,5,4,0,0,2258,2260,
        5,188,0,0,2259,2258,1,0,0,0,2259,2260,1,0,0,0,2260,2261,1,0,0,0,
        2261,2263,3,368,184,0,2262,2264,5,188,0,0,2263,2262,1,0,0,0,2263,
        2264,1,0,0,0,2264,2265,1,0,0,0,2265,2267,5,169,0,0,2266,2268,5,188,
        0,0,2267,2266,1,0,0,0,2267,2268,1,0,0,0,2268,2269,1,0,0,0,2269,2271,
        3,272,136,0,2270,2272,5,188,0,0,2271,2270,1,0,0,0,2271,2272,1,0,
        0,0,2272,2274,1,0,0,0,2273,2257,1,0,0,0,2274,2277,1,0,0,0,2275,2273,
        1,0,0,0,2275,2276,1,0,0,0,2276,2279,1,0,0,0,2277,2275,1,0,0,0,2278,
        2245,1,0,0,0,2278,2279,1,0,0,0,2279,2280,1,0,0,0,2280,2281,5,10,
        0,0,2281,249,1,0,0,0,2282,2284,5,169,0,0,2283,2285,5,188,0,0,2284,
        2283,1,0,0,0,2284,2285,1,0,0,0,2285,2286,1,0,0,0,2286,2300,3,270,
        135,0,2287,2289,5,188,0,0,2288,2287,1,0,0,0,2288,2289,1,0,0,0,2289,
        2290,1,0,0,0,2290,2292,5,11,0,0,2291,2293,5,169,0,0,2292,2291,1,
        0,0,0,2292,2293,1,0,0,0,2293,2295,1,0,0,0,2294,2296,5,188,0,0,2295,
        2294,1,0,0,0,2295,2296,1,0,0,0,2296,2297,1,0,0,0,2297,2299,3,270,
        135,0,2298,2288,1,0,0,0,2299,2302,1,0,0,0,2300,2298,1,0,0,0,2300,
        2301,1,0,0,0,2301,251,1,0,0,0,2302,2300,1,0,0,0,2303,2305,5,169,
        0,0,2304,2306,5,188,0,0,2305,2304,1,0,0,0,2305,2306,1,0,0,0,2306,
        2307,1,0,0,0,2307,2324,3,268,134,0,2308,2310,5,188,0,0,2309,2308,
        1,0,0,0,2309,2310,1,0,0,0,2310,2316,1,0,0,0,2311,2313,5,11,0,0,2312,
        2314,5,169,0,0,2313,2312,1,0,0,0,2313,2314,1,0,0,0,2314,2317,1,0,
        0,0,2315,2317,5,169,0,0,2316,2311,1,0,0,0,2316,2315,1,0,0,0,2317,
        2319,1,0,0,0,2318,2320,5,188,0,0,2319,2318,1,0,0,0,2319,2320,1,0,
        0,0,2320,2321,1,0,0,0,2321,2323,3,268,134,0,2322,2309,1,0,0,0,2323,
        2326,1,0,0,0,2324,2322,1,0,0,0,2324,2325,1,0,0,0,2325,253,1,0,0,
        0,2326,2324,1,0,0,0,2327,2332,5,166,0,0,2328,2330,5,188,0,0,2329,
        2328,1,0,0,0,2329,2330,1,0,0,0,2330,2331,1,0,0,0,2331,2333,3,256,
        128,0,2332,2329,1,0,0,0,2332,2333,1,0,0,0,2333,2338,1,0,0,0,2334,
        2336,5,188,0,0,2335,2334,1,0,0,0,2335,2336,1,0,0,0,2336,2337,1,0,
        0,0,2337,2339,3,258,129,0,2338,2335,1,0,0,0,2338,2339,1,0,0,0,2339,
        2344,1,0,0,0,2340,2342,5,188,0,0,2341,2340,1,0,0,0,2341,2342,1,0,
        0,0,2342,2343,1,0,0,0,2343,2345,3,260,130,0,2344,2341,1,0,0,0,2344,
        2345,1,0,0,0,2345,255,1,0,0,0,2346,2347,5,48,0,0,2347,2349,5,188,
        0,0,2348,2346,1,0,0,0,2348,2349,1,0,0,0,2349,2350,1,0,0,0,2350,2352,
        5,157,0,0,2351,2353,5,188,0,0,2352,2351,1,0,0,0,2352,2353,1,0,0,
        0,2353,2354,1,0,0,0,2354,2356,5,2,0,0,2355,2357,5,188,0,0,2356,2355,
        1,0,0,0,2356,2357,1,0,0,0,2357,2358,1,0,0,0,2358,2360,3,368,184,
        0,2359,2361,5,188,0,0,2360,2359,1,0,0,0,2360,2361,1,0,0,0,2361,2362,
        1,0,0,0,2362,2363,5,3,0,0,2363,2371,1,0,0,0,2364,2371,5,137,0,0,
        2365,2366,5,48,0,0,2366,2367,5,188,0,0,2367,2371,5,137,0,0,2368,
        2371,5,144,0,0,2369,2371,5,45,0,0,2370,2348,1,0,0,0,2370,2364,1,
        0,0,0,2370,2365,1,0,0,0,2370,2368,1,0,0,0,2370,2369,1,0,0,0,2371,
        257,1,0,0,0,2372,2374,3,264,132,0,2373,2372,1,0,0,0,2373,2374,1,
        0,0,0,2374,2376,1,0,0,0,2375,2377,5,188,0,0,2376,2375,1,0,0,0,2376,
        2377,1,0,0,0,2377,2378,1,0,0,0,2378,2380,5,170,0,0,2379,2381,5,188,
        0,0,2380,2379,1,0,0,0,2380,2381,1,0,0,0,2381,2383,1,0,0,0,2382,2384,
        3,266,133,0,2383,2382,1,0,0,0,2383,2384,1,0,0,0,2384,2387,1,0,0,
        0,2385,2387,3,370,185,0,2386,2373,1,0,0,0,2386,2385,1,0,0,0,2387,
        259,1,0,0,0,2388,2390,5,2,0,0,2389,2391,5,188,0,0,2390,2389,1,0,
        0,0,2390,2391,1,0,0,0,2391,2392,1,0,0,0,2392,2394,3,360,180,0,2393,
        2395,5,188,0,0,2394,2393,1,0,0,0,2394,2395,1,0,0,0,2395,2396,1,0,
        0,0,2396,2398,5,4,0,0,2397,2399,5,188,0,0,2398,2397,1,0,0,0,2398,
        2399,1,0,0,0,2399,2400,1,0,0,0,2400,2412,3,360,180,0,2401,2403,5,
        188,0,0,2402,2401,1,0,0,0,2402,2403,1,0,0,0,2403,2404,1,0,0,0,2404,
        2406,5,11,0,0,2405,2407,5,188,0,0,2406,2405,1,0,0,0,2406,2407,1,
        0,0,0,2407,2408,1,0,0,0,2408,2410,3,230,115,0,2409,2411,5,188,0,
        0,2410,2409,1,0,0,0,2410,2411,1,0,0,0,2411,2413,1,0,0,0,2412,2402,
        1,0,0,0,2412,2413,1,0,0,0,2413,2433,1,0,0,0,2414,2416,5,188,0,0,
        2415,2414,1,0,0,0,2415,2416,1,0,0,0,2416,2417,1,0,0,0,2417,2419,
        5,11,0,0,2418,2420,5,188,0,0,2419,2418,1,0,0,0,2419,2420,1,0,0,0,
        2420,2421,1,0,0,0,2421,2423,3,262,131,0,2422,2424,5,188,0,0,2423,
        2422,1,0,0,0,2423,2424,1,0,0,0,2424,2425,1,0,0,0,2425,2427,5,4,0,
        0,2426,2428,5,188,0,0,2427,2426,1,0,0,0,2427,2428,1,0,0,0,2428,2429,
        1,0,0,0,2429,2431,3,262,131,0,2430,2432,5,188,0,0,2431,2430,1,0,
        0,0,2431,2432,1,0,0,0,2432,2434,1,0,0,0,2433,2415,1,0,0,0,2433,2434,
        1,0,0,0,2434,2435,1,0,0,0,2435,2436,5,3,0,0,2436,261,1,0,0,0,2437,
        2439,5,9,0,0,2438,2440,5,188,0,0,2439,2438,1,0,0,0,2439,2440,1,0,
        0,0,2440,2442,1,0,0,0,2441,2443,3,218,109,0,2442,2441,1,0,0,0,2442,
        2443,1,0,0,0,2443,2445,1,0,0,0,2444,2446,5,188,0,0,2445,2444,1,0,
        0,0,2445,2446,1,0,0,0,2446,2447,1,0,0,0,2447,2448,5,10,0,0,2448,
        263,1,0,0,0,2449,2450,5,175,0,0,2450,265,1,0,0,0,2451,2452,5,175,
        0,0,2452,267,1,0,0,0,2453,2456,3,374,187,0,2454,2455,5,5,0,0,2455,
        2457,3,374,187,0,2456,2454,1,0,0,0,2456,2457,1,0,0,0,2457,269,1,
        0,0,0,2458,2459,3,374,187,0,2459,271,1,0,0,0,2460,2461,3,274,137,
        0,2461,273,1,0,0,0,2462,2469,3,276,138,0,2463,2464,5,188,0,0,2464,
        2465,5,123,0,0,2465,2466,5,188,0,0,2466,2468,3,276,138,0,2467,2463,
        1,0,0,0,2468,2471,1,0,0,0,2469,2467,1,0,0,0,2469,2470,1,0,0,0,2470,
        275,1,0,0,0,2471,2469,1,0,0,0,2472,2479,3,278,139,0,2473,2474,5,
        188,0,0,2474,2475,5,158,0,0,2475,2476,5,188,0,0,2476,2478,3,278,
        139,0,2477,2473,1,0,0,0,2478,2481,1,0,0,0,2479,2477,1,0,0,0,2479,
        2480,1,0,0,0,2480,277,1,0,0,0,2481,2479,1,0,0,0,2482,2489,3,280,
        140,0,2483,2484,5,188,0,0,2484,2485,5,51,0,0,2485,2486,5,188,0,0,
        2486,2488,3,280,140,0,2487,2483,1,0,0,0,2488,2491,1,0,0,0,2489,2487,
        1,0,0,0,2489,2490,1,0,0,0,2490,279,1,0,0,0,2491,2489,1,0,0,0,2492,
        2494,5,116,0,0,2493,2495,5,188,0,0,2494,2493,1,0,0,0,2494,2495,1,
        0,0,0,2495,2497,1,0,0,0,2496,2492,1,0,0,0,2497,2500,1,0,0,0,2498,
        2496,1,0,0,0,2498,2499,1,0,0,0,2499,2501,1,0,0,0,2500,2498,1,0,0,
        0,2501,2502,3,282,141,0,2502,281,1,0,0,0,2503,2513,3,286,143,0,2504,
        2506,5,188,0,0,2505,2504,1,0,0,0,2505,2506,1,0,0,0,2506,2507,1,0,
        0,0,2507,2509,3,284,142,0,2508,2510,5,188,0,0,2509,2508,1,0,0,0,
        2509,2510,1,0,0,0,2510,2511,1,0,0,0,2511,2512,3,286,143,0,2512,2514,
        1,0,0,0,2513,2505,1,0,0,0,2513,2514,1,0,0,0,2514,2552,1,0,0,0,2515,
        2517,3,286,143,0,2516,2518,5,188,0,0,2517,2516,1,0,0,0,2517,2518,
        1,0,0,0,2518,2519,1,0,0,0,2519,2521,5,168,0,0,2520,2522,5,188,0,
        0,2521,2520,1,0,0,0,2521,2522,1,0,0,0,2522,2523,1,0,0,0,2523,2524,
        3,286,143,0,2524,2525,1,0,0,0,2525,2526,6,141,-1,0,2526,2552,1,0,
        0,0,2527,2529,3,286,143,0,2528,2530,5,188,0,0,2529,2528,1,0,0,0,
        2529,2530,1,0,0,0,2530,2531,1,0,0,0,2531,2533,3,284,142,0,2532,2534,
        5,188,0,0,2533,2532,1,0,0,0,2533,2534,1,0,0,0,2534,2535,1,0,0,0,
        2535,2545,3,286,143,0,2536,2538,5,188,0,0,2537,2536,1,0,0,0,2537,
        2538,1,0,0,0,2538,2539,1,0,0,0,2539,2541,3,284,142,0,2540,2542,5,
        188,0,0,2541,2540,1,0,0,0,2541,2542,1,0,0,0,2542,2543,1,0,0,0,2543,
        2544,3,286,143,0,2544,2546,1,0,0,0,2545,2537,1,0,0,0,2546,2547,1,
        0,0,0,2547,2545,1,0,0,0,2547,2548,1,0,0,0,2548,2549,1,0,0,0,2549,
        2550,6,141,-1,0,2550,2552,1,0,0,0,2551,2503,1,0,0,0,2551,2515,1,
        0,0,0,2551,2527,1,0,0,0,2552,283,1,0,0,0,2553,2554,7,3,0,0,2554,
        285,1,0,0,0,2555,2566,3,288,144,0,2556,2558,5,188,0,0,2557,2556,
        1,0,0,0,2557,2558,1,0,0,0,2558,2559,1,0,0,0,2559,2561,5,11,0,0,2560,
        2562,5,188,0,0,2561,2560,1,0,0,0,2561,2562,1,0,0,0,2562,2563,1,0,
        0,0,2563,2565,3,288,144,0,2564,2557,1,0,0,0,2565,2568,1,0,0,0,2566,
        2564,1,0,0,0,2566,2567,1,0,0,0,2567,287,1,0,0,0,2568,2566,1,0,0,
        0,2569,2580,3,290,145,0,2570,2572,5,188,0,0,2571,2570,1,0,0,0,2571,
        2572,1,0,0,0,2572,2573,1,0,0,0,2573,2575,5,17,0,0,2574,2576,5,188,
        0,0,2575,2574,1,0,0,0,2575,2576,1,0,0,0,2576,2577,1,0,0,0,2577,2579,
        3,290,145,0,2578,2571,1,0,0,0,2579,2582,1,0,0,0,2580,2578,1,0,0,
        0,2580,2581,1,0,0,0,2581,289,1,0,0,0,2582,2580,1,0,0,0,2583,2595,
        3,294,147,0,2584,2586,5,188,0,0,2585,2584,1,0,0,0,2585,2586,1,0,
        0,0,2586,2587,1,0,0,0,2587,2589,3,292,146,0,2588,2590,5,188,0,0,
        2589,2588,1,0,0,0,2589,2590,1,0,0,0,2590,2591,1,0,0,0,2591,2592,
        3,294,147,0,2592,2594,1,0,0,0,2593,2585,1,0,0,0,2594,2597,1,0,0,
        0,2595,2593,1,0,0,0,2595,2596,1,0,0,0,2596,291,1,0,0,0,2597,2595,
        1,0,0,0,2598,2599,7,4,0,0,2599,293,1,0,0,0,2600,2612,3,298,149,0,
        2601,2603,5,188,0,0,2602,2601,1,0,0,0,2602,2603,1,0,0,0,2603,2604,
        1,0,0,0,2604,2606,3,296,148,0,2605,2607,5,188,0,0,2606,2605,1,0,
        0,0,2606,2607,1,0,0,0,2607,2608,1,0,0,0,2608,2609,3,298,149,0,2609,
        2611,1,0,0,0,2610,2602,1,0,0,0,2611,2614,1,0,0,0,2612,2610,1,0,0,
        0,2612,2613,1,0,0,0,2613,295,1,0,0,0,2614,2612,1,0,0,0,2615,2616,
        7,5,0,0,2616,297,1,0,0,0,2617,2629,3,302,151,0,2618,2620,5,188,0,
        0,2619,2618,1,0,0,0,2619,2620,1,0,0,0,2620,2621,1,0,0,0,2621,2623,
        3,300,150,0,2622,2624,5,188,0,0,2623,2622,1,0,0,0,2623,2624,1,0,
        0,0,2624,2625,1,0,0,0,2625,2626,3,302,151,0,2626,2628,1,0,0,0,2627,
        2619,1,0,0,0,2628,2631,1,0,0,0,2629,2627,1,0,0,0,2629,2630,1,0,0,
        0,2630,299,1,0,0,0,2631,2629,1,0,0,0,2632,2633,7,6,0,0,2633,301,
        1,0,0,0,2634,2645,3,304,152,0,2635,2637,5,188,0,0,2636,2635,1,0,
        0,0,2636,2637,1,0,0,0,2637,2638,1,0,0,0,2638,2640,5,23,0,0,2639,
        2641,5,188,0,0,2640,2639,1,0,0,0,2640,2641,1,0,0,0,2641,2642,1,0,
        0,0,2642,2644,3,304,152,0,2643,2636,1,0,0,0,2644,2647,1,0,0,0,2645,
        2643,1,0,0,0,2645,2646,1,0,0,0,2646,303,1,0,0,0,2647,2645,1,0,0,
        0,2648,2656,3,314,157,0,2649,2657,3,308,154,0,2650,2652,3,306,153,
        0,2651,2650,1,0,0,0,2652,2653,1,0,0,0,2653,2651,1,0,0,0,2653,2654,
        1,0,0,0,2654,2657,1,0,0,0,2655,2657,3,312,156,0,2656,2649,1,0,0,
        0,2656,2651,1,0,0,0,2656,2655,1,0,0,0,2656,2657,1,0,0,0,2657,305,
        1,0,0,0,2658,2659,5,188,0,0,2659,2661,5,99,0,0,2660,2662,5,188,0,
        0,2661,2660,1,0,0,0,2661,2662,1,0,0,0,2662,2663,1,0,0,0,2663,2678,
        3,316,158,0,2664,2665,5,7,0,0,2665,2666,3,272,136,0,2666,2667,5,
        8,0,0,2667,2678,1,0,0,0,2668,2670,5,7,0,0,2669,2671,3,272,136,0,
        2670,2669,1,0,0,0,2670,2671,1,0,0,0,2671,2672,1,0,0,0,2672,2674,
        7,7,0,0,2673,2675,3,272,136,0,2674,2673,1,0,0,0,2674,2675,1,0,0,
        0,2675,2676,1,0,0,0,2676,2678,5,8,0,0,2677,2658,1,0,0,0,2677,2664,
        1,0,0,0,2677,2668,1,0,0,0,2678,307,1,0,0,0,2679,2691,3,310,155,0,
        2680,2681,5,188,0,0,2681,2682,5,139,0,0,2682,2683,5,188,0,0,2683,
        2691,5,155,0,0,2684,2685,5,188,0,0,2685,2686,5,82,0,0,2686,2687,
        5,188,0,0,2687,2691,5,155,0,0,2688,2689,5,188,0,0,2689,2691,5,66,
        0,0,2690,2679,1,0,0,0,2690,2680,1,0,0,0,2690,2684,1,0,0,0,2690,2688,
        1,0,0,0,2691,2693,1,0,0,0,2692,2694,5,188,0,0,2693,2692,1,0,0,0,
        2693,2694,1,0,0,0,2694,2695,1,0,0,0,2695,2696,3,316,158,0,2696,309,
        1,0,0,0,2697,2699,5,188,0,0,2698,2697,1,0,0,0,2698,2699,1,0,0,0,
        2699,2700,1,0,0,0,2700,2701,5,24,0,0,2701,311,1,0,0,0,2702,2703,
        5,188,0,0,2703,2704,5,102,0,0,2704,2705,5,188,0,0,2705,2713,5,118,
        0,0,2706,2707,5,188,0,0,2707,2708,5,102,0,0,2708,2709,5,188,0,0,
        2709,2710,5,116,0,0,2710,2711,5,188,0,0,2711,2713,5,118,0,0,2712,
        2702,1,0,0,0,2712,2706,1,0,0,0,2713,313,1,0,0,0,2714,2716,5,171,
        0,0,2715,2717,5,188,0,0,2716,2715,1,0,0,0,2716,2717,1,0,0,0,2717,
        2719,1,0,0,0,2718,2714,1,0,0,0,2719,2722,1,0,0,0,2720,2718,1,0,0,
        0,2720,2721,1,0,0,0,2721,2723,1,0,0,0,2722,2720,1,0,0,0,2723,2728,
        3,316,158,0,2724,2726,5,188,0,0,2725,2724,1,0,0,0,2725,2726,1,0,
        0,0,2726,2727,1,0,0,0,2727,2729,5,172,0,0,2728,2725,1,0,0,0,2728,
        2729,1,0,0,0,2729,315,1,0,0,0,2730,2737,3,318,159,0,2731,2733,5,
        188,0,0,2732,2731,1,0,0,0,2732,2733,1,0,0,0,2733,2734,1,0,0,0,2734,
        2736,3,354,177,0,2735,2732,1,0,0,0,2736,2739,1,0,0,0,2737,2735,1,
        0,0,0,2737,2738,1,0,0,0,2738,317,1,0,0,0,2739,2737,1,0,0,0,2740,
        2750,3,326,163,0,2741,2750,3,364,182,0,2742,2750,3,356,178,0,2743,
        2750,3,338,169,0,2744,2750,3,340,170,0,2745,2750,3,350,175,0,2746,
        2750,3,352,176,0,2747,2750,3,360,180,0,2748,2750,3,320,160,0,2749,
        2740,1,0,0,0,2749,2741,1,0,0,0,2749,2742,1,0,0,0,2749,2743,1,0,0,
        0,2749,2744,1,0,0,0,2749,2745,1,0,0,0,2749,2746,1,0,0,0,2749,2747,
        1,0,0,0,2749,2748,1,0,0,0,2750,319,1,0,0,0,2751,2753,5,48,0,0,2752,
        2754,5,188,0,0,2753,2752,1,0,0,0,2753,2754,1,0,0,0,2754,2755,1,0,
        0,0,2755,2757,5,2,0,0,2756,2758,5,188,0,0,2757,2756,1,0,0,0,2757,
        2758,1,0,0,0,2758,2759,1,0,0,0,2759,2761,3,322,161,0,2760,2762,5,
        188,0,0,2761,2760,1,0,0,0,2761,2762,1,0,0,0,2762,2763,1,0,0,0,2763,
        2764,5,3,0,0,2764,2808,1,0,0,0,2765,2767,5,46,0,0,2766,2768,5,188,
        0,0,2767,2766,1,0,0,0,2767,2768,1,0,0,0,2768,2769,1,0,0,0,2769,2771,
        5,2,0,0,2770,2772,5,188,0,0,2771,2770,1,0,0,0,2771,2772,1,0,0,0,
        2772,2773,1,0,0,0,2773,2775,3,322,161,0,2774,2776,5,188,0,0,2775,
        2774,1,0,0,0,2775,2776,1,0,0,0,2776,2777,1,0,0,0,2777,2778,5,3,0,
        0,2778,2808,1,0,0,0,2779,2781,5,117,0,0,2780,2782,5,188,0,0,2781,
        2780,1,0,0,0,2781,2782,1,0,0,0,2782,2783,1,0,0,0,2783,2785,5,2,0,
        0,2784,2786,5,188,0,0,2785,2784,1,0,0,0,2785,2786,1,0,0,0,2786,2787,
        1,0,0,0,2787,2789,3,322,161,0,2788,2790,5,188,0,0,2789,2788,1,0,
        0,0,2789,2790,1,0,0,0,2790,2791,1,0,0,0,2791,2792,5,3,0,0,2792,2808,
        1,0,0,0,2793,2795,5,159,0,0,2794,2796,5,188,0,0,2795,2794,1,0,0,
        0,2795,2796,1,0,0,0,2796,2797,1,0,0,0,2797,2799,5,2,0,0,2798,2800,
        5,188,0,0,2799,2798,1,0,0,0,2799,2800,1,0,0,0,2800,2801,1,0,0,0,
        2801,2803,3,322,161,0,2802,2804,5,188,0,0,2803,2802,1,0,0,0,2803,
        2804,1,0,0,0,2804,2805,1,0,0,0,2805,2806,5,3,0,0,2806,2808,1,0,0,
        0,2807,2751,1,0,0,0,2807,2765,1,0,0,0,2807,2779,1,0,0,0,2807,2793,
        1,0,0,0,2808,321,1,0,0,0,2809,2810,3,324,162,0,2810,2811,5,188,0,
        0,2811,2812,3,230,115,0,2812,323,1,0,0,0,2813,2814,3,360,180,0,2814,
        2815,5,188,0,0,2815,2816,5,99,0,0,2816,2817,5,188,0,0,2817,2818,
        3,272,136,0,2818,325,1,0,0,0,2819,2826,3,362,181,0,2820,2826,5,173,
        0,0,2821,2826,3,328,164,0,2822,2826,5,118,0,0,2823,2826,3,330,165,
        0,2824,2826,3,334,167,0,2825,2819,1,0,0,0,2825,2820,1,0,0,0,2825,
        2821,1,0,0,0,2825,2822,1,0,0,0,2825,2823,1,0,0,0,2825,2824,1,0,0,
        0,2826,327,1,0,0,0,2827,2828,7,8,0,0,2828,329,1,0,0,0,2829,2831,
        5,7,0,0,2830,2832,5,188,0,0,2831,2830,1,0,0,0,2831,2832,1,0,0,0,
        2832,2846,1,0,0,0,2833,2835,3,272,136,0,2834,2836,5,188,0,0,2835,
        2834,1,0,0,0,2835,2836,1,0,0,0,2836,2843,1,0,0,0,2837,2839,3,332,
        166,0,2838,2840,5,188,0,0,2839,2838,1,0,0,0,2839,2840,1,0,0,0,2840,
        2842,1,0,0,0,2841,2837,1,0,0,0,2842,2845,1,0,0,0,2843,2841,1,0,0,
        0,2843,2844,1,0,0,0,2844,2847,1,0,0,0,2845,2843,1,0,0,0,2846,2833,
        1,0,0,0,2846,2847,1,0,0,0,2847,2848,1,0,0,0,2848,2849,5,8,0,0,2849,
        331,1,0,0,0,2850,2852,5,4,0,0,2851,2853,5,188,0,0,2852,2851,1,0,
        0,0,2852,2853,1,0,0,0,2853,2855,1,0,0,0,2854,2856,3,272,136,0,2855,
        2854,1,0,0,0,2855,2856,1,0,0,0,2856,333,1,0,0,0,2857,2859,5,9,0,
        0,2858,2860,5,188,0,0,2859,2858,1,0,0,0,2859,2860,1,0,0,0,2860,2861,
        1,0,0,0,2861,2863,3,336,168,0,2862,2864,5,188,0,0,2863,2862,1,0,
        0,0,2863,2864,1,0,0,0,2864,2875,1,0,0,0,2865,2867,5,4,0,0,2866,2868,
        5,188,0,0,2867,2866,1,0,0,0,2867,2868,1,0,0,0,2868,2869,1,0,0,0,
        2869,2871,3,336,168,0,2870,2872,5,188,0,0,2871,2870,1,0,0,0,2871,
        2872,1,0,0,0,2872,2874,1,0,0,0,2873,2865,1,0,0,0,2874,2877,1,0,0,
        0,2875,2873,1,0,0,0,2875,2876,1,0,0,0,2876,2878,1,0,0,0,2877,2875,
        1,0,0,0,2878,2879,5,10,0,0,2879,335,1,0,0,0,2880,2883,3,376,188,
        0,2881,2883,5,173,0,0,2882,2880,1,0,0,0,2882,2881,1,0,0,0,2883,2885,
        1,0,0,0,2884,2886,5,188,0,0,2885,2884,1,0,0,0,2885,2886,1,0,0,0,
        2886,2887,1,0,0,0,2887,2889,5,169,0,0,2888,2890,5,188,0,0,2889,2888,
        1,0,0,0,2889,2890,1,0,0,0,2890,2891,1,0,0,0,2891,2892,3,272,136,
        0,2892,337,1,0,0,0,2893,2895,5,2,0,0,2894,2896,5,188,0,0,2895,2894,
        1,0,0,0,2895,2896,1,0,0,0,2896,2897,1,0,0,0,2897,2899,3,272,136,
        0,2898,2900,5,188,0,0,2899,2898,1,0,0,0,2899,2900,1,0,0,0,2900,2901,
        1,0,0,0,2901,2902,5,3,0,0,2902,339,1,0,0,0,2903,2905,5,68,0,0,2904,
        2906,5,188,0,0,2905,2904,1,0,0,0,2905,2906,1,0,0,0,2906,2907,1,0,
        0,0,2907,2909,5,2,0,0,2908,2910,5,188,0,0,2909,2908,1,0,0,0,2909,
        2910,1,0,0,0,2910,2911,1,0,0,0,2911,2913,5,166,0,0,2912,2914,5,188,
        0,0,2913,2912,1,0,0,0,2913,2914,1,0,0,0,2914,2915,1,0,0,0,2915,2981,
        5,3,0,0,2916,2918,5,60,0,0,2917,2919,5,188,0,0,2918,2917,1,0,0,0,
        2918,2919,1,0,0,0,2919,2920,1,0,0,0,2920,2922,5,2,0,0,2921,2923,
        5,188,0,0,2922,2921,1,0,0,0,2922,2923,1,0,0,0,2923,2924,1,0,0,0,
        2924,2926,3,344,172,0,2925,2927,5,188,0,0,2926,2925,1,0,0,0,2926,
        2927,1,0,0,0,2927,2938,1,0,0,0,2928,2930,5,52,0,0,2929,2931,5,188,
        0,0,2930,2929,1,0,0,0,2930,2931,1,0,0,0,2931,2932,1,0,0,0,2932,2939,
        3,142,71,0,2933,2935,5,4,0,0,2934,2936,5,188,0,0,2935,2934,1,0,0,
        0,2935,2936,1,0,0,0,2936,2937,1,0,0,0,2937,2939,3,344,172,0,2938,
        2928,1,0,0,0,2938,2933,1,0,0,0,2939,2941,1,0,0,0,2940,2942,5,188,
        0,0,2941,2940,1,0,0,0,2941,2942,1,0,0,0,2942,2943,1,0,0,0,2943,2944,
        5,3,0,0,2944,2981,1,0,0,0,2945,2947,3,342,171,0,2946,2948,5,188,
        0,0,2947,2946,1,0,0,0,2947,2948,1,0,0,0,2948,2949,1,0,0,0,2949,2951,
        5,2,0,0,2950,2952,5,188,0,0,2951,2950,1,0,0,0,2951,2952,1,0,0,0,
        2952,2957,1,0,0,0,2953,2955,5,78,0,0,2954,2956,5,188,0,0,2955,2954,
        1,0,0,0,2955,2956,1,0,0,0,2956,2958,1,0,0,0,2957,2953,1,0,0,0,2957,
        2958,1,0,0,0,2958,2976,1,0,0,0,2959,2961,3,344,172,0,2960,2962,5,
        188,0,0,2961,2960,1,0,0,0,2961,2962,1,0,0,0,2962,2973,1,0,0,0,2963,
        2965,5,4,0,0,2964,2966,5,188,0,0,2965,2964,1,0,0,0,2965,2966,1,0,
        0,0,2966,2967,1,0,0,0,2967,2969,3,344,172,0,2968,2970,5,188,0,0,
        2969,2968,1,0,0,0,2969,2970,1,0,0,0,2970,2972,1,0,0,0,2971,2963,
        1,0,0,0,2972,2975,1,0,0,0,2973,2971,1,0,0,0,2973,2974,1,0,0,0,2974,
        2977,1,0,0,0,2975,2973,1,0,0,0,2976,2959,1,0,0,0,2976,2977,1,0,0,
        0,2977,2978,1,0,0,0,2978,2979,5,3,0,0,2979,2981,1,0,0,0,2980,2903,
        1,0,0,0,2980,2916,1,0,0,0,2980,2945,1,0,0,0,2981,341,1,0,0,0,2982,
        2983,3,376,188,0,2983,343,1,0,0,0,2984,2986,3,376,188,0,2985,2987,
        5,188,0,0,2986,2985,1,0,0,0,2986,2987,1,0,0,0,2987,2988,1,0,0,0,
        2988,2989,5,169,0,0,2989,2991,5,6,0,0,2990,2992,5,188,0,0,2991,2990,
        1,0,0,0,2991,2992,1,0,0,0,2992,2994,1,0,0,0,2993,2984,1,0,0,0,2993,
        2994,1,0,0,0,2994,2995,1,0,0,0,2995,2998,3,272,136,0,2996,2998,3,
        346,173,0,2997,2993,1,0,0,0,2997,2996,1,0,0,0,2998,345,1,0,0,0,2999,
        3001,3,348,174,0,3000,3002,5,188,0,0,3001,3000,1,0,0,0,3001,3002,
        1,0,0,0,3002,3003,1,0,0,0,3003,3004,5,171,0,0,3004,3006,5,15,0,0,
        3005,3007,5,188,0,0,3006,3005,1,0,0,0,3006,3007,1,0,0,0,3007,3008,
        1,0,0,0,3008,3010,3,272,136,0,3009,3011,5,188,0,0,3010,3009,1,0,
        0,0,3010,3011,1,0,0,0,3011,347,1,0,0,0,3012,3037,3,376,188,0,3013,
        3015,5,2,0,0,3014,3016,5,188,0,0,3015,3014,1,0,0,0,3015,3016,1,0,
        0,0,3016,3017,1,0,0,0,3017,3019,3,376,188,0,3018,3020,5,188,0,0,
        3019,3018,1,0,0,0,3019,3020,1,0,0,0,3020,3031,1,0,0,0,3021,3023,
        5,4,0,0,3022,3024,5,188,0,0,3023,3022,1,0,0,0,3023,3024,1,0,0,0,
        3024,3025,1,0,0,0,3025,3027,3,376,188,0,3026,3028,5,188,0,0,3027,
        3026,1,0,0,0,3027,3028,1,0,0,0,3028,3030,1,0,0,0,3029,3021,1,0,0,
        0,3030,3033,1,0,0,0,3031,3029,1,0,0,0,3031,3032,1,0,0,0,3032,3034,
        1,0,0,0,3033,3031,1,0,0,0,3034,3035,5,3,0,0,3035,3037,1,0,0,0,3036,
        3012,1,0,0,0,3036,3013,1,0,0,0,3037,349,1,0,0,0,3038,3043,3,240,
        120,0,3039,3041,5,188,0,0,3040,3039,1,0,0,0,3040,3041,1,0,0,0,3041,
        3042,1,0,0,0,3042,3044,3,242,121,0,3043,3040,1,0,0,0,3044,3045,1,
        0,0,0,3045,3043,1,0,0,0,3045,3046,1,0,0,0,3046,351,1,0,0,0,3047,
        3049,7,9,0,0,3048,3050,5,188,0,0,3049,3048,1,0,0,0,3049,3050,1,0,
        0,0,3050,3051,1,0,0,0,3051,3053,5,9,0,0,3052,3054,5,188,0,0,3053,
        3052,1,0,0,0,3053,3054,1,0,0,0,3054,3055,1,0,0,0,3055,3057,5,109,
        0,0,3056,3058,5,188,0,0,3057,3056,1,0,0,0,3057,3058,1,0,0,0,3058,
        3059,1,0,0,0,3059,3064,3,232,116,0,3060,3062,5,188,0,0,3061,3060,
        1,0,0,0,3061,3062,1,0,0,0,3062,3063,1,0,0,0,3063,3065,3,230,115,
        0,3064,3061,1,0,0,0,3064,3065,1,0,0,0,3065,3070,1,0,0,0,3066,3068,
        5,188,0,0,3067,3066,1,0,0,0,3067,3068,1,0,0,0,3068,3069,1,0,0,0,
        3069,3071,3,194,97,0,3070,3067,1,0,0,0,3070,3071,1,0,0,0,3071,3073,
        1,0,0,0,3072,3074,5,188,0,0,3073,3072,1,0,0,0,3073,3074,1,0,0,0,
        3074,3075,1,0,0,0,3075,3076,5,10,0,0,3076,353,1,0,0,0,3077,3079,
        5,5,0,0,3078,3080,5,188,0,0,3079,3078,1,0,0,0,3079,3080,1,0,0,0,
        3080,3083,1,0,0,0,3081,3084,3,368,184,0,3082,3084,5,166,0,0,3083,
        3081,1,0,0,0,3083,3082,1,0,0,0,3084,355,1,0,0,0,3085,3090,5,59,0,
        0,3086,3088,5,188,0,0,3087,3086,1,0,0,0,3087,3088,1,0,0,0,3088,3089,
        1,0,0,0,3089,3091,3,358,179,0,3090,3087,1,0,0,0,3091,3092,1,0,0,
        0,3092,3090,1,0,0,0,3092,3093,1,0,0,0,3093,3108,1,0,0,0,3094,3096,
        5,59,0,0,3095,3097,5,188,0,0,3096,3095,1,0,0,0,3096,3097,1,0,0,0,
        3097,3098,1,0,0,0,3098,3103,3,272,136,0,3099,3101,5,188,0,0,3100,
        3099,1,0,0,0,3100,3101,1,0,0,0,3101,3102,1,0,0,0,3102,3104,3,358,
        179,0,3103,3100,1,0,0,0,3104,3105,1,0,0,0,3105,3103,1,0,0,0,3105,
        3106,1,0,0,0,3106,3108,1,0,0,0,3107,3085,1,0,0,0,3107,3094,1,0,0,
        0,3108,3117,1,0,0,0,3109,3111,5,188,0,0,3110,3109,1,0,0,0,3110,3111,
        1,0,0,0,3111,3112,1,0,0,0,3112,3114,5,80,0,0,3113,3115,5,188,0,0,
        3114,3113,1,0,0,0,3114,3115,1,0,0,0,3115,3116,1,0,0,0,3116,3118,
        3,272,136,0,3117,3110,1,0,0,0,3117,3118,1,0,0,0,3118,3120,1,0,0,
        0,3119,3121,5,188,0,0,3120,3119,1,0,0,0,3120,3121,1,0,0,0,3121,3122,
        1,0,0,0,3122,3123,5,81,0,0,3123,357,1,0,0,0,3124,3126,5,153,0,0,
        3125,3127,5,188,0,0,3126,3125,1,0,0,0,3126,3127,1,0,0,0,3127,3128,
        1,0,0,0,3128,3130,3,272,136,0,3129,3131,5,188,0,0,3130,3129,1,0,
        0,0,3130,3131,1,0,0,0,3131,3132,1,0,0,0,3132,3134,5,142,0,0,3133,
        3135,5,188,0,0,3134,3133,1,0,0,0,3134,3135,1,0,0,0,3135,3136,1,0,
        0,0,3136,3137,3,272,136,0,3137,359,1,0,0,0,3138,3139,3,376,188,0,
        3139,361,1,0,0,0,3140,3143,3,372,186,0,3141,3143,3,370,185,0,3142,
        3140,1,0,0,0,3142,3141,1,0,0,0,3143,363,1,0,0,0,3144,3147,5,25,0,
        0,3145,3148,3,376,188,0,3146,3148,5,175,0,0,3147,3145,1,0,0,0,3147,
        3146,1,0,0,0,3148,365,1,0,0,0,3149,3151,3,318,159,0,3150,3152,5,
        188,0,0,3151,3150,1,0,0,0,3151,3152,1,0,0,0,3152,3153,1,0,0,0,3153,
        3154,3,354,177,0,3154,367,1,0,0,0,3155,3156,3,376,188,0,3156,369,
        1,0,0,0,3157,3158,5,175,0,0,3158,371,1,0,0,0,3159,3160,7,10,0,0,
        3160,373,1,0,0,0,3161,3164,3,376,188,0,3162,3163,5,5,0,0,3163,3165,
        3,376,188,0,3164,3162,1,0,0,0,3164,3165,1,0,0,0,3165,375,1,0,0,0,
        3166,3172,5,184,0,0,3167,3168,5,187,0,0,3168,3172,6,188,-1,0,3169,
        3172,5,176,0,0,3170,3172,3,378,189,0,3171,3166,1,0,0,0,3171,3167,
        1,0,0,0,3171,3169,1,0,0,0,3171,3170,1,0,0,0,3172,377,1,0,0,0,3173,
        3174,7,11,0,0,3174,379,1,0,0,0,3175,3176,7,12,0,0,3176,381,1,0,0,
        0,3177,3178,7,13,0,0,3178,383,1,0,0,0,3179,3180,7,14,0,0,3180,385,
        1,0,0,0,543,388,392,397,401,406,409,413,416,444,450,457,461,465,
        469,472,476,480,484,489,493,495,502,506,515,520,530,534,538,543,
        556,560,568,572,576,580,588,592,596,600,615,620,626,630,633,636,
        642,646,651,654,658,661,664,668,672,678,682,687,705,716,722,726,
        733,753,757,760,763,766,769,773,778,782,792,796,801,806,811,817,
        821,825,830,837,841,845,848,865,869,873,877,881,884,887,895,900,
        904,908,912,921,925,930,934,938,942,946,948,952,956,958,966,971,
        975,979,983,988,994,998,1011,1015,1018,1021,1024,1028,1032,1035,
        1038,1042,1046,1052,1056,1060,1064,1070,1074,1078,1082,1088,1092,
        1097,1109,1113,1117,1122,1140,1147,1160,1167,1183,1187,1196,1204,
        1207,1217,1220,1228,1231,1237,1240,1246,1261,1271,1274,1278,1282,
        1301,1308,1315,1326,1349,1358,1368,1372,1376,1380,1385,1389,1399,
        1403,1408,1417,1421,1426,1432,1438,1444,1448,1452,1458,1462,1466,
        1472,1476,1480,1486,1490,1494,1498,1502,1508,1512,1516,1520,1524,
        1534,1540,1547,1552,1558,1563,1580,1586,1592,1596,1600,1609,1623,
        1628,1633,1637,1642,1648,1653,1656,1660,1664,1668,1674,1678,1683,
        1688,1692,1695,1697,1701,1705,1711,1715,1720,1724,1733,1739,1747,
        1751,1755,1759,1766,1770,1774,1778,1781,1784,1791,1797,1801,1806,
        1813,1816,1819,1824,1828,1832,1837,1841,1850,1854,1859,1873,1875,
        1877,1882,1892,1898,1905,1918,1922,1926,1930,1935,1940,1944,1948,
        1952,1956,1960,1966,1970,1974,1978,1983,1989,1992,1998,2001,2007,
        2011,2015,2019,2023,2028,2033,2037,2042,2045,2054,2063,2068,2081,
        2084,2092,2096,2101,2106,2110,2115,2121,2126,2133,2137,2141,2143,
        2147,2149,2153,2155,2161,2167,2171,2174,2177,2183,2186,2189,2193,
        2199,2202,2205,2209,2213,2217,2219,2223,2225,2229,2231,2235,2237,
        2243,2247,2251,2255,2259,2263,2267,2271,2275,2278,2284,2288,2292,
        2295,2300,2305,2309,2313,2316,2319,2324,2329,2332,2335,2338,2341,
        2344,2348,2352,2356,2360,2370,2373,2376,2380,2383,2386,2390,2394,
        2398,2402,2406,2410,2412,2415,2419,2423,2427,2431,2433,2439,2442,
        2445,2456,2469,2479,2489,2494,2498,2505,2509,2513,2517,2521,2529,
        2533,2537,2541,2547,2551,2557,2561,2566,2571,2575,2580,2585,2589,
        2595,2602,2606,2612,2619,2623,2629,2636,2640,2645,2653,2656,2661,
        2670,2674,2677,2690,2693,2698,2712,2716,2720,2725,2728,2732,2737,
        2749,2753,2757,2761,2767,2771,2775,2781,2785,2789,2795,2799,2803,
        2807,2825,2831,2835,2839,2843,2846,2852,2855,2859,2863,2867,2871,
        2875,2882,2885,2889,2895,2899,2905,2909,2913,2918,2922,2926,2930,
        2935,2938,2941,2947,2951,2955,2957,2961,2965,2969,2973,2976,2980,
        2986,2991,2993,2997,3001,3006,3010,3015,3019,3023,3027,3031,3036,
        3040,3045,3049,3053,3057,3061,3064,3067,3070,3073,3079,3083,3087,
        3092,3096,3100,3105,3107,3110,3114,3117,3120,3126,3130,3134,3142,
        3147,3151,3164,3171
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!CypherParser.__ATN) {
            CypherParser.__ATN = new antlr.ATNDeserializer().deserialize(CypherParser._serializedATN);
        }

        return CypherParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(CypherParser.literalNames, CypherParser.symbolicNames, []);

    public override getVocabulary(): antlr.Vocabulary {
        return CypherParser.vocabulary;
    }

    private static readonly decisionsToDFA = CypherParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class IC_StatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Cypher__list(): OC_CypherContext[] {
        return this.getTypedRuleContexts(OC_CypherContext);
    }
    public oC_Cypher(i: number): OC_CypherContext {
        return this.getTypedRuleContext(OC_CypherContext, i);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(CypherParser.EOF, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Statements;
    }
}


export class OC_CypherContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Statement(): OC_StatementContext {
        return this.getTypedRuleContext(OC_StatementContext, 0);
    }
    public oC_AnyCypherOption(): OC_AnyCypherOptionContext {
        return this.getTypedRuleContext(OC_AnyCypherOptionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Cypher;
    }
}


export class OC_StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public iC_Analyze(): IC_AnalyzeContext {
        return this.getTypedRuleContext(IC_AnalyzeContext, 0);
    }
    public iC_CreateUser(): IC_CreateUserContext {
        return this.getTypedRuleContext(IC_CreateUserContext, 0);
    }
    public iC_CreateRole(): IC_CreateRoleContext {
        return this.getTypedRuleContext(IC_CreateRoleContext, 0);
    }
    public iC_CreateNodeTable(): IC_CreateNodeTableContext {
        return this.getTypedRuleContext(IC_CreateNodeTableContext, 0);
    }
    public iC_CreateRelTable(): IC_CreateRelTableContext {
        return this.getTypedRuleContext(IC_CreateRelTableContext, 0);
    }
    public iC_CreateIndex(): IC_CreateIndexContext {
        return this.getTypedRuleContext(IC_CreateIndexContext, 0);
    }
    public iC_CreateSequence(): IC_CreateSequenceContext {
        return this.getTypedRuleContext(IC_CreateSequenceContext, 0);
    }
    public iC_CreateType(): IC_CreateTypeContext {
        return this.getTypedRuleContext(IC_CreateTypeContext, 0);
    }
    public iC_Drop(): IC_DropContext {
        return this.getTypedRuleContext(IC_DropContext, 0);
    }
    public iC_AlterTable(): IC_AlterTableContext {
        return this.getTypedRuleContext(IC_AlterTableContext, 0);
    }
    public iC_CopyFrom(): IC_CopyFromContext {
        return this.getTypedRuleContext(IC_CopyFromContext, 0);
    }
    public iC_CopyFromByColumn(): IC_CopyFromByColumnContext {
        return this.getTypedRuleContext(IC_CopyFromByColumnContext, 0);
    }
    public iC_CopyTO(): IC_CopyTOContext {
        return this.getTypedRuleContext(IC_CopyTOContext, 0);
    }
    public iC_StandaloneCall(): IC_StandaloneCallContext {
        return this.getTypedRuleContext(IC_StandaloneCallContext, 0);
    }
    public iC_CreateMacro(): IC_CreateMacroContext {
        return this.getTypedRuleContext(IC_CreateMacroContext, 0);
    }
    public iC_CommentOn(): IC_CommentOnContext {
        return this.getTypedRuleContext(IC_CommentOnContext, 0);
    }
    public iC_Transaction(): IC_TransactionContext {
        return this.getTypedRuleContext(IC_TransactionContext, 0);
    }
    public iC_Extension(): IC_ExtensionContext {
        return this.getTypedRuleContext(IC_ExtensionContext, 0);
    }
    public iC_ExportDatabase(): IC_ExportDatabaseContext {
        return this.getTypedRuleContext(IC_ExportDatabaseContext, 0);
    }
    public iC_ImportDatabase(): IC_ImportDatabaseContext {
        return this.getTypedRuleContext(IC_ImportDatabaseContext, 0);
    }
    public iC_AttachDatabase(): IC_AttachDatabaseContext {
        return this.getTypedRuleContext(IC_AttachDatabaseContext, 0);
    }
    public iC_DetachDatabase(): IC_DetachDatabaseContext {
        return this.getTypedRuleContext(IC_DetachDatabaseContext, 0);
    }
    public iC_UseDatabase(): IC_UseDatabaseContext {
        return this.getTypedRuleContext(IC_UseDatabaseContext, 0);
    }
    public iC_CreateGraph(): IC_CreateGraphContext {
        return this.getTypedRuleContext(IC_CreateGraphContext, 0);
    }
    public iC_UseGraph(): IC_UseGraphContext {
        return this.getTypedRuleContext(IC_UseGraphContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Statement;
    }
}


export class IC_CopyFromContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(CypherParser.COPY, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public iC_ScanSource(): IC_ScanSourceContext {
        return this.getTypedRuleContext(IC_ScanSourceContext, 0);
    }
    public iC_ColumnNames(): IC_ColumnNamesContext {
        return this.getTypedRuleContext(IC_ColumnNamesContext, 0);
    }
    public iC_Options(): IC_OptionsContext {
        return this.getTypedRuleContext(IC_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CopyFrom;
    }
}


export class IC_ColumnNamesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName__list(): OC_SchemaNameContext[] {
        return this.getTypedRuleContexts(OC_SchemaNameContext);
    }
    public oC_SchemaName(i: number): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ColumnNames;
    }
}


export class IC_ScanSourceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_FilePaths(): IC_FilePathsContext {
        return this.getTypedRuleContext(IC_FilePathsContext, 0);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Parameter(): OC_ParameterContext {
        return this.getTypedRuleContext(OC_ParameterContext, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        return this.getTypedRuleContext(OC_FunctionInvocationContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ScanSource;
    }
}


export class IC_CopyFromByColumnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(CypherParser.COPY, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public StringLiteral__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.StringLiteral);
    }
    public StringLiteral(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, i);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLUMN, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CopyFromByColumn;
    }
}


export class IC_CopyTOContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(CypherParser.COPY, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public iC_Options(): IC_OptionsContext {
        return this.getTypedRuleContext(IC_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CopyTO;
    }
}


export class IC_ExportDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPORT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DATABASE, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public iC_Options(): IC_OptionsContext {
        return this.getTypedRuleContext(IC_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ExportDatabase;
    }
}


export class IC_ImportDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IMPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.IMPORT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DATABASE, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ImportDatabase;
    }
}


export class IC_AttachDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ATTACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.ATTACH, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public DBTYPE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DBTYPE, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public iC_Options(): IC_OptionsContext {
        return this.getTypedRuleContext(IC_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_AttachDatabase;
    }
}


export class IC_OptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public oC_Literal(): OC_LiteralContext {
        return this.getTypedRuleContext(OC_LiteralContext, 0);
    }
    public iC_OptionQualifier(): IC_OptionQualifierContext {
        return this.getTypedRuleContext(IC_OptionQualifierContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Option;
    }
}


export class IC_OptionQualifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_OptionQualifier;
    }
}


export class IC_OptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_Option__list(): IC_OptionContext[] {
        return this.getTypedRuleContexts(IC_OptionContext);
    }
    public iC_Option(i: number): IC_OptionContext {
        return this.getTypedRuleContext(IC_OptionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Options;
    }
}


export class IC_DetachDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DETACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.DETACH, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_DetachDatabase;
    }
}


export class IC_UseDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(CypherParser.USE, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_UseDatabase;
    }
}


export class IC_CreateGraphContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public GRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.GRAPH, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public ANY(): antlr.TerminalNode {
        return this.getToken(CypherParser.ANY, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateGraph;
    }
}


export class IC_UseGraphContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(CypherParser.USE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public GRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.GRAPH, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_UseGraph;
    }
}


export class IC_AnalyzeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ANALYZE(): antlr.TerminalNode {
        return this.getToken(CypherParser.ANALYZE, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Analyze;
    }
}


export class IC_StandaloneCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.CALL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        return this.getTypedRuleContext(OC_FunctionInvocationContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_StandaloneCall;
    }
}


export class IC_CommentOnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMENT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMENT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(CypherParser.ON, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(CypherParser.IS, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CommentOn;
    }
}


export class IC_CreateMacroContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public MACRO(): antlr.TerminalNode {
        return this.getToken(CypherParser.MACRO, 0);
    }
    public oC_FunctionName(): OC_FunctionNameContext {
        return this.getTypedRuleContext(OC_FunctionNameContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public iC_PositionalArgs(): IC_PositionalArgsContext {
        return this.getTypedRuleContext(IC_PositionalArgsContext, 0);
    }
    public iC_DefaultArg__list(): IC_DefaultArgContext[] {
        return this.getTypedRuleContexts(IC_DefaultArgContext);
    }
    public iC_DefaultArg(i: number): IC_DefaultArgContext {
        return this.getTypedRuleContext(IC_DefaultArgContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateMacro;
    }
}


export class IC_PositionalArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName__list(): OC_SymbolicNameContext[] {
        return this.getTypedRuleContexts(OC_SymbolicNameContext);
    }
    public oC_SymbolicName(i: number): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_PositionalArgs;
    }
}


export class IC_DefaultArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public oC_Literal(): OC_LiteralContext {
        return this.getTypedRuleContext(OC_LiteralContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_DefaultArg;
    }
}


export class IC_FilePathsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public StringLiteral__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.StringLiteral);
    }
    public StringLiteral(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public GLOB(): antlr.TerminalNode {
        return this.getToken(CypherParser.GLOB, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_FilePaths;
    }
}


export class IC_IfNotExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(CypherParser.IF, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(CypherParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXISTS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_IfNotExists;
    }
}


export class IC_CreateNodeTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public NODE(): antlr.TerminalNode {
        return this.getToken(CypherParser.NODE, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public iC_PropertyDefinitions(): IC_PropertyDefinitionsContext {
        return this.getTypedRuleContext(IC_PropertyDefinitionsContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        return this.getTypedRuleContext(IC_IfNotExistsContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public iC_Options(): IC_OptionsContext {
        return this.getTypedRuleContext(IC_OptionsContext, 0);
    }
    public iC_CreateNodeConstraint(): IC_CreateNodeConstraintContext {
        return this.getTypedRuleContext(IC_CreateNodeConstraintContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateNodeTable;
    }
}


export class IC_CreateRelTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public REL(): antlr.TerminalNode {
        return this.getToken(CypherParser.REL, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public iC_CreateFromToConnections(): IC_CreateFromToConnectionsContext {
        return this.getTypedRuleContext(IC_CreateFromToConnectionsContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public GROUP(): antlr.TerminalNode {
        return this.getToken(CypherParser.GROUP, 0);
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        return this.getTypedRuleContext(IC_IfNotExistsContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public iC_Options(): IC_OptionsContext {
        return this.getTypedRuleContext(IC_OptionsContext, 0);
    }
    public iC_PropertyDefinitions(): IC_PropertyDefinitionsContext {
        return this.getTypedRuleContext(IC_PropertyDefinitionsContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateRelTable;
    }
}


export class IC_CreateIndexContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(CypherParser.INDEX, 0);
    }
    public FOR(): antlr.TerminalNode {
        return this.getToken(CypherParser.FOR, 0);
    }
    public iC_IndexPattern(): IC_IndexPatternContext {
        return this.getTypedRuleContext(IC_IndexPatternContext, 0);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(CypherParser.ON, 0);
    }
    public iC_IndexPropertyPattern(): IC_IndexPropertyPatternContext {
        return this.getTypedRuleContext(IC_IndexPropertyPatternContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        return this.getTypedRuleContext(IC_IfNotExistsContext, 0);
    }
    public OPTIONS(): antlr.TerminalNode {
        return this.getToken(CypherParser.OPTIONS, 0);
    }
    public iC_Options(): IC_OptionsContext {
        return this.getTypedRuleContext(IC_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateIndex;
    }
}


export class IC_IndexPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_IndexNodePattern(): IC_IndexNodePatternContext {
        return this.getTypedRuleContext(IC_IndexNodePatternContext, 0);
    }
    public iC_IndexRelationshipPattern(): IC_IndexRelationshipPatternContext {
        return this.getTypedRuleContext(IC_IndexRelationshipPatternContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_IndexPattern;
    }
}


export class IC_IndexNodePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public oC_LabelName(): OC_LabelNameContext {
        return this.getTypedRuleContext(OC_LabelNameContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_IndexNodePattern;
    }
}


export class IC_IndexRelationshipPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_RelationshipPattern(): OC_RelationshipPatternContext {
        return this.getTypedRuleContext(OC_RelationshipPatternContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_IndexRelationshipPattern;
    }
}


export class IC_IndexPropertyPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_IndexPropertyPattern;
    }
}


export class IC_CreateFromToConnectionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_CreateFromToConnection__list(): IC_CreateFromToConnectionContext[] {
        return this.getTypedRuleContexts(IC_CreateFromToConnectionContext);
    }
    public iC_CreateFromToConnection(i: number): IC_CreateFromToConnectionContext {
        return this.getTypedRuleContext(IC_CreateFromToConnectionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateFromToConnections;
    }
}


export class IC_CreateFromToConnectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName__list(): OC_SchemaNameContext[] {
        return this.getTypedRuleContexts(OC_SchemaNameContext);
    }
    public oC_SchemaName(i: number): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, i);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateFromToConnection;
    }
}


export class IC_FromToConnectionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_FromToConnection__list(): IC_FromToConnectionContext[] {
        return this.getTypedRuleContexts(IC_FromToConnectionContext);
    }
    public iC_FromToConnection(i: number): IC_FromToConnectionContext {
        return this.getTypedRuleContext(IC_FromToConnectionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_FromToConnections;
    }
}


export class IC_FromToConnectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName__list(): OC_SchemaNameContext[] {
        return this.getTypedRuleContexts(OC_SchemaNameContext);
    }
    public oC_SchemaName(i: number): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, i);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_FromToConnection;
    }
}


export class IC_CreateSequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public SEQUENCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SEQUENCE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        return this.getTypedRuleContext(IC_IfNotExistsContext, 0);
    }
    public iC_SequenceOptions__list(): IC_SequenceOptionsContext[] {
        return this.getTypedRuleContexts(IC_SequenceOptionsContext);
    }
    public iC_SequenceOptions(i: number): IC_SequenceOptionsContext {
        return this.getTypedRuleContext(IC_SequenceOptionsContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateSequence;
    }
}


export class IC_CreateTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TYPE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public iC_DataType(): IC_DataTypeContext {
        return this.getTypedRuleContext(IC_DataTypeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateType;
    }
}


export class IC_SequenceOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_IncrementBy(): IC_IncrementByContext {
        return this.getTypedRuleContext(IC_IncrementByContext, 0);
    }
    public iC_MinValue(): IC_MinValueContext {
        return this.getTypedRuleContext(IC_MinValueContext, 0);
    }
    public iC_MaxValue(): IC_MaxValueContext {
        return this.getTypedRuleContext(IC_MaxValueContext, 0);
    }
    public iC_StartWith(): IC_StartWithContext {
        return this.getTypedRuleContext(IC_StartWithContext, 0);
    }
    public iC_Cycle(): IC_CycleContext {
        return this.getTypedRuleContext(IC_CycleContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_SequenceOptions;
    }
}


export class IC_WithPasswdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public PASSWORD(): antlr.TerminalNode {
        return this.getToken(CypherParser.PASSWORD, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_WithPasswd;
    }
}


export class IC_CreateUserContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public USER(): antlr.TerminalNode {
        return this.getToken(CypherParser.USER, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        return this.getTypedRuleContext(IC_IfNotExistsContext, 0);
    }
    public iC_WithPasswd(): IC_WithPasswdContext {
        return this.getTypedRuleContext(IC_WithPasswdContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateUser;
    }
}


export class IC_CreateRoleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public ROLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.ROLE, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        return this.getTypedRuleContext(IC_IfNotExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateRole;
    }
}


export class IC_IncrementByContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INCREMENT(): antlr.TerminalNode {
        return this.getToken(CypherParser.INCREMENT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_IncrementBy;
    }
}


export class IC_MinValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NO(): antlr.TerminalNode {
        return this.getToken(CypherParser.NO, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public MINVALUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINVALUE, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_MinValue;
    }
}


export class IC_MaxValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NO(): antlr.TerminalNode {
        return this.getToken(CypherParser.NO, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public MAXVALUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MAXVALUE, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_MaxValue;
    }
}


export class IC_StartWithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public START(): antlr.TerminalNode {
        return this.getToken(CypherParser.START, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_StartWith;
    }
}


export class IC_CycleContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CYCLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CYCLE, 0);
    }
    public NO(): antlr.TerminalNode {
        return this.getToken(CypherParser.NO, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Cycle;
    }
}


export class IC_IfExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(CypherParser.IF, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXISTS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_IfExists;
    }
}


export class IC_DropContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(CypherParser.DROP, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public SEQUENCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SEQUENCE, 0);
    }
    public MACRO(): antlr.TerminalNode {
        return this.getToken(CypherParser.MACRO, 0);
    }
    public GRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.GRAPH, 0);
    }
    public iC_IfExists(): IC_IfExistsContext {
        return this.getTypedRuleContext(IC_IfExistsContext, 0);
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(CypherParser.INDEX, 0);
    }
    public iC_DropIndexName(): IC_DropIndexNameContext {
        return this.getTypedRuleContext(IC_DropIndexNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Drop;
    }
}


export class IC_DropIndexNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SchemaName__list(): OC_SchemaNameContext[] {
        return this.getTypedRuleContexts(OC_SchemaNameContext);
    }
    public oC_SchemaName(i: number): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_DropIndexName;
    }
}


export class IC_AlterTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALTER(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALTER, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TABLE, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public iC_AlterOptions(): IC_AlterOptionsContext {
        return this.getTypedRuleContext(IC_AlterOptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_AlterTable;
    }
}


export class IC_AlterOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_AddProperty(): IC_AddPropertyContext {
        return this.getTypedRuleContext(IC_AddPropertyContext, 0);
    }
    public iC_DropProperty(): IC_DropPropertyContext {
        return this.getTypedRuleContext(IC_DropPropertyContext, 0);
    }
    public iC_RenameTable(): IC_RenameTableContext {
        return this.getTypedRuleContext(IC_RenameTableContext, 0);
    }
    public iC_RenameProperty(): IC_RenamePropertyContext {
        return this.getTypedRuleContext(IC_RenamePropertyContext, 0);
    }
    public iC_AddFromToConnection(): IC_AddFromToConnectionContext {
        return this.getTypedRuleContext(IC_AddFromToConnectionContext, 0);
    }
    public iC_DropFromToConnection(): IC_DropFromToConnectionContext {
        return this.getTypedRuleContext(IC_DropFromToConnectionContext, 0);
    }
    public iC_SetSortedBy(): IC_SetSortedByContext {
        return this.getTypedRuleContext(IC_SetSortedByContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_AlterOptions;
    }
}


export class IC_AddPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(CypherParser.ADD, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public iC_DataType(): IC_DataTypeContext {
        return this.getTypedRuleContext(IC_DataTypeContext, 0);
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        return this.getTypedRuleContext(IC_IfNotExistsContext, 0);
    }
    public iC_Default(): IC_DefaultContext {
        return this.getTypedRuleContext(IC_DefaultContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_AddProperty;
    }
}


export class IC_DefaultContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DEFAULT, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Default;
    }
}


export class IC_DropPropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(CypherParser.DROP, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public iC_IfExists(): IC_IfExistsContext {
        return this.getTypedRuleContext(IC_IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_DropProperty;
    }
}


export class IC_RenameTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(CypherParser.RENAME, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_RenameTable;
    }
}


export class IC_RenamePropertyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(CypherParser.RENAME, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PropertyKeyName__list(): OC_PropertyKeyNameContext[] {
        return this.getTypedRuleContexts(OC_PropertyKeyNameContext);
    }
    public oC_PropertyKeyName(i: number): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, i);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_RenameProperty;
    }
}


export class IC_AddFromToConnectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(CypherParser.ADD, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public iC_FromToConnection(): IC_FromToConnectionContext {
        return this.getTypedRuleContext(IC_FromToConnectionContext, 0);
    }
    public iC_IfNotExists(): IC_IfNotExistsContext {
        return this.getTypedRuleContext(IC_IfNotExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_AddFromToConnection;
    }
}


export class IC_DropFromToConnectionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(CypherParser.DROP, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public iC_FromToConnection(): IC_FromToConnectionContext {
        return this.getTypedRuleContext(IC_FromToConnectionContext, 0);
    }
    public iC_IfExists(): IC_IfExistsContext {
        return this.getTypedRuleContext(IC_IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_DropFromToConnection;
    }
}


export class IC_SetSortedByContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(CypherParser.SET, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public SORTED(): antlr.TerminalNode {
        return this.getToken(CypherParser.SORTED, 0);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public iC_SortedByItem__list(): IC_SortedByItemContext[] {
        return this.getTypedRuleContexts(IC_SortedByItemContext);
    }
    public iC_SortedByItem(i: number): IC_SortedByItemContext {
        return this.getTypedRuleContext(IC_SortedByItemContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_SetSortedBy;
    }
}


export class IC_SortedByItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public ASC(): antlr.TerminalNode {
        return this.getToken(CypherParser.ASC, 0);
    }
    public DESC(): antlr.TerminalNode {
        return this.getToken(CypherParser.DESC, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_SortedByItem;
    }
}


export class IC_ColumnDefinitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_ColumnDefinition__list(): IC_ColumnDefinitionContext[] {
        return this.getTypedRuleContexts(IC_ColumnDefinitionContext);
    }
    public iC_ColumnDefinition(i: number): IC_ColumnDefinitionContext {
        return this.getTypedRuleContext(IC_ColumnDefinitionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ColumnDefinitions;
    }
}


export class IC_ColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public iC_DataType(): IC_DataTypeContext {
        return this.getTypedRuleContext(IC_DataTypeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ColumnDefinition;
    }
}


export class IC_PropertyDefinitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_PropertyDefinition__list(): IC_PropertyDefinitionContext[] {
        return this.getTypedRuleContexts(IC_PropertyDefinitionContext);
    }
    public iC_PropertyDefinition(i: number): IC_PropertyDefinitionContext {
        return this.getTypedRuleContext(IC_PropertyDefinitionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_PropertyDefinitions;
    }
}


export class IC_PropertyDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_ColumnDefinition(): IC_ColumnDefinitionContext {
        return this.getTypedRuleContext(IC_ColumnDefinitionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public iC_Default(): IC_DefaultContext {
        return this.getTypedRuleContext(IC_DefaultContext, 0);
    }
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(CypherParser.PRIMARY, 0);
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(CypherParser.KEY, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_PropertyDefinition;
    }
}


export class IC_CreateNodeConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(CypherParser.PRIMARY, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(CypherParser.KEY, 0);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_CreateNodeConstraint;
    }
}


export class IC_UnionTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNION(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNION, 0);
    }
    public iC_ColumnDefinitions(): IC_ColumnDefinitionsContext {
        return this.getTypedRuleContext(IC_ColumnDefinitionsContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_UnionType;
    }
}


export class IC_StructTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.STRUCT, 0);
    }
    public iC_ColumnDefinitions(): IC_ColumnDefinitionsContext {
        return this.getTypedRuleContext(IC_ColumnDefinitionsContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_StructType;
    }
}


export class IC_MapTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MAP(): antlr.TerminalNode {
        return this.getToken(CypherParser.MAP, 0);
    }
    public iC_DataType__list(): IC_DataTypeContext[] {
        return this.getTypedRuleContexts(IC_DataTypeContext);
    }
    public iC_DataType(i: number): IC_DataTypeContext {
        return this.getTypedRuleContext(IC_DataTypeContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_MapType;
    }
}


export class IC_DecimalTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DECIMAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.DECIMAL, 0);
    }
    public oC_IntegerLiteral__list(): OC_IntegerLiteralContext[] {
        return this.getTypedRuleContexts(OC_IntegerLiteralContext);
    }
    public oC_IntegerLiteral(i: number): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_DecimalType;
    }
}


export class IC_DataTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public iC_UnionType(): IC_UnionTypeContext {
        return this.getTypedRuleContext(IC_UnionTypeContext, 0);
    }
    public iC_StructType(): IC_StructTypeContext {
        return this.getTypedRuleContext(IC_StructTypeContext, 0);
    }
    public iC_MapType(): IC_MapTypeContext {
        return this.getTypedRuleContext(IC_MapTypeContext, 0);
    }
    public iC_DecimalType(): IC_DecimalTypeContext {
        return this.getTypedRuleContext(IC_DecimalTypeContext, 0);
    }
    public iC_DataType(): IC_DataTypeContext {
        return this.getTypedRuleContext(IC_DataTypeContext, 0);
    }
    public iC_ListIdentifiers(): IC_ListIdentifiersContext {
        return this.getTypedRuleContext(IC_ListIdentifiersContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_DataType;
    }
}


export class IC_ListIdentifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_ListIdentifier__list(): IC_ListIdentifierContext[] {
        return this.getTypedRuleContexts(IC_ListIdentifierContext);
    }
    public iC_ListIdentifier(i: number): IC_ListIdentifierContext {
        return this.getTypedRuleContext(IC_ListIdentifierContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ListIdentifiers;
    }
}


export class IC_ListIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ListIdentifier;
    }
}


export class OC_AnyCypherOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Explain(): OC_ExplainContext {
        return this.getTypedRuleContext(OC_ExplainContext, 0);
    }
    public oC_Profile(): OC_ProfileContext {
        return this.getTypedRuleContext(OC_ProfileContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_AnyCypherOption;
    }
}


export class OC_ExplainContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPLAIN, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public LOGICAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOGICAL, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Explain;
    }
}


export class OC_ProfileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PROFILE(): antlr.TerminalNode {
        return this.getToken(CypherParser.PROFILE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Profile;
    }
}


export class IC_TransactionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BEGIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.BEGIN, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public TRANSACTION(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRANSACTION, 0);
    }
    public READ(): antlr.TerminalNode {
        return this.getToken(CypherParser.READ, 0);
    }
    public ONLY(): antlr.TerminalNode {
        return this.getToken(CypherParser.ONLY, 0);
    }
    public COMMIT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMIT, 0);
    }
    public ROLLBACK(): antlr.TerminalNode {
        return this.getToken(CypherParser.ROLLBACK, 0);
    }
    public CHECKPOINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.CHECKPOINT, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Transaction;
    }
}


export class IC_ExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_LoadExtension(): IC_LoadExtensionContext {
        return this.getTypedRuleContext(IC_LoadExtensionContext, 0);
    }
    public iC_InstallExtension(): IC_InstallExtensionContext {
        return this.getTypedRuleContext(IC_InstallExtensionContext, 0);
    }
    public iC_UninstallExtension(): IC_UninstallExtensionContext {
        return this.getTypedRuleContext(IC_UninstallExtensionContext, 0);
    }
    public iC_UpdateExtension(): IC_UpdateExtensionContext {
        return this.getTypedRuleContext(IC_UpdateExtensionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Extension;
    }
}


export class IC_LoadExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOAD(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOAD, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public EXTENSION(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXTENSION, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_LoadExtension;
    }
}


export class IC_InstallExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INSTALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.INSTALL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public FORCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.FORCE, 0);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_InstallExtension;
    }
}


export class IC_UninstallExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNINSTALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNINSTALL, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_UninstallExtension;
    }
}


export class IC_UpdateExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UPDATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.UPDATE, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_UpdateExtension;
    }
}


export class OC_QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_RegularQuery(): OC_RegularQueryContext {
        return this.getTypedRuleContext(OC_RegularQueryContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Query;
    }
}


export class OC_RegularQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SingleQuery(): OC_SingleQueryContext {
        return this.getTypedRuleContext(OC_SingleQueryContext, 0);
    }
    public oC_Union__list(): OC_UnionContext[] {
        return this.getTypedRuleContexts(OC_UnionContext);
    }
    public oC_Union(i: number): OC_UnionContext {
        return this.getTypedRuleContext(OC_UnionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Return__list(): OC_ReturnContext[] {
        return this.getTypedRuleContexts(OC_ReturnContext);
    }
    public oC_Return(i: number): OC_ReturnContext {
        return this.getTypedRuleContext(OC_ReturnContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RegularQuery;
    }
}


export class OC_UnionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNION(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNION, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public ALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALL, 0);
    }
    public oC_SingleQuery(): OC_SingleQueryContext {
        return this.getTypedRuleContext(OC_SingleQueryContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Union;
    }
}


export class OC_SingleQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SinglePartQuery(): OC_SinglePartQueryContext {
        return this.getTypedRuleContext(OC_SinglePartQueryContext, 0);
    }
    public oC_MultiPartQuery(): OC_MultiPartQueryContext {
        return this.getTypedRuleContext(OC_MultiPartQueryContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SingleQuery;
    }
}


export class OC_SinglePartQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Return(): OC_ReturnContext {
        return this.getTypedRuleContext(OC_ReturnContext, 0);
    }
    public oC_ReadingClause__list(): OC_ReadingClauseContext[] {
        return this.getTypedRuleContexts(OC_ReadingClauseContext);
    }
    public oC_ReadingClause(i: number): OC_ReadingClauseContext {
        return this.getTypedRuleContext(OC_ReadingClauseContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_UpdatingClause__list(): OC_UpdatingClauseContext[] {
        return this.getTypedRuleContexts(OC_UpdatingClauseContext);
    }
    public oC_UpdatingClause(i: number): OC_UpdatingClauseContext {
        return this.getTypedRuleContext(OC_UpdatingClauseContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SinglePartQuery;
    }
}


export class OC_MultiPartQueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SinglePartQuery(): OC_SinglePartQueryContext {
        return this.getTypedRuleContext(OC_SinglePartQueryContext, 0);
    }
    public iC_QueryPart__list(): IC_QueryPartContext[] {
        return this.getTypedRuleContexts(IC_QueryPartContext);
    }
    public iC_QueryPart(i: number): IC_QueryPartContext {
        return this.getTypedRuleContext(IC_QueryPartContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_MultiPartQuery;
    }
}


export class IC_QueryPartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_With(): OC_WithContext {
        return this.getTypedRuleContext(OC_WithContext, 0);
    }
    public oC_ReadingClause__list(): OC_ReadingClauseContext[] {
        return this.getTypedRuleContexts(OC_ReadingClauseContext);
    }
    public oC_ReadingClause(i: number): OC_ReadingClauseContext {
        return this.getTypedRuleContext(OC_ReadingClauseContext, i);
    }
    public oC_UpdatingClause__list(): OC_UpdatingClauseContext[] {
        return this.getTypedRuleContexts(OC_UpdatingClauseContext);
    }
    public oC_UpdatingClause(i: number): OC_UpdatingClauseContext {
        return this.getTypedRuleContext(OC_UpdatingClauseContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_QueryPart;
    }
}


export class OC_UpdatingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Create(): OC_CreateContext {
        return this.getTypedRuleContext(OC_CreateContext, 0);
    }
    public oC_Merge(): OC_MergeContext {
        return this.getTypedRuleContext(OC_MergeContext, 0);
    }
    public oC_Set(): OC_SetContext {
        return this.getTypedRuleContext(OC_SetContext, 0);
    }
    public oC_Delete(): OC_DeleteContext {
        return this.getTypedRuleContext(OC_DeleteContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_UpdatingClause;
    }
}


export class OC_ReadingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Match(): OC_MatchContext {
        return this.getTypedRuleContext(OC_MatchContext, 0);
    }
    public oC_Unwind(): OC_UnwindContext {
        return this.getTypedRuleContext(OC_UnwindContext, 0);
    }
    public iC_InQueryCall(): IC_InQueryCallContext {
        return this.getTypedRuleContext(IC_InQueryCallContext, 0);
    }
    public iC_LoadFrom(): IC_LoadFromContext {
        return this.getTypedRuleContext(IC_LoadFromContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ReadingClause;
    }
}


export class IC_LoadFromContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOAD(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOAD, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public iC_ScanSource(): IC_ScanSourceContext {
        return this.getTypedRuleContext(IC_ScanSourceContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public HEADERS(): antlr.TerminalNode {
        return this.getToken(CypherParser.HEADERS, 0);
    }
    public iC_ColumnDefinitions(): IC_ColumnDefinitionsContext {
        return this.getTypedRuleContext(IC_ColumnDefinitionsContext, 0);
    }
    public iC_Options(): IC_OptionsContext {
        return this.getTypedRuleContext(IC_OptionsContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_LoadFrom;
    }
}


export class OC_YieldItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Variable__list(): OC_VariableContext[] {
        return this.getTypedRuleContexts(OC_VariableContext);
    }
    public oC_Variable(i: number): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_YieldItem;
    }
}


export class OC_YieldItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_YieldItem__list(): OC_YieldItemContext[] {
        return this.getTypedRuleContexts(OC_YieldItemContext);
    }
    public oC_YieldItem(i: number): OC_YieldItemContext {
        return this.getTypedRuleContext(OC_YieldItemContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_YieldItems;
    }
}


export class IC_InQueryCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.CALL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        return this.getTypedRuleContext(OC_FunctionInvocationContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public YIELD(): antlr.TerminalNode {
        return this.getToken(CypherParser.YIELD, 0);
    }
    public oC_YieldItems(): OC_YieldItemsContext {
        return this.getTypedRuleContext(OC_YieldItemsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_InQueryCall;
    }
}


export class OC_MatchContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public OPTIONAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.OPTIONAL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public iC_Hint(): IC_HintContext {
        return this.getTypedRuleContext(IC_HintContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Match;
    }
}


export class IC_HintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.HINT, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public iC_JoinNode(): IC_JoinNodeContext {
        return this.getTypedRuleContext(IC_JoinNodeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Hint;
    }
}


export class IC_JoinNodeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_JoinNode__list(): IC_JoinNodeContext[] {
        return this.getTypedRuleContexts(IC_JoinNodeContext);
    }
    public iC_JoinNode(i: number): IC_JoinNodeContext {
        return this.getTypedRuleContext(IC_JoinNodeContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_SchemaName__list(): OC_SchemaNameContext[] {
        return this.getTypedRuleContexts(OC_SchemaNameContext);
    }
    public oC_SchemaName(i: number): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, i);
    }
    public JOIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.JOIN, 0);
    }
    public MULTI_JOIN__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.MULTI_JOIN);
    }
    public MULTI_JOIN(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.MULTI_JOIN, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_JoinNode;
    }
}


export class OC_UnwindContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNWIND(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNWIND, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Unwind;
    }
}


export class OC_CreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Create;
    }
}


export class OC_MergeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MERGE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MERGE, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_MergeAction__list(): OC_MergeActionContext[] {
        return this.getTypedRuleContexts(OC_MergeActionContext);
    }
    public oC_MergeAction(i: number): OC_MergeActionContext {
        return this.getTypedRuleContext(OC_MergeActionContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Merge;
    }
}


export class OC_MergeActionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(CypherParser.ON, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public oC_Set(): OC_SetContext {
        return this.getTypedRuleContext(OC_SetContext, 0);
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CREATE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_MergeAction;
    }
}


export class OC_SetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(CypherParser.SET, 0);
    }
    public oC_SetItem__list(): OC_SetItemContext[] {
        return this.getTypedRuleContexts(OC_SetItemContext);
    }
    public oC_SetItem(i: number): OC_SetItemContext {
        return this.getTypedRuleContext(OC_SetItemContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Atom(): OC_AtomContext {
        return this.getTypedRuleContext(OC_AtomContext, 0);
    }
    public iC_Properties(): IC_PropertiesContext {
        return this.getTypedRuleContext(IC_PropertiesContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Set;
    }
}


export class OC_SetItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyExpression(): OC_PropertyExpressionContext {
        return this.getTypedRuleContext(OC_PropertyExpressionContext, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SetItem;
    }
}


export class OC_DeleteContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DELETE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DELETE, 0);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public DETACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.DETACH, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Delete;
    }
}


export class OC_WithContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public oC_ProjectionBody(): OC_ProjectionBodyContext {
        return this.getTypedRuleContext(OC_ProjectionBodyContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_With;
    }
}


export class OC_ReturnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(CypherParser.RETURN, 0);
    }
    public oC_ProjectionBody(): OC_ProjectionBodyContext {
        return this.getTypedRuleContext(OC_ProjectionBodyContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Return;
    }
}


export class OC_ProjectionBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_ProjectionItems(): OC_ProjectionItemsContext {
        return this.getTypedRuleContext(OC_ProjectionItemsContext, 0);
    }
    public DISTINCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DISTINCT, 0);
    }
    public oC_Order(): OC_OrderContext {
        return this.getTypedRuleContext(OC_OrderContext, 0);
    }
    public oC_Skip(): OC_SkipContext {
        return this.getTypedRuleContext(OC_SkipContext, 0);
    }
    public oC_Limit(): OC_LimitContext {
        return this.getTypedRuleContext(OC_LimitContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ProjectionBody;
    }
}


export class OC_ProjectionItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public oC_ProjectionItem__list(): OC_ProjectionItemContext[] {
        return this.getTypedRuleContexts(OC_ProjectionItemContext);
    }
    public oC_ProjectionItem(i: number): OC_ProjectionItemContext {
        return this.getTypedRuleContext(OC_ProjectionItemContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ProjectionItems;
    }
}


export class OC_ProjectionItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ProjectionItem;
    }
}


export class OC_OrderContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(CypherParser.ORDER, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public oC_SortItem__list(): OC_SortItemContext[] {
        return this.getTypedRuleContexts(OC_SortItemContext);
    }
    public oC_SortItem(i: number): OC_SortItemContext {
        return this.getTypedRuleContext(OC_SortItemContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Order;
    }
}


export class OC_SkipContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public L_SKIP(): antlr.TerminalNode {
        return this.getToken(CypherParser.L_SKIP, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Skip;
    }
}


export class OC_LimitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(CypherParser.LIMIT, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Limit;
    }
}


export class OC_SortItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public ASCENDING(): antlr.TerminalNode {
        return this.getToken(CypherParser.ASCENDING, 0);
    }
    public ASC(): antlr.TerminalNode {
        return this.getToken(CypherParser.ASC, 0);
    }
    public DESCENDING(): antlr.TerminalNode {
        return this.getToken(CypherParser.DESCENDING, 0);
    }
    public DESC(): antlr.TerminalNode {
        return this.getToken(CypherParser.DESC, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SortItem;
    }
}


export class OC_WhereContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(CypherParser.WHERE, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Where;
    }
}


export class OC_PatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PatternPart__list(): OC_PatternPartContext[] {
        return this.getTypedRuleContexts(OC_PatternPartContext);
    }
    public oC_PatternPart(i: number): OC_PatternPartContext {
        return this.getTypedRuleContext(OC_PatternPartContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Pattern;
    }
}


export class OC_PatternPartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
        return this.getTypedRuleContext(OC_AnonymousPatternPartContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PatternPart;
    }
}


export class OC_AnonymousPatternPartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PatternElement(): OC_PatternElementContext {
        return this.getTypedRuleContext(OC_PatternElementContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_AnonymousPatternPart;
    }
}


export class OC_PatternElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NodePattern(): OC_NodePatternContext {
        return this.getTypedRuleContext(OC_NodePatternContext, 0);
    }
    public oC_PatternElementChain__list(): OC_PatternElementChainContext[] {
        return this.getTypedRuleContexts(OC_PatternElementChainContext);
    }
    public oC_PatternElementChain(i: number): OC_PatternElementChainContext {
        return this.getTypedRuleContext(OC_PatternElementChainContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PatternElement(): OC_PatternElementContext {
        return this.getTypedRuleContext(OC_PatternElementContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PatternElement;
    }
}


export class OC_NodePatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_NodeLabels(): OC_NodeLabelsContext {
        return this.getTypedRuleContext(OC_NodeLabelsContext, 0);
    }
    public iC_Properties(): IC_PropertiesContext {
        return this.getTypedRuleContext(IC_PropertiesContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NodePattern;
    }
}


export class OC_PatternElementChainContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_RelationshipPattern(): OC_RelationshipPatternContext {
        return this.getTypedRuleContext(OC_RelationshipPatternContext, 0);
    }
    public oC_NodePattern(): OC_NodePatternContext {
        return this.getTypedRuleContext(OC_NodePatternContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PatternElementChain;
    }
}


export class OC_RelationshipPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_LeftArrowHead(): OC_LeftArrowHeadContext {
        return this.getTypedRuleContext(OC_LeftArrowHeadContext, 0);
    }
    public oC_Dash__list(): OC_DashContext[] {
        return this.getTypedRuleContexts(OC_DashContext);
    }
    public oC_Dash(i: number): OC_DashContext {
        return this.getTypedRuleContext(OC_DashContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_RelationshipDetail(): OC_RelationshipDetailContext {
        return this.getTypedRuleContext(OC_RelationshipDetailContext, 0);
    }
    public oC_RightArrowHead(): OC_RightArrowHeadContext {
        return this.getTypedRuleContext(OC_RightArrowHeadContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelationshipPattern;
    }
}


export class OC_RelationshipDetailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_RelationshipTypes(): OC_RelationshipTypesContext {
        return this.getTypedRuleContext(OC_RelationshipTypesContext, 0);
    }
    public iC_RecursiveDetail(): IC_RecursiveDetailContext {
        return this.getTypedRuleContext(IC_RecursiveDetailContext, 0);
    }
    public iC_Properties(): IC_PropertiesContext {
        return this.getTypedRuleContext(IC_PropertiesContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelationshipDetail;
    }
}


export class IC_PropertiesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_PropertyKeyName__list(): OC_PropertyKeyNameContext[] {
        return this.getTypedRuleContexts(OC_PropertyKeyNameContext);
    }
    public oC_PropertyKeyName(i: number): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, i);
    }
    public COLON__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.COLON);
    }
    public COLON(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, i);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_Properties;
    }
}


export class OC_RelationshipTypesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.COLON);
    }
    public COLON(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, i);
    }
    public oC_RelTypeName__list(): OC_RelTypeNameContext[] {
        return this.getTypedRuleContexts(OC_RelTypeNameContext);
    }
    public oC_RelTypeName(i: number): OC_RelTypeNameContext {
        return this.getTypedRuleContext(OC_RelTypeNameContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelationshipTypes;
    }
}


export class OC_NodeLabelsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.COLON);
    }
    public COLON(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, i);
    }
    public oC_LabelName__list(): OC_LabelNameContext[] {
        return this.getTypedRuleContexts(OC_LabelNameContext);
    }
    public oC_LabelName(i: number): OC_LabelNameContext {
        return this.getTypedRuleContext(OC_LabelNameContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NodeLabels;
    }
}


export class IC_RecursiveDetailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public iC_RecursiveType(): IC_RecursiveTypeContext {
        return this.getTypedRuleContext(IC_RecursiveTypeContext, 0);
    }
    public oC_RangeLiteral(): OC_RangeLiteralContext {
        return this.getTypedRuleContext(OC_RangeLiteralContext, 0);
    }
    public iC_RecursiveComprehension(): IC_RecursiveComprehensionContext {
        return this.getTypedRuleContext(IC_RecursiveComprehensionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_RecursiveDetail;
    }
}


export class IC_RecursiveTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WSHORTEST(): antlr.TerminalNode {
        return this.getToken(CypherParser.WSHORTEST, 0);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public ALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public SHORTEST(): antlr.TerminalNode {
        return this.getToken(CypherParser.SHORTEST, 0);
    }
    public TRAIL(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRAIL, 0);
    }
    public ACYCLIC(): antlr.TerminalNode {
        return this.getToken(CypherParser.ACYCLIC, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_RecursiveType;
    }
}


export class OC_RangeLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DOTDOT, 0);
    }
    public oC_LowerBound(): OC_LowerBoundContext {
        return this.getTypedRuleContext(OC_LowerBoundContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_UpperBound(): OC_UpperBoundContext {
        return this.getTypedRuleContext(OC_UpperBoundContext, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RangeLiteral;
    }
}


export class IC_RecursiveComprehensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Variable__list(): OC_VariableContext[] {
        return this.getTypedRuleContexts(OC_VariableContext);
    }
    public oC_Variable(i: number): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public iC_RecursiveProjectionItems__list(): IC_RecursiveProjectionItemsContext[] {
        return this.getTypedRuleContexts(IC_RecursiveProjectionItemsContext);
    }
    public iC_RecursiveProjectionItems(i: number): IC_RecursiveProjectionItemsContext {
        return this.getTypedRuleContext(IC_RecursiveProjectionItemsContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_RecursiveComprehension;
    }
}


export class IC_RecursiveProjectionItemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_ProjectionItems(): OC_ProjectionItemsContext {
        return this.getTypedRuleContext(OC_ProjectionItemsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_RecursiveProjectionItems;
    }
}


export class OC_LowerBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalInteger(): antlr.TerminalNode {
        return this.getToken(CypherParser.DecimalInteger, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_LowerBound;
    }
}


export class OC_UpperBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalInteger(): antlr.TerminalNode {
        return this.getToken(CypherParser.DecimalInteger, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_UpperBound;
    }
}


export class OC_LabelNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SchemaName__list(): OC_SchemaNameContext[] {
        return this.getTypedRuleContexts(OC_SchemaNameContext);
    }
    public oC_SchemaName(i: number): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_LabelName;
    }
}


export class OC_RelTypeNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelTypeName;
    }
}


export class OC_ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_OrExpression(): OC_OrExpressionContext {
        return this.getTypedRuleContext(OC_OrExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Expression;
    }
}


export class OC_OrExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_XorExpression__list(): OC_XorExpressionContext[] {
        return this.getTypedRuleContexts(OC_XorExpressionContext);
    }
    public oC_XorExpression(i: number): OC_XorExpressionContext {
        return this.getTypedRuleContext(OC_XorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public OR__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.OR);
    }
    public OR(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.OR, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_OrExpression;
    }
}


export class OC_XorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_AndExpression__list(): OC_AndExpressionContext[] {
        return this.getTypedRuleContexts(OC_AndExpressionContext);
    }
    public oC_AndExpression(i: number): OC_AndExpressionContext {
        return this.getTypedRuleContext(OC_AndExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public XOR__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.XOR);
    }
    public XOR(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.XOR, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_XorExpression;
    }
}


export class OC_AndExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NotExpression__list(): OC_NotExpressionContext[] {
        return this.getTypedRuleContexts(OC_NotExpressionContext);
    }
    public oC_NotExpression(i: number): OC_NotExpressionContext {
        return this.getTypedRuleContext(OC_NotExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public AND__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.AND);
    }
    public AND(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.AND, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_AndExpression;
    }
}


export class OC_NotExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
        return this.getTypedRuleContext(OC_ComparisonExpressionContext, 0);
    }
    public NOT__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.NOT);
    }
    public NOT(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.NOT, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NotExpression;
    }
}


export class OC_ComparisonExpressionContext extends antlr.ParserRuleContext {
    public _INVALID_NOT_EQUAL!: Token;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_BitwiseOrOperatorExpression__list(): IC_BitwiseOrOperatorExpressionContext[] {
        return this.getTypedRuleContexts(IC_BitwiseOrOperatorExpressionContext);
    }
    public iC_BitwiseOrOperatorExpression(i: number): IC_BitwiseOrOperatorExpressionContext {
        return this.getTypedRuleContext(IC_BitwiseOrOperatorExpressionContext, i);
    }
    public iC_ComparisonOperator__list(): IC_ComparisonOperatorContext[] {
        return this.getTypedRuleContexts(IC_ComparisonOperatorContext);
    }
    public iC_ComparisonOperator(i: number): IC_ComparisonOperatorContext {
        return this.getTypedRuleContext(IC_ComparisonOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public INVALID_NOT_EQUAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.INVALID_NOT_EQUAL, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ComparisonExpression;
    }
}


export class IC_ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ComparisonOperator;
    }
}


export class IC_BitwiseOrOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_BitwiseAndOperatorExpression__list(): IC_BitwiseAndOperatorExpressionContext[] {
        return this.getTypedRuleContexts(IC_BitwiseAndOperatorExpressionContext);
    }
    public iC_BitwiseAndOperatorExpression(i: number): IC_BitwiseAndOperatorExpressionContext {
        return this.getTypedRuleContext(IC_BitwiseAndOperatorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_BitwiseOrOperatorExpression;
    }
}


export class IC_BitwiseAndOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_BitShiftOperatorExpression__list(): IC_BitShiftOperatorExpressionContext[] {
        return this.getTypedRuleContexts(IC_BitShiftOperatorExpressionContext);
    }
    public iC_BitShiftOperatorExpression(i: number): IC_BitShiftOperatorExpressionContext {
        return this.getTypedRuleContext(IC_BitShiftOperatorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_BitwiseAndOperatorExpression;
    }
}


export class IC_BitShiftOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_AddOrSubtractExpression__list(): OC_AddOrSubtractExpressionContext[] {
        return this.getTypedRuleContexts(OC_AddOrSubtractExpressionContext);
    }
    public oC_AddOrSubtractExpression(i: number): OC_AddOrSubtractExpressionContext {
        return this.getTypedRuleContext(OC_AddOrSubtractExpressionContext, i);
    }
    public iC_BitShiftOperator__list(): IC_BitShiftOperatorContext[] {
        return this.getTypedRuleContexts(IC_BitShiftOperatorContext);
    }
    public iC_BitShiftOperator(i: number): IC_BitShiftOperatorContext {
        return this.getTypedRuleContext(IC_BitShiftOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_BitShiftOperatorExpression;
    }
}


export class IC_BitShiftOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_BitShiftOperator;
    }
}


export class OC_AddOrSubtractExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_MultiplyDivideModuloExpression__list(): OC_MultiplyDivideModuloExpressionContext[] {
        return this.getTypedRuleContexts(OC_MultiplyDivideModuloExpressionContext);
    }
    public oC_MultiplyDivideModuloExpression(i: number): OC_MultiplyDivideModuloExpressionContext {
        return this.getTypedRuleContext(OC_MultiplyDivideModuloExpressionContext, i);
    }
    public iC_AddOrSubtractOperator__list(): IC_AddOrSubtractOperatorContext[] {
        return this.getTypedRuleContexts(IC_AddOrSubtractOperatorContext);
    }
    public iC_AddOrSubtractOperator(i: number): IC_AddOrSubtractOperatorContext {
        return this.getTypedRuleContext(IC_AddOrSubtractOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_AddOrSubtractExpression;
    }
}


export class IC_AddOrSubtractOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_AddOrSubtractOperator;
    }
}


export class OC_MultiplyDivideModuloExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PowerOfExpression__list(): OC_PowerOfExpressionContext[] {
        return this.getTypedRuleContexts(OC_PowerOfExpressionContext);
    }
    public oC_PowerOfExpression(i: number): OC_PowerOfExpressionContext {
        return this.getTypedRuleContext(OC_PowerOfExpressionContext, i);
    }
    public iC_MultiplyDivideModuloOperator__list(): IC_MultiplyDivideModuloOperatorContext[] {
        return this.getTypedRuleContexts(IC_MultiplyDivideModuloOperatorContext);
    }
    public iC_MultiplyDivideModuloOperator(i: number): IC_MultiplyDivideModuloOperatorContext {
        return this.getTypedRuleContext(IC_MultiplyDivideModuloOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_MultiplyDivideModuloExpression;
    }
}


export class IC_MultiplyDivideModuloOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_MultiplyDivideModuloOperator;
    }
}


export class OC_PowerOfExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_StringListNullOperatorExpression__list(): OC_StringListNullOperatorExpressionContext[] {
        return this.getTypedRuleContexts(OC_StringListNullOperatorExpressionContext);
    }
    public oC_StringListNullOperatorExpression(i: number): OC_StringListNullOperatorExpressionContext {
        return this.getTypedRuleContext(OC_StringListNullOperatorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PowerOfExpression;
    }
}


export class OC_StringListNullOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_UnaryAddSubtractOrFactorialExpression(): OC_UnaryAddSubtractOrFactorialExpressionContext {
        return this.getTypedRuleContext(OC_UnaryAddSubtractOrFactorialExpressionContext, 0);
    }
    public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext {
        return this.getTypedRuleContext(OC_StringOperatorExpressionContext, 0);
    }
    public oC_NullOperatorExpression(): OC_NullOperatorExpressionContext {
        return this.getTypedRuleContext(OC_NullOperatorExpressionContext, 0);
    }
    public oC_ListOperatorExpression__list(): OC_ListOperatorExpressionContext[] {
        return this.getTypedRuleContexts(OC_ListOperatorExpressionContext);
    }
    public oC_ListOperatorExpression(i: number): OC_ListOperatorExpressionContext {
        return this.getTypedRuleContext(OC_ListOperatorExpressionContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_StringListNullOperatorExpression;
    }
}


export class OC_ListOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(CypherParser.IN, 0);
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        return this.getTypedRuleContext(OC_PropertyOrLabelsExpressionContext, 0);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public DOTDOT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DOTDOT, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ListOperatorExpression;
    }
}


export class OC_StringOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        return this.getTypedRuleContext(OC_PropertyOrLabelsExpressionContext, 0);
    }
    public oC_RegularExpression(): OC_RegularExpressionContext {
        return this.getTypedRuleContext(OC_RegularExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public STARTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.STARTS, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public ENDS(): antlr.TerminalNode {
        return this.getToken(CypherParser.ENDS, 0);
    }
    public CONTAINS(): antlr.TerminalNode {
        return this.getToken(CypherParser.CONTAINS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_StringOperatorExpression;
    }
}


export class OC_RegularExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RegularExpression;
    }
}


export class OC_NullOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(CypherParser.IS, 0);
    }
    public NULL(): antlr.TerminalNode {
        return this.getToken(CypherParser.NULL, 0);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(CypherParser.NOT, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NullOperatorExpression;
    }
}


export class OC_UnaryAddSubtractOrFactorialExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
        return this.getTypedRuleContext(OC_PropertyOrLabelsExpressionContext, 0);
    }
    public MINUS__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.MINUS);
    }
    public MINUS(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, i);
    }
    public FACTORIAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.FACTORIAL, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression;
    }
}


export class OC_PropertyOrLabelsExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Atom(): OC_AtomContext {
        return this.getTypedRuleContext(OC_AtomContext, 0);
    }
    public oC_PropertyLookup__list(): OC_PropertyLookupContext[] {
        return this.getTypedRuleContexts(OC_PropertyLookupContext);
    }
    public oC_PropertyLookup(i: number): OC_PropertyLookupContext {
        return this.getTypedRuleContext(OC_PropertyLookupContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PropertyOrLabelsExpression;
    }
}


export class OC_AtomContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Literal(): OC_LiteralContext {
        return this.getTypedRuleContext(OC_LiteralContext, 0);
    }
    public oC_Parameter(): OC_ParameterContext {
        return this.getTypedRuleContext(OC_ParameterContext, 0);
    }
    public oC_CaseExpression(): OC_CaseExpressionContext {
        return this.getTypedRuleContext(OC_CaseExpressionContext, 0);
    }
    public oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext {
        return this.getTypedRuleContext(OC_ParenthesizedExpressionContext, 0);
    }
    public oC_FunctionInvocation(): OC_FunctionInvocationContext {
        return this.getTypedRuleContext(OC_FunctionInvocationContext, 0);
    }
    public oC_PathPatterns(): OC_PathPatternsContext {
        return this.getTypedRuleContext(OC_PathPatternsContext, 0);
    }
    public oC_ExistCountSubquery(): OC_ExistCountSubqueryContext {
        return this.getTypedRuleContext(OC_ExistCountSubqueryContext, 0);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public oC_Quantifier(): OC_QuantifierContext {
        return this.getTypedRuleContext(OC_QuantifierContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Atom;
    }
}


export class OC_QuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALL, 0);
    }
    public oC_FilterExpression(): OC_FilterExpressionContext {
        return this.getTypedRuleContext(OC_FilterExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public ANY(): antlr.TerminalNode {
        return this.getToken(CypherParser.ANY, 0);
    }
    public NONE(): antlr.TerminalNode {
        return this.getToken(CypherParser.NONE, 0);
    }
    public SINGLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SINGLE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Quantifier;
    }
}


export class OC_FilterExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_IdInColl(): OC_IdInCollContext {
        return this.getTypedRuleContext(OC_IdInCollContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_FilterExpression;
    }
}


export class OC_IdInCollContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Variable(): OC_VariableContext {
        return this.getTypedRuleContext(OC_VariableContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public IN(): antlr.TerminalNode {
        return this.getToken(CypherParser.IN, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_IdInColl;
    }
}


export class OC_LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NumberLiteral(): OC_NumberLiteralContext {
        return this.getTypedRuleContext(OC_NumberLiteralContext, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public oC_BooleanLiteral(): OC_BooleanLiteralContext {
        return this.getTypedRuleContext(OC_BooleanLiteralContext, 0);
    }
    public NULL(): antlr.TerminalNode {
        return this.getToken(CypherParser.NULL, 0);
    }
    public oC_ListLiteral(): OC_ListLiteralContext {
        return this.getTypedRuleContext(OC_ListLiteralContext, 0);
    }
    public iC_StructLiteral(): IC_StructLiteralContext {
        return this.getTypedRuleContext(IC_StructLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Literal;
    }
}


export class OC_BooleanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode {
        return this.getToken(CypherParser.FALSE, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_BooleanLiteral;
    }
}


export class OC_ListLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public iC_ListEntry__list(): IC_ListEntryContext[] {
        return this.getTypedRuleContexts(IC_ListEntryContext);
    }
    public iC_ListEntry(i: number): IC_ListEntryContext {
        return this.getTypedRuleContext(IC_ListEntryContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ListLiteral;
    }
}


export class IC_ListEntryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_ListEntry;
    }
}


export class IC_StructLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_StructField__list(): IC_StructFieldContext[] {
        return this.getTypedRuleContexts(IC_StructFieldContext);
    }
    public iC_StructField(i: number): IC_StructFieldContext {
        return this.getTypedRuleContext(IC_StructFieldContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_StructLiteral;
    }
}


export class IC_StructFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public StringLiteral(): antlr.TerminalNode {
        return this.getToken(CypherParser.StringLiteral, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_StructField;
    }
}


export class OC_ParenthesizedExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ParenthesizedExpression;
    }
}


export class OC_FunctionInvocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COUNT, 0);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public CAST(): antlr.TerminalNode {
        return this.getToken(CypherParser.CAST, 0);
    }
    public iC_FunctionParameter__list(): IC_FunctionParameterContext[] {
        return this.getTypedRuleContexts(IC_FunctionParameterContext);
    }
    public iC_FunctionParameter(i: number): IC_FunctionParameterContext {
        return this.getTypedRuleContext(IC_FunctionParameterContext, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public iC_DataType(): IC_DataTypeContext {
        return this.getTypedRuleContext(IC_DataTypeContext, 0);
    }
    public oC_FunctionName(): OC_FunctionNameContext {
        return this.getTypedRuleContext(OC_FunctionNameContext, 0);
    }
    public DISTINCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.DISTINCT, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_FunctionInvocation;
    }
}


export class OC_FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_FunctionName;
    }
}


export class IC_FunctionParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(CypherParser.COLON, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public iC_LambdaParameter(): IC_LambdaParameterContext {
        return this.getTypedRuleContext(IC_LambdaParameterContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_FunctionParameter;
    }
}


export class IC_LambdaParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public iC_LambdaVars(): IC_LambdaVarsContext {
        return this.getTypedRuleContext(IC_LambdaVarsContext, 0);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public oC_Expression(): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_LambdaParameter;
    }
}


export class IC_LambdaVarsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName__list(): OC_SymbolicNameContext[] {
        return this.getTypedRuleContexts(OC_SymbolicNameContext);
    }
    public oC_SymbolicName(i: number): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_LambdaVars;
    }
}


export class OC_PathPatternsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_NodePattern(): OC_NodePatternContext {
        return this.getTypedRuleContext(OC_NodePatternContext, 0);
    }
    public oC_PatternElementChain__list(): OC_PatternElementChainContext[] {
        return this.getTypedRuleContexts(OC_PatternElementChainContext);
    }
    public oC_PatternElementChain(i: number): OC_PatternElementChainContext {
        return this.getTypedRuleContext(OC_PatternElementChainContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PathPatterns;
    }
}


export class OC_ExistCountSubqueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public oC_Pattern(): OC_PatternContext {
        return this.getTypedRuleContext(OC_PatternContext, 0);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXISTS, 0);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COUNT, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public iC_Hint(): IC_HintContext {
        return this.getTypedRuleContext(IC_HintContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ExistCountSubquery;
    }
}


export class OC_PropertyLookupContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PropertyLookup;
    }
}


export class OC_CaseExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public END(): antlr.TerminalNode {
        return this.getToken(CypherParser.END, 0);
    }
    public ELSE(): antlr.TerminalNode {
        return this.getToken(CypherParser.ELSE, 0);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CASE, 0);
    }
    public oC_CaseAlternative__list(): OC_CaseAlternativeContext[] {
        return this.getTypedRuleContexts(OC_CaseAlternativeContext);
    }
    public oC_CaseAlternative(i: number): OC_CaseAlternativeContext {
        return this.getTypedRuleContext(OC_CaseAlternativeContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_CaseExpression;
    }
}


export class OC_CaseAlternativeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEN(): antlr.TerminalNode {
        return this.getToken(CypherParser.WHEN, 0);
    }
    public oC_Expression__list(): OC_ExpressionContext[] {
        return this.getTypedRuleContexts(OC_ExpressionContext);
    }
    public oC_Expression(i: number): OC_ExpressionContext {
        return this.getTypedRuleContext(OC_ExpressionContext, i);
    }
    public THEN(): antlr.TerminalNode {
        return this.getToken(CypherParser.THEN, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_CaseAlternative;
    }
}


export class OC_VariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Variable;
    }
}


export class OC_NumberLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_DoubleLiteral(): OC_DoubleLiteralContext {
        return this.getTypedRuleContext(OC_DoubleLiteralContext, 0);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_NumberLiteral;
    }
}


export class OC_ParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public DecimalInteger(): antlr.TerminalNode {
        return this.getToken(CypherParser.DecimalInteger, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Parameter;
    }
}


export class OC_PropertyExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_Atom(): OC_AtomContext {
        return this.getTypedRuleContext(OC_AtomContext, 0);
    }
    public oC_PropertyLookup(): OC_PropertyLookupContext {
        return this.getTypedRuleContext(OC_PropertyLookupContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PropertyExpression;
    }
}


export class OC_PropertyKeyNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_PropertyKeyName;
    }
}


export class OC_IntegerLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalInteger(): antlr.TerminalNode {
        return this.getToken(CypherParser.DecimalInteger, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_IntegerLiteral;
    }
}


export class OC_DoubleLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ExponentDecimalReal(): antlr.TerminalNode {
        return this.getToken(CypherParser.ExponentDecimalReal, 0);
    }
    public RegularDecimalReal(): antlr.TerminalNode {
        return this.getToken(CypherParser.RegularDecimalReal, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_DoubleLiteral;
    }
}


export class OC_SchemaNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName__list(): OC_SymbolicNameContext[] {
        return this.getTypedRuleContexts(OC_SymbolicNameContext);
    }
    public oC_SymbolicName(i: number): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SchemaName;
    }
}


export class OC_SymbolicNameContext extends antlr.ParserRuleContext {
    public _EscapedSymbolicName!: Token;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UnescapedSymbolicName(): antlr.TerminalNode {
        return this.getToken(CypherParser.UnescapedSymbolicName, 0);
    }
    public EscapedSymbolicName(): antlr.TerminalNode {
        return this.getToken(CypherParser.EscapedSymbolicName, 0);
    }
    public HexLetter(): antlr.TerminalNode {
        return this.getToken(CypherParser.HexLetter, 0);
    }
    public iC_NonReservedKeywords(): IC_NonReservedKeywordsContext {
        return this.getTypedRuleContext(IC_NonReservedKeywordsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SymbolicName;
    }
}


export class IC_NonReservedKeywordsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public COMMENT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMENT, 0);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(CypherParser.ADD, 0);
    }
    public ALTER(): antlr.TerminalNode {
        return this.getToken(CypherParser.ALTER, 0);
    }
    public ANALYZE(): antlr.TerminalNode {
        return this.getToken(CypherParser.ANALYZE, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public ATTACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.ATTACH, 0);
    }
    public BEGIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.BEGIN, 0);
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(CypherParser.BY, 0);
    }
    public CALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.CALL, 0);
    }
    public CHECKPOINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.CHECKPOINT, 0);
    }
    public COMMIT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COMMIT, 0);
    }
    public CONTAINS(): antlr.TerminalNode {
        return this.getToken(CypherParser.CONTAINS, 0);
    }
    public COPY(): antlr.TerminalNode {
        return this.getToken(CypherParser.COPY, 0);
    }
    public COUNT(): antlr.TerminalNode {
        return this.getToken(CypherParser.COUNT, 0);
    }
    public CYCLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.CYCLE, 0);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DATABASE, 0);
    }
    public DECIMAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.DECIMAL, 0);
    }
    public DELETE(): antlr.TerminalNode {
        return this.getToken(CypherParser.DELETE, 0);
    }
    public DETACH(): antlr.TerminalNode {
        return this.getToken(CypherParser.DETACH, 0);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(CypherParser.DROP, 0);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPLAIN, 0);
    }
    public EXPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXPORT, 0);
    }
    public EXTENSION(): antlr.TerminalNode {
        return this.getToken(CypherParser.EXTENSION, 0);
    }
    public FORCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.FORCE, 0);
    }
    public GRAPH(): antlr.TerminalNode {
        return this.getToken(CypherParser.GRAPH, 0);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(CypherParser.IF, 0);
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(CypherParser.IS, 0);
    }
    public IMPORT(): antlr.TerminalNode {
        return this.getToken(CypherParser.IMPORT, 0);
    }
    public INCREMENT(): antlr.TerminalNode {
        return this.getToken(CypherParser.INCREMENT, 0);
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(CypherParser.KEY, 0);
    }
    public LOAD(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOAD, 0);
    }
    public LOGICAL(): antlr.TerminalNode {
        return this.getToken(CypherParser.LOGICAL, 0);
    }
    public MATCH(): antlr.TerminalNode {
        return this.getToken(CypherParser.MATCH, 0);
    }
    public MAXVALUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MAXVALUE, 0);
    }
    public MERGE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MERGE, 0);
    }
    public MINVALUE(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINVALUE, 0);
    }
    public NO(): antlr.TerminalNode {
        return this.getToken(CypherParser.NO, 0);
    }
    public NODE(): antlr.TerminalNode {
        return this.getToken(CypherParser.NODE, 0);
    }
    public PROJECT(): antlr.TerminalNode {
        return this.getToken(CypherParser.PROJECT, 0);
    }
    public READ(): antlr.TerminalNode {
        return this.getToken(CypherParser.READ, 0);
    }
    public REL(): antlr.TerminalNode {
        return this.getToken(CypherParser.REL, 0);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(CypherParser.RENAME, 0);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(CypherParser.RETURN, 0);
    }
    public ROLLBACK(): antlr.TerminalNode {
        return this.getToken(CypherParser.ROLLBACK, 0);
    }
    public ROLE(): antlr.TerminalNode {
        return this.getToken(CypherParser.ROLE, 0);
    }
    public SEQUENCE(): antlr.TerminalNode {
        return this.getToken(CypherParser.SEQUENCE, 0);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(CypherParser.SET, 0);
    }
    public START(): antlr.TerminalNode {
        return this.getToken(CypherParser.START, 0);
    }
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.STRUCT, 0);
    }
    public L_SKIP(): antlr.TerminalNode {
        return this.getToken(CypherParser.L_SKIP, 0);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(CypherParser.LIMIT, 0);
    }
    public TRANSACTION(): antlr.TerminalNode {
        return this.getToken(CypherParser.TRANSACTION, 0);
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(CypherParser.TYPE, 0);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(CypherParser.USE, 0);
    }
    public UNINSTALL(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNINSTALL, 0);
    }
    public UPDATE(): antlr.TerminalNode {
        return this.getToken(CypherParser.UPDATE, 0);
    }
    public WRITE(): antlr.TerminalNode {
        return this.getToken(CypherParser.WRITE, 0);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(CypherParser.FROM, 0);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(CypherParser.TO, 0);
    }
    public YIELD(): antlr.TerminalNode {
        return this.getToken(CypherParser.YIELD, 0);
    }
    public USER(): antlr.TerminalNode {
        return this.getToken(CypherParser.USER, 0);
    }
    public PASSWORD(): antlr.TerminalNode {
        return this.getToken(CypherParser.PASSWORD, 0);
    }
    public MAP(): antlr.TerminalNode {
        return this.getToken(CypherParser.MAP, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_iC_NonReservedKeywords;
    }
}


export class OC_LeftArrowHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_LeftArrowHead;
    }
}


export class OC_RightArrowHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RightArrowHead;
    }
}


export class OC_DashContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Dash;
    }
}
