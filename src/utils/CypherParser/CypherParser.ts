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
    public static readonly AND = 50;
    public static readonly AS = 51;
    public static readonly ASC = 52;
    public static readonly ASCENDING = 53;
    public static readonly ATTACH = 54;
    public static readonly BEGIN = 55;
    public static readonly BY = 56;
    public static readonly CALL = 57;
    public static readonly CASE = 58;
    public static readonly CAST = 59;
    public static readonly CHECKPOINT = 60;
    public static readonly COLUMN = 61;
    public static readonly COMMENT = 62;
    public static readonly COMMIT = 63;
    public static readonly COMMIT_SKIP_CHECKPOINT = 64;
    public static readonly CONTAINS = 65;
    public static readonly COPY = 66;
    public static readonly COUNT = 67;
    public static readonly CREATE = 68;
    public static readonly CYCLE = 69;
    public static readonly DATABASE = 70;
    public static readonly DBTYPE = 71;
    public static readonly DEFAULT = 72;
    public static readonly DELETE = 73;
    public static readonly DESC = 74;
    public static readonly DESCENDING = 75;
    public static readonly DETACH = 76;
    public static readonly DISTINCT = 77;
    public static readonly DROP = 78;
    public static readonly ELSE = 79;
    public static readonly END = 80;
    public static readonly ENDS = 81;
    public static readonly EXISTS = 82;
    public static readonly EXPLAIN = 83;
    public static readonly EXPORT = 84;
    public static readonly EXTENSION = 85;
    public static readonly FALSE = 86;
    public static readonly FROM = 87;
    public static readonly FORCE = 88;
    public static readonly GLOB = 89;
    public static readonly GRAPH = 90;
    public static readonly GROUP = 91;
    public static readonly HEADERS = 92;
    public static readonly HINT = 93;
    public static readonly IMPORT = 94;
    public static readonly IF = 95;
    public static readonly IN = 96;
    public static readonly INCREMENT = 97;
    public static readonly INSTALL = 98;
    public static readonly IS = 99;
    public static readonly JOIN = 100;
    public static readonly KEY = 101;
    public static readonly LIMIT = 102;
    public static readonly LOAD = 103;
    public static readonly LOGICAL = 104;
    public static readonly MACRO = 105;
    public static readonly MATCH = 106;
    public static readonly MAXVALUE = 107;
    public static readonly MERGE = 108;
    public static readonly MINVALUE = 109;
    public static readonly MULTI_JOIN = 110;
    public static readonly NO = 111;
    public static readonly NODE = 112;
    public static readonly NOT = 113;
    public static readonly NONE = 114;
    public static readonly NULL = 115;
    public static readonly ON = 116;
    public static readonly ONLY = 117;
    public static readonly OPTIONAL = 118;
    public static readonly OR = 119;
    public static readonly ORDER = 120;
    public static readonly PRIMARY = 121;
    public static readonly PROFILE = 122;
    public static readonly PROJECT = 123;
    public static readonly READ = 124;
    public static readonly REL = 125;
    public static readonly RENAME = 126;
    public static readonly RETURN = 127;
    public static readonly ROLLBACK = 128;
    public static readonly ROLLBACK_SKIP_CHECKPOINT = 129;
    public static readonly SEQUENCE = 130;
    public static readonly SET = 131;
    public static readonly SHORTEST = 132;
    public static readonly START = 133;
    public static readonly STARTS = 134;
    public static readonly STRUCT = 135;
    public static readonly TABLE = 136;
    public static readonly THEN = 137;
    public static readonly TO = 138;
    public static readonly TRAIL = 139;
    public static readonly TRANSACTION = 140;
    public static readonly TRUE = 141;
    public static readonly TYPE = 142;
    public static readonly UNION = 143;
    public static readonly UNWIND = 144;
    public static readonly UNINSTALL = 145;
    public static readonly UPDATE = 146;
    public static readonly USE = 147;
    public static readonly WHEN = 148;
    public static readonly WHERE = 149;
    public static readonly WITH = 150;
    public static readonly WRITE = 151;
    public static readonly WSHORTEST = 152;
    public static readonly XOR = 153;
    public static readonly SINGLE = 154;
    public static readonly YIELD = 155;
    public static readonly USER = 156;
    public static readonly PASSWORD = 157;
    public static readonly ROLE = 158;
    public static readonly MAP = 159;
    public static readonly DECIMAL = 160;
    public static readonly STAR = 161;
    public static readonly L_SKIP = 162;
    public static readonly INVALID_NOT_EQUAL = 163;
    public static readonly COLON = 164;
    public static readonly DOTDOT = 165;
    public static readonly MINUS = 166;
    public static readonly FACTORIAL = 167;
    public static readonly StringLiteral = 168;
    public static readonly EscapedChar = 169;
    public static readonly DecimalInteger = 170;
    public static readonly HexLetter = 171;
    public static readonly HexDigit = 172;
    public static readonly Digit = 173;
    public static readonly NonZeroDigit = 174;
    public static readonly NonZeroOctDigit = 175;
    public static readonly ZeroDigit = 176;
    public static readonly ExponentDecimalReal = 177;
    public static readonly RegularDecimalReal = 178;
    public static readonly UnescapedSymbolicName = 179;
    public static readonly IdentifierStart = 180;
    public static readonly IdentifierPart = 181;
    public static readonly EscapedSymbolicName = 182;
    public static readonly SP = 183;
    public static readonly WHITESPACE = 184;
    public static readonly CypherComment = 185;
    public static readonly Unknown = 186;
    public static readonly RULE_ku_Statements = 0;
    public static readonly RULE_oC_Cypher = 1;
    public static readonly RULE_oC_Statement = 2;
    public static readonly RULE_kU_CopyFrom = 3;
    public static readonly RULE_kU_ColumnNames = 4;
    public static readonly RULE_kU_ScanSource = 5;
    public static readonly RULE_kU_CopyFromByColumn = 6;
    public static readonly RULE_kU_CopyTO = 7;
    public static readonly RULE_kU_ExportDatabase = 8;
    public static readonly RULE_kU_ImportDatabase = 9;
    public static readonly RULE_kU_AttachDatabase = 10;
    public static readonly RULE_kU_Option = 11;
    public static readonly RULE_kU_Options = 12;
    public static readonly RULE_kU_DetachDatabase = 13;
    public static readonly RULE_kU_UseDatabase = 14;
    public static readonly RULE_kU_StandaloneCall = 15;
    public static readonly RULE_kU_CommentOn = 16;
    public static readonly RULE_kU_CreateMacro = 17;
    public static readonly RULE_kU_PositionalArgs = 18;
    public static readonly RULE_kU_DefaultArg = 19;
    public static readonly RULE_kU_FilePaths = 20;
    public static readonly RULE_kU_IfNotExists = 21;
    public static readonly RULE_kU_CreateNodeTable = 22;
    public static readonly RULE_kU_CreateRelTable = 23;
    public static readonly RULE_kU_FromToConnections = 24;
    public static readonly RULE_kU_FromToConnection = 25;
    public static readonly RULE_kU_CreateSequence = 26;
    public static readonly RULE_kU_CreateType = 27;
    public static readonly RULE_kU_SequenceOptions = 28;
    public static readonly RULE_kU_WithPasswd = 29;
    public static readonly RULE_kU_CreateUser = 30;
    public static readonly RULE_kU_CreateRole = 31;
    public static readonly RULE_kU_IncrementBy = 32;
    public static readonly RULE_kU_MinValue = 33;
    public static readonly RULE_kU_MaxValue = 34;
    public static readonly RULE_kU_StartWith = 35;
    public static readonly RULE_kU_Cycle = 36;
    public static readonly RULE_kU_IfExists = 37;
    public static readonly RULE_kU_Drop = 38;
    public static readonly RULE_kU_AlterTable = 39;
    public static readonly RULE_kU_AlterOptions = 40;
    public static readonly RULE_kU_AddProperty = 41;
    public static readonly RULE_kU_Default = 42;
    public static readonly RULE_kU_DropProperty = 43;
    public static readonly RULE_kU_RenameTable = 44;
    public static readonly RULE_kU_RenameProperty = 45;
    public static readonly RULE_kU_AddFromToConnection = 46;
    public static readonly RULE_kU_DropFromToConnection = 47;
    public static readonly RULE_kU_ColumnDefinitions = 48;
    public static readonly RULE_kU_ColumnDefinition = 49;
    public static readonly RULE_kU_PropertyDefinitions = 50;
    public static readonly RULE_kU_PropertyDefinition = 51;
    public static readonly RULE_kU_CreateNodeConstraint = 52;
    public static readonly RULE_kU_UnionType = 53;
    public static readonly RULE_kU_StructType = 54;
    public static readonly RULE_kU_MapType = 55;
    public static readonly RULE_kU_DecimalType = 56;
    public static readonly RULE_kU_DataType = 57;
    public static readonly RULE_kU_ListIdentifiers = 58;
    public static readonly RULE_kU_ListIdentifier = 59;
    public static readonly RULE_oC_AnyCypherOption = 60;
    public static readonly RULE_oC_Explain = 61;
    public static readonly RULE_oC_Profile = 62;
    public static readonly RULE_kU_Transaction = 63;
    public static readonly RULE_kU_Extension = 64;
    public static readonly RULE_kU_LoadExtension = 65;
    public static readonly RULE_kU_InstallExtension = 66;
    public static readonly RULE_kU_UninstallExtension = 67;
    public static readonly RULE_kU_UpdateExtension = 68;
    public static readonly RULE_oC_Query = 69;
    public static readonly RULE_oC_RegularQuery = 70;
    public static readonly RULE_oC_Union = 71;
    public static readonly RULE_oC_SingleQuery = 72;
    public static readonly RULE_oC_SinglePartQuery = 73;
    public static readonly RULE_oC_MultiPartQuery = 74;
    public static readonly RULE_kU_QueryPart = 75;
    public static readonly RULE_oC_UpdatingClause = 76;
    public static readonly RULE_oC_ReadingClause = 77;
    public static readonly RULE_kU_LoadFrom = 78;
    public static readonly RULE_oC_YieldItem = 79;
    public static readonly RULE_oC_YieldItems = 80;
    public static readonly RULE_kU_InQueryCall = 81;
    public static readonly RULE_oC_Match = 82;
    public static readonly RULE_kU_Hint = 83;
    public static readonly RULE_kU_JoinNode = 84;
    public static readonly RULE_oC_Unwind = 85;
    public static readonly RULE_oC_Create = 86;
    public static readonly RULE_oC_Merge = 87;
    public static readonly RULE_oC_MergeAction = 88;
    public static readonly RULE_oC_Set = 89;
    public static readonly RULE_oC_SetItem = 90;
    public static readonly RULE_oC_Delete = 91;
    public static readonly RULE_oC_With = 92;
    public static readonly RULE_oC_Return = 93;
    public static readonly RULE_oC_ProjectionBody = 94;
    public static readonly RULE_oC_ProjectionItems = 95;
    public static readonly RULE_oC_ProjectionItem = 96;
    public static readonly RULE_oC_Order = 97;
    public static readonly RULE_oC_Skip = 98;
    public static readonly RULE_oC_Limit = 99;
    public static readonly RULE_oC_SortItem = 100;
    public static readonly RULE_oC_Where = 101;
    public static readonly RULE_oC_Pattern = 102;
    public static readonly RULE_oC_PatternPart = 103;
    public static readonly RULE_oC_AnonymousPatternPart = 104;
    public static readonly RULE_oC_PatternElement = 105;
    public static readonly RULE_oC_NodePattern = 106;
    public static readonly RULE_oC_PatternElementChain = 107;
    public static readonly RULE_oC_RelationshipPattern = 108;
    public static readonly RULE_oC_RelationshipDetail = 109;
    public static readonly RULE_kU_Properties = 110;
    public static readonly RULE_oC_RelationshipTypes = 111;
    public static readonly RULE_oC_NodeLabels = 112;
    public static readonly RULE_kU_RecursiveDetail = 113;
    public static readonly RULE_kU_RecursiveType = 114;
    public static readonly RULE_oC_RangeLiteral = 115;
    public static readonly RULE_kU_RecursiveComprehension = 116;
    public static readonly RULE_kU_RecursiveProjectionItems = 117;
    public static readonly RULE_oC_LowerBound = 118;
    public static readonly RULE_oC_UpperBound = 119;
    public static readonly RULE_oC_LabelName = 120;
    public static readonly RULE_oC_RelTypeName = 121;
    public static readonly RULE_oC_Expression = 122;
    public static readonly RULE_oC_OrExpression = 123;
    public static readonly RULE_oC_XorExpression = 124;
    public static readonly RULE_oC_AndExpression = 125;
    public static readonly RULE_oC_NotExpression = 126;
    public static readonly RULE_oC_ComparisonExpression = 127;
    public static readonly RULE_kU_ComparisonOperator = 128;
    public static readonly RULE_kU_BitwiseOrOperatorExpression = 129;
    public static readonly RULE_kU_BitwiseAndOperatorExpression = 130;
    public static readonly RULE_kU_BitShiftOperatorExpression = 131;
    public static readonly RULE_kU_BitShiftOperator = 132;
    public static readonly RULE_oC_AddOrSubtractExpression = 133;
    public static readonly RULE_kU_AddOrSubtractOperator = 134;
    public static readonly RULE_oC_MultiplyDivideModuloExpression = 135;
    public static readonly RULE_kU_MultiplyDivideModuloOperator = 136;
    public static readonly RULE_oC_PowerOfExpression = 137;
    public static readonly RULE_oC_StringListNullOperatorExpression = 138;
    public static readonly RULE_oC_ListOperatorExpression = 139;
    public static readonly RULE_oC_StringOperatorExpression = 140;
    public static readonly RULE_oC_RegularExpression = 141;
    public static readonly RULE_oC_NullOperatorExpression = 142;
    public static readonly RULE_oC_UnaryAddSubtractOrFactorialExpression = 143;
    public static readonly RULE_oC_PropertyOrLabelsExpression = 144;
    public static readonly RULE_oC_Atom = 145;
    public static readonly RULE_oC_Quantifier = 146;
    public static readonly RULE_oC_FilterExpression = 147;
    public static readonly RULE_oC_IdInColl = 148;
    public static readonly RULE_oC_Literal = 149;
    public static readonly RULE_oC_BooleanLiteral = 150;
    public static readonly RULE_oC_ListLiteral = 151;
    public static readonly RULE_kU_ListEntry = 152;
    public static readonly RULE_kU_StructLiteral = 153;
    public static readonly RULE_kU_StructField = 154;
    public static readonly RULE_oC_ParenthesizedExpression = 155;
    public static readonly RULE_oC_FunctionInvocation = 156;
    public static readonly RULE_oC_FunctionName = 157;
    public static readonly RULE_kU_FunctionParameter = 158;
    public static readonly RULE_kU_LambdaParameter = 159;
    public static readonly RULE_kU_LambdaVars = 160;
    public static readonly RULE_oC_PathPatterns = 161;
    public static readonly RULE_oC_ExistCountSubquery = 162;
    public static readonly RULE_oC_PropertyLookup = 163;
    public static readonly RULE_oC_CaseExpression = 164;
    public static readonly RULE_oC_CaseAlternative = 165;
    public static readonly RULE_oC_Variable = 166;
    public static readonly RULE_oC_NumberLiteral = 167;
    public static readonly RULE_oC_Parameter = 168;
    public static readonly RULE_oC_PropertyExpression = 169;
    public static readonly RULE_oC_PropertyKeyName = 170;
    public static readonly RULE_oC_IntegerLiteral = 171;
    public static readonly RULE_oC_DoubleLiteral = 172;
    public static readonly RULE_oC_SchemaName = 173;
    public static readonly RULE_oC_SymbolicName = 174;
    public static readonly RULE_kU_NonReservedKeywords = 175;
    public static readonly RULE_oC_LeftArrowHead = 176;
    public static readonly RULE_oC_RightArrowHead = 177;
    public static readonly RULE_oC_Dash = 178;

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
        null, "'*'", null, "'!='", "':'", "'..'", "'-'", "'!'", null, null, 
        null, null, null, null, null, null, "'0'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "ACYCLIC", "ANY", "ADD", "ALL", "ALTER", "AND", "AS", "ASC", 
        "ASCENDING", "ATTACH", "BEGIN", "BY", "CALL", "CASE", "CAST", "CHECKPOINT", 
        "COLUMN", "COMMENT", "COMMIT", "COMMIT_SKIP_CHECKPOINT", "CONTAINS", 
        "COPY", "COUNT", "CREATE", "CYCLE", "DATABASE", "DBTYPE", "DEFAULT", 
        "DELETE", "DESC", "DESCENDING", "DETACH", "DISTINCT", "DROP", "ELSE", 
        "END", "ENDS", "EXISTS", "EXPLAIN", "EXPORT", "EXTENSION", "FALSE", 
        "FROM", "FORCE", "GLOB", "GRAPH", "GROUP", "HEADERS", "HINT", "IMPORT", 
        "IF", "IN", "INCREMENT", "INSTALL", "IS", "JOIN", "KEY", "LIMIT", 
        "LOAD", "LOGICAL", "MACRO", "MATCH", "MAXVALUE", "MERGE", "MINVALUE", 
        "MULTI_JOIN", "NO", "NODE", "NOT", "NONE", "NULL", "ON", "ONLY", 
        "OPTIONAL", "OR", "ORDER", "PRIMARY", "PROFILE", "PROJECT", "READ", 
        "REL", "RENAME", "RETURN", "ROLLBACK", "ROLLBACK_SKIP_CHECKPOINT", 
        "SEQUENCE", "SET", "SHORTEST", "START", "STARTS", "STRUCT", "TABLE", 
        "THEN", "TO", "TRAIL", "TRANSACTION", "TRUE", "TYPE", "UNION", "UNWIND", 
        "UNINSTALL", "UPDATE", "USE", "WHEN", "WHERE", "WITH", "WRITE", 
        "WSHORTEST", "XOR", "SINGLE", "YIELD", "USER", "PASSWORD", "ROLE", 
        "MAP", "DECIMAL", "STAR", "L_SKIP", "INVALID_NOT_EQUAL", "COLON", 
        "DOTDOT", "MINUS", "FACTORIAL", "StringLiteral", "EscapedChar", 
        "DecimalInteger", "HexLetter", "HexDigit", "Digit", "NonZeroDigit", 
        "NonZeroOctDigit", "ZeroDigit", "ExponentDecimalReal", "RegularDecimalReal", 
        "UnescapedSymbolicName", "IdentifierStart", "IdentifierPart", "EscapedSymbolicName", 
        "SP", "WHITESPACE", "CypherComment", "Unknown"
    ];
    public static readonly ruleNames = [
        "ku_Statements", "oC_Cypher", "oC_Statement", "kU_CopyFrom", "kU_ColumnNames", 
        "kU_ScanSource", "kU_CopyFromByColumn", "kU_CopyTO", "kU_ExportDatabase", 
        "kU_ImportDatabase", "kU_AttachDatabase", "kU_Option", "kU_Options", 
        "kU_DetachDatabase", "kU_UseDatabase", "kU_StandaloneCall", "kU_CommentOn", 
        "kU_CreateMacro", "kU_PositionalArgs", "kU_DefaultArg", "kU_FilePaths", 
        "kU_IfNotExists", "kU_CreateNodeTable", "kU_CreateRelTable", "kU_FromToConnections", 
        "kU_FromToConnection", "kU_CreateSequence", "kU_CreateType", "kU_SequenceOptions", 
        "kU_WithPasswd", "kU_CreateUser", "kU_CreateRole", "kU_IncrementBy", 
        "kU_MinValue", "kU_MaxValue", "kU_StartWith", "kU_Cycle", "kU_IfExists", 
        "kU_Drop", "kU_AlterTable", "kU_AlterOptions", "kU_AddProperty", 
        "kU_Default", "kU_DropProperty", "kU_RenameTable", "kU_RenameProperty", 
        "kU_AddFromToConnection", "kU_DropFromToConnection", "kU_ColumnDefinitions", 
        "kU_ColumnDefinition", "kU_PropertyDefinitions", "kU_PropertyDefinition", 
        "kU_CreateNodeConstraint", "kU_UnionType", "kU_StructType", "kU_MapType", 
        "kU_DecimalType", "kU_DataType", "kU_ListIdentifiers", "kU_ListIdentifier", 
        "oC_AnyCypherOption", "oC_Explain", "oC_Profile", "kU_Transaction", 
        "kU_Extension", "kU_LoadExtension", "kU_InstallExtension", "kU_UninstallExtension", 
        "kU_UpdateExtension", "oC_Query", "oC_RegularQuery", "oC_Union", 
        "oC_SingleQuery", "oC_SinglePartQuery", "oC_MultiPartQuery", "kU_QueryPart", 
        "oC_UpdatingClause", "oC_ReadingClause", "kU_LoadFrom", "oC_YieldItem", 
        "oC_YieldItems", "kU_InQueryCall", "oC_Match", "kU_Hint", "kU_JoinNode", 
        "oC_Unwind", "oC_Create", "oC_Merge", "oC_MergeAction", "oC_Set", 
        "oC_SetItem", "oC_Delete", "oC_With", "oC_Return", "oC_ProjectionBody", 
        "oC_ProjectionItems", "oC_ProjectionItem", "oC_Order", "oC_Skip", 
        "oC_Limit", "oC_SortItem", "oC_Where", "oC_Pattern", "oC_PatternPart", 
        "oC_AnonymousPatternPart", "oC_PatternElement", "oC_NodePattern", 
        "oC_PatternElementChain", "oC_RelationshipPattern", "oC_RelationshipDetail", 
        "kU_Properties", "oC_RelationshipTypes", "oC_NodeLabels", "kU_RecursiveDetail", 
        "kU_RecursiveType", "oC_RangeLiteral", "kU_RecursiveComprehension", 
        "kU_RecursiveProjectionItems", "oC_LowerBound", "oC_UpperBound", 
        "oC_LabelName", "oC_RelTypeName", "oC_Expression", "oC_OrExpression", 
        "oC_XorExpression", "oC_AndExpression", "oC_NotExpression", "oC_ComparisonExpression", 
        "kU_ComparisonOperator", "kU_BitwiseOrOperatorExpression", "kU_BitwiseAndOperatorExpression", 
        "kU_BitShiftOperatorExpression", "kU_BitShiftOperator", "oC_AddOrSubtractExpression", 
        "kU_AddOrSubtractOperator", "oC_MultiplyDivideModuloExpression", 
        "kU_MultiplyDivideModuloOperator", "oC_PowerOfExpression", "oC_StringListNullOperatorExpression", 
        "oC_ListOperatorExpression", "oC_StringOperatorExpression", "oC_RegularExpression", 
        "oC_NullOperatorExpression", "oC_UnaryAddSubtractOrFactorialExpression", 
        "oC_PropertyOrLabelsExpression", "oC_Atom", "oC_Quantifier", "oC_FilterExpression", 
        "oC_IdInColl", "oC_Literal", "oC_BooleanLiteral", "oC_ListLiteral", 
        "kU_ListEntry", "kU_StructLiteral", "kU_StructField", "oC_ParenthesizedExpression", 
        "oC_FunctionInvocation", "oC_FunctionName", "kU_FunctionParameter", 
        "kU_LambdaParameter", "kU_LambdaVars", "oC_PathPatterns", "oC_ExistCountSubquery", 
        "oC_PropertyLookup", "oC_CaseExpression", "oC_CaseAlternative", 
        "oC_Variable", "oC_NumberLiteral", "oC_Parameter", "oC_PropertyExpression", 
        "oC_PropertyKeyName", "oC_IntegerLiteral", "oC_DoubleLiteral", "oC_SchemaName", 
        "oC_SymbolicName", "kU_NonReservedKeywords", "oC_LeftArrowHead", 
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
    public ku_Statements(): Ku_StatementsContext {
        let localctx: Ku_StatementsContext = new Ku_StatementsContext(this._ctx, this.state);
        this.enterRule(localctx, 0, CypherParser.RULE_ku_Statements);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 358;
            this.oC_Cypher();
            this.state = 369;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 360;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 359;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 362;
                    this.match(CypherParser.T__0);
                    this.state = 364;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
                    case 1:
                        {
                        this.state = 363;
                        this.match(CypherParser.SP);
                        }
                        break;
                    }
                    this.state = 366;
                    this.oC_Cypher();
                    }
                    }
                }
                this.state = 371;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
            }
            this.state = 373;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 372;
                this.match(CypherParser.SP);
                }
            }

            this.state = 375;
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
            this.state = 378;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===83 || _la===122) {
                {
                this.state = 377;
                this.oC_AnyCypherOption();
                }
            }

            this.state = 381;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 380;
                this.match(CypherParser.SP);
                }
            }

            {
            this.state = 383;
            this.oC_Statement();
            }
            this.state = 388;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
            case 1:
                {
                this.state = 385;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 384;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 387;
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
            this.state = 412;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 390;
                this.oC_Query();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 391;
                this.kU_CreateUser();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 392;
                this.kU_CreateRole();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 393;
                this.kU_CreateNodeTable();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 394;
                this.kU_CreateRelTable();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 395;
                this.kU_CreateSequence();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 396;
                this.kU_CreateType();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 397;
                this.kU_Drop();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 398;
                this.kU_AlterTable();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 399;
                this.kU_CopyFrom();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 400;
                this.kU_CopyFromByColumn();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 401;
                this.kU_CopyTO();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 402;
                this.kU_StandaloneCall();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 403;
                this.kU_CreateMacro();
                }
                break;
            case 15:
                this.enterOuterAlt(localctx, 15);
                {
                this.state = 404;
                this.kU_CommentOn();
                }
                break;
            case 16:
                this.enterOuterAlt(localctx, 16);
                {
                this.state = 405;
                this.kU_Transaction();
                }
                break;
            case 17:
                this.enterOuterAlt(localctx, 17);
                {
                this.state = 406;
                this.kU_Extension();
                }
                break;
            case 18:
                this.enterOuterAlt(localctx, 18);
                {
                this.state = 407;
                this.kU_ExportDatabase();
                }
                break;
            case 19:
                this.enterOuterAlt(localctx, 19);
                {
                this.state = 408;
                this.kU_ImportDatabase();
                }
                break;
            case 20:
                this.enterOuterAlt(localctx, 20);
                {
                this.state = 409;
                this.kU_AttachDatabase();
                }
                break;
            case 21:
                this.enterOuterAlt(localctx, 21);
                {
                this.state = 410;
                this.kU_DetachDatabase();
                }
                break;
            case 22:
                this.enterOuterAlt(localctx, 22);
                {
                this.state = 411;
                this.kU_UseDatabase();
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
    public kU_CopyFrom(): KU_CopyFromContext {
        let localctx: KU_CopyFromContext = new KU_CopyFromContext(this._ctx, this.state);
        this.enterRule(localctx, 6, CypherParser.RULE_kU_CopyFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 414;
            this.match(CypherParser.COPY);
            this.state = 415;
            this.match(CypherParser.SP);
            this.state = 416;
            this.oC_SchemaName();
            this.state = 418;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
            case 1:
                {
                this.state = 417;
                this.kU_ColumnNames();
                }
                break;
            }
            this.state = 420;
            this.match(CypherParser.SP);
            this.state = 421;
            this.match(CypherParser.FROM);
            this.state = 422;
            this.match(CypherParser.SP);
            this.state = 423;
            this.kU_ScanSource();
            this.state = 437;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
            case 1:
                {
                this.state = 425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 424;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 427;
                this.match(CypherParser.T__1);
                this.state = 429;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 428;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 431;
                this.kU_Options();
                this.state = 433;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 432;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 435;
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
    public kU_ColumnNames(): KU_ColumnNamesContext {
        let localctx: KU_ColumnNamesContext = new KU_ColumnNamesContext(this._ctx, this.state);
        this.enterRule(localctx, 8, CypherParser.RULE_kU_ColumnNames);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 440;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 439;
                this.match(CypherParser.SP);
                }
            }

            this.state = 442;
            this.match(CypherParser.T__1);
            this.state = 444;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 443;
                this.match(CypherParser.SP);
                }
            }

            this.state = 463;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 2765989781) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 935155895) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 298489279) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 151060671) !== 0)) {
                {
                this.state = 446;
                this.oC_SchemaName();
                this.state = 457;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 448;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 447;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 450;
                        this.match(CypherParser.T__3);
                        this.state = 452;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 451;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 454;
                        this.oC_SchemaName();
                        }
                        }
                    }
                    this.state = 459;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                }
                this.state = 461;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 460;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 465;
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
    public kU_ScanSource(): KU_ScanSourceContext {
        let localctx: KU_ScanSourceContext = new KU_ScanSourceContext(this._ctx, this.state);
        this.enterRule(localctx, 10, CypherParser.RULE_kU_ScanSource);
        let _la: number;
        try {
            this.state = 488;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 467;
                this.kU_FilePaths();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 468;
                this.match(CypherParser.T__1);
                this.state = 470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 469;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 472;
                this.oC_Query();
                this.state = 474;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 473;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 476;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 478;
                this.oC_Parameter();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 479;
                this.oC_Variable();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 480;
                this.oC_Variable();
                this.state = 481;
                this.match(CypherParser.T__4);
                this.state = 483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 482;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 485;
                this.oC_SchemaName();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 487;
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
    public kU_CopyFromByColumn(): KU_CopyFromByColumnContext {
        let localctx: KU_CopyFromByColumnContext = new KU_CopyFromByColumnContext(this._ctx, this.state);
        this.enterRule(localctx, 12, CypherParser.RULE_kU_CopyFromByColumn);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 490;
            this.match(CypherParser.COPY);
            this.state = 491;
            this.match(CypherParser.SP);
            this.state = 492;
            this.oC_SchemaName();
            this.state = 493;
            this.match(CypherParser.SP);
            this.state = 494;
            this.match(CypherParser.FROM);
            this.state = 495;
            this.match(CypherParser.SP);
            this.state = 496;
            this.match(CypherParser.T__1);
            this.state = 498;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 497;
                this.match(CypherParser.SP);
                }
            }

            this.state = 500;
            this.match(CypherParser.StringLiteral);
            this.state = 511;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===183) {
                {
                {
                this.state = 502;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 501;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 504;
                this.match(CypherParser.T__3);
                this.state = 506;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 505;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 508;
                this.match(CypherParser.StringLiteral);
                }
                }
                this.state = 513;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 514;
            this.match(CypherParser.T__2);
            this.state = 515;
            this.match(CypherParser.SP);
            this.state = 516;
            this.match(CypherParser.BY);
            this.state = 517;
            this.match(CypherParser.SP);
            this.state = 518;
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
    public kU_CopyTO(): KU_CopyTOContext {
        let localctx: KU_CopyTOContext = new KU_CopyTOContext(this._ctx, this.state);
        this.enterRule(localctx, 14, CypherParser.RULE_kU_CopyTO);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 520;
            this.match(CypherParser.COPY);
            this.state = 521;
            this.match(CypherParser.SP);
            this.state = 522;
            this.match(CypherParser.T__1);
            this.state = 524;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 523;
                this.match(CypherParser.SP);
                }
            }

            this.state = 526;
            this.oC_Query();
            this.state = 528;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 527;
                this.match(CypherParser.SP);
                }
            }

            this.state = 530;
            this.match(CypherParser.T__2);
            this.state = 531;
            this.match(CypherParser.SP);
            this.state = 532;
            this.match(CypherParser.TO);
            this.state = 533;
            this.match(CypherParser.SP);
            this.state = 534;
            this.match(CypherParser.StringLiteral);
            this.state = 548;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                {
                this.state = 536;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 535;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 538;
                this.match(CypherParser.T__1);
                this.state = 540;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 539;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 542;
                this.kU_Options();
                this.state = 544;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 543;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 546;
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
    public kU_ExportDatabase(): KU_ExportDatabaseContext {
        let localctx: KU_ExportDatabaseContext = new KU_ExportDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 16, CypherParser.RULE_kU_ExportDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 550;
            this.match(CypherParser.EXPORT);
            this.state = 551;
            this.match(CypherParser.SP);
            this.state = 552;
            this.match(CypherParser.DATABASE);
            this.state = 553;
            this.match(CypherParser.SP);
            this.state = 554;
            this.match(CypherParser.StringLiteral);
            this.state = 568;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
            case 1:
                {
                this.state = 556;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 555;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 558;
                this.match(CypherParser.T__1);
                this.state = 560;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 559;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 562;
                this.kU_Options();
                this.state = 564;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 563;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 566;
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
    public kU_ImportDatabase(): KU_ImportDatabaseContext {
        let localctx: KU_ImportDatabaseContext = new KU_ImportDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 18, CypherParser.RULE_kU_ImportDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 570;
            this.match(CypherParser.IMPORT);
            this.state = 571;
            this.match(CypherParser.SP);
            this.state = 572;
            this.match(CypherParser.DATABASE);
            this.state = 573;
            this.match(CypherParser.SP);
            this.state = 574;
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
    public kU_AttachDatabase(): KU_AttachDatabaseContext {
        let localctx: KU_AttachDatabaseContext = new KU_AttachDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 20, CypherParser.RULE_kU_AttachDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 576;
            this.match(CypherParser.ATTACH);
            this.state = 577;
            this.match(CypherParser.SP);
            this.state = 578;
            this.match(CypherParser.StringLiteral);
            this.state = 583;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
            case 1:
                {
                this.state = 579;
                this.match(CypherParser.SP);
                this.state = 580;
                this.match(CypherParser.AS);
                this.state = 581;
                this.match(CypherParser.SP);
                this.state = 582;
                this.oC_SchemaName();
                }
                break;
            }
            this.state = 585;
            this.match(CypherParser.SP);
            this.state = 586;
            this.match(CypherParser.T__1);
            this.state = 588;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 587;
                this.match(CypherParser.SP);
                }
            }

            this.state = 590;
            this.match(CypherParser.DBTYPE);
            this.state = 591;
            this.match(CypherParser.SP);
            this.state = 592;
            this.oC_SymbolicName();
            this.state = 601;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
            case 1:
                {
                this.state = 594;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 593;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 596;
                this.match(CypherParser.T__3);
                this.state = 598;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 597;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 600;
                this.kU_Options();
                }
                break;
            }
            this.state = 604;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 603;
                this.match(CypherParser.SP);
                }
            }

            this.state = 606;
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
    public kU_Option(): KU_OptionContext {
        let localctx: KU_OptionContext = new KU_OptionContext(this._ctx, this.state);
        this.enterRule(localctx, 22, CypherParser.RULE_kU_Option);
        let _la: number;
        try {
            this.state = 627;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 608;
                this.oC_SymbolicName();
                this.state = 622;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
                case 1:
                    {
                    this.state = 610;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 609;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 612;
                    this.match(CypherParser.T__5);
                    this.state = 614;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 613;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 619;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===183) {
                        {
                        {
                        this.state = 616;
                        this.match(CypherParser.SP);
                        }
                        }
                        this.state = 621;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                    break;
                }
                this.state = 624;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 626;
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
    public kU_Options(): KU_OptionsContext {
        let localctx: KU_OptionsContext = new KU_OptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 24, CypherParser.RULE_kU_Options);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 629;
            this.kU_Option();
            this.state = 640;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 631;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 630;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 633;
                    this.match(CypherParser.T__3);
                    this.state = 635;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 634;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 637;
                    this.kU_Option();
                    }
                    }
                }
                this.state = 642;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
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
    public kU_DetachDatabase(): KU_DetachDatabaseContext {
        let localctx: KU_DetachDatabaseContext = new KU_DetachDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 26, CypherParser.RULE_kU_DetachDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 643;
            this.match(CypherParser.DETACH);
            this.state = 644;
            this.match(CypherParser.SP);
            this.state = 645;
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
    public kU_UseDatabase(): KU_UseDatabaseContext {
        let localctx: KU_UseDatabaseContext = new KU_UseDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 28, CypherParser.RULE_kU_UseDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 647;
            this.match(CypherParser.USE);
            this.state = 648;
            this.match(CypherParser.SP);
            this.state = 649;
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
    public kU_StandaloneCall(): KU_StandaloneCallContext {
        let localctx: KU_StandaloneCallContext = new KU_StandaloneCallContext(this._ctx, this.state);
        this.enterRule(localctx, 30, CypherParser.RULE_kU_StandaloneCall);
        let _la: number;
        try {
            this.state = 666;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 651;
                this.match(CypherParser.CALL);
                this.state = 652;
                this.match(CypherParser.SP);
                this.state = 653;
                this.oC_SymbolicName();
                this.state = 655;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 654;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 657;
                this.match(CypherParser.T__5);
                this.state = 659;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 658;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 661;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 663;
                this.match(CypherParser.CALL);
                this.state = 664;
                this.match(CypherParser.SP);
                this.state = 665;
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
    public kU_CommentOn(): KU_CommentOnContext {
        let localctx: KU_CommentOnContext = new KU_CommentOnContext(this._ctx, this.state);
        this.enterRule(localctx, 32, CypherParser.RULE_kU_CommentOn);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 668;
            this.match(CypherParser.COMMENT);
            this.state = 669;
            this.match(CypherParser.SP);
            this.state = 670;
            this.match(CypherParser.ON);
            this.state = 671;
            this.match(CypherParser.SP);
            this.state = 672;
            this.match(CypherParser.TABLE);
            this.state = 673;
            this.match(CypherParser.SP);
            this.state = 674;
            this.oC_SchemaName();
            this.state = 675;
            this.match(CypherParser.SP);
            this.state = 676;
            this.match(CypherParser.IS);
            this.state = 677;
            this.match(CypherParser.SP);
            this.state = 678;
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
    public kU_CreateMacro(): KU_CreateMacroContext {
        let localctx: KU_CreateMacroContext = new KU_CreateMacroContext(this._ctx, this.state);
        this.enterRule(localctx, 34, CypherParser.RULE_kU_CreateMacro);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 680;
            this.match(CypherParser.CREATE);
            this.state = 681;
            this.match(CypherParser.SP);
            this.state = 682;
            this.match(CypherParser.MACRO);
            this.state = 683;
            this.match(CypherParser.SP);
            this.state = 684;
            this.oC_FunctionName();
            this.state = 686;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 685;
                this.match(CypherParser.SP);
                }
            }

            this.state = 688;
            this.match(CypherParser.T__1);
            this.state = 690;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
            case 1:
                {
                this.state = 689;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 693;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
            case 1:
                {
                this.state = 692;
                this.kU_PositionalArgs();
                }
                break;
            }
            this.state = 696;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
            case 1:
                {
                this.state = 695;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 699;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 2765989781) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 935155895) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 298489279) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 151060671) !== 0)) {
                {
                this.state = 698;
                this.kU_DefaultArg();
                }
            }

            this.state = 711;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 702;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 701;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 704;
                    this.match(CypherParser.T__3);
                    this.state = 706;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 705;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 708;
                    this.kU_DefaultArg();
                    }
                    }
                }
                this.state = 713;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
            }
            this.state = 715;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 714;
                this.match(CypherParser.SP);
                }
            }

            this.state = 717;
            this.match(CypherParser.T__2);
            this.state = 718;
            this.match(CypherParser.SP);
            this.state = 719;
            this.match(CypherParser.AS);
            this.state = 720;
            this.match(CypherParser.SP);
            this.state = 721;
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
    public kU_PositionalArgs(): KU_PositionalArgsContext {
        let localctx: KU_PositionalArgsContext = new KU_PositionalArgsContext(this._ctx, this.state);
        this.enterRule(localctx, 36, CypherParser.RULE_kU_PositionalArgs);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 723;
            this.oC_SymbolicName();
            this.state = 734;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 725;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 724;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 727;
                    this.match(CypherParser.T__3);
                    this.state = 729;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 728;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 731;
                    this.oC_SymbolicName();
                    }
                    }
                }
                this.state = 736;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
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
    public kU_DefaultArg(): KU_DefaultArgContext {
        let localctx: KU_DefaultArgContext = new KU_DefaultArgContext(this._ctx, this.state);
        this.enterRule(localctx, 38, CypherParser.RULE_kU_DefaultArg);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 737;
            this.oC_SymbolicName();
            this.state = 739;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 738;
                this.match(CypherParser.SP);
                }
            }

            this.state = 741;
            this.match(CypherParser.COLON);
            this.state = 742;
            this.match(CypherParser.T__5);
            this.state = 744;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 743;
                this.match(CypherParser.SP);
                }
            }

            this.state = 746;
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
    public kU_FilePaths(): KU_FilePathsContext {
        let localctx: KU_FilePathsContext = new KU_FilePathsContext(this._ctx, this.state);
        this.enterRule(localctx, 40, CypherParser.RULE_kU_FilePaths);
        let _la: number;
        try {
            this.state = 781;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 748;
                this.match(CypherParser.T__6);
                this.state = 750;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 749;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 752;
                this.match(CypherParser.StringLiteral);
                this.state = 763;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4 || _la===183) {
                    {
                    {
                    this.state = 754;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 753;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 756;
                    this.match(CypherParser.T__3);
                    this.state = 758;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 757;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 760;
                    this.match(CypherParser.StringLiteral);
                    }
                    }
                    this.state = 765;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 766;
                this.match(CypherParser.T__7);
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 767;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.GLOB:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 768;
                this.match(CypherParser.GLOB);
                this.state = 770;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 769;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 772;
                this.match(CypherParser.T__1);
                this.state = 774;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 773;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 776;
                this.match(CypherParser.StringLiteral);
                this.state = 778;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 777;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 780;
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        let localctx: KU_IfNotExistsContext = new KU_IfNotExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 42, CypherParser.RULE_kU_IfNotExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 783;
            this.match(CypherParser.IF);
            this.state = 784;
            this.match(CypherParser.SP);
            this.state = 785;
            this.match(CypherParser.NOT);
            this.state = 786;
            this.match(CypherParser.SP);
            this.state = 787;
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
    public kU_CreateNodeTable(): KU_CreateNodeTableContext {
        let localctx: KU_CreateNodeTableContext = new KU_CreateNodeTableContext(this._ctx, this.state);
        this.enterRule(localctx, 44, CypherParser.RULE_kU_CreateNodeTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 789;
            this.match(CypherParser.CREATE);
            this.state = 790;
            this.match(CypherParser.SP);
            this.state = 791;
            this.match(CypherParser.NODE);
            this.state = 792;
            this.match(CypherParser.SP);
            this.state = 793;
            this.match(CypherParser.TABLE);
            this.state = 794;
            this.match(CypherParser.SP);
            this.state = 798;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
            case 1:
                {
                this.state = 795;
                this.kU_IfNotExists();
                this.state = 796;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 800;
            this.oC_SchemaName();
            this.state = 828;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
            case 1:
                {
                this.state = 802;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 801;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 804;
                this.match(CypherParser.T__1);
                this.state = 806;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 805;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 808;
                this.kU_PropertyDefinitions();
                this.state = 810;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
                case 1:
                    {
                    this.state = 809;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 817;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===4) {
                    {
                    this.state = 812;
                    this.match(CypherParser.T__3);
                    this.state = 814;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 813;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 816;
                    this.kU_CreateNodeConstraint();
                    }
                }

                this.state = 820;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 819;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 822;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                {
                this.state = 824;
                this.match(CypherParser.SP);
                this.state = 825;
                this.match(CypherParser.AS);
                this.state = 826;
                this.match(CypherParser.SP);
                this.state = 827;
                this.oC_Query();
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
    public kU_CreateRelTable(): KU_CreateRelTableContext {
        let localctx: KU_CreateRelTableContext = new KU_CreateRelTableContext(this._ctx, this.state);
        this.enterRule(localctx, 46, CypherParser.RULE_kU_CreateRelTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 830;
            this.match(CypherParser.CREATE);
            this.state = 831;
            this.match(CypherParser.SP);
            this.state = 832;
            this.match(CypherParser.REL);
            this.state = 833;
            this.match(CypherParser.SP);
            this.state = 834;
            this.match(CypherParser.TABLE);
            this.state = 837;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
            case 1:
                {
                this.state = 835;
                this.match(CypherParser.SP);
                this.state = 836;
                this.match(CypherParser.GROUP);
                }
                break;
            }
            this.state = 841;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
            case 1:
                {
                this.state = 839;
                this.match(CypherParser.SP);
                this.state = 840;
                this.kU_IfNotExists();
                }
                break;
            }
            this.state = 843;
            this.match(CypherParser.SP);
            this.state = 844;
            this.oC_SchemaName();
            this.state = 846;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 845;
                this.match(CypherParser.SP);
                }
            }

            this.state = 848;
            this.match(CypherParser.T__1);
            this.state = 850;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 849;
                this.match(CypherParser.SP);
                }
            }

            this.state = 852;
            this.kU_FromToConnections();
            this.state = 854;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 853;
                this.match(CypherParser.SP);
                }
            }

            this.state = 882;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
            case 1:
                {
                this.state = 864;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
                case 1:
                    {
                    this.state = 856;
                    this.match(CypherParser.T__3);
                    this.state = 858;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 857;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 860;
                    this.kU_PropertyDefinitions();
                    this.state = 862;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 861;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 874;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===4) {
                    {
                    this.state = 866;
                    this.match(CypherParser.T__3);
                    this.state = 868;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 867;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 870;
                    this.oC_SymbolicName();
                    this.state = 872;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 871;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 876;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                {
                this.state = 877;
                this.match(CypherParser.T__2);
                this.state = 878;
                this.match(CypherParser.SP);
                this.state = 879;
                this.match(CypherParser.AS);
                this.state = 880;
                this.match(CypherParser.SP);
                this.state = 881;
                this.oC_Query();
                }
                break;
            }
            this.state = 899;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
            case 1:
                {
                this.state = 884;
                this.match(CypherParser.SP);
                this.state = 885;
                this.match(CypherParser.WITH);
                this.state = 887;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 886;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 889;
                this.match(CypherParser.T__1);
                this.state = 891;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 890;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 893;
                this.kU_Options();
                this.state = 895;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 894;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 897;
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
    public kU_FromToConnections(): KU_FromToConnectionsContext {
        let localctx: KU_FromToConnectionsContext = new KU_FromToConnectionsContext(this._ctx, this.state);
        this.enterRule(localctx, 48, CypherParser.RULE_kU_FromToConnections);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 901;
            this.kU_FromToConnection();
            this.state = 912;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 903;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 902;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 905;
                    this.match(CypherParser.T__3);
                    this.state = 907;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 906;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 909;
                    this.kU_FromToConnection();
                    }
                    }
                }
                this.state = 914;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 104, this._ctx);
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
    public kU_FromToConnection(): KU_FromToConnectionContext {
        let localctx: KU_FromToConnectionContext = new KU_FromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 50, CypherParser.RULE_kU_FromToConnection);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 915;
            this.match(CypherParser.FROM);
            this.state = 916;
            this.match(CypherParser.SP);
            this.state = 917;
            this.oC_SchemaName();
            this.state = 918;
            this.match(CypherParser.SP);
            this.state = 919;
            this.match(CypherParser.TO);
            this.state = 920;
            this.match(CypherParser.SP);
            this.state = 921;
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
    public kU_CreateSequence(): KU_CreateSequenceContext {
        let localctx: KU_CreateSequenceContext = new KU_CreateSequenceContext(this._ctx, this.state);
        this.enterRule(localctx, 52, CypherParser.RULE_kU_CreateSequence);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 923;
            this.match(CypherParser.CREATE);
            this.state = 924;
            this.match(CypherParser.SP);
            this.state = 925;
            this.match(CypherParser.SEQUENCE);
            this.state = 926;
            this.match(CypherParser.SP);
            this.state = 930;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
            case 1:
                {
                this.state = 927;
                this.kU_IfNotExists();
                this.state = 928;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 932;
            this.oC_SchemaName();
            this.state = 937;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 933;
                    this.match(CypherParser.SP);
                    this.state = 934;
                    this.kU_SequenceOptions();
                    }
                    }
                }
                this.state = 939;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
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
    public kU_CreateType(): KU_CreateTypeContext {
        let localctx: KU_CreateTypeContext = new KU_CreateTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 54, CypherParser.RULE_kU_CreateType);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 940;
            this.match(CypherParser.CREATE);
            this.state = 941;
            this.match(CypherParser.SP);
            this.state = 942;
            this.match(CypherParser.TYPE);
            this.state = 943;
            this.match(CypherParser.SP);
            this.state = 944;
            this.oC_SchemaName();
            this.state = 945;
            this.match(CypherParser.SP);
            this.state = 946;
            this.match(CypherParser.AS);
            this.state = 947;
            this.match(CypherParser.SP);
            this.state = 948;
            this.kU_DataType(0);
            this.state = 950;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
            case 1:
                {
                this.state = 949;
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
    public kU_SequenceOptions(): KU_SequenceOptionsContext {
        let localctx: KU_SequenceOptionsContext = new KU_SequenceOptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 56, CypherParser.RULE_kU_SequenceOptions);
        try {
            this.state = 957;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 952;
                this.kU_IncrementBy();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 953;
                this.kU_MinValue();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 954;
                this.kU_MaxValue();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 955;
                this.kU_StartWith();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 956;
                this.kU_Cycle();
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
    public kU_WithPasswd(): KU_WithPasswdContext {
        let localctx: KU_WithPasswdContext = new KU_WithPasswdContext(this._ctx, this.state);
        this.enterRule(localctx, 58, CypherParser.RULE_kU_WithPasswd);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 959;
            this.match(CypherParser.SP);
            this.state = 960;
            this.match(CypherParser.WITH);
            this.state = 961;
            this.match(CypherParser.SP);
            this.state = 962;
            this.match(CypherParser.PASSWORD);
            this.state = 963;
            this.match(CypherParser.SP);
            this.state = 964;
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
    public kU_CreateUser(): KU_CreateUserContext {
        let localctx: KU_CreateUserContext = new KU_CreateUserContext(this._ctx, this.state);
        this.enterRule(localctx, 60, CypherParser.RULE_kU_CreateUser);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 966;
            this.match(CypherParser.CREATE);
            this.state = 967;
            this.match(CypherParser.SP);
            this.state = 968;
            this.match(CypherParser.USER);
            this.state = 969;
            this.match(CypherParser.SP);
            this.state = 973;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
            case 1:
                {
                this.state = 970;
                this.kU_IfNotExists();
                this.state = 971;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 975;
            this.oC_Variable();
            this.state = 977;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
            case 1:
                {
                this.state = 976;
                this.kU_WithPasswd();
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
    public kU_CreateRole(): KU_CreateRoleContext {
        let localctx: KU_CreateRoleContext = new KU_CreateRoleContext(this._ctx, this.state);
        this.enterRule(localctx, 62, CypherParser.RULE_kU_CreateRole);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 979;
            this.match(CypherParser.CREATE);
            this.state = 980;
            this.match(CypherParser.SP);
            this.state = 981;
            this.match(CypherParser.ROLE);
            this.state = 982;
            this.match(CypherParser.SP);
            this.state = 986;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
            case 1:
                {
                this.state = 983;
                this.kU_IfNotExists();
                this.state = 984;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 988;
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
    public kU_IncrementBy(): KU_IncrementByContext {
        let localctx: KU_IncrementByContext = new KU_IncrementByContext(this._ctx, this.state);
        this.enterRule(localctx, 64, CypherParser.RULE_kU_IncrementBy);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 990;
            this.match(CypherParser.INCREMENT);
            this.state = 991;
            this.match(CypherParser.SP);
            this.state = 994;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===56) {
                {
                this.state = 992;
                this.match(CypherParser.BY);
                this.state = 993;
                this.match(CypherParser.SP);
                }
            }

            this.state = 997;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 996;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 999;
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
    public kU_MinValue(): KU_MinValueContext {
        let localctx: KU_MinValueContext = new KU_MinValueContext(this._ctx, this.state);
        this.enterRule(localctx, 66, CypherParser.RULE_kU_MinValue);
        let _la: number;
        try {
            this.state = 1010;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1001;
                this.match(CypherParser.NO);
                this.state = 1002;
                this.match(CypherParser.SP);
                this.state = 1003;
                this.match(CypherParser.MINVALUE);
                }
                }
                break;
            case CypherParser.MINVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1004;
                this.match(CypherParser.MINVALUE);
                this.state = 1005;
                this.match(CypherParser.SP);
                this.state = 1007;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1006;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 1009;
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
    public kU_MaxValue(): KU_MaxValueContext {
        let localctx: KU_MaxValueContext = new KU_MaxValueContext(this._ctx, this.state);
        this.enterRule(localctx, 68, CypherParser.RULE_kU_MaxValue);
        let _la: number;
        try {
            this.state = 1021;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.NO:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1012;
                this.match(CypherParser.NO);
                this.state = 1013;
                this.match(CypherParser.SP);
                this.state = 1014;
                this.match(CypherParser.MAXVALUE);
                }
                }
                break;
            case CypherParser.MAXVALUE:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1015;
                this.match(CypherParser.MAXVALUE);
                this.state = 1016;
                this.match(CypherParser.SP);
                this.state = 1018;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===166) {
                    {
                    this.state = 1017;
                    this.match(CypherParser.MINUS);
                    }
                }

                this.state = 1020;
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
    public kU_StartWith(): KU_StartWithContext {
        let localctx: KU_StartWithContext = new KU_StartWithContext(this._ctx, this.state);
        this.enterRule(localctx, 70, CypherParser.RULE_kU_StartWith);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1023;
            this.match(CypherParser.START);
            this.state = 1024;
            this.match(CypherParser.SP);
            this.state = 1027;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1025;
                this.match(CypherParser.WITH);
                this.state = 1026;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1030;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===166) {
                {
                this.state = 1029;
                this.match(CypherParser.MINUS);
                }
            }

            this.state = 1032;
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
    public kU_Cycle(): KU_CycleContext {
        let localctx: KU_CycleContext = new KU_CycleContext(this._ctx, this.state);
        this.enterRule(localctx, 72, CypherParser.RULE_kU_Cycle);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1036;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===111) {
                {
                this.state = 1034;
                this.match(CypherParser.NO);
                this.state = 1035;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1038;
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
    public kU_IfExists(): KU_IfExistsContext {
        let localctx: KU_IfExistsContext = new KU_IfExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 74, CypherParser.RULE_kU_IfExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1040;
            this.match(CypherParser.IF);
            this.state = 1041;
            this.match(CypherParser.SP);
            this.state = 1042;
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
    public kU_Drop(): KU_DropContext {
        let localctx: KU_DropContext = new KU_DropContext(this._ctx, this.state);
        this.enterRule(localctx, 76, CypherParser.RULE_kU_Drop);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1044;
            this.match(CypherParser.DROP);
            this.state = 1045;
            this.match(CypherParser.SP);
            this.state = 1046;
            _la = this._input.LA(1);
            if(!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 2181038081) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1047;
            this.match(CypherParser.SP);
            this.state = 1051;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
            case 1:
                {
                this.state = 1048;
                this.kU_IfExists();
                this.state = 1049;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1053;
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
    public kU_AlterTable(): KU_AlterTableContext {
        let localctx: KU_AlterTableContext = new KU_AlterTableContext(this._ctx, this.state);
        this.enterRule(localctx, 78, CypherParser.RULE_kU_AlterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1055;
            this.match(CypherParser.ALTER);
            this.state = 1056;
            this.match(CypherParser.SP);
            this.state = 1057;
            this.match(CypherParser.TABLE);
            this.state = 1058;
            this.match(CypherParser.SP);
            this.state = 1059;
            this.oC_SchemaName();
            this.state = 1060;
            this.match(CypherParser.SP);
            this.state = 1061;
            this.kU_AlterOptions();
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
    public kU_AlterOptions(): KU_AlterOptionsContext {
        let localctx: KU_AlterOptionsContext = new KU_AlterOptionsContext(this._ctx, this.state);
        this.enterRule(localctx, 80, CypherParser.RULE_kU_AlterOptions);
        try {
            this.state = 1069;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1063;
                this.kU_AddProperty();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1064;
                this.kU_DropProperty();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1065;
                this.kU_RenameTable();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1066;
                this.kU_RenameProperty();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1067;
                this.kU_AddFromToConnection();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1068;
                this.kU_DropFromToConnection();
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
    public kU_AddProperty(): KU_AddPropertyContext {
        let localctx: KU_AddPropertyContext = new KU_AddPropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 82, CypherParser.RULE_kU_AddProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1071;
            this.match(CypherParser.ADD);
            this.state = 1072;
            this.match(CypherParser.SP);
            this.state = 1076;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
            case 1:
                {
                this.state = 1073;
                this.kU_IfNotExists();
                this.state = 1074;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1078;
            this.oC_PropertyKeyName();
            this.state = 1079;
            this.match(CypherParser.SP);
            this.state = 1080;
            this.kU_DataType(0);
            this.state = 1083;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
            case 1:
                {
                this.state = 1081;
                this.match(CypherParser.SP);
                this.state = 1082;
                this.kU_Default();
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
    public kU_Default(): KU_DefaultContext {
        let localctx: KU_DefaultContext = new KU_DefaultContext(this._ctx, this.state);
        this.enterRule(localctx, 84, CypherParser.RULE_kU_Default);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1085;
            this.match(CypherParser.DEFAULT);
            this.state = 1086;
            this.match(CypherParser.SP);
            this.state = 1087;
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
    public kU_DropProperty(): KU_DropPropertyContext {
        let localctx: KU_DropPropertyContext = new KU_DropPropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 86, CypherParser.RULE_kU_DropProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1089;
            this.match(CypherParser.DROP);
            this.state = 1090;
            this.match(CypherParser.SP);
            this.state = 1094;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
            case 1:
                {
                this.state = 1091;
                this.kU_IfExists();
                this.state = 1092;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1096;
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
    public kU_RenameTable(): KU_RenameTableContext {
        let localctx: KU_RenameTableContext = new KU_RenameTableContext(this._ctx, this.state);
        this.enterRule(localctx, 88, CypherParser.RULE_kU_RenameTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1098;
            this.match(CypherParser.RENAME);
            this.state = 1099;
            this.match(CypherParser.SP);
            this.state = 1100;
            this.match(CypherParser.TO);
            this.state = 1101;
            this.match(CypherParser.SP);
            this.state = 1102;
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
    public kU_RenameProperty(): KU_RenamePropertyContext {
        let localctx: KU_RenamePropertyContext = new KU_RenamePropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 90, CypherParser.RULE_kU_RenameProperty);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1104;
            this.match(CypherParser.RENAME);
            this.state = 1105;
            this.match(CypherParser.SP);
            this.state = 1106;
            this.oC_PropertyKeyName();
            this.state = 1107;
            this.match(CypherParser.SP);
            this.state = 1108;
            this.match(CypherParser.TO);
            this.state = 1109;
            this.match(CypherParser.SP);
            this.state = 1110;
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
    public kU_AddFromToConnection(): KU_AddFromToConnectionContext {
        let localctx: KU_AddFromToConnectionContext = new KU_AddFromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 92, CypherParser.RULE_kU_AddFromToConnection);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1112;
            this.match(CypherParser.ADD);
            this.state = 1113;
            this.match(CypherParser.SP);
            this.state = 1117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===95) {
                {
                this.state = 1114;
                this.kU_IfNotExists();
                this.state = 1115;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1119;
            this.kU_FromToConnection();
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
    public kU_DropFromToConnection(): KU_DropFromToConnectionContext {
        let localctx: KU_DropFromToConnectionContext = new KU_DropFromToConnectionContext(this._ctx, this.state);
        this.enterRule(localctx, 94, CypherParser.RULE_kU_DropFromToConnection);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1121;
            this.match(CypherParser.DROP);
            this.state = 1122;
            this.match(CypherParser.SP);
            this.state = 1126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===95) {
                {
                this.state = 1123;
                this.kU_IfExists();
                this.state = 1124;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1128;
            this.kU_FromToConnection();
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
    public kU_ColumnDefinitions(): KU_ColumnDefinitionsContext {
        let localctx: KU_ColumnDefinitionsContext = new KU_ColumnDefinitionsContext(this._ctx, this.state);
        this.enterRule(localctx, 96, CypherParser.RULE_kU_ColumnDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1130;
            this.kU_ColumnDefinition();
            this.state = 1141;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 130, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1132;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1131;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1134;
                    this.match(CypherParser.T__3);
                    this.state = 1136;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1135;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1138;
                    this.kU_ColumnDefinition();
                    }
                    }
                }
                this.state = 1143;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 130, this._ctx);
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
    public kU_ColumnDefinition(): KU_ColumnDefinitionContext {
        let localctx: KU_ColumnDefinitionContext = new KU_ColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 98, CypherParser.RULE_kU_ColumnDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1144;
            this.oC_PropertyKeyName();
            this.state = 1145;
            this.match(CypherParser.SP);
            this.state = 1146;
            this.kU_DataType(0);
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
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        let localctx: KU_PropertyDefinitionsContext = new KU_PropertyDefinitionsContext(this._ctx, this.state);
        this.enterRule(localctx, 100, CypherParser.RULE_kU_PropertyDefinitions);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1148;
            this.kU_PropertyDefinition();
            this.state = 1159;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1150;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1149;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1152;
                    this.match(CypherParser.T__3);
                    this.state = 1154;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1153;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1156;
                    this.kU_PropertyDefinition();
                    }
                    }
                }
                this.state = 1161;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 133, this._ctx);
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
    public kU_PropertyDefinition(): KU_PropertyDefinitionContext {
        let localctx: KU_PropertyDefinitionContext = new KU_PropertyDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 102, CypherParser.RULE_kU_PropertyDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1162;
            this.kU_ColumnDefinition();
            this.state = 1165;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
            case 1:
                {
                this.state = 1163;
                this.match(CypherParser.SP);
                this.state = 1164;
                this.kU_Default();
                }
                break;
            }
            this.state = 1171;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
            case 1:
                {
                this.state = 1167;
                this.match(CypherParser.SP);
                this.state = 1168;
                this.match(CypherParser.PRIMARY);
                this.state = 1169;
                this.match(CypherParser.SP);
                this.state = 1170;
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
    public kU_CreateNodeConstraint(): KU_CreateNodeConstraintContext {
        let localctx: KU_CreateNodeConstraintContext = new KU_CreateNodeConstraintContext(this._ctx, this.state);
        this.enterRule(localctx, 104, CypherParser.RULE_kU_CreateNodeConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1173;
            this.match(CypherParser.PRIMARY);
            this.state = 1174;
            this.match(CypherParser.SP);
            this.state = 1175;
            this.match(CypherParser.KEY);
            this.state = 1177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1176;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1179;
            this.match(CypherParser.T__1);
            this.state = 1181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1180;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1183;
            this.oC_PropertyKeyName();
            this.state = 1185;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1184;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1187;
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
    public kU_UnionType(): KU_UnionTypeContext {
        let localctx: KU_UnionTypeContext = new KU_UnionTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 106, CypherParser.RULE_kU_UnionType);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1189;
            this.match(CypherParser.UNION);
            this.state = 1191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1190;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1193;
            this.match(CypherParser.T__1);
            this.state = 1195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1194;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1197;
            this.kU_ColumnDefinitions();
            this.state = 1199;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1198;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1201;
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
    public kU_StructType(): KU_StructTypeContext {
        let localctx: KU_StructTypeContext = new KU_StructTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 108, CypherParser.RULE_kU_StructType);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1203;
            this.match(CypherParser.STRUCT);
            this.state = 1205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1204;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1207;
            this.match(CypherParser.T__1);
            this.state = 1209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1208;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1211;
            this.kU_ColumnDefinitions();
            this.state = 1213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1212;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1215;
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
    public kU_MapType(): KU_MapTypeContext {
        let localctx: KU_MapTypeContext = new KU_MapTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 110, CypherParser.RULE_kU_MapType);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1217;
            this.match(CypherParser.MAP);
            this.state = 1219;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1218;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1221;
            this.match(CypherParser.T__1);
            this.state = 1223;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1222;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1225;
            this.kU_DataType(0);
            this.state = 1227;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1226;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1229;
            this.match(CypherParser.T__3);
            this.state = 1231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1230;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1233;
            this.kU_DataType(0);
            this.state = 1235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1234;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1237;
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
    public kU_DecimalType(): KU_DecimalTypeContext {
        let localctx: KU_DecimalTypeContext = new KU_DecimalTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 112, CypherParser.RULE_kU_DecimalType);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1239;
            this.match(CypherParser.DECIMAL);
            this.state = 1241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1240;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1243;
            this.match(CypherParser.T__1);
            this.state = 1245;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1244;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1247;
            this.oC_IntegerLiteral();
            this.state = 1249;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1248;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1251;
            this.match(CypherParser.T__3);
            this.state = 1253;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1252;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1255;
            this.oC_IntegerLiteral();
            this.state = 1257;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1256;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1259;
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

    public kU_DataType(): KU_DataTypeContext;
    public kU_DataType(_p: number): KU_DataTypeContext;
    public kU_DataType(_p?: number): KU_DataTypeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new KU_DataTypeContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 114;
        this.enterRecursionRule(localctx, 114, CypherParser.RULE_kU_DataType, _p);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1267;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
            case 1:
                {
                this.state = 1262;
                this.oC_SymbolicName();
                }
                break;
            case 2:
                {
                this.state = 1263;
                this.kU_UnionType();
                }
                break;
            case 3:
                {
                this.state = 1264;
                this.kU_StructType();
                }
                break;
            case 4:
                {
                this.state = 1265;
                this.kU_MapType();
                }
                break;
            case 5:
                {
                this.state = 1266;
                this.kU_DecimalType();
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1273;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 156, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    {
                    localctx = new KU_DataTypeContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_DataType);
                    this.state = 1269;
                    if (!(this.precpred(this._ctx, 5))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                    }
                    this.state = 1270;
                    this.kU_ListIdentifiers();
                    }
                    }
                }
                this.state = 1275;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 156, this._ctx);
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
    public kU_ListIdentifiers(): KU_ListIdentifiersContext {
        let localctx: KU_ListIdentifiersContext = new KU_ListIdentifiersContext(this._ctx, this.state);
        this.enterRule(localctx, 116, CypherParser.RULE_kU_ListIdentifiers);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1276;
            this.kU_ListIdentifier();
            this.state = 1280;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1277;
                    this.kU_ListIdentifier();
                    }
                    }
                }
                this.state = 1282;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
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
    public kU_ListIdentifier(): KU_ListIdentifierContext {
        let localctx: KU_ListIdentifierContext = new KU_ListIdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 118, CypherParser.RULE_kU_ListIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1283;
            this.match(CypherParser.T__6);
            this.state = 1285;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===170) {
                {
                this.state = 1284;
                this.oC_IntegerLiteral();
                }
            }

            this.state = 1287;
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
        this.enterRule(localctx, 120, CypherParser.RULE_oC_AnyCypherOption);
        try {
            this.state = 1291;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.EXPLAIN:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1289;
                this.oC_Explain();
                }
                break;
            case CypherParser.PROFILE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1290;
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
        this.enterRule(localctx, 122, CypherParser.RULE_oC_Explain);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1293;
            this.match(CypherParser.EXPLAIN);
            this.state = 1296;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
            case 1:
                {
                this.state = 1294;
                this.match(CypherParser.SP);
                this.state = 1295;
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
        this.enterRule(localctx, 124, CypherParser.RULE_oC_Profile);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1298;
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
    public kU_Transaction(): KU_TransactionContext {
        let localctx: KU_TransactionContext = new KU_TransactionContext(this._ctx, this.state);
        this.enterRule(localctx, 126, CypherParser.RULE_kU_Transaction);
        try {
            this.state = 1313;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1300;
                this.match(CypherParser.BEGIN);
                this.state = 1301;
                this.match(CypherParser.SP);
                this.state = 1302;
                this.match(CypherParser.TRANSACTION);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1303;
                this.match(CypherParser.BEGIN);
                this.state = 1304;
                this.match(CypherParser.SP);
                this.state = 1305;
                this.match(CypherParser.TRANSACTION);
                this.state = 1306;
                this.match(CypherParser.SP);
                this.state = 1307;
                this.match(CypherParser.READ);
                this.state = 1308;
                this.match(CypherParser.SP);
                this.state = 1309;
                this.match(CypherParser.ONLY);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1310;
                this.match(CypherParser.COMMIT);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1311;
                this.match(CypherParser.ROLLBACK);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1312;
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
    public kU_Extension(): KU_ExtensionContext {
        let localctx: KU_ExtensionContext = new KU_ExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 128, CypherParser.RULE_kU_Extension);
        try {
            this.state = 1319;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1315;
                this.kU_LoadExtension();
                }
                break;
            case CypherParser.FORCE:
            case CypherParser.INSTALL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1316;
                this.kU_InstallExtension();
                }
                break;
            case CypherParser.UNINSTALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1317;
                this.kU_UninstallExtension();
                }
                break;
            case CypherParser.UPDATE:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1318;
                this.kU_UpdateExtension();
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
    public kU_LoadExtension(): KU_LoadExtensionContext {
        let localctx: KU_LoadExtensionContext = new KU_LoadExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 130, CypherParser.RULE_kU_LoadExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1321;
            this.match(CypherParser.LOAD);
            this.state = 1322;
            this.match(CypherParser.SP);
            this.state = 1325;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
            case 1:
                {
                this.state = 1323;
                this.match(CypherParser.EXTENSION);
                this.state = 1324;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1329;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.StringLiteral:
                {
                this.state = 1327;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
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
                this.state = 1328;
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
    public kU_InstallExtension(): KU_InstallExtensionContext {
        let localctx: KU_InstallExtensionContext = new KU_InstallExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 132, CypherParser.RULE_kU_InstallExtension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1333;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===88) {
                {
                this.state = 1331;
                this.match(CypherParser.FORCE);
                this.state = 1332;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1335;
            this.match(CypherParser.INSTALL);
            this.state = 1336;
            this.match(CypherParser.SP);
            this.state = 1337;
            this.oC_Variable();
            this.state = 1342;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
            case 1:
                {
                this.state = 1338;
                this.match(CypherParser.SP);
                this.state = 1339;
                this.match(CypherParser.FROM);
                this.state = 1340;
                this.match(CypherParser.SP);
                this.state = 1341;
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
    public kU_UninstallExtension(): KU_UninstallExtensionContext {
        let localctx: KU_UninstallExtensionContext = new KU_UninstallExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 134, CypherParser.RULE_kU_UninstallExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1344;
            this.match(CypherParser.UNINSTALL);
            this.state = 1345;
            this.match(CypherParser.SP);
            this.state = 1346;
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
    public kU_UpdateExtension(): KU_UpdateExtensionContext {
        let localctx: KU_UpdateExtensionContext = new KU_UpdateExtensionContext(this._ctx, this.state);
        this.enterRule(localctx, 136, CypherParser.RULE_kU_UpdateExtension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1348;
            this.match(CypherParser.UPDATE);
            this.state = 1349;
            this.match(CypherParser.SP);
            this.state = 1350;
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
        this.enterRule(localctx, 138, CypherParser.RULE_oC_Query);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1352;
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
        this.enterRule(localctx, 140, CypherParser.RULE_oC_RegularQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1375;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 171, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1354;
                this.oC_SingleQuery();
                this.state = 1361;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1356;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1355;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1358;
                        this.oC_Union();
                        }
                        }
                    }
                    this.state = 1363;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1368;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 1364;
                        this.oC_Return();
                        this.state = 1366;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1365;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1370;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 1372;
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
        this.enterRule(localctx, 142, CypherParser.RULE_oC_Union);
        let _la: number;
        try {
            this.state = 1389;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 174, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1377;
                this.match(CypherParser.UNION);
                this.state = 1378;
                this.match(CypherParser.SP);
                this.state = 1379;
                this.match(CypherParser.ALL);
                this.state = 1381;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1380;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1383;
                this.oC_SingleQuery();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1384;
                this.match(CypherParser.UNION);
                this.state = 1386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1385;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1388;
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
        this.enterRule(localctx, 144, CypherParser.RULE_oC_SingleQuery);
        try {
            this.state = 1393;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1391;
                this.oC_SinglePartQuery();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1392;
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
        this.enterRule(localctx, 146, CypherParser.RULE_oC_SinglePartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1430;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 184, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===57 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===144) {
                    {
                    {
                    this.state = 1395;
                    this.oC_ReadingClause();
                    this.state = 1397;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1396;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1403;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1404;
                this.oC_Return();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1411;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===57 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===144) {
                    {
                    {
                    this.state = 1405;
                    this.oC_ReadingClause();
                    this.state = 1407;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1406;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 1413;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1414;
                this.oC_UpdatingClause();
                this.state = 1421;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1416;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1415;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1418;
                        this.oC_UpdatingClause();
                        }
                        }
                    }
                    this.state = 1423;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
                }
                this.state = 1428;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
                case 1:
                    {
                    this.state = 1425;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1424;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1427;
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
        this.enterRule(localctx, 148, CypherParser.RULE_oC_MultiPartQuery);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1436;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 1432;
                    this.kU_QueryPart();
                    this.state = 1434;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1433;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1438;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 186, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 1440;
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
    public kU_QueryPart(): KU_QueryPartContext {
        let localctx: KU_QueryPartContext = new KU_QueryPartContext(this._ctx, this.state);
        this.enterRule(localctx, 150, CypherParser.RULE_kU_QueryPart);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1448;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===57 || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 32777) !== 0) || _la===144) {
                {
                {
                this.state = 1442;
                this.oC_ReadingClause();
                this.state = 1444;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1443;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1457;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 289) !== 0) || _la===108 || _la===131) {
                {
                {
                this.state = 1451;
                this.oC_UpdatingClause();
                this.state = 1453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1452;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 1459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1460;
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
        this.enterRule(localctx, 152, CypherParser.RULE_oC_UpdatingClause);
        try {
            this.state = 1466;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.CREATE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1462;
                this.oC_Create();
                }
                break;
            case CypherParser.MERGE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1463;
                this.oC_Merge();
                }
                break;
            case CypherParser.SET:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1464;
                this.oC_Set();
                }
                break;
            case CypherParser.DELETE:
            case CypherParser.DETACH:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1465;
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
        this.enterRule(localctx, 154, CypherParser.RULE_oC_ReadingClause);
        try {
            this.state = 1472;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.MATCH:
            case CypherParser.OPTIONAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1468;
                this.oC_Match();
                }
                break;
            case CypherParser.UNWIND:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1469;
                this.oC_Unwind();
                }
                break;
            case CypherParser.CALL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1470;
                this.kU_InQueryCall();
                }
                break;
            case CypherParser.LOAD:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1471;
                this.kU_LoadFrom();
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
    public kU_LoadFrom(): KU_LoadFromContext {
        let localctx: KU_LoadFromContext = new KU_LoadFromContext(this._ctx, this.state);
        this.enterRule(localctx, 156, CypherParser.RULE_kU_LoadFrom);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1474;
            this.match(CypherParser.LOAD);
            this.state = 1492;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
            case 1:
                {
                this.state = 1475;
                this.match(CypherParser.SP);
                this.state = 1476;
                this.match(CypherParser.WITH);
                this.state = 1477;
                this.match(CypherParser.SP);
                this.state = 1478;
                this.match(CypherParser.HEADERS);
                this.state = 1480;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1479;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1482;
                this.match(CypherParser.T__1);
                this.state = 1484;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1483;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1486;
                this.kU_ColumnDefinitions();
                this.state = 1488;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1487;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1490;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1494;
            this.match(CypherParser.SP);
            this.state = 1495;
            this.match(CypherParser.FROM);
            this.state = 1496;
            this.match(CypherParser.SP);
            this.state = 1497;
            this.kU_ScanSource();
            this.state = 1511;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 200, this._ctx) ) {
            case 1:
                {
                this.state = 1499;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1498;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1501;
                this.match(CypherParser.T__1);
                this.state = 1503;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1502;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1505;
                this.kU_Options();
                this.state = 1507;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1506;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1509;
                this.match(CypherParser.T__2);
                }
                break;
            }
            this.state = 1517;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
            case 1:
                {
                this.state = 1514;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1513;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1516;
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
        this.enterRule(localctx, 158, CypherParser.RULE_oC_YieldItem);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1524;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
            case 1:
                {
                this.state = 1519;
                this.oC_Variable();
                this.state = 1520;
                this.match(CypherParser.SP);
                this.state = 1521;
                this.match(CypherParser.AS);
                this.state = 1522;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 1526;
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
        this.enterRule(localctx, 160, CypherParser.RULE_oC_YieldItems);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1528;
            this.oC_YieldItem();
            this.state = 1539;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1530;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1529;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1532;
                    this.match(CypherParser.T__3);
                    this.state = 1534;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1533;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1536;
                    this.oC_YieldItem();
                    }
                    }
                }
                this.state = 1541;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 206, this._ctx);
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
    public kU_InQueryCall(): KU_InQueryCallContext {
        let localctx: KU_InQueryCallContext = new KU_InQueryCallContext(this._ctx, this.state);
        this.enterRule(localctx, 162, CypherParser.RULE_kU_InQueryCall);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1542;
            this.match(CypherParser.CALL);
            this.state = 1543;
            this.match(CypherParser.SP);
            this.state = 1544;
            this.oC_FunctionInvocation();
            this.state = 1549;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
            case 1:
                {
                this.state = 1546;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1545;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1548;
                this.oC_Where();
                }
                break;
            }
            this.state = 1557;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
            case 1:
                {
                this.state = 1552;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1551;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1554;
                this.match(CypherParser.YIELD);
                this.state = 1555;
                this.match(CypherParser.SP);
                this.state = 1556;
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
        this.enterRule(localctx, 164, CypherParser.RULE_oC_Match);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1561;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===118) {
                {
                this.state = 1559;
                this.match(CypherParser.OPTIONAL);
                this.state = 1560;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1563;
            this.match(CypherParser.MATCH);
            this.state = 1565;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1564;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1567;
            this.oC_Pattern();
            this.state = 1570;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
            case 1:
                {
                this.state = 1568;
                this.match(CypherParser.SP);
                this.state = 1569;
                this.oC_Where();
                }
                break;
            }
            this.state = 1574;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
            case 1:
                {
                this.state = 1572;
                this.match(CypherParser.SP);
                this.state = 1573;
                this.kU_Hint();
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
    public kU_Hint(): KU_HintContext {
        let localctx: KU_HintContext = new KU_HintContext(this._ctx, this.state);
        this.enterRule(localctx, 166, CypherParser.RULE_kU_Hint);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1576;
            this.match(CypherParser.HINT);
            this.state = 1577;
            this.match(CypherParser.SP);
            this.state = 1578;
            this.kU_JoinNode(0);
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

    public kU_JoinNode(): KU_JoinNodeContext;
    public kU_JoinNode(_p: number): KU_JoinNodeContext;
    public kU_JoinNode(_p?: number): KU_JoinNodeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new KU_JoinNodeContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 168;
        this.enterRecursionRule(localctx, 168, CypherParser.RULE_kU_JoinNode, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1592;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.T__1:
                {
                this.state = 1581;
                this.match(CypherParser.T__1);
                this.state = 1583;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1582;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1585;
                this.kU_JoinNode(0);
                this.state = 1587;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1586;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1589;
                this.match(CypherParser.T__2);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
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
                this.state = 1591;
                this.oC_SchemaName();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1610;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1608;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 219, this._ctx) ) {
                    case 1:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1594;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1595;
                        this.match(CypherParser.SP);
                        this.state = 1596;
                        this.match(CypherParser.JOIN);
                        this.state = 1597;
                        this.match(CypherParser.SP);
                        this.state = 1598;
                        this.kU_JoinNode(5);
                        }
                        break;
                    case 2:
                        {
                        localctx = new KU_JoinNodeContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, CypherParser.RULE_kU_JoinNode);
                        this.state = 1599;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1604;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                            case 1:
                                {
                                {
                                this.state = 1600;
                                this.match(CypherParser.SP);
                                this.state = 1601;
                                this.match(CypherParser.MULTI_JOIN);
                                this.state = 1602;
                                this.match(CypherParser.SP);
                                this.state = 1603;
                                this.oC_SchemaName();
                                }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1606;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 218, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                        }
                        break;
                    }
                    }
                }
                this.state = 1612;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 220, this._ctx);
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
        this.enterRule(localctx, 170, CypherParser.RULE_oC_Unwind);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1613;
            this.match(CypherParser.UNWIND);
            this.state = 1615;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1614;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1617;
            this.oC_Expression();
            this.state = 1618;
            this.match(CypherParser.SP);
            this.state = 1619;
            this.match(CypherParser.AS);
            this.state = 1620;
            this.match(CypherParser.SP);
            this.state = 1621;
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
        this.enterRule(localctx, 172, CypherParser.RULE_oC_Create);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1623;
            this.match(CypherParser.CREATE);
            this.state = 1625;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1624;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1627;
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
        this.enterRule(localctx, 174, CypherParser.RULE_oC_Merge);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1629;
            this.match(CypherParser.MERGE);
            this.state = 1631;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1630;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1633;
            this.oC_Pattern();
            this.state = 1638;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1634;
                    this.match(CypherParser.SP);
                    this.state = 1635;
                    this.oC_MergeAction();
                    }
                    }
                }
                this.state = 1640;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 224, this._ctx);
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
        this.enterRule(localctx, 176, CypherParser.RULE_oC_MergeAction);
        try {
            this.state = 1651;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1641;
                this.match(CypherParser.ON);
                this.state = 1642;
                this.match(CypherParser.SP);
                this.state = 1643;
                this.match(CypherParser.MATCH);
                this.state = 1644;
                this.match(CypherParser.SP);
                this.state = 1645;
                this.oC_Set();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1646;
                this.match(CypherParser.ON);
                this.state = 1647;
                this.match(CypherParser.SP);
                this.state = 1648;
                this.match(CypherParser.CREATE);
                this.state = 1649;
                this.match(CypherParser.SP);
                this.state = 1650;
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
        this.enterRule(localctx, 178, CypherParser.RULE_oC_Set);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1685;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1653;
                this.match(CypherParser.SET);
                this.state = 1655;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1654;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1657;
                this.oC_SetItem();
                this.state = 1668;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1659;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1658;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1661;
                        this.match(CypherParser.T__3);
                        this.state = 1663;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1662;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1665;
                        this.oC_SetItem();
                        }
                        }
                    }
                    this.state = 1670;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1671;
                this.match(CypherParser.SET);
                this.state = 1673;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1672;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1675;
                this.oC_Atom();
                this.state = 1677;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1676;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1679;
                this.match(CypherParser.T__5);
                this.state = 1681;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1680;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1683;
                this.kU_Properties();
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
        this.enterRule(localctx, 180, CypherParser.RULE_oC_SetItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            {
            this.state = 1687;
            this.oC_PropertyExpression();
            this.state = 1689;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1688;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1691;
            this.match(CypherParser.T__5);
            this.state = 1693;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1692;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1695;
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
        this.enterRule(localctx, 182, CypherParser.RULE_oC_Delete);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1699;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===76) {
                {
                this.state = 1697;
                this.match(CypherParser.DETACH);
                this.state = 1698;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1701;
            this.match(CypherParser.DELETE);
            this.state = 1703;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1702;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1705;
            this.oC_Expression();
            this.state = 1716;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 240, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1707;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1706;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1709;
                    this.match(CypherParser.T__3);
                    this.state = 1711;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1710;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1713;
                    this.oC_Expression();
                    }
                    }
                }
                this.state = 1718;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 240, this._ctx);
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
        this.enterRule(localctx, 184, CypherParser.RULE_oC_With);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1719;
            this.match(CypherParser.WITH);
            this.state = 1720;
            this.oC_ProjectionBody();
            this.state = 1725;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
            case 1:
                {
                this.state = 1722;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1721;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1724;
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
        this.enterRule(localctx, 186, CypherParser.RULE_oC_Return);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1727;
            this.match(CypherParser.RETURN);
            this.state = 1728;
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
        this.enterRule(localctx, 188, CypherParser.RULE_oC_ProjectionBody);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1734;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
            case 1:
                {
                this.state = 1731;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1730;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1733;
                this.match(CypherParser.DISTINCT);
                }
                break;
            }
            this.state = 1736;
            this.match(CypherParser.SP);
            this.state = 1737;
            this.oC_ProjectionItems();
            this.state = 1740;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
            case 1:
                {
                this.state = 1738;
                this.match(CypherParser.SP);
                this.state = 1739;
                this.oC_Order();
                }
                break;
            }
            this.state = 1744;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
            case 1:
                {
                this.state = 1742;
                this.match(CypherParser.SP);
                this.state = 1743;
                this.oC_Skip();
                }
                break;
            }
            this.state = 1748;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 247, this._ctx) ) {
            case 1:
                {
                this.state = 1746;
                this.match(CypherParser.SP);
                this.state = 1747;
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
        this.enterRule(localctx, 190, CypherParser.RULE_oC_ProjectionItems);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1778;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.STAR:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1750;
                this.match(CypherParser.STAR);
                this.state = 1761;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 250, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1752;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1751;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1754;
                        this.match(CypherParser.T__3);
                        this.state = 1756;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1755;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1758;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1763;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 250, this._ctx);
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
                this.state = 1764;
                this.oC_ProjectionItem();
                this.state = 1775;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1766;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1765;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1768;
                        this.match(CypherParser.T__3);
                        this.state = 1770;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1769;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1772;
                        this.oC_ProjectionItem();
                        }
                        }
                    }
                    this.state = 1777;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
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
        this.enterRule(localctx, 192, CypherParser.RULE_oC_ProjectionItem);
        try {
            this.state = 1787;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1780;
                this.oC_Expression();
                this.state = 1781;
                this.match(CypherParser.SP);
                this.state = 1782;
                this.match(CypherParser.AS);
                this.state = 1783;
                this.match(CypherParser.SP);
                this.state = 1784;
                this.oC_Variable();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1786;
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
        this.enterRule(localctx, 194, CypherParser.RULE_oC_Order);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1789;
            this.match(CypherParser.ORDER);
            this.state = 1790;
            this.match(CypherParser.SP);
            this.state = 1791;
            this.match(CypherParser.BY);
            this.state = 1792;
            this.match(CypherParser.SP);
            this.state = 1793;
            this.oC_SortItem();
            this.state = 1801;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 1794;
                this.match(CypherParser.T__3);
                this.state = 1796;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1795;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1798;
                this.oC_SortItem();
                }
                }
                this.state = 1803;
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
        this.enterRule(localctx, 196, CypherParser.RULE_oC_Skip);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1804;
            this.match(CypherParser.L_SKIP);
            this.state = 1805;
            this.match(CypherParser.SP);
            this.state = 1806;
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
        this.enterRule(localctx, 198, CypherParser.RULE_oC_Limit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1808;
            this.match(CypherParser.LIMIT);
            this.state = 1809;
            this.match(CypherParser.SP);
            this.state = 1810;
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
        this.enterRule(localctx, 200, CypherParser.RULE_oC_SortItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1812;
            this.oC_Expression();
            this.state = 1817;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 259, this._ctx) ) {
            case 1:
                {
                this.state = 1814;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1813;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1816;
                _la = this._input.LA(1);
                if(!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 12582915) !== 0))) {
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
        this.enterRule(localctx, 202, CypherParser.RULE_oC_Where);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1819;
            this.match(CypherParser.WHERE);
            this.state = 1820;
            this.match(CypherParser.SP);
            this.state = 1821;
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
        this.enterRule(localctx, 204, CypherParser.RULE_oC_Pattern);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1823;
            this.oC_PatternPart();
            this.state = 1834;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 262, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1825;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1824;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1827;
                    this.match(CypherParser.T__3);
                    this.state = 1829;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1828;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1831;
                    this.oC_PatternPart();
                    }
                    }
                }
                this.state = 1836;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 262, this._ctx);
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
        this.enterRule(localctx, 206, CypherParser.RULE_oC_PatternPart);
        let _la: number;
        try {
            this.state = 1848;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
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
                this.state = 1837;
                this.oC_Variable();
                this.state = 1839;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1838;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1841;
                this.match(CypherParser.T__5);
                this.state = 1843;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1842;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1845;
                this.oC_AnonymousPatternPart();
                }
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1847;
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
        this.enterRule(localctx, 208, CypherParser.RULE_oC_AnonymousPatternPart);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1850;
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
        this.enterRule(localctx, 210, CypherParser.RULE_oC_PatternElement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 1866;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 268, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1852;
                this.oC_NodePattern();
                this.state = 1859;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 267, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1854;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 1853;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 1856;
                        this.oC_PatternElementChain();
                        }
                        }
                    }
                    this.state = 1861;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 267, this._ctx);
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1862;
                this.match(CypherParser.T__1);
                this.state = 1863;
                this.oC_PatternElement();
                this.state = 1864;
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
        this.enterRule(localctx, 212, CypherParser.RULE_oC_NodePattern);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1868;
            this.match(CypherParser.T__1);
            this.state = 1870;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1869;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1876;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 2765989781) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 935155895) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 298489279) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 151060671) !== 0)) {
                {
                this.state = 1872;
                this.oC_Variable();
                this.state = 1874;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1873;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1882;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===164) {
                {
                this.state = 1878;
                this.oC_NodeLabels();
                this.state = 1880;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1879;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1888;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1884;
                this.kU_Properties();
                this.state = 1886;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1885;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1890;
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
        this.enterRule(localctx, 214, CypherParser.RULE_oC_PatternElementChain);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1892;
            this.oC_RelationshipPattern();
            this.state = 1894;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1893;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1896;
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
        this.enterRule(localctx, 216, CypherParser.RULE_oC_RelationshipPattern);
        let _la: number;
        try {
            this.state = 1942;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 288, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1898;
                this.oC_LeftArrowHead();
                this.state = 1900;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1899;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1902;
                this.oC_Dash();
                this.state = 1904;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
                case 1:
                    {
                    this.state = 1903;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1907;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1906;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1910;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1909;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1912;
                this.oC_Dash();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1914;
                this.oC_Dash();
                this.state = 1916;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 281, this._ctx) ) {
                case 1:
                    {
                    this.state = 1915;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1919;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1918;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1922;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1921;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1924;
                this.oC_Dash();
                this.state = 1926;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1925;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1928;
                this.oC_RightArrowHead();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1930;
                this.oC_Dash();
                this.state = 1932;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 285, this._ctx) ) {
                case 1:
                    {
                    this.state = 1931;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 1935;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===7) {
                    {
                    this.state = 1934;
                    this.oC_RelationshipDetail();
                    }
                }

                this.state = 1938;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1937;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1940;
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
        this.enterRule(localctx, 218, CypherParser.RULE_oC_RelationshipDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1944;
            this.match(CypherParser.T__6);
            this.state = 1946;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1945;
                this.match(CypherParser.SP);
                }
            }

            this.state = 1952;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 2765989781) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 935155895) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 298489279) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 151060671) !== 0)) {
                {
                this.state = 1948;
                this.oC_Variable();
                this.state = 1950;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1949;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1958;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===164) {
                {
                this.state = 1954;
                this.oC_RelationshipTypes();
                this.state = 1956;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1955;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1964;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===161) {
                {
                this.state = 1960;
                this.kU_RecursiveDetail();
                this.state = 1962;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1961;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1970;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===9) {
                {
                this.state = 1966;
                this.kU_Properties();
                this.state = 1968;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1967;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 1972;
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
    public kU_Properties(): KU_PropertiesContext {
        let localctx: KU_PropertiesContext = new KU_PropertiesContext(this._ctx, this.state);
        this.enterRule(localctx, 220, CypherParser.RULE_kU_Properties);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1974;
            this.match(CypherParser.T__8);
            this.state = 1976;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 1975;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2011;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 2765989781) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 935155895) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 298489279) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 151060671) !== 0)) {
                {
                this.state = 1978;
                this.oC_PropertyKeyName();
                this.state = 1980;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1979;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1982;
                this.match(CypherParser.COLON);
                this.state = 1984;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1983;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 1986;
                this.oC_Expression();
                this.state = 1988;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 1987;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2008;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 1990;
                    this.match(CypherParser.T__3);
                    this.state = 1992;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1991;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1994;
                    this.oC_PropertyKeyName();
                    this.state = 1996;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1995;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 1998;
                    this.match(CypherParser.COLON);
                    this.state = 2000;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 1999;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2002;
                    this.oC_Expression();
                    this.state = 2004;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2003;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2010;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2013;
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
        this.enterRule(localctx, 222, CypherParser.RULE_oC_RelationshipTypes);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2015;
            this.match(CypherParser.COLON);
            this.state = 2017;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2016;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2019;
            this.oC_RelTypeName();
            this.state = 2033;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 312, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2021;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2020;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2023;
                    this.match(CypherParser.T__10);
                    this.state = 2025;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===164) {
                        {
                        this.state = 2024;
                        this.match(CypherParser.COLON);
                        }
                    }

                    this.state = 2028;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2027;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2030;
                    this.oC_RelTypeName();
                    }
                    }
                }
                this.state = 2035;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 312, this._ctx);
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
        this.enterRule(localctx, 224, CypherParser.RULE_oC_NodeLabels);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2036;
            this.match(CypherParser.COLON);
            this.state = 2038;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2037;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2040;
            this.oC_LabelName();
            this.state = 2057;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 318, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2042;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2041;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2049;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                    case CypherParser.T__10:
                        {
                        this.state = 2044;
                        this.match(CypherParser.T__10);
                        this.state = 2046;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===164) {
                            {
                            this.state = 2045;
                            this.match(CypherParser.COLON);
                            }
                        }

                        }
                        break;
                    case CypherParser.COLON:
                        {
                        this.state = 2048;
                        this.match(CypherParser.COLON);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2052;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2051;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2054;
                    this.oC_LabelName();
                    }
                    }
                }
                this.state = 2059;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 318, this._ctx);
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
    public kU_RecursiveDetail(): KU_RecursiveDetailContext {
        let localctx: KU_RecursiveDetailContext = new KU_RecursiveDetailContext(this._ctx, this.state);
        this.enterRule(localctx, 226, CypherParser.RULE_kU_RecursiveDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2060;
            this.match(CypherParser.STAR);
            this.state = 2065;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 320, this._ctx) ) {
            case 1:
                {
                this.state = 2062;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2061;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2064;
                this.kU_RecursiveType();
                }
                break;
            }
            this.state = 2071;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 322, this._ctx) ) {
            case 1:
                {
                this.state = 2068;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 321, this._ctx) ) {
                case 1:
                    {
                    this.state = 2067;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2070;
                this.oC_RangeLiteral();
                }
                break;
            }
            this.state = 2077;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 324, this._ctx) ) {
            case 1:
                {
                this.state = 2074;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2073;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2076;
                this.kU_RecursiveComprehension();
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
    public kU_RecursiveType(): KU_RecursiveTypeContext {
        let localctx: KU_RecursiveTypeContext = new KU_RecursiveTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 228, CypherParser.RULE_kU_RecursiveType);
        let _la: number;
        try {
            this.state = 2103;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 329, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2081;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===48) {
                    {
                    this.state = 2079;
                    this.match(CypherParser.ALL);
                    this.state = 2080;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2083;
                this.match(CypherParser.WSHORTEST);
                this.state = 2085;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2084;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2087;
                this.match(CypherParser.T__1);
                this.state = 2089;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2088;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2091;
                this.oC_PropertyKeyName();
                this.state = 2093;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2092;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2095;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2097;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2098;
                this.match(CypherParser.ALL);
                this.state = 2099;
                this.match(CypherParser.SP);
                this.state = 2100;
                this.match(CypherParser.SHORTEST);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2101;
                this.match(CypherParser.TRAIL);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2102;
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
        this.enterRule(localctx, 230, CypherParser.RULE_oC_RangeLiteral);
        let _la: number;
        try {
            this.state = 2119;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 334, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===170) {
                    {
                    this.state = 2105;
                    this.oC_LowerBound();
                    }
                }

                this.state = 2109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2108;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2111;
                this.match(CypherParser.DOTDOT);
                this.state = 2113;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 332, this._ctx) ) {
                case 1:
                    {
                    this.state = 2112;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                this.state = 2116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===170) {
                    {
                    this.state = 2115;
                    this.oC_UpperBound();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2118;
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
    public kU_RecursiveComprehension(): KU_RecursiveComprehensionContext {
        let localctx: KU_RecursiveComprehensionContext = new KU_RecursiveComprehensionContext(this._ctx, this.state);
        this.enterRule(localctx, 232, CypherParser.RULE_kU_RecursiveComprehension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2121;
            this.match(CypherParser.T__1);
            this.state = 2123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2122;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2125;
            this.oC_Variable();
            this.state = 2127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2126;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2129;
            this.match(CypherParser.T__3);
            this.state = 2131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2130;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2133;
            this.oC_Variable();
            this.state = 2145;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 341, this._ctx) ) {
            case 1:
                {
                this.state = 2135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2134;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2137;
                this.match(CypherParser.T__10);
                this.state = 2139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2138;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2141;
                this.oC_Where();
                this.state = 2143;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 340, this._ctx) ) {
                case 1:
                    {
                    this.state = 2142;
                    this.match(CypherParser.SP);
                    }
                    break;
                }
                }
                break;
            }
            this.state = 2166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===183) {
                {
                this.state = 2148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2147;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2150;
                this.match(CypherParser.T__10);
                this.state = 2152;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2151;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2154;
                this.kU_RecursiveProjectionItems();
                this.state = 2156;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2155;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2158;
                this.match(CypherParser.T__3);
                this.state = 2160;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2159;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2162;
                this.kU_RecursiveProjectionItems();
                this.state = 2164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2163;
                    this.match(CypherParser.SP);
                    }
                }

                }
            }

            this.state = 2168;
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
    public kU_RecursiveProjectionItems(): KU_RecursiveProjectionItemsContext {
        let localctx: KU_RecursiveProjectionItemsContext = new KU_RecursiveProjectionItemsContext(this._ctx, this.state);
        this.enterRule(localctx, 234, CypherParser.RULE_kU_RecursiveProjectionItems);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2170;
            this.match(CypherParser.T__8);
            this.state = 2172;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 348, this._ctx) ) {
            case 1:
                {
                this.state = 2171;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2175;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1237024559) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4155185137) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3915116575) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 111410759) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 39) !== 0)) {
                {
                this.state = 2174;
                this.oC_ProjectionItems();
                }
            }

            this.state = 2178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2177;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2180;
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
        this.enterRule(localctx, 236, CypherParser.RULE_oC_LowerBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2182;
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
        this.enterRule(localctx, 238, CypherParser.RULE_oC_UpperBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2184;
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
        this.enterRule(localctx, 240, CypherParser.RULE_oC_LabelName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2186;
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
    public oC_RelTypeName(): OC_RelTypeNameContext {
        let localctx: OC_RelTypeNameContext = new OC_RelTypeNameContext(this._ctx, this.state);
        this.enterRule(localctx, 242, CypherParser.RULE_oC_RelTypeName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2188;
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
        this.enterRule(localctx, 244, CypherParser.RULE_oC_Expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2190;
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
        this.enterRule(localctx, 246, CypherParser.RULE_oC_OrExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2192;
            this.oC_XorExpression();
            this.state = 2199;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 351, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2193;
                    this.match(CypherParser.SP);
                    this.state = 2194;
                    this.match(CypherParser.OR);
                    this.state = 2195;
                    this.match(CypherParser.SP);
                    this.state = 2196;
                    this.oC_XorExpression();
                    }
                    }
                }
                this.state = 2201;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 351, this._ctx);
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
        this.enterRule(localctx, 248, CypherParser.RULE_oC_XorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2202;
            this.oC_AndExpression();
            this.state = 2209;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 352, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2203;
                    this.match(CypherParser.SP);
                    this.state = 2204;
                    this.match(CypherParser.XOR);
                    this.state = 2205;
                    this.match(CypherParser.SP);
                    this.state = 2206;
                    this.oC_AndExpression();
                    }
                    }
                }
                this.state = 2211;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 352, this._ctx);
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
        this.enterRule(localctx, 250, CypherParser.RULE_oC_AndExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2212;
            this.oC_NotExpression();
            this.state = 2219;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 353, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2213;
                    this.match(CypherParser.SP);
                    this.state = 2214;
                    this.match(CypherParser.AND);
                    this.state = 2215;
                    this.match(CypherParser.SP);
                    this.state = 2216;
                    this.oC_NotExpression();
                    }
                    }
                }
                this.state = 2221;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 353, this._ctx);
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
        this.enterRule(localctx, 252, CypherParser.RULE_oC_NotExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===113) {
                {
                {
                this.state = 2222;
                this.match(CypherParser.NOT);
                this.state = 2224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2223;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2230;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2231;
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
        this.enterRule(localctx, 254, CypherParser.RULE_oC_ComparisonExpression);
        let _la: number;
        try {
            let _alt: number;
            this.state = 2281;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 366, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2233;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2243;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 358, this._ctx) ) {
                case 1:
                    {
                    this.state = 2235;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2234;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2237;
                    this.kU_ComparisonOperator();
                    this.state = 2239;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2238;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2241;
                    this.kU_BitwiseOrOperatorExpression();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2245;
                this.kU_BitwiseOrOperatorExpression();
                {
                this.state = 2247;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2246;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2249;
                localctx._INVALID_NOT_EQUAL = this.match(CypherParser.INVALID_NOT_EQUAL);
                this.state = 2251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2250;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2253;
                this.kU_BitwiseOrOperatorExpression();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2257;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2259;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2258;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2261;
                this.kU_ComparisonOperator();
                this.state = 2263;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2262;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2265;
                this.kU_BitwiseOrOperatorExpression();
                this.state = 2275;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2267;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 2266;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2269;
                        this.kU_ComparisonOperator();
                        this.state = 2271;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 2270;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2273;
                        this.kU_BitwiseOrOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2277;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 365, this._ctx);
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
    public kU_ComparisonOperator(): KU_ComparisonOperatorContext {
        let localctx: KU_ComparisonOperatorContext = new KU_ComparisonOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 256, CypherParser.RULE_kU_ComparisonOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2283;
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
    public kU_BitwiseOrOperatorExpression(): KU_BitwiseOrOperatorExpressionContext {
        let localctx: KU_BitwiseOrOperatorExpressionContext = new KU_BitwiseOrOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 258, CypherParser.RULE_kU_BitwiseOrOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2285;
            this.kU_BitwiseAndOperatorExpression();
            this.state = 2296;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2287;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2286;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2289;
                    this.match(CypherParser.T__10);
                    this.state = 2291;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2290;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2293;
                    this.kU_BitwiseAndOperatorExpression();
                    }
                    }
                }
                this.state = 2298;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 369, this._ctx);
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
    public kU_BitwiseAndOperatorExpression(): KU_BitwiseAndOperatorExpressionContext {
        let localctx: KU_BitwiseAndOperatorExpressionContext = new KU_BitwiseAndOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 260, CypherParser.RULE_kU_BitwiseAndOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2299;
            this.kU_BitShiftOperatorExpression();
            this.state = 2310;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 372, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2301;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2300;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2303;
                    this.match(CypherParser.T__16);
                    this.state = 2305;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2304;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2307;
                    this.kU_BitShiftOperatorExpression();
                    }
                    }
                }
                this.state = 2312;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 372, this._ctx);
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
    public kU_BitShiftOperatorExpression(): KU_BitShiftOperatorExpressionContext {
        let localctx: KU_BitShiftOperatorExpressionContext = new KU_BitShiftOperatorExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 262, CypherParser.RULE_kU_BitShiftOperatorExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2313;
            this.oC_AddOrSubtractExpression();
            this.state = 2325;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 375, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2315;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2314;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2317;
                    this.kU_BitShiftOperator();
                    this.state = 2319;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2318;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2321;
                    this.oC_AddOrSubtractExpression();
                    }
                    }
                }
                this.state = 2327;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 375, this._ctx);
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
    public kU_BitShiftOperator(): KU_BitShiftOperatorContext {
        let localctx: KU_BitShiftOperatorContext = new KU_BitShiftOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 264, CypherParser.RULE_kU_BitShiftOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2328;
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
        this.enterRule(localctx, 266, CypherParser.RULE_oC_AddOrSubtractExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2330;
            this.oC_MultiplyDivideModuloExpression();
            this.state = 2342;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 378, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2332;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2331;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2334;
                    this.kU_AddOrSubtractOperator();
                    this.state = 2336;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2335;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2338;
                    this.oC_MultiplyDivideModuloExpression();
                    }
                    }
                }
                this.state = 2344;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 378, this._ctx);
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
    public kU_AddOrSubtractOperator(): KU_AddOrSubtractOperatorContext {
        let localctx: KU_AddOrSubtractOperatorContext = new KU_AddOrSubtractOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 268, CypherParser.RULE_kU_AddOrSubtractOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2345;
            _la = this._input.LA(1);
            if(!(_la===20 || _la===166)) {
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
        this.enterRule(localctx, 270, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2347;
            this.oC_PowerOfExpression();
            this.state = 2359;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 381, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2349;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2348;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2351;
                    this.kU_MultiplyDivideModuloOperator();
                    this.state = 2353;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2352;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2355;
                    this.oC_PowerOfExpression();
                    }
                    }
                }
                this.state = 2361;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 381, this._ctx);
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
    public kU_MultiplyDivideModuloOperator(): KU_MultiplyDivideModuloOperatorContext {
        let localctx: KU_MultiplyDivideModuloOperatorContext = new KU_MultiplyDivideModuloOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 272, CypherParser.RULE_kU_MultiplyDivideModuloOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2362;
            _la = this._input.LA(1);
            if(!(_la===21 || _la===22 || _la===161)) {
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
        this.enterRule(localctx, 274, CypherParser.RULE_oC_PowerOfExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2364;
            this.oC_StringListNullOperatorExpression();
            this.state = 2375;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 384, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2366;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2365;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2368;
                    this.match(CypherParser.T__22);
                    this.state = 2370;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2369;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2372;
                    this.oC_StringListNullOperatorExpression();
                    }
                    }
                }
                this.state = 2377;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 384, this._ctx);
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
        this.enterRule(localctx, 276, CypherParser.RULE_oC_StringListNullOperatorExpression);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2378;
            this.oC_UnaryAddSubtractOrFactorialExpression();
            this.state = 2386;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 386, this._ctx) ) {
            case 1:
                {
                this.state = 2379;
                this.oC_StringOperatorExpression();
                }
                break;
            case 2:
                {
                this.state = 2381;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2380;
                        this.oC_ListOperatorExpression();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2383;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 385, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            case 3:
                {
                this.state = 2385;
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
        this.enterRule(localctx, 278, CypherParser.RULE_oC_ListOperatorExpression);
        let _la: number;
        try {
            this.state = 2407;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 390, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2388;
                this.match(CypherParser.SP);
                this.state = 2389;
                this.match(CypherParser.IN);
                this.state = 2391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2390;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2393;
                this.oC_PropertyOrLabelsExpression();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2394;
                this.match(CypherParser.T__6);
                this.state = 2395;
                this.oC_Expression();
                this.state = 2396;
                this.match(CypherParser.T__7);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2398;
                this.match(CypherParser.T__6);
                this.state = 2400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1237024559) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4155185137) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3915116575) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 111345223) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 39) !== 0)) {
                    {
                    this.state = 2399;
                    this.oC_Expression();
                    }
                }

                this.state = 2402;
                _la = this._input.LA(1);
                if(!(_la===164 || _la===165)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 2404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1237024559) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4155185137) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3915116575) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 111345223) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 39) !== 0)) {
                    {
                    this.state = 2403;
                    this.oC_Expression();
                    }
                }

                this.state = 2406;
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
        this.enterRule(localctx, 280, CypherParser.RULE_oC_StringOperatorExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2420;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 391, this._ctx) ) {
            case 1:
                {
                this.state = 2409;
                this.oC_RegularExpression();
                }
                break;
            case 2:
                {
                {
                this.state = 2410;
                this.match(CypherParser.SP);
                this.state = 2411;
                this.match(CypherParser.STARTS);
                this.state = 2412;
                this.match(CypherParser.SP);
                this.state = 2413;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 3:
                {
                {
                this.state = 2414;
                this.match(CypherParser.SP);
                this.state = 2415;
                this.match(CypherParser.ENDS);
                this.state = 2416;
                this.match(CypherParser.SP);
                this.state = 2417;
                this.match(CypherParser.WITH);
                }
                }
                break;
            case 4:
                {
                {
                this.state = 2418;
                this.match(CypherParser.SP);
                this.state = 2419;
                this.match(CypherParser.CONTAINS);
                }
                }
                break;
            }
            this.state = 2423;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2422;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2425;
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
        this.enterRule(localctx, 282, CypherParser.RULE_oC_RegularExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2428;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2427;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2430;
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
        this.enterRule(localctx, 284, CypherParser.RULE_oC_NullOperatorExpression);
        try {
            this.state = 2442;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 394, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2432;
                this.match(CypherParser.SP);
                this.state = 2433;
                this.match(CypherParser.IS);
                this.state = 2434;
                this.match(CypherParser.SP);
                this.state = 2435;
                this.match(CypherParser.NULL);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2436;
                this.match(CypherParser.SP);
                this.state = 2437;
                this.match(CypherParser.IS);
                this.state = 2438;
                this.match(CypherParser.SP);
                this.state = 2439;
                this.match(CypherParser.NOT);
                this.state = 2440;
                this.match(CypherParser.SP);
                this.state = 2441;
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
        this.enterRule(localctx, 286, CypherParser.RULE_oC_UnaryAddSubtractOrFactorialExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2450;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===166) {
                {
                {
                this.state = 2444;
                this.match(CypherParser.MINUS);
                this.state = 2446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2445;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2453;
            this.oC_PropertyOrLabelsExpression();
            this.state = 2458;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 398, this._ctx) ) {
            case 1:
                {
                this.state = 2455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2454;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2457;
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
        this.enterRule(localctx, 288, CypherParser.RULE_oC_PropertyOrLabelsExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2460;
            this.oC_Atom();
            this.state = 2467;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 400, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 2462;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2461;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2464;
                    this.oC_PropertyLookup();
                    }
                    }
                }
                this.state = 2469;
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
    public oC_Atom(): OC_AtomContext {
        let localctx: OC_AtomContext = new OC_AtomContext(this._ctx, this.state);
        this.enterRule(localctx, 290, CypherParser.RULE_oC_Atom);
        try {
            this.state = 2479;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 401, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2470;
                this.oC_Literal();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2471;
                this.oC_Parameter();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2472;
                this.oC_CaseExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2473;
                this.oC_ParenthesizedExpression();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2474;
                this.oC_FunctionInvocation();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2475;
                this.oC_PathPatterns();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2476;
                this.oC_ExistCountSubquery();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2477;
                this.oC_Variable();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 2478;
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
        this.enterRule(localctx, 292, CypherParser.RULE_oC_Quantifier);
        let _la: number;
        try {
            this.state = 2537;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ALL:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 2481;
                this.match(CypherParser.ALL);
                this.state = 2483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2482;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2485;
                this.match(CypherParser.T__1);
                this.state = 2487;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2486;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2489;
                this.oC_FilterExpression();
                this.state = 2491;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2490;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2493;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.ANY:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 2495;
                this.match(CypherParser.ANY);
                this.state = 2497;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2496;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2499;
                this.match(CypherParser.T__1);
                this.state = 2501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2500;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2503;
                this.oC_FilterExpression();
                this.state = 2505;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2504;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2507;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.NONE:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 2509;
                this.match(CypherParser.NONE);
                this.state = 2511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2510;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2513;
                this.match(CypherParser.T__1);
                this.state = 2515;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2514;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2517;
                this.oC_FilterExpression();
                this.state = 2519;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2518;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2521;
                this.match(CypherParser.T__2);
                }
                }
                break;
            case CypherParser.SINGLE:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 2523;
                this.match(CypherParser.SINGLE);
                this.state = 2525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2524;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2527;
                this.match(CypherParser.T__1);
                this.state = 2529;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2528;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2531;
                this.oC_FilterExpression();
                this.state = 2533;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2532;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2535;
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
        this.enterRule(localctx, 294, CypherParser.RULE_oC_FilterExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2539;
            this.oC_IdInColl();
            this.state = 2540;
            this.match(CypherParser.SP);
            this.state = 2541;
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
        this.enterRule(localctx, 296, CypherParser.RULE_oC_IdInColl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2543;
            this.oC_Variable();
            this.state = 2544;
            this.match(CypherParser.SP);
            this.state = 2545;
            this.match(CypherParser.IN);
            this.state = 2546;
            this.match(CypherParser.SP);
            this.state = 2547;
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
        this.enterRule(localctx, 298, CypherParser.RULE_oC_Literal);
        try {
            this.state = 2555;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.DecimalInteger:
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2549;
                this.oC_NumberLiteral();
                }
                break;
            case CypherParser.StringLiteral:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2550;
                this.match(CypherParser.StringLiteral);
                }
                break;
            case CypherParser.FALSE:
            case CypherParser.TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2551;
                this.oC_BooleanLiteral();
                }
                break;
            case CypherParser.NULL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2552;
                this.match(CypherParser.NULL);
                }
                break;
            case CypherParser.T__6:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2553;
                this.oC_ListLiteral();
                }
                break;
            case CypherParser.T__8:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2554;
                this.kU_StructLiteral();
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
        this.enterRule(localctx, 300, CypherParser.RULE_oC_BooleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2557;
            _la = this._input.LA(1);
            if(!(_la===86 || _la===141)) {
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
        this.enterRule(localctx, 302, CypherParser.RULE_oC_ListLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2559;
            this.match(CypherParser.T__6);
            this.state = 2561;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2560;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2576;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1237024559) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4155185137) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3915116575) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 111345223) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 39) !== 0)) {
                {
                this.state = 2563;
                this.oC_Expression();
                this.state = 2565;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2564;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2567;
                    this.kU_ListEntry();
                    this.state = 2569;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2568;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2575;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                }
            }

            this.state = 2578;
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
    public kU_ListEntry(): KU_ListEntryContext {
        let localctx: KU_ListEntryContext = new KU_ListEntryContext(this._ctx, this.state);
        this.enterRule(localctx, 304, CypherParser.RULE_kU_ListEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2580;
            this.match(CypherParser.T__3);
            this.state = 2582;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 421, this._ctx) ) {
            case 1:
                {
                this.state = 2581;
                this.match(CypherParser.SP);
                }
                break;
            }
            this.state = 2585;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1237024559) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4155185137) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3915116575) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 111345223) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 39) !== 0)) {
                {
                this.state = 2584;
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
    public kU_StructLiteral(): KU_StructLiteralContext {
        let localctx: KU_StructLiteralContext = new KU_StructLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 306, CypherParser.RULE_kU_StructLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2587;
            this.match(CypherParser.T__8);
            this.state = 2589;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2588;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2591;
            this.kU_StructField();
            this.state = 2593;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2592;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2605;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4) {
                {
                {
                this.state = 2595;
                this.match(CypherParser.T__3);
                this.state = 2597;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2596;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2599;
                this.kU_StructField();
                this.state = 2601;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2600;
                    this.match(CypherParser.SP);
                    }
                }

                }
                }
                this.state = 2607;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2608;
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
    public kU_StructField(): KU_StructFieldContext {
        let localctx: KU_StructFieldContext = new KU_StructFieldContext(this._ctx, this.state);
        this.enterRule(localctx, 308, CypherParser.RULE_kU_StructField);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2612;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
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
                this.state = 2610;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.StringLiteral:
                {
                this.state = 2611;
                this.match(CypherParser.StringLiteral);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 2615;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2614;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2617;
            this.match(CypherParser.COLON);
            this.state = 2619;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2618;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2621;
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
        this.enterRule(localctx, 310, CypherParser.RULE_oC_ParenthesizedExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2623;
            this.match(CypherParser.T__1);
            this.state = 2625;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2624;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2627;
            this.oC_Expression();
            this.state = 2629;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2628;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2631;
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
        this.enterRule(localctx, 312, CypherParser.RULE_oC_FunctionInvocation);
        let _la: number;
        try {
            this.state = 2710;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 452, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2633;
                this.match(CypherParser.COUNT);
                this.state = 2635;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2634;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2637;
                this.match(CypherParser.T__1);
                this.state = 2639;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2638;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2641;
                this.match(CypherParser.STAR);
                this.state = 2643;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2642;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2645;
                this.match(CypherParser.T__2);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2646;
                this.match(CypherParser.CAST);
                this.state = 2648;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2647;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2650;
                this.match(CypherParser.T__1);
                this.state = 2652;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2651;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2654;
                this.kU_FunctionParameter();
                this.state = 2656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2655;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2668;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case CypherParser.AS:
                    {
                    {
                    this.state = 2658;
                    this.match(CypherParser.AS);
                    this.state = 2660;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2659;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2662;
                    this.kU_DataType(0);
                    }
                    }
                    break;
                case CypherParser.T__3:
                    {
                    {
                    this.state = 2663;
                    this.match(CypherParser.T__3);
                    this.state = 2665;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2664;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2667;
                    this.kU_FunctionParameter();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2671;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2670;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2673;
                this.match(CypherParser.T__2);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2675;
                this.oC_FunctionName();
                this.state = 2677;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2676;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2679;
                this.match(CypherParser.T__1);
                this.state = 2681;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2680;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2687;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===77) {
                    {
                    this.state = 2683;
                    this.match(CypherParser.DISTINCT);
                    this.state = 2685;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2684;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                }

                this.state = 2706;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 33555076) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 1237024559) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4155185137) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3915116575) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 111345223) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 39) !== 0)) {
                    {
                    this.state = 2689;
                    this.kU_FunctionParameter();
                    this.state = 2691;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2690;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2703;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===4) {
                        {
                        {
                        this.state = 2693;
                        this.match(CypherParser.T__3);
                        this.state = 2695;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 2694;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2697;
                        this.kU_FunctionParameter();
                        this.state = 2699;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 2698;
                            this.match(CypherParser.SP);
                            }
                        }

                        }
                        }
                        this.state = 2705;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 2708;
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
        this.enterRule(localctx, 314, CypherParser.RULE_oC_FunctionName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2712;
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
    public kU_FunctionParameter(): KU_FunctionParameterContext {
        let localctx: KU_FunctionParameterContext = new KU_FunctionParameterContext(this._ctx, this.state);
        this.enterRule(localctx, 316, CypherParser.RULE_kU_FunctionParameter);
        let _la: number;
        try {
            this.state = 2727;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 456, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2723;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 455, this._ctx) ) {
                case 1:
                    {
                    this.state = 2714;
                    this.oC_SymbolicName();
                    this.state = 2716;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2715;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2718;
                    this.match(CypherParser.COLON);
                    this.state = 2719;
                    this.match(CypherParser.T__5);
                    this.state = 2721;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2720;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    break;
                }
                this.state = 2725;
                this.oC_Expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2726;
                this.kU_LambdaParameter();
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
    public kU_LambdaParameter(): KU_LambdaParameterContext {
        let localctx: KU_LambdaParameterContext = new KU_LambdaParameterContext(this._ctx, this.state);
        this.enterRule(localctx, 318, CypherParser.RULE_kU_LambdaParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2729;
            this.kU_LambdaVars();
            this.state = 2731;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2730;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2733;
            this.match(CypherParser.MINUS);
            this.state = 2734;
            this.match(CypherParser.T__14);
            this.state = 2736;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2735;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2738;
            this.oC_Expression();
            this.state = 2740;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 459, this._ctx) ) {
            case 1:
                {
                this.state = 2739;
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
    public kU_LambdaVars(): KU_LambdaVarsContext {
        let localctx: KU_LambdaVarsContext = new KU_LambdaVarsContext(this._ctx, this.state);
        this.enterRule(localctx, 320, CypherParser.RULE_kU_LambdaVars);
        let _la: number;
        try {
            this.state = 2766;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
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
                this.state = 2742;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.T__1:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2743;
                this.match(CypherParser.T__1);
                this.state = 2745;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2744;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2747;
                this.oC_SymbolicName();
                this.state = 2749;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2748;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2761;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===4) {
                    {
                    {
                    this.state = 2751;
                    this.match(CypherParser.T__3);
                    this.state = 2753;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2752;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2755;
                    this.oC_SymbolicName();
                    this.state = 2757;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2756;
                        this.match(CypherParser.SP);
                        }
                    }

                    }
                    }
                    this.state = 2763;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2764;
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
        this.enterRule(localctx, 322, CypherParser.RULE_oC_PathPatterns);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2768;
            this.oC_NodePattern();
            this.state = 2773;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2770;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===183) {
                        {
                        this.state = 2769;
                        this.match(CypherParser.SP);
                        }
                    }

                    this.state = 2772;
                    this.oC_PatternElementChain();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2775;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 467, this._ctx);
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
        this.enterRule(localctx, 324, CypherParser.RULE_oC_ExistCountSubquery);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2777;
            _la = this._input.LA(1);
            if(!(_la===67 || _la===82)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 2779;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2778;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2781;
            this.match(CypherParser.T__8);
            this.state = 2783;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2782;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2785;
            this.match(CypherParser.MATCH);
            this.state = 2787;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2786;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2789;
            this.oC_Pattern();
            this.state = 2794;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 472, this._ctx) ) {
            case 1:
                {
                this.state = 2791;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2790;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2793;
                this.oC_Where();
                }
                break;
            }
            this.state = 2800;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 474, this._ctx) ) {
            case 1:
                {
                this.state = 2797;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2796;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2799;
                this.kU_Hint();
                }
                break;
            }
            this.state = 2803;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2802;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2805;
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
        this.enterRule(localctx, 326, CypherParser.RULE_oC_PropertyLookup);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2807;
            this.match(CypherParser.T__4);
            this.state = 2809;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2808;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2813;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
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
                this.state = 2811;
                this.oC_PropertyKeyName();
                }
                break;
            case CypherParser.STAR:
                {
                this.state = 2812;
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
        this.enterRule(localctx, 328, CypherParser.RULE_oC_CaseExpression);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2837;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 483, this._ctx) ) {
            case 1:
                {
                {
                this.state = 2815;
                this.match(CypherParser.CASE);
                this.state = 2820;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2817;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 2816;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2819;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2822;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 479, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            case 2:
                {
                {
                this.state = 2824;
                this.match(CypherParser.CASE);
                this.state = 2826;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2825;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2828;
                this.oC_Expression();
                this.state = 2833;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 2830;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===183) {
                            {
                            this.state = 2829;
                            this.match(CypherParser.SP);
                            }
                        }

                        this.state = 2832;
                        this.oC_CaseAlternative();
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2835;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 482, this._ctx);
                } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                }
                break;
            }
            this.state = 2847;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 486, this._ctx) ) {
            case 1:
                {
                this.state = 2840;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2839;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2842;
                this.match(CypherParser.ELSE);
                this.state = 2844;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===183) {
                    {
                    this.state = 2843;
                    this.match(CypherParser.SP);
                    }
                }

                this.state = 2846;
                this.oC_Expression();
                }
                break;
            }
            this.state = 2850;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2849;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2852;
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
        this.enterRule(localctx, 330, CypherParser.RULE_oC_CaseAlternative);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2854;
            this.match(CypherParser.WHEN);
            this.state = 2856;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2855;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2858;
            this.oC_Expression();
            this.state = 2860;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2859;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2862;
            this.match(CypherParser.THEN);
            this.state = 2864;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2863;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2866;
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
        this.enterRule(localctx, 332, CypherParser.RULE_oC_Variable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2868;
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
        this.enterRule(localctx, 334, CypherParser.RULE_oC_NumberLiteral);
        try {
            this.state = 2872;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ExponentDecimalReal:
            case CypherParser.RegularDecimalReal:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2870;
                this.oC_DoubleLiteral();
                }
                break;
            case CypherParser.DecimalInteger:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2871;
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
        this.enterRule(localctx, 336, CypherParser.RULE_oC_Parameter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2874;
            this.match(CypherParser.T__24);
            this.state = 2877;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.ADD:
            case CypherParser.ALTER:
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
                this.state = 2875;
                this.oC_SymbolicName();
                }
                break;
            case CypherParser.DecimalInteger:
                {
                this.state = 2876;
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
        this.enterRule(localctx, 338, CypherParser.RULE_oC_PropertyExpression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2879;
            this.oC_Atom();
            this.state = 2881;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===183) {
                {
                this.state = 2880;
                this.match(CypherParser.SP);
                }
            }

            this.state = 2883;
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
        this.enterRule(localctx, 340, CypherParser.RULE_oC_PropertyKeyName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2885;
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
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        let localctx: OC_IntegerLiteralContext = new OC_IntegerLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 342, CypherParser.RULE_oC_IntegerLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2887;
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
        this.enterRule(localctx, 344, CypherParser.RULE_oC_DoubleLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2889;
            _la = this._input.LA(1);
            if(!(_la===177 || _la===178)) {
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
        this.enterRule(localctx, 346, CypherParser.RULE_oC_SchemaName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2891;
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
    public oC_SymbolicName(): OC_SymbolicNameContext {
        let localctx: OC_SymbolicNameContext = new OC_SymbolicNameContext(this._ctx, this.state);
        this.enterRule(localctx, 348, CypherParser.RULE_oC_SymbolicName);
        try {
            this.state = 2898;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case CypherParser.UnescapedSymbolicName:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2893;
                this.match(CypherParser.UnescapedSymbolicName);
                }
                break;
            case CypherParser.EscapedSymbolicName:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2894;
                localctx._EscapedSymbolicName = this.match(CypherParser.EscapedSymbolicName);
                }
                break;
            case CypherParser.HexLetter:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2896;
                this.match(CypherParser.HexLetter);
                }
                break;
            case CypherParser.ADD:
            case CypherParser.ALTER:
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
                this.state = 2897;
                this.kU_NonReservedKeywords();
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
    public kU_NonReservedKeywords(): KU_NonReservedKeywordsContext {
        let localctx: KU_NonReservedKeywordsContext = new KU_NonReservedKeywordsContext(this._ctx, this.state);
        this.enterRule(localctx, 350, CypherParser.RULE_kU_NonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2900;
            _la = this._input.LA(1);
            if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 2765989781) !== 0) || ((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 935155895) !== 0) || ((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & 298489279) !== 0) || ((((_la - 155)) & ~0x1F) === 0 && ((1 << (_la - 155)) & 191) !== 0))) {
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
        this.enterRule(localctx, 352, CypherParser.RULE_oC_LeftArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2902;
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
        this.enterRule(localctx, 354, CypherParser.RULE_oC_RightArrowHead);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2904;
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
        this.enterRule(localctx, 356, CypherParser.RULE_oC_Dash);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2906;
            _la = this._input.LA(1);
            if(!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 2047) !== 0) || _la===166)) {
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
        case 57:
            return this.kU_DataType_sempred(localctx as KU_DataTypeContext, predIndex);
        case 84:
            return this.kU_JoinNode_sempred(localctx as KU_JoinNodeContext, predIndex);
        }
        return true;
    }
    private kU_DataType_sempred(localctx: KU_DataTypeContext, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 5);
        }
        return true;
    }
    private kU_JoinNode_sempred(localctx: KU_JoinNodeContext, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this._ctx, 4);
        case 2:
            return this.precpred(this._ctx, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,186,2909,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,1,0,1,0,3,0,361,8,0,1,
        0,1,0,3,0,365,8,0,1,0,5,0,368,8,0,10,0,12,0,371,9,0,1,0,3,0,374,
        8,0,1,0,1,0,1,1,3,1,379,8,1,1,1,3,1,382,8,1,1,1,1,1,3,1,386,8,1,
        1,1,3,1,389,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,413,8,2,1,3,1,3,1,3,
        1,3,3,3,419,8,3,1,3,1,3,1,3,1,3,1,3,3,3,426,8,3,1,3,1,3,3,3,430,
        8,3,1,3,1,3,3,3,434,8,3,1,3,1,3,3,3,438,8,3,1,4,3,4,441,8,4,1,4,
        1,4,3,4,445,8,4,1,4,1,4,3,4,449,8,4,1,4,1,4,3,4,453,8,4,1,4,5,4,
        456,8,4,10,4,12,4,459,9,4,1,4,3,4,462,8,4,3,4,464,8,4,1,4,1,4,1,
        5,1,5,1,5,3,5,471,8,5,1,5,1,5,3,5,475,8,5,1,5,1,5,1,5,1,5,1,5,1,
        5,1,5,3,5,484,8,5,1,5,1,5,1,5,3,5,489,8,5,1,6,1,6,1,6,1,6,1,6,1,
        6,1,6,1,6,3,6,499,8,6,1,6,1,6,3,6,503,8,6,1,6,1,6,3,6,507,8,6,1,
        6,5,6,510,8,6,10,6,12,6,513,9,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,
        1,7,1,7,3,7,525,8,7,1,7,1,7,3,7,529,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
        3,7,537,8,7,1,7,1,7,3,7,541,8,7,1,7,1,7,3,7,545,8,7,1,7,1,7,3,7,
        549,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,557,8,8,1,8,1,8,3,8,561,8,8,
        1,8,1,8,3,8,565,8,8,1,8,1,8,3,8,569,8,8,1,9,1,9,1,9,1,9,1,9,1,9,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,584,8,10,1,10,1,10,1,10,
        3,10,589,8,10,1,10,1,10,1,10,1,10,3,10,595,8,10,1,10,1,10,3,10,599,
        8,10,1,10,3,10,602,8,10,1,10,3,10,605,8,10,1,10,1,10,1,11,1,11,3,
        11,611,8,11,1,11,1,11,3,11,615,8,11,1,11,5,11,618,8,11,10,11,12,
        11,621,9,11,3,11,623,8,11,1,11,1,11,1,11,3,11,628,8,11,1,12,1,12,
        3,12,632,8,12,1,12,1,12,3,12,636,8,12,1,12,5,12,639,8,12,10,12,12,
        12,642,9,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,
        15,1,15,3,15,656,8,15,1,15,1,15,3,15,660,8,15,1,15,1,15,1,15,1,15,
        1,15,3,15,667,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
        1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,687,8,17,1,17,
        1,17,3,17,691,8,17,1,17,3,17,694,8,17,1,17,3,17,697,8,17,1,17,3,
        17,700,8,17,1,17,3,17,703,8,17,1,17,1,17,3,17,707,8,17,1,17,5,17,
        710,8,17,10,17,12,17,713,9,17,1,17,3,17,716,8,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,18,1,18,3,18,726,8,18,1,18,1,18,3,18,730,8,18,1,
        18,5,18,733,8,18,10,18,12,18,736,9,18,1,19,1,19,3,19,740,8,19,1,
        19,1,19,1,19,3,19,745,8,19,1,19,1,19,1,20,1,20,3,20,751,8,20,1,20,
        1,20,3,20,755,8,20,1,20,1,20,3,20,759,8,20,1,20,5,20,762,8,20,10,
        20,12,20,765,9,20,1,20,1,20,1,20,1,20,3,20,771,8,20,1,20,1,20,3,
        20,775,8,20,1,20,1,20,3,20,779,8,20,1,20,3,20,782,8,20,1,21,1,21,
        1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
        3,22,799,8,22,1,22,1,22,3,22,803,8,22,1,22,1,22,3,22,807,8,22,1,
        22,1,22,3,22,811,8,22,1,22,1,22,3,22,815,8,22,1,22,3,22,818,8,22,
        1,22,3,22,821,8,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,829,8,22,1,
        23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,838,8,23,1,23,1,23,3,23,842,
        8,23,1,23,1,23,1,23,3,23,847,8,23,1,23,1,23,3,23,851,8,23,1,23,1,
        23,3,23,855,8,23,1,23,1,23,3,23,859,8,23,1,23,1,23,3,23,863,8,23,
        3,23,865,8,23,1,23,1,23,3,23,869,8,23,1,23,1,23,3,23,873,8,23,3,
        23,875,8,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,883,8,23,1,23,1,23,
        1,23,3,23,888,8,23,1,23,1,23,3,23,892,8,23,1,23,1,23,3,23,896,8,
        23,1,23,1,23,3,23,900,8,23,1,24,1,24,3,24,904,8,24,1,24,1,24,3,24,
        908,8,24,1,24,5,24,911,8,24,10,24,12,24,914,9,24,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,
        931,8,26,1,26,1,26,1,26,5,26,936,8,26,10,26,12,26,939,9,26,1,27,
        1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,951,8,27,1,28,
        1,28,1,28,1,28,1,28,3,28,958,8,28,1,29,1,29,1,29,1,29,1,29,1,29,
        1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,974,8,30,1,30,1,30,
        3,30,978,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,987,8,31,1,
        31,1,31,1,32,1,32,1,32,1,32,3,32,995,8,32,1,32,3,32,998,8,32,1,32,
        1,32,1,33,1,33,1,33,1,33,1,33,1,33,3,33,1008,8,33,1,33,3,33,1011,
        8,33,1,34,1,34,1,34,1,34,1,34,1,34,3,34,1019,8,34,1,34,3,34,1022,
        8,34,1,35,1,35,1,35,1,35,3,35,1028,8,35,1,35,3,35,1031,8,35,1,35,
        1,35,1,36,1,36,3,36,1037,8,36,1,36,1,36,1,37,1,37,1,37,1,37,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,3,38,1052,8,38,1,38,1,38,1,39,1,39,
        1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,3,40,
        1070,8,40,1,41,1,41,1,41,1,41,1,41,3,41,1077,8,41,1,41,1,41,1,41,
        1,41,1,41,3,41,1084,8,41,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,
        1,43,3,43,1095,8,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,45,
        1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,3,46,
        1118,8,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,3,47,1127,8,47,1,47,
        1,47,1,48,1,48,3,48,1133,8,48,1,48,1,48,3,48,1137,8,48,1,48,5,48,
        1140,8,48,10,48,12,48,1143,9,48,1,49,1,49,1,49,1,49,1,50,1,50,3,
        50,1151,8,50,1,50,1,50,3,50,1155,8,50,1,50,5,50,1158,8,50,10,50,
        12,50,1161,9,50,1,51,1,51,1,51,3,51,1166,8,51,1,51,1,51,1,51,1,51,
        3,51,1172,8,51,1,52,1,52,1,52,1,52,3,52,1178,8,52,1,52,1,52,3,52,
        1182,8,52,1,52,1,52,3,52,1186,8,52,1,52,1,52,1,53,1,53,3,53,1192,
        8,53,1,53,1,53,3,53,1196,8,53,1,53,1,53,3,53,1200,8,53,1,53,1,53,
        1,54,1,54,3,54,1206,8,54,1,54,1,54,3,54,1210,8,54,1,54,1,54,3,54,
        1214,8,54,1,54,1,54,1,55,1,55,3,55,1220,8,55,1,55,1,55,3,55,1224,
        8,55,1,55,1,55,3,55,1228,8,55,1,55,1,55,3,55,1232,8,55,1,55,1,55,
        3,55,1236,8,55,1,55,1,55,1,56,1,56,3,56,1242,8,56,1,56,1,56,3,56,
        1246,8,56,1,56,1,56,3,56,1250,8,56,1,56,1,56,3,56,1254,8,56,1,56,
        1,56,3,56,1258,8,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,3,57,
        1268,8,57,1,57,1,57,5,57,1272,8,57,10,57,12,57,1275,9,57,1,58,1,
        58,5,58,1279,8,58,10,58,12,58,1282,9,58,1,59,1,59,3,59,1286,8,59,
        1,59,1,59,1,60,1,60,3,60,1292,8,60,1,61,1,61,1,61,3,61,1297,8,61,
        1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,
        1,63,1,63,3,63,1314,8,63,1,64,1,64,1,64,1,64,3,64,1320,8,64,1,65,
        1,65,1,65,1,65,3,65,1326,8,65,1,65,1,65,3,65,1330,8,65,1,66,1,66,
        3,66,1334,8,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,1343,8,66,
        1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,69,1,69,1,70,1,70,3,70,
        1357,8,70,1,70,5,70,1360,8,70,10,70,12,70,1363,9,70,1,70,1,70,3,
        70,1367,8,70,4,70,1369,8,70,11,70,12,70,1370,1,70,1,70,1,70,3,70,
        1376,8,70,1,71,1,71,1,71,1,71,3,71,1382,8,71,1,71,1,71,1,71,3,71,
        1387,8,71,1,71,3,71,1390,8,71,1,72,1,72,3,72,1394,8,72,1,73,1,73,
        3,73,1398,8,73,5,73,1400,8,73,10,73,12,73,1403,9,73,1,73,1,73,1,
        73,3,73,1408,8,73,5,73,1410,8,73,10,73,12,73,1413,9,73,1,73,1,73,
        3,73,1417,8,73,1,73,5,73,1420,8,73,10,73,12,73,1423,9,73,1,73,3,
        73,1426,8,73,1,73,3,73,1429,8,73,3,73,1431,8,73,1,74,1,74,3,74,1435,
        8,74,4,74,1437,8,74,11,74,12,74,1438,1,74,1,74,1,75,1,75,3,75,1445,
        8,75,5,75,1447,8,75,10,75,12,75,1450,9,75,1,75,1,75,3,75,1454,8,
        75,5,75,1456,8,75,10,75,12,75,1459,9,75,1,75,1,75,1,76,1,76,1,76,
        1,76,3,76,1467,8,76,1,77,1,77,1,77,1,77,3,77,1473,8,77,1,78,1,78,
        1,78,1,78,1,78,1,78,3,78,1481,8,78,1,78,1,78,3,78,1485,8,78,1,78,
        1,78,3,78,1489,8,78,1,78,1,78,3,78,1493,8,78,1,78,1,78,1,78,1,78,
        1,78,3,78,1500,8,78,1,78,1,78,3,78,1504,8,78,1,78,1,78,3,78,1508,
        8,78,1,78,1,78,3,78,1512,8,78,1,78,3,78,1515,8,78,1,78,3,78,1518,
        8,78,1,79,1,79,1,79,1,79,1,79,3,79,1525,8,79,1,79,1,79,1,80,1,80,
        3,80,1531,8,80,1,80,1,80,3,80,1535,8,80,1,80,5,80,1538,8,80,10,80,
        12,80,1541,9,80,1,81,1,81,1,81,1,81,3,81,1547,8,81,1,81,3,81,1550,
        8,81,1,81,3,81,1553,8,81,1,81,1,81,1,81,3,81,1558,8,81,1,82,1,82,
        3,82,1562,8,82,1,82,1,82,3,82,1566,8,82,1,82,1,82,1,82,3,82,1571,
        8,82,1,82,1,82,3,82,1575,8,82,1,83,1,83,1,83,1,83,1,84,1,84,1,84,
        3,84,1584,8,84,1,84,1,84,3,84,1588,8,84,1,84,1,84,1,84,3,84,1593,
        8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,4,84,1605,
        8,84,11,84,12,84,1606,5,84,1609,8,84,10,84,12,84,1612,9,84,1,85,
        1,85,3,85,1616,8,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,3,86,
        1626,8,86,1,86,1,86,1,87,1,87,3,87,1632,8,87,1,87,1,87,1,87,5,87,
        1637,8,87,10,87,12,87,1640,9,87,1,88,1,88,1,88,1,88,1,88,1,88,1,
        88,1,88,1,88,1,88,3,88,1652,8,88,1,89,1,89,3,89,1656,8,89,1,89,1,
        89,3,89,1660,8,89,1,89,1,89,3,89,1664,8,89,1,89,5,89,1667,8,89,10,
        89,12,89,1670,9,89,1,89,1,89,3,89,1674,8,89,1,89,1,89,3,89,1678,
        8,89,1,89,1,89,3,89,1682,8,89,1,89,1,89,3,89,1686,8,89,1,90,1,90,
        3,90,1690,8,90,1,90,1,90,3,90,1694,8,90,1,90,1,90,1,91,1,91,3,91,
        1700,8,91,1,91,1,91,3,91,1704,8,91,1,91,1,91,3,91,1708,8,91,1,91,
        1,91,3,91,1712,8,91,1,91,5,91,1715,8,91,10,91,12,91,1718,9,91,1,
        92,1,92,1,92,3,92,1723,8,92,1,92,3,92,1726,8,92,1,93,1,93,1,93,1,
        94,3,94,1732,8,94,1,94,3,94,1735,8,94,1,94,1,94,1,94,1,94,3,94,1741,
        8,94,1,94,1,94,3,94,1745,8,94,1,94,1,94,3,94,1749,8,94,1,95,1,95,
        3,95,1753,8,95,1,95,1,95,3,95,1757,8,95,1,95,5,95,1760,8,95,10,95,
        12,95,1763,9,95,1,95,1,95,3,95,1767,8,95,1,95,1,95,3,95,1771,8,95,
        1,95,5,95,1774,8,95,10,95,12,95,1777,9,95,3,95,1779,8,95,1,96,1,
        96,1,96,1,96,1,96,1,96,1,96,3,96,1788,8,96,1,97,1,97,1,97,1,97,1,
        97,1,97,1,97,3,97,1797,8,97,1,97,5,97,1800,8,97,10,97,12,97,1803,
        9,97,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,100,1,100,3,100,1815,
        8,100,1,100,3,100,1818,8,100,1,101,1,101,1,101,1,101,1,102,1,102,
        3,102,1826,8,102,1,102,1,102,3,102,1830,8,102,1,102,5,102,1833,8,
        102,10,102,12,102,1836,9,102,1,103,1,103,3,103,1840,8,103,1,103,
        1,103,3,103,1844,8,103,1,103,1,103,1,103,3,103,1849,8,103,1,104,
        1,104,1,105,1,105,3,105,1855,8,105,1,105,5,105,1858,8,105,10,105,
        12,105,1861,9,105,1,105,1,105,1,105,1,105,3,105,1867,8,105,1,106,
        1,106,3,106,1871,8,106,1,106,1,106,3,106,1875,8,106,3,106,1877,8,
        106,1,106,1,106,3,106,1881,8,106,3,106,1883,8,106,1,106,1,106,3,
        106,1887,8,106,3,106,1889,8,106,1,106,1,106,1,107,1,107,3,107,1895,
        8,107,1,107,1,107,1,108,1,108,3,108,1901,8,108,1,108,1,108,3,108,
        1905,8,108,1,108,3,108,1908,8,108,1,108,3,108,1911,8,108,1,108,1,
        108,1,108,1,108,3,108,1917,8,108,1,108,3,108,1920,8,108,1,108,3,
        108,1923,8,108,1,108,1,108,3,108,1927,8,108,1,108,1,108,1,108,1,
        108,3,108,1933,8,108,1,108,3,108,1936,8,108,1,108,3,108,1939,8,108,
        1,108,1,108,3,108,1943,8,108,1,109,1,109,3,109,1947,8,109,1,109,
        1,109,3,109,1951,8,109,3,109,1953,8,109,1,109,1,109,3,109,1957,8,
        109,3,109,1959,8,109,1,109,1,109,3,109,1963,8,109,3,109,1965,8,109,
        1,109,1,109,3,109,1969,8,109,3,109,1971,8,109,1,109,1,109,1,110,
        1,110,3,110,1977,8,110,1,110,1,110,3,110,1981,8,110,1,110,1,110,
        3,110,1985,8,110,1,110,1,110,3,110,1989,8,110,1,110,1,110,3,110,
        1993,8,110,1,110,1,110,3,110,1997,8,110,1,110,1,110,3,110,2001,8,
        110,1,110,1,110,3,110,2005,8,110,5,110,2007,8,110,10,110,12,110,
        2010,9,110,3,110,2012,8,110,1,110,1,110,1,111,1,111,3,111,2018,8,
        111,1,111,1,111,3,111,2022,8,111,1,111,1,111,3,111,2026,8,111,1,
        111,3,111,2029,8,111,1,111,5,111,2032,8,111,10,111,12,111,2035,9,
        111,1,112,1,112,3,112,2039,8,112,1,112,1,112,3,112,2043,8,112,1,
        112,1,112,3,112,2047,8,112,1,112,3,112,2050,8,112,1,112,3,112,2053,
        8,112,1,112,5,112,2056,8,112,10,112,12,112,2059,9,112,1,113,1,113,
        3,113,2063,8,113,1,113,3,113,2066,8,113,1,113,3,113,2069,8,113,1,
        113,3,113,2072,8,113,1,113,3,113,2075,8,113,1,113,3,113,2078,8,113,
        1,114,1,114,3,114,2082,8,114,1,114,1,114,3,114,2086,8,114,1,114,
        1,114,3,114,2090,8,114,1,114,1,114,3,114,2094,8,114,1,114,1,114,
        1,114,1,114,1,114,1,114,1,114,1,114,3,114,2104,8,114,1,115,3,115,
        2107,8,115,1,115,3,115,2110,8,115,1,115,1,115,3,115,2114,8,115,1,
        115,3,115,2117,8,115,1,115,3,115,2120,8,115,1,116,1,116,3,116,2124,
        8,116,1,116,1,116,3,116,2128,8,116,1,116,1,116,3,116,2132,8,116,
        1,116,1,116,3,116,2136,8,116,1,116,1,116,3,116,2140,8,116,1,116,
        1,116,3,116,2144,8,116,3,116,2146,8,116,1,116,3,116,2149,8,116,1,
        116,1,116,3,116,2153,8,116,1,116,1,116,3,116,2157,8,116,1,116,1,
        116,3,116,2161,8,116,1,116,1,116,3,116,2165,8,116,3,116,2167,8,116,
        1,116,1,116,1,117,1,117,3,117,2173,8,117,1,117,3,117,2176,8,117,
        1,117,3,117,2179,8,117,1,117,1,117,1,118,1,118,1,119,1,119,1,120,
        1,120,1,121,1,121,1,122,1,122,1,123,1,123,1,123,1,123,1,123,5,123,
        2198,8,123,10,123,12,123,2201,9,123,1,124,1,124,1,124,1,124,1,124,
        5,124,2208,8,124,10,124,12,124,2211,9,124,1,125,1,125,1,125,1,125,
        1,125,5,125,2218,8,125,10,125,12,125,2221,9,125,1,126,1,126,3,126,
        2225,8,126,5,126,2227,8,126,10,126,12,126,2230,9,126,1,126,1,126,
        1,127,1,127,3,127,2236,8,127,1,127,1,127,3,127,2240,8,127,1,127,
        1,127,3,127,2244,8,127,1,127,1,127,3,127,2248,8,127,1,127,1,127,
        3,127,2252,8,127,1,127,1,127,1,127,1,127,1,127,1,127,3,127,2260,
        8,127,1,127,1,127,3,127,2264,8,127,1,127,1,127,3,127,2268,8,127,
        1,127,1,127,3,127,2272,8,127,1,127,1,127,4,127,2276,8,127,11,127,
        12,127,2277,1,127,1,127,3,127,2282,8,127,1,128,1,128,1,129,1,129,
        3,129,2288,8,129,1,129,1,129,3,129,2292,8,129,1,129,5,129,2295,8,
        129,10,129,12,129,2298,9,129,1,130,1,130,3,130,2302,8,130,1,130,
        1,130,3,130,2306,8,130,1,130,5,130,2309,8,130,10,130,12,130,2312,
        9,130,1,131,1,131,3,131,2316,8,131,1,131,1,131,3,131,2320,8,131,
        1,131,1,131,5,131,2324,8,131,10,131,12,131,2327,9,131,1,132,1,132,
        1,133,1,133,3,133,2333,8,133,1,133,1,133,3,133,2337,8,133,1,133,
        1,133,5,133,2341,8,133,10,133,12,133,2344,9,133,1,134,1,134,1,135,
        1,135,3,135,2350,8,135,1,135,1,135,3,135,2354,8,135,1,135,1,135,
        5,135,2358,8,135,10,135,12,135,2361,9,135,1,136,1,136,1,137,1,137,
        3,137,2367,8,137,1,137,1,137,3,137,2371,8,137,1,137,5,137,2374,8,
        137,10,137,12,137,2377,9,137,1,138,1,138,1,138,4,138,2382,8,138,
        11,138,12,138,2383,1,138,3,138,2387,8,138,1,139,1,139,1,139,3,139,
        2392,8,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,3,139,2401,
        8,139,1,139,1,139,3,139,2405,8,139,1,139,3,139,2408,8,139,1,140,
        1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,3,140,
        2421,8,140,1,140,3,140,2424,8,140,1,140,1,140,1,141,3,141,2429,8,
        141,1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,
        1,142,1,142,3,142,2443,8,142,1,143,1,143,3,143,2447,8,143,5,143,
        2449,8,143,10,143,12,143,2452,9,143,1,143,1,143,3,143,2456,8,143,
        1,143,3,143,2459,8,143,1,144,1,144,3,144,2463,8,144,1,144,5,144,
        2466,8,144,10,144,12,144,2469,9,144,1,145,1,145,1,145,1,145,1,145,
        1,145,1,145,1,145,1,145,3,145,2480,8,145,1,146,1,146,3,146,2484,
        8,146,1,146,1,146,3,146,2488,8,146,1,146,1,146,3,146,2492,8,146,
        1,146,1,146,1,146,1,146,3,146,2498,8,146,1,146,1,146,3,146,2502,
        8,146,1,146,1,146,3,146,2506,8,146,1,146,1,146,1,146,1,146,3,146,
        2512,8,146,1,146,1,146,3,146,2516,8,146,1,146,1,146,3,146,2520,8,
        146,1,146,1,146,1,146,1,146,3,146,2526,8,146,1,146,1,146,3,146,2530,
        8,146,1,146,1,146,3,146,2534,8,146,1,146,1,146,3,146,2538,8,146,
        1,147,1,147,1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,148,1,149,
        1,149,1,149,1,149,1,149,1,149,3,149,2556,8,149,1,150,1,150,1,151,
        1,151,3,151,2562,8,151,1,151,1,151,3,151,2566,8,151,1,151,1,151,
        3,151,2570,8,151,5,151,2572,8,151,10,151,12,151,2575,9,151,3,151,
        2577,8,151,1,151,1,151,1,152,1,152,3,152,2583,8,152,1,152,3,152,
        2586,8,152,1,153,1,153,3,153,2590,8,153,1,153,1,153,3,153,2594,8,
        153,1,153,1,153,3,153,2598,8,153,1,153,1,153,3,153,2602,8,153,5,
        153,2604,8,153,10,153,12,153,2607,9,153,1,153,1,153,1,154,1,154,
        3,154,2613,8,154,1,154,3,154,2616,8,154,1,154,1,154,3,154,2620,8,
        154,1,154,1,154,1,155,1,155,3,155,2626,8,155,1,155,1,155,3,155,2630,
        8,155,1,155,1,155,1,156,1,156,3,156,2636,8,156,1,156,1,156,3,156,
        2640,8,156,1,156,1,156,3,156,2644,8,156,1,156,1,156,1,156,3,156,
        2649,8,156,1,156,1,156,3,156,2653,8,156,1,156,1,156,3,156,2657,8,
        156,1,156,1,156,3,156,2661,8,156,1,156,1,156,1,156,3,156,2666,8,
        156,1,156,3,156,2669,8,156,1,156,3,156,2672,8,156,1,156,1,156,1,
        156,1,156,3,156,2678,8,156,1,156,1,156,3,156,2682,8,156,1,156,1,
        156,3,156,2686,8,156,3,156,2688,8,156,1,156,1,156,3,156,2692,8,156,
        1,156,1,156,3,156,2696,8,156,1,156,1,156,3,156,2700,8,156,5,156,
        2702,8,156,10,156,12,156,2705,9,156,3,156,2707,8,156,1,156,1,156,
        3,156,2711,8,156,1,157,1,157,1,158,1,158,3,158,2717,8,158,1,158,
        1,158,1,158,3,158,2722,8,158,3,158,2724,8,158,1,158,1,158,3,158,
        2728,8,158,1,159,1,159,3,159,2732,8,159,1,159,1,159,1,159,3,159,
        2737,8,159,1,159,1,159,3,159,2741,8,159,1,160,1,160,1,160,3,160,
        2746,8,160,1,160,1,160,3,160,2750,8,160,1,160,1,160,3,160,2754,8,
        160,1,160,1,160,3,160,2758,8,160,5,160,2760,8,160,10,160,12,160,
        2763,9,160,1,160,1,160,3,160,2767,8,160,1,161,1,161,3,161,2771,8,
        161,1,161,4,161,2774,8,161,11,161,12,161,2775,1,162,1,162,3,162,
        2780,8,162,1,162,1,162,3,162,2784,8,162,1,162,1,162,3,162,2788,8,
        162,1,162,1,162,3,162,2792,8,162,1,162,3,162,2795,8,162,1,162,3,
        162,2798,8,162,1,162,3,162,2801,8,162,1,162,3,162,2804,8,162,1,162,
        1,162,1,163,1,163,3,163,2810,8,163,1,163,1,163,3,163,2814,8,163,
        1,164,1,164,3,164,2818,8,164,1,164,4,164,2821,8,164,11,164,12,164,
        2822,1,164,1,164,3,164,2827,8,164,1,164,1,164,3,164,2831,8,164,1,
        164,4,164,2834,8,164,11,164,12,164,2835,3,164,2838,8,164,1,164,3,
        164,2841,8,164,1,164,1,164,3,164,2845,8,164,1,164,3,164,2848,8,164,
        1,164,3,164,2851,8,164,1,164,1,164,1,165,1,165,3,165,2857,8,165,
        1,165,1,165,3,165,2861,8,165,1,165,1,165,3,165,2865,8,165,1,165,
        1,165,1,166,1,166,1,167,1,167,3,167,2873,8,167,1,168,1,168,1,168,
        3,168,2878,8,168,1,169,1,169,3,169,2882,8,169,1,169,1,169,1,170,
        1,170,1,171,1,171,1,172,1,172,1,173,1,173,1,174,1,174,1,174,1,174,
        1,174,3,174,2899,8,174,1,175,1,175,1,176,1,176,1,177,1,177,1,178,
        1,178,1,178,0,2,114,168,179,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
        28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
        72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
        112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,
        144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,
        176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,
        208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,
        240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,270,
        272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,
        304,306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,
        336,338,340,342,344,346,348,350,352,354,356,0,14,3,0,105,105,130,
        130,136,136,2,0,52,53,74,75,2,0,6,6,12,16,1,0,18,19,2,0,20,20,166,
        166,2,0,21,22,161,161,1,0,164,165,2,0,86,86,141,141,2,0,67,67,82,
        82,1,0,177,178,31,0,47,47,49,49,51,51,54,57,60,60,62,63,65,67,69,
        70,73,73,76,76,78,78,83,85,87,88,90,90,94,95,97,97,99,99,101,104,
        106,109,111,112,123,128,130,131,133,133,135,135,138,138,140,140,
        142,142,145,147,151,151,155,160,162,162,2,0,13,13,26,29,2,0,15,15,
        30,33,2,0,34,44,166,166,3294,0,358,1,0,0,0,2,378,1,0,0,0,4,412,1,
        0,0,0,6,414,1,0,0,0,8,440,1,0,0,0,10,488,1,0,0,0,12,490,1,0,0,0,
        14,520,1,0,0,0,16,550,1,0,0,0,18,570,1,0,0,0,20,576,1,0,0,0,22,627,
        1,0,0,0,24,629,1,0,0,0,26,643,1,0,0,0,28,647,1,0,0,0,30,666,1,0,
        0,0,32,668,1,0,0,0,34,680,1,0,0,0,36,723,1,0,0,0,38,737,1,0,0,0,
        40,781,1,0,0,0,42,783,1,0,0,0,44,789,1,0,0,0,46,830,1,0,0,0,48,901,
        1,0,0,0,50,915,1,0,0,0,52,923,1,0,0,0,54,940,1,0,0,0,56,957,1,0,
        0,0,58,959,1,0,0,0,60,966,1,0,0,0,62,979,1,0,0,0,64,990,1,0,0,0,
        66,1010,1,0,0,0,68,1021,1,0,0,0,70,1023,1,0,0,0,72,1036,1,0,0,0,
        74,1040,1,0,0,0,76,1044,1,0,0,0,78,1055,1,0,0,0,80,1069,1,0,0,0,
        82,1071,1,0,0,0,84,1085,1,0,0,0,86,1089,1,0,0,0,88,1098,1,0,0,0,
        90,1104,1,0,0,0,92,1112,1,0,0,0,94,1121,1,0,0,0,96,1130,1,0,0,0,
        98,1144,1,0,0,0,100,1148,1,0,0,0,102,1162,1,0,0,0,104,1173,1,0,0,
        0,106,1189,1,0,0,0,108,1203,1,0,0,0,110,1217,1,0,0,0,112,1239,1,
        0,0,0,114,1267,1,0,0,0,116,1276,1,0,0,0,118,1283,1,0,0,0,120,1291,
        1,0,0,0,122,1293,1,0,0,0,124,1298,1,0,0,0,126,1313,1,0,0,0,128,1319,
        1,0,0,0,130,1321,1,0,0,0,132,1333,1,0,0,0,134,1344,1,0,0,0,136,1348,
        1,0,0,0,138,1352,1,0,0,0,140,1375,1,0,0,0,142,1389,1,0,0,0,144,1393,
        1,0,0,0,146,1430,1,0,0,0,148,1436,1,0,0,0,150,1448,1,0,0,0,152,1466,
        1,0,0,0,154,1472,1,0,0,0,156,1474,1,0,0,0,158,1524,1,0,0,0,160,1528,
        1,0,0,0,162,1542,1,0,0,0,164,1561,1,0,0,0,166,1576,1,0,0,0,168,1592,
        1,0,0,0,170,1613,1,0,0,0,172,1623,1,0,0,0,174,1629,1,0,0,0,176,1651,
        1,0,0,0,178,1685,1,0,0,0,180,1687,1,0,0,0,182,1699,1,0,0,0,184,1719,
        1,0,0,0,186,1727,1,0,0,0,188,1734,1,0,0,0,190,1778,1,0,0,0,192,1787,
        1,0,0,0,194,1789,1,0,0,0,196,1804,1,0,0,0,198,1808,1,0,0,0,200,1812,
        1,0,0,0,202,1819,1,0,0,0,204,1823,1,0,0,0,206,1848,1,0,0,0,208,1850,
        1,0,0,0,210,1866,1,0,0,0,212,1868,1,0,0,0,214,1892,1,0,0,0,216,1942,
        1,0,0,0,218,1944,1,0,0,0,220,1974,1,0,0,0,222,2015,1,0,0,0,224,2036,
        1,0,0,0,226,2060,1,0,0,0,228,2103,1,0,0,0,230,2119,1,0,0,0,232,2121,
        1,0,0,0,234,2170,1,0,0,0,236,2182,1,0,0,0,238,2184,1,0,0,0,240,2186,
        1,0,0,0,242,2188,1,0,0,0,244,2190,1,0,0,0,246,2192,1,0,0,0,248,2202,
        1,0,0,0,250,2212,1,0,0,0,252,2228,1,0,0,0,254,2281,1,0,0,0,256,2283,
        1,0,0,0,258,2285,1,0,0,0,260,2299,1,0,0,0,262,2313,1,0,0,0,264,2328,
        1,0,0,0,266,2330,1,0,0,0,268,2345,1,0,0,0,270,2347,1,0,0,0,272,2362,
        1,0,0,0,274,2364,1,0,0,0,276,2378,1,0,0,0,278,2407,1,0,0,0,280,2420,
        1,0,0,0,282,2428,1,0,0,0,284,2442,1,0,0,0,286,2450,1,0,0,0,288,2460,
        1,0,0,0,290,2479,1,0,0,0,292,2537,1,0,0,0,294,2539,1,0,0,0,296,2543,
        1,0,0,0,298,2555,1,0,0,0,300,2557,1,0,0,0,302,2559,1,0,0,0,304,2580,
        1,0,0,0,306,2587,1,0,0,0,308,2612,1,0,0,0,310,2623,1,0,0,0,312,2710,
        1,0,0,0,314,2712,1,0,0,0,316,2727,1,0,0,0,318,2729,1,0,0,0,320,2766,
        1,0,0,0,322,2768,1,0,0,0,324,2777,1,0,0,0,326,2807,1,0,0,0,328,2837,
        1,0,0,0,330,2854,1,0,0,0,332,2868,1,0,0,0,334,2872,1,0,0,0,336,2874,
        1,0,0,0,338,2879,1,0,0,0,340,2885,1,0,0,0,342,2887,1,0,0,0,344,2889,
        1,0,0,0,346,2891,1,0,0,0,348,2898,1,0,0,0,350,2900,1,0,0,0,352,2902,
        1,0,0,0,354,2904,1,0,0,0,356,2906,1,0,0,0,358,369,3,2,1,0,359,361,
        5,183,0,0,360,359,1,0,0,0,360,361,1,0,0,0,361,362,1,0,0,0,362,364,
        5,1,0,0,363,365,5,183,0,0,364,363,1,0,0,0,364,365,1,0,0,0,365,366,
        1,0,0,0,366,368,3,2,1,0,367,360,1,0,0,0,368,371,1,0,0,0,369,367,
        1,0,0,0,369,370,1,0,0,0,370,373,1,0,0,0,371,369,1,0,0,0,372,374,
        5,183,0,0,373,372,1,0,0,0,373,374,1,0,0,0,374,375,1,0,0,0,375,376,
        5,0,0,1,376,1,1,0,0,0,377,379,3,120,60,0,378,377,1,0,0,0,378,379,
        1,0,0,0,379,381,1,0,0,0,380,382,5,183,0,0,381,380,1,0,0,0,381,382,
        1,0,0,0,382,383,1,0,0,0,383,388,3,4,2,0,384,386,5,183,0,0,385,384,
        1,0,0,0,385,386,1,0,0,0,386,387,1,0,0,0,387,389,5,1,0,0,388,385,
        1,0,0,0,388,389,1,0,0,0,389,3,1,0,0,0,390,413,3,138,69,0,391,413,
        3,60,30,0,392,413,3,62,31,0,393,413,3,44,22,0,394,413,3,46,23,0,
        395,413,3,52,26,0,396,413,3,54,27,0,397,413,3,76,38,0,398,413,3,
        78,39,0,399,413,3,6,3,0,400,413,3,12,6,0,401,413,3,14,7,0,402,413,
        3,30,15,0,403,413,3,34,17,0,404,413,3,32,16,0,405,413,3,126,63,0,
        406,413,3,128,64,0,407,413,3,16,8,0,408,413,3,18,9,0,409,413,3,20,
        10,0,410,413,3,26,13,0,411,413,3,28,14,0,412,390,1,0,0,0,412,391,
        1,0,0,0,412,392,1,0,0,0,412,393,1,0,0,0,412,394,1,0,0,0,412,395,
        1,0,0,0,412,396,1,0,0,0,412,397,1,0,0,0,412,398,1,0,0,0,412,399,
        1,0,0,0,412,400,1,0,0,0,412,401,1,0,0,0,412,402,1,0,0,0,412,403,
        1,0,0,0,412,404,1,0,0,0,412,405,1,0,0,0,412,406,1,0,0,0,412,407,
        1,0,0,0,412,408,1,0,0,0,412,409,1,0,0,0,412,410,1,0,0,0,412,411,
        1,0,0,0,413,5,1,0,0,0,414,415,5,66,0,0,415,416,5,183,0,0,416,418,
        3,346,173,0,417,419,3,8,4,0,418,417,1,0,0,0,418,419,1,0,0,0,419,
        420,1,0,0,0,420,421,5,183,0,0,421,422,5,87,0,0,422,423,5,183,0,0,
        423,437,3,10,5,0,424,426,5,183,0,0,425,424,1,0,0,0,425,426,1,0,0,
        0,426,427,1,0,0,0,427,429,5,2,0,0,428,430,5,183,0,0,429,428,1,0,
        0,0,429,430,1,0,0,0,430,431,1,0,0,0,431,433,3,24,12,0,432,434,5,
        183,0,0,433,432,1,0,0,0,433,434,1,0,0,0,434,435,1,0,0,0,435,436,
        5,3,0,0,436,438,1,0,0,0,437,425,1,0,0,0,437,438,1,0,0,0,438,7,1,
        0,0,0,439,441,5,183,0,0,440,439,1,0,0,0,440,441,1,0,0,0,441,442,
        1,0,0,0,442,444,5,2,0,0,443,445,5,183,0,0,444,443,1,0,0,0,444,445,
        1,0,0,0,445,463,1,0,0,0,446,457,3,346,173,0,447,449,5,183,0,0,448,
        447,1,0,0,0,448,449,1,0,0,0,449,450,1,0,0,0,450,452,5,4,0,0,451,
        453,5,183,0,0,452,451,1,0,0,0,452,453,1,0,0,0,453,454,1,0,0,0,454,
        456,3,346,173,0,455,448,1,0,0,0,456,459,1,0,0,0,457,455,1,0,0,0,
        457,458,1,0,0,0,458,461,1,0,0,0,459,457,1,0,0,0,460,462,5,183,0,
        0,461,460,1,0,0,0,461,462,1,0,0,0,462,464,1,0,0,0,463,446,1,0,0,
        0,463,464,1,0,0,0,464,465,1,0,0,0,465,466,5,3,0,0,466,9,1,0,0,0,
        467,489,3,40,20,0,468,470,5,2,0,0,469,471,5,183,0,0,470,469,1,0,
        0,0,470,471,1,0,0,0,471,472,1,0,0,0,472,474,3,138,69,0,473,475,5,
        183,0,0,474,473,1,0,0,0,474,475,1,0,0,0,475,476,1,0,0,0,476,477,
        5,3,0,0,477,489,1,0,0,0,478,489,3,336,168,0,479,489,3,332,166,0,
        480,481,3,332,166,0,481,483,5,5,0,0,482,484,5,183,0,0,483,482,1,
        0,0,0,483,484,1,0,0,0,484,485,1,0,0,0,485,486,3,346,173,0,486,489,
        1,0,0,0,487,489,3,312,156,0,488,467,1,0,0,0,488,468,1,0,0,0,488,
        478,1,0,0,0,488,479,1,0,0,0,488,480,1,0,0,0,488,487,1,0,0,0,489,
        11,1,0,0,0,490,491,5,66,0,0,491,492,5,183,0,0,492,493,3,346,173,
        0,493,494,5,183,0,0,494,495,5,87,0,0,495,496,5,183,0,0,496,498,5,
        2,0,0,497,499,5,183,0,0,498,497,1,0,0,0,498,499,1,0,0,0,499,500,
        1,0,0,0,500,511,5,168,0,0,501,503,5,183,0,0,502,501,1,0,0,0,502,
        503,1,0,0,0,503,504,1,0,0,0,504,506,5,4,0,0,505,507,5,183,0,0,506,
        505,1,0,0,0,506,507,1,0,0,0,507,508,1,0,0,0,508,510,5,168,0,0,509,
        502,1,0,0,0,510,513,1,0,0,0,511,509,1,0,0,0,511,512,1,0,0,0,512,
        514,1,0,0,0,513,511,1,0,0,0,514,515,5,3,0,0,515,516,5,183,0,0,516,
        517,5,56,0,0,517,518,5,183,0,0,518,519,5,61,0,0,519,13,1,0,0,0,520,
        521,5,66,0,0,521,522,5,183,0,0,522,524,5,2,0,0,523,525,5,183,0,0,
        524,523,1,0,0,0,524,525,1,0,0,0,525,526,1,0,0,0,526,528,3,138,69,
        0,527,529,5,183,0,0,528,527,1,0,0,0,528,529,1,0,0,0,529,530,1,0,
        0,0,530,531,5,3,0,0,531,532,5,183,0,0,532,533,5,138,0,0,533,534,
        5,183,0,0,534,548,5,168,0,0,535,537,5,183,0,0,536,535,1,0,0,0,536,
        537,1,0,0,0,537,538,1,0,0,0,538,540,5,2,0,0,539,541,5,183,0,0,540,
        539,1,0,0,0,540,541,1,0,0,0,541,542,1,0,0,0,542,544,3,24,12,0,543,
        545,5,183,0,0,544,543,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,
        547,5,3,0,0,547,549,1,0,0,0,548,536,1,0,0,0,548,549,1,0,0,0,549,
        15,1,0,0,0,550,551,5,84,0,0,551,552,5,183,0,0,552,553,5,70,0,0,553,
        554,5,183,0,0,554,568,5,168,0,0,555,557,5,183,0,0,556,555,1,0,0,
        0,556,557,1,0,0,0,557,558,1,0,0,0,558,560,5,2,0,0,559,561,5,183,
        0,0,560,559,1,0,0,0,560,561,1,0,0,0,561,562,1,0,0,0,562,564,3,24,
        12,0,563,565,5,183,0,0,564,563,1,0,0,0,564,565,1,0,0,0,565,566,1,
        0,0,0,566,567,5,3,0,0,567,569,1,0,0,0,568,556,1,0,0,0,568,569,1,
        0,0,0,569,17,1,0,0,0,570,571,5,94,0,0,571,572,5,183,0,0,572,573,
        5,70,0,0,573,574,5,183,0,0,574,575,5,168,0,0,575,19,1,0,0,0,576,
        577,5,54,0,0,577,578,5,183,0,0,578,583,5,168,0,0,579,580,5,183,0,
        0,580,581,5,51,0,0,581,582,5,183,0,0,582,584,3,346,173,0,583,579,
        1,0,0,0,583,584,1,0,0,0,584,585,1,0,0,0,585,586,5,183,0,0,586,588,
        5,2,0,0,587,589,5,183,0,0,588,587,1,0,0,0,588,589,1,0,0,0,589,590,
        1,0,0,0,590,591,5,71,0,0,591,592,5,183,0,0,592,601,3,348,174,0,593,
        595,5,183,0,0,594,593,1,0,0,0,594,595,1,0,0,0,595,596,1,0,0,0,596,
        598,5,4,0,0,597,599,5,183,0,0,598,597,1,0,0,0,598,599,1,0,0,0,599,
        600,1,0,0,0,600,602,3,24,12,0,601,594,1,0,0,0,601,602,1,0,0,0,602,
        604,1,0,0,0,603,605,5,183,0,0,604,603,1,0,0,0,604,605,1,0,0,0,605,
        606,1,0,0,0,606,607,5,3,0,0,607,21,1,0,0,0,608,622,3,348,174,0,609,
        611,5,183,0,0,610,609,1,0,0,0,610,611,1,0,0,0,611,612,1,0,0,0,612,
        614,5,6,0,0,613,615,5,183,0,0,614,613,1,0,0,0,614,615,1,0,0,0,615,
        623,1,0,0,0,616,618,5,183,0,0,617,616,1,0,0,0,618,621,1,0,0,0,619,
        617,1,0,0,0,619,620,1,0,0,0,620,623,1,0,0,0,621,619,1,0,0,0,622,
        610,1,0,0,0,622,619,1,0,0,0,623,624,1,0,0,0,624,625,3,298,149,0,
        625,628,1,0,0,0,626,628,3,348,174,0,627,608,1,0,0,0,627,626,1,0,
        0,0,628,23,1,0,0,0,629,640,3,22,11,0,630,632,5,183,0,0,631,630,1,
        0,0,0,631,632,1,0,0,0,632,633,1,0,0,0,633,635,5,4,0,0,634,636,5,
        183,0,0,635,634,1,0,0,0,635,636,1,0,0,0,636,637,1,0,0,0,637,639,
        3,22,11,0,638,631,1,0,0,0,639,642,1,0,0,0,640,638,1,0,0,0,640,641,
        1,0,0,0,641,25,1,0,0,0,642,640,1,0,0,0,643,644,5,76,0,0,644,645,
        5,183,0,0,645,646,3,346,173,0,646,27,1,0,0,0,647,648,5,147,0,0,648,
        649,5,183,0,0,649,650,3,346,173,0,650,29,1,0,0,0,651,652,5,57,0,
        0,652,653,5,183,0,0,653,655,3,348,174,0,654,656,5,183,0,0,655,654,
        1,0,0,0,655,656,1,0,0,0,656,657,1,0,0,0,657,659,5,6,0,0,658,660,
        5,183,0,0,659,658,1,0,0,0,659,660,1,0,0,0,660,661,1,0,0,0,661,662,
        3,244,122,0,662,667,1,0,0,0,663,664,5,57,0,0,664,665,5,183,0,0,665,
        667,3,312,156,0,666,651,1,0,0,0,666,663,1,0,0,0,667,31,1,0,0,0,668,
        669,5,62,0,0,669,670,5,183,0,0,670,671,5,116,0,0,671,672,5,183,0,
        0,672,673,5,136,0,0,673,674,5,183,0,0,674,675,3,346,173,0,675,676,
        5,183,0,0,676,677,5,99,0,0,677,678,5,183,0,0,678,679,5,168,0,0,679,
        33,1,0,0,0,680,681,5,68,0,0,681,682,5,183,0,0,682,683,5,105,0,0,
        683,684,5,183,0,0,684,686,3,314,157,0,685,687,5,183,0,0,686,685,
        1,0,0,0,686,687,1,0,0,0,687,688,1,0,0,0,688,690,5,2,0,0,689,691,
        5,183,0,0,690,689,1,0,0,0,690,691,1,0,0,0,691,693,1,0,0,0,692,694,
        3,36,18,0,693,692,1,0,0,0,693,694,1,0,0,0,694,696,1,0,0,0,695,697,
        5,183,0,0,696,695,1,0,0,0,696,697,1,0,0,0,697,699,1,0,0,0,698,700,
        3,38,19,0,699,698,1,0,0,0,699,700,1,0,0,0,700,711,1,0,0,0,701,703,
        5,183,0,0,702,701,1,0,0,0,702,703,1,0,0,0,703,704,1,0,0,0,704,706,
        5,4,0,0,705,707,5,183,0,0,706,705,1,0,0,0,706,707,1,0,0,0,707,708,
        1,0,0,0,708,710,3,38,19,0,709,702,1,0,0,0,710,713,1,0,0,0,711,709,
        1,0,0,0,711,712,1,0,0,0,712,715,1,0,0,0,713,711,1,0,0,0,714,716,
        5,183,0,0,715,714,1,0,0,0,715,716,1,0,0,0,716,717,1,0,0,0,717,718,
        5,3,0,0,718,719,5,183,0,0,719,720,5,51,0,0,720,721,5,183,0,0,721,
        722,3,244,122,0,722,35,1,0,0,0,723,734,3,348,174,0,724,726,5,183,
        0,0,725,724,1,0,0,0,725,726,1,0,0,0,726,727,1,0,0,0,727,729,5,4,
        0,0,728,730,5,183,0,0,729,728,1,0,0,0,729,730,1,0,0,0,730,731,1,
        0,0,0,731,733,3,348,174,0,732,725,1,0,0,0,733,736,1,0,0,0,734,732,
        1,0,0,0,734,735,1,0,0,0,735,37,1,0,0,0,736,734,1,0,0,0,737,739,3,
        348,174,0,738,740,5,183,0,0,739,738,1,0,0,0,739,740,1,0,0,0,740,
        741,1,0,0,0,741,742,5,164,0,0,742,744,5,6,0,0,743,745,5,183,0,0,
        744,743,1,0,0,0,744,745,1,0,0,0,745,746,1,0,0,0,746,747,3,298,149,
        0,747,39,1,0,0,0,748,750,5,7,0,0,749,751,5,183,0,0,750,749,1,0,0,
        0,750,751,1,0,0,0,751,752,1,0,0,0,752,763,5,168,0,0,753,755,5,183,
        0,0,754,753,1,0,0,0,754,755,1,0,0,0,755,756,1,0,0,0,756,758,5,4,
        0,0,757,759,5,183,0,0,758,757,1,0,0,0,758,759,1,0,0,0,759,760,1,
        0,0,0,760,762,5,168,0,0,761,754,1,0,0,0,762,765,1,0,0,0,763,761,
        1,0,0,0,763,764,1,0,0,0,764,766,1,0,0,0,765,763,1,0,0,0,766,782,
        5,8,0,0,767,782,5,168,0,0,768,770,5,89,0,0,769,771,5,183,0,0,770,
        769,1,0,0,0,770,771,1,0,0,0,771,772,1,0,0,0,772,774,5,2,0,0,773,
        775,5,183,0,0,774,773,1,0,0,0,774,775,1,0,0,0,775,776,1,0,0,0,776,
        778,5,168,0,0,777,779,5,183,0,0,778,777,1,0,0,0,778,779,1,0,0,0,
        779,780,1,0,0,0,780,782,5,3,0,0,781,748,1,0,0,0,781,767,1,0,0,0,
        781,768,1,0,0,0,782,41,1,0,0,0,783,784,5,95,0,0,784,785,5,183,0,
        0,785,786,5,113,0,0,786,787,5,183,0,0,787,788,5,82,0,0,788,43,1,
        0,0,0,789,790,5,68,0,0,790,791,5,183,0,0,791,792,5,112,0,0,792,793,
        5,183,0,0,793,794,5,136,0,0,794,798,5,183,0,0,795,796,3,42,21,0,
        796,797,5,183,0,0,797,799,1,0,0,0,798,795,1,0,0,0,798,799,1,0,0,
        0,799,800,1,0,0,0,800,828,3,346,173,0,801,803,5,183,0,0,802,801,
        1,0,0,0,802,803,1,0,0,0,803,804,1,0,0,0,804,806,5,2,0,0,805,807,
        5,183,0,0,806,805,1,0,0,0,806,807,1,0,0,0,807,808,1,0,0,0,808,810,
        3,100,50,0,809,811,5,183,0,0,810,809,1,0,0,0,810,811,1,0,0,0,811,
        817,1,0,0,0,812,814,5,4,0,0,813,815,5,183,0,0,814,813,1,0,0,0,814,
        815,1,0,0,0,815,816,1,0,0,0,816,818,3,104,52,0,817,812,1,0,0,0,817,
        818,1,0,0,0,818,820,1,0,0,0,819,821,5,183,0,0,820,819,1,0,0,0,820,
        821,1,0,0,0,821,822,1,0,0,0,822,823,5,3,0,0,823,829,1,0,0,0,824,
        825,5,183,0,0,825,826,5,51,0,0,826,827,5,183,0,0,827,829,3,138,69,
        0,828,802,1,0,0,0,828,824,1,0,0,0,829,45,1,0,0,0,830,831,5,68,0,
        0,831,832,5,183,0,0,832,833,5,125,0,0,833,834,5,183,0,0,834,837,
        5,136,0,0,835,836,5,183,0,0,836,838,5,91,0,0,837,835,1,0,0,0,837,
        838,1,0,0,0,838,841,1,0,0,0,839,840,5,183,0,0,840,842,3,42,21,0,
        841,839,1,0,0,0,841,842,1,0,0,0,842,843,1,0,0,0,843,844,5,183,0,
        0,844,846,3,346,173,0,845,847,5,183,0,0,846,845,1,0,0,0,846,847,
        1,0,0,0,847,848,1,0,0,0,848,850,5,2,0,0,849,851,5,183,0,0,850,849,
        1,0,0,0,850,851,1,0,0,0,851,852,1,0,0,0,852,854,3,48,24,0,853,855,
        5,183,0,0,854,853,1,0,0,0,854,855,1,0,0,0,855,882,1,0,0,0,856,858,
        5,4,0,0,857,859,5,183,0,0,858,857,1,0,0,0,858,859,1,0,0,0,859,860,
        1,0,0,0,860,862,3,100,50,0,861,863,5,183,0,0,862,861,1,0,0,0,862,
        863,1,0,0,0,863,865,1,0,0,0,864,856,1,0,0,0,864,865,1,0,0,0,865,
        874,1,0,0,0,866,868,5,4,0,0,867,869,5,183,0,0,868,867,1,0,0,0,868,
        869,1,0,0,0,869,870,1,0,0,0,870,872,3,348,174,0,871,873,5,183,0,
        0,872,871,1,0,0,0,872,873,1,0,0,0,873,875,1,0,0,0,874,866,1,0,0,
        0,874,875,1,0,0,0,875,876,1,0,0,0,876,883,5,3,0,0,877,878,5,3,0,
        0,878,879,5,183,0,0,879,880,5,51,0,0,880,881,5,183,0,0,881,883,3,
        138,69,0,882,864,1,0,0,0,882,877,1,0,0,0,883,899,1,0,0,0,884,885,
        5,183,0,0,885,887,5,150,0,0,886,888,5,183,0,0,887,886,1,0,0,0,887,
        888,1,0,0,0,888,889,1,0,0,0,889,891,5,2,0,0,890,892,5,183,0,0,891,
        890,1,0,0,0,891,892,1,0,0,0,892,893,1,0,0,0,893,895,3,24,12,0,894,
        896,5,183,0,0,895,894,1,0,0,0,895,896,1,0,0,0,896,897,1,0,0,0,897,
        898,5,3,0,0,898,900,1,0,0,0,899,884,1,0,0,0,899,900,1,0,0,0,900,
        47,1,0,0,0,901,912,3,50,25,0,902,904,5,183,0,0,903,902,1,0,0,0,903,
        904,1,0,0,0,904,905,1,0,0,0,905,907,5,4,0,0,906,908,5,183,0,0,907,
        906,1,0,0,0,907,908,1,0,0,0,908,909,1,0,0,0,909,911,3,50,25,0,910,
        903,1,0,0,0,911,914,1,0,0,0,912,910,1,0,0,0,912,913,1,0,0,0,913,
        49,1,0,0,0,914,912,1,0,0,0,915,916,5,87,0,0,916,917,5,183,0,0,917,
        918,3,346,173,0,918,919,5,183,0,0,919,920,5,138,0,0,920,921,5,183,
        0,0,921,922,3,346,173,0,922,51,1,0,0,0,923,924,5,68,0,0,924,925,
        5,183,0,0,925,926,5,130,0,0,926,930,5,183,0,0,927,928,3,42,21,0,
        928,929,5,183,0,0,929,931,1,0,0,0,930,927,1,0,0,0,930,931,1,0,0,
        0,931,932,1,0,0,0,932,937,3,346,173,0,933,934,5,183,0,0,934,936,
        3,56,28,0,935,933,1,0,0,0,936,939,1,0,0,0,937,935,1,0,0,0,937,938,
        1,0,0,0,938,53,1,0,0,0,939,937,1,0,0,0,940,941,5,68,0,0,941,942,
        5,183,0,0,942,943,5,142,0,0,943,944,5,183,0,0,944,945,3,346,173,
        0,945,946,5,183,0,0,946,947,5,51,0,0,947,948,5,183,0,0,948,950,3,
        114,57,0,949,951,5,183,0,0,950,949,1,0,0,0,950,951,1,0,0,0,951,55,
        1,0,0,0,952,958,3,64,32,0,953,958,3,66,33,0,954,958,3,68,34,0,955,
        958,3,70,35,0,956,958,3,72,36,0,957,952,1,0,0,0,957,953,1,0,0,0,
        957,954,1,0,0,0,957,955,1,0,0,0,957,956,1,0,0,0,958,57,1,0,0,0,959,
        960,5,183,0,0,960,961,5,150,0,0,961,962,5,183,0,0,962,963,5,157,
        0,0,963,964,5,183,0,0,964,965,5,168,0,0,965,59,1,0,0,0,966,967,5,
        68,0,0,967,968,5,183,0,0,968,969,5,156,0,0,969,973,5,183,0,0,970,
        971,3,42,21,0,971,972,5,183,0,0,972,974,1,0,0,0,973,970,1,0,0,0,
        973,974,1,0,0,0,974,975,1,0,0,0,975,977,3,332,166,0,976,978,3,58,
        29,0,977,976,1,0,0,0,977,978,1,0,0,0,978,61,1,0,0,0,979,980,5,68,
        0,0,980,981,5,183,0,0,981,982,5,158,0,0,982,986,5,183,0,0,983,984,
        3,42,21,0,984,985,5,183,0,0,985,987,1,0,0,0,986,983,1,0,0,0,986,
        987,1,0,0,0,987,988,1,0,0,0,988,989,3,332,166,0,989,63,1,0,0,0,990,
        991,5,97,0,0,991,994,5,183,0,0,992,993,5,56,0,0,993,995,5,183,0,
        0,994,992,1,0,0,0,994,995,1,0,0,0,995,997,1,0,0,0,996,998,5,166,
        0,0,997,996,1,0,0,0,997,998,1,0,0,0,998,999,1,0,0,0,999,1000,3,342,
        171,0,1000,65,1,0,0,0,1001,1002,5,111,0,0,1002,1003,5,183,0,0,1003,
        1011,5,109,0,0,1004,1005,5,109,0,0,1005,1007,5,183,0,0,1006,1008,
        5,166,0,0,1007,1006,1,0,0,0,1007,1008,1,0,0,0,1008,1009,1,0,0,0,
        1009,1011,3,342,171,0,1010,1001,1,0,0,0,1010,1004,1,0,0,0,1011,67,
        1,0,0,0,1012,1013,5,111,0,0,1013,1014,5,183,0,0,1014,1022,5,107,
        0,0,1015,1016,5,107,0,0,1016,1018,5,183,0,0,1017,1019,5,166,0,0,
        1018,1017,1,0,0,0,1018,1019,1,0,0,0,1019,1020,1,0,0,0,1020,1022,
        3,342,171,0,1021,1012,1,0,0,0,1021,1015,1,0,0,0,1022,69,1,0,0,0,
        1023,1024,5,133,0,0,1024,1027,5,183,0,0,1025,1026,5,150,0,0,1026,
        1028,5,183,0,0,1027,1025,1,0,0,0,1027,1028,1,0,0,0,1028,1030,1,0,
        0,0,1029,1031,5,166,0,0,1030,1029,1,0,0,0,1030,1031,1,0,0,0,1031,
        1032,1,0,0,0,1032,1033,3,342,171,0,1033,71,1,0,0,0,1034,1035,5,111,
        0,0,1035,1037,5,183,0,0,1036,1034,1,0,0,0,1036,1037,1,0,0,0,1037,
        1038,1,0,0,0,1038,1039,5,69,0,0,1039,73,1,0,0,0,1040,1041,5,95,0,
        0,1041,1042,5,183,0,0,1042,1043,5,82,0,0,1043,75,1,0,0,0,1044,1045,
        5,78,0,0,1045,1046,5,183,0,0,1046,1047,7,0,0,0,1047,1051,5,183,0,
        0,1048,1049,3,74,37,0,1049,1050,5,183,0,0,1050,1052,1,0,0,0,1051,
        1048,1,0,0,0,1051,1052,1,0,0,0,1052,1053,1,0,0,0,1053,1054,3,346,
        173,0,1054,77,1,0,0,0,1055,1056,5,49,0,0,1056,1057,5,183,0,0,1057,
        1058,5,136,0,0,1058,1059,5,183,0,0,1059,1060,3,346,173,0,1060,1061,
        5,183,0,0,1061,1062,3,80,40,0,1062,79,1,0,0,0,1063,1070,3,82,41,
        0,1064,1070,3,86,43,0,1065,1070,3,88,44,0,1066,1070,3,90,45,0,1067,
        1070,3,92,46,0,1068,1070,3,94,47,0,1069,1063,1,0,0,0,1069,1064,1,
        0,0,0,1069,1065,1,0,0,0,1069,1066,1,0,0,0,1069,1067,1,0,0,0,1069,
        1068,1,0,0,0,1070,81,1,0,0,0,1071,1072,5,47,0,0,1072,1076,5,183,
        0,0,1073,1074,3,42,21,0,1074,1075,5,183,0,0,1075,1077,1,0,0,0,1076,
        1073,1,0,0,0,1076,1077,1,0,0,0,1077,1078,1,0,0,0,1078,1079,3,340,
        170,0,1079,1080,5,183,0,0,1080,1083,3,114,57,0,1081,1082,5,183,0,
        0,1082,1084,3,84,42,0,1083,1081,1,0,0,0,1083,1084,1,0,0,0,1084,83,
        1,0,0,0,1085,1086,5,72,0,0,1086,1087,5,183,0,0,1087,1088,3,244,122,
        0,1088,85,1,0,0,0,1089,1090,5,78,0,0,1090,1094,5,183,0,0,1091,1092,
        3,74,37,0,1092,1093,5,183,0,0,1093,1095,1,0,0,0,1094,1091,1,0,0,
        0,1094,1095,1,0,0,0,1095,1096,1,0,0,0,1096,1097,3,340,170,0,1097,
        87,1,0,0,0,1098,1099,5,126,0,0,1099,1100,5,183,0,0,1100,1101,5,138,
        0,0,1101,1102,5,183,0,0,1102,1103,3,346,173,0,1103,89,1,0,0,0,1104,
        1105,5,126,0,0,1105,1106,5,183,0,0,1106,1107,3,340,170,0,1107,1108,
        5,183,0,0,1108,1109,5,138,0,0,1109,1110,5,183,0,0,1110,1111,3,340,
        170,0,1111,91,1,0,0,0,1112,1113,5,47,0,0,1113,1117,5,183,0,0,1114,
        1115,3,42,21,0,1115,1116,5,183,0,0,1116,1118,1,0,0,0,1117,1114,1,
        0,0,0,1117,1118,1,0,0,0,1118,1119,1,0,0,0,1119,1120,3,50,25,0,1120,
        93,1,0,0,0,1121,1122,5,78,0,0,1122,1126,5,183,0,0,1123,1124,3,74,
        37,0,1124,1125,5,183,0,0,1125,1127,1,0,0,0,1126,1123,1,0,0,0,1126,
        1127,1,0,0,0,1127,1128,1,0,0,0,1128,1129,3,50,25,0,1129,95,1,0,0,
        0,1130,1141,3,98,49,0,1131,1133,5,183,0,0,1132,1131,1,0,0,0,1132,
        1133,1,0,0,0,1133,1134,1,0,0,0,1134,1136,5,4,0,0,1135,1137,5,183,
        0,0,1136,1135,1,0,0,0,1136,1137,1,0,0,0,1137,1138,1,0,0,0,1138,1140,
        3,98,49,0,1139,1132,1,0,0,0,1140,1143,1,0,0,0,1141,1139,1,0,0,0,
        1141,1142,1,0,0,0,1142,97,1,0,0,0,1143,1141,1,0,0,0,1144,1145,3,
        340,170,0,1145,1146,5,183,0,0,1146,1147,3,114,57,0,1147,99,1,0,0,
        0,1148,1159,3,102,51,0,1149,1151,5,183,0,0,1150,1149,1,0,0,0,1150,
        1151,1,0,0,0,1151,1152,1,0,0,0,1152,1154,5,4,0,0,1153,1155,5,183,
        0,0,1154,1153,1,0,0,0,1154,1155,1,0,0,0,1155,1156,1,0,0,0,1156,1158,
        3,102,51,0,1157,1150,1,0,0,0,1158,1161,1,0,0,0,1159,1157,1,0,0,0,
        1159,1160,1,0,0,0,1160,101,1,0,0,0,1161,1159,1,0,0,0,1162,1165,3,
        98,49,0,1163,1164,5,183,0,0,1164,1166,3,84,42,0,1165,1163,1,0,0,
        0,1165,1166,1,0,0,0,1166,1171,1,0,0,0,1167,1168,5,183,0,0,1168,1169,
        5,121,0,0,1169,1170,5,183,0,0,1170,1172,5,101,0,0,1171,1167,1,0,
        0,0,1171,1172,1,0,0,0,1172,103,1,0,0,0,1173,1174,5,121,0,0,1174,
        1175,5,183,0,0,1175,1177,5,101,0,0,1176,1178,5,183,0,0,1177,1176,
        1,0,0,0,1177,1178,1,0,0,0,1178,1179,1,0,0,0,1179,1181,5,2,0,0,1180,
        1182,5,183,0,0,1181,1180,1,0,0,0,1181,1182,1,0,0,0,1182,1183,1,0,
        0,0,1183,1185,3,340,170,0,1184,1186,5,183,0,0,1185,1184,1,0,0,0,
        1185,1186,1,0,0,0,1186,1187,1,0,0,0,1187,1188,5,3,0,0,1188,105,1,
        0,0,0,1189,1191,5,143,0,0,1190,1192,5,183,0,0,1191,1190,1,0,0,0,
        1191,1192,1,0,0,0,1192,1193,1,0,0,0,1193,1195,5,2,0,0,1194,1196,
        5,183,0,0,1195,1194,1,0,0,0,1195,1196,1,0,0,0,1196,1197,1,0,0,0,
        1197,1199,3,96,48,0,1198,1200,5,183,0,0,1199,1198,1,0,0,0,1199,1200,
        1,0,0,0,1200,1201,1,0,0,0,1201,1202,5,3,0,0,1202,107,1,0,0,0,1203,
        1205,5,135,0,0,1204,1206,5,183,0,0,1205,1204,1,0,0,0,1205,1206,1,
        0,0,0,1206,1207,1,0,0,0,1207,1209,5,2,0,0,1208,1210,5,183,0,0,1209,
        1208,1,0,0,0,1209,1210,1,0,0,0,1210,1211,1,0,0,0,1211,1213,3,96,
        48,0,1212,1214,5,183,0,0,1213,1212,1,0,0,0,1213,1214,1,0,0,0,1214,
        1215,1,0,0,0,1215,1216,5,3,0,0,1216,109,1,0,0,0,1217,1219,5,159,
        0,0,1218,1220,5,183,0,0,1219,1218,1,0,0,0,1219,1220,1,0,0,0,1220,
        1221,1,0,0,0,1221,1223,5,2,0,0,1222,1224,5,183,0,0,1223,1222,1,0,
        0,0,1223,1224,1,0,0,0,1224,1225,1,0,0,0,1225,1227,3,114,57,0,1226,
        1228,5,183,0,0,1227,1226,1,0,0,0,1227,1228,1,0,0,0,1228,1229,1,0,
        0,0,1229,1231,5,4,0,0,1230,1232,5,183,0,0,1231,1230,1,0,0,0,1231,
        1232,1,0,0,0,1232,1233,1,0,0,0,1233,1235,3,114,57,0,1234,1236,5,
        183,0,0,1235,1234,1,0,0,0,1235,1236,1,0,0,0,1236,1237,1,0,0,0,1237,
        1238,5,3,0,0,1238,111,1,0,0,0,1239,1241,5,160,0,0,1240,1242,5,183,
        0,0,1241,1240,1,0,0,0,1241,1242,1,0,0,0,1242,1243,1,0,0,0,1243,1245,
        5,2,0,0,1244,1246,5,183,0,0,1245,1244,1,0,0,0,1245,1246,1,0,0,0,
        1246,1247,1,0,0,0,1247,1249,3,342,171,0,1248,1250,5,183,0,0,1249,
        1248,1,0,0,0,1249,1250,1,0,0,0,1250,1251,1,0,0,0,1251,1253,5,4,0,
        0,1252,1254,5,183,0,0,1253,1252,1,0,0,0,1253,1254,1,0,0,0,1254,1255,
        1,0,0,0,1255,1257,3,342,171,0,1256,1258,5,183,0,0,1257,1256,1,0,
        0,0,1257,1258,1,0,0,0,1258,1259,1,0,0,0,1259,1260,5,3,0,0,1260,113,
        1,0,0,0,1261,1262,6,57,-1,0,1262,1268,3,348,174,0,1263,1268,3,106,
        53,0,1264,1268,3,108,54,0,1265,1268,3,110,55,0,1266,1268,3,112,56,
        0,1267,1261,1,0,0,0,1267,1263,1,0,0,0,1267,1264,1,0,0,0,1267,1265,
        1,0,0,0,1267,1266,1,0,0,0,1268,1273,1,0,0,0,1269,1270,10,5,0,0,1270,
        1272,3,116,58,0,1271,1269,1,0,0,0,1272,1275,1,0,0,0,1273,1271,1,
        0,0,0,1273,1274,1,0,0,0,1274,115,1,0,0,0,1275,1273,1,0,0,0,1276,
        1280,3,118,59,0,1277,1279,3,118,59,0,1278,1277,1,0,0,0,1279,1282,
        1,0,0,0,1280,1278,1,0,0,0,1280,1281,1,0,0,0,1281,117,1,0,0,0,1282,
        1280,1,0,0,0,1283,1285,5,7,0,0,1284,1286,3,342,171,0,1285,1284,1,
        0,0,0,1285,1286,1,0,0,0,1286,1287,1,0,0,0,1287,1288,5,8,0,0,1288,
        119,1,0,0,0,1289,1292,3,122,61,0,1290,1292,3,124,62,0,1291,1289,
        1,0,0,0,1291,1290,1,0,0,0,1292,121,1,0,0,0,1293,1296,5,83,0,0,1294,
        1295,5,183,0,0,1295,1297,5,104,0,0,1296,1294,1,0,0,0,1296,1297,1,
        0,0,0,1297,123,1,0,0,0,1298,1299,5,122,0,0,1299,125,1,0,0,0,1300,
        1301,5,55,0,0,1301,1302,5,183,0,0,1302,1314,5,140,0,0,1303,1304,
        5,55,0,0,1304,1305,5,183,0,0,1305,1306,5,140,0,0,1306,1307,5,183,
        0,0,1307,1308,5,124,0,0,1308,1309,5,183,0,0,1309,1314,5,117,0,0,
        1310,1314,5,63,0,0,1311,1314,5,128,0,0,1312,1314,5,60,0,0,1313,1300,
        1,0,0,0,1313,1303,1,0,0,0,1313,1310,1,0,0,0,1313,1311,1,0,0,0,1313,
        1312,1,0,0,0,1314,127,1,0,0,0,1315,1320,3,130,65,0,1316,1320,3,132,
        66,0,1317,1320,3,134,67,0,1318,1320,3,136,68,0,1319,1315,1,0,0,0,
        1319,1316,1,0,0,0,1319,1317,1,0,0,0,1319,1318,1,0,0,0,1320,129,1,
        0,0,0,1321,1322,5,103,0,0,1322,1325,5,183,0,0,1323,1324,5,85,0,0,
        1324,1326,5,183,0,0,1325,1323,1,0,0,0,1325,1326,1,0,0,0,1326,1329,
        1,0,0,0,1327,1330,5,168,0,0,1328,1330,3,332,166,0,1329,1327,1,0,
        0,0,1329,1328,1,0,0,0,1330,131,1,0,0,0,1331,1332,5,88,0,0,1332,1334,
        5,183,0,0,1333,1331,1,0,0,0,1333,1334,1,0,0,0,1334,1335,1,0,0,0,
        1335,1336,5,98,0,0,1336,1337,5,183,0,0,1337,1342,3,332,166,0,1338,
        1339,5,183,0,0,1339,1340,5,87,0,0,1340,1341,5,183,0,0,1341,1343,
        5,168,0,0,1342,1338,1,0,0,0,1342,1343,1,0,0,0,1343,133,1,0,0,0,1344,
        1345,5,145,0,0,1345,1346,5,183,0,0,1346,1347,3,332,166,0,1347,135,
        1,0,0,0,1348,1349,5,146,0,0,1349,1350,5,183,0,0,1350,1351,3,332,
        166,0,1351,137,1,0,0,0,1352,1353,3,140,70,0,1353,139,1,0,0,0,1354,
        1361,3,144,72,0,1355,1357,5,183,0,0,1356,1355,1,0,0,0,1356,1357,
        1,0,0,0,1357,1358,1,0,0,0,1358,1360,3,142,71,0,1359,1356,1,0,0,0,
        1360,1363,1,0,0,0,1361,1359,1,0,0,0,1361,1362,1,0,0,0,1362,1376,
        1,0,0,0,1363,1361,1,0,0,0,1364,1366,3,186,93,0,1365,1367,5,183,0,
        0,1366,1365,1,0,0,0,1366,1367,1,0,0,0,1367,1369,1,0,0,0,1368,1364,
        1,0,0,0,1369,1370,1,0,0,0,1370,1368,1,0,0,0,1370,1371,1,0,0,0,1371,
        1372,1,0,0,0,1372,1373,3,144,72,0,1373,1374,6,70,-1,0,1374,1376,
        1,0,0,0,1375,1354,1,0,0,0,1375,1368,1,0,0,0,1376,141,1,0,0,0,1377,
        1378,5,143,0,0,1378,1379,5,183,0,0,1379,1381,5,48,0,0,1380,1382,
        5,183,0,0,1381,1380,1,0,0,0,1381,1382,1,0,0,0,1382,1383,1,0,0,0,
        1383,1390,3,144,72,0,1384,1386,5,143,0,0,1385,1387,5,183,0,0,1386,
        1385,1,0,0,0,1386,1387,1,0,0,0,1387,1388,1,0,0,0,1388,1390,3,144,
        72,0,1389,1377,1,0,0,0,1389,1384,1,0,0,0,1390,143,1,0,0,0,1391,1394,
        3,146,73,0,1392,1394,3,148,74,0,1393,1391,1,0,0,0,1393,1392,1,0,
        0,0,1394,145,1,0,0,0,1395,1397,3,154,77,0,1396,1398,5,183,0,0,1397,
        1396,1,0,0,0,1397,1398,1,0,0,0,1398,1400,1,0,0,0,1399,1395,1,0,0,
        0,1400,1403,1,0,0,0,1401,1399,1,0,0,0,1401,1402,1,0,0,0,1402,1404,
        1,0,0,0,1403,1401,1,0,0,0,1404,1431,3,186,93,0,1405,1407,3,154,77,
        0,1406,1408,5,183,0,0,1407,1406,1,0,0,0,1407,1408,1,0,0,0,1408,1410,
        1,0,0,0,1409,1405,1,0,0,0,1410,1413,1,0,0,0,1411,1409,1,0,0,0,1411,
        1412,1,0,0,0,1412,1414,1,0,0,0,1413,1411,1,0,0,0,1414,1421,3,152,
        76,0,1415,1417,5,183,0,0,1416,1415,1,0,0,0,1416,1417,1,0,0,0,1417,
        1418,1,0,0,0,1418,1420,3,152,76,0,1419,1416,1,0,0,0,1420,1423,1,
        0,0,0,1421,1419,1,0,0,0,1421,1422,1,0,0,0,1422,1428,1,0,0,0,1423,
        1421,1,0,0,0,1424,1426,5,183,0,0,1425,1424,1,0,0,0,1425,1426,1,0,
        0,0,1426,1427,1,0,0,0,1427,1429,3,186,93,0,1428,1425,1,0,0,0,1428,
        1429,1,0,0,0,1429,1431,1,0,0,0,1430,1401,1,0,0,0,1430,1411,1,0,0,
        0,1431,147,1,0,0,0,1432,1434,3,150,75,0,1433,1435,5,183,0,0,1434,
        1433,1,0,0,0,1434,1435,1,0,0,0,1435,1437,1,0,0,0,1436,1432,1,0,0,
        0,1437,1438,1,0,0,0,1438,1436,1,0,0,0,1438,1439,1,0,0,0,1439,1440,
        1,0,0,0,1440,1441,3,146,73,0,1441,149,1,0,0,0,1442,1444,3,154,77,
        0,1443,1445,5,183,0,0,1444,1443,1,0,0,0,1444,1445,1,0,0,0,1445,1447,
        1,0,0,0,1446,1442,1,0,0,0,1447,1450,1,0,0,0,1448,1446,1,0,0,0,1448,
        1449,1,0,0,0,1449,1457,1,0,0,0,1450,1448,1,0,0,0,1451,1453,3,152,
        76,0,1452,1454,5,183,0,0,1453,1452,1,0,0,0,1453,1454,1,0,0,0,1454,
        1456,1,0,0,0,1455,1451,1,0,0,0,1456,1459,1,0,0,0,1457,1455,1,0,0,
        0,1457,1458,1,0,0,0,1458,1460,1,0,0,0,1459,1457,1,0,0,0,1460,1461,
        3,184,92,0,1461,151,1,0,0,0,1462,1467,3,172,86,0,1463,1467,3,174,
        87,0,1464,1467,3,178,89,0,1465,1467,3,182,91,0,1466,1462,1,0,0,0,
        1466,1463,1,0,0,0,1466,1464,1,0,0,0,1466,1465,1,0,0,0,1467,153,1,
        0,0,0,1468,1473,3,164,82,0,1469,1473,3,170,85,0,1470,1473,3,162,
        81,0,1471,1473,3,156,78,0,1472,1468,1,0,0,0,1472,1469,1,0,0,0,1472,
        1470,1,0,0,0,1472,1471,1,0,0,0,1473,155,1,0,0,0,1474,1492,5,103,
        0,0,1475,1476,5,183,0,0,1476,1477,5,150,0,0,1477,1478,5,183,0,0,
        1478,1480,5,92,0,0,1479,1481,5,183,0,0,1480,1479,1,0,0,0,1480,1481,
        1,0,0,0,1481,1482,1,0,0,0,1482,1484,5,2,0,0,1483,1485,5,183,0,0,
        1484,1483,1,0,0,0,1484,1485,1,0,0,0,1485,1486,1,0,0,0,1486,1488,
        3,96,48,0,1487,1489,5,183,0,0,1488,1487,1,0,0,0,1488,1489,1,0,0,
        0,1489,1490,1,0,0,0,1490,1491,5,3,0,0,1491,1493,1,0,0,0,1492,1475,
        1,0,0,0,1492,1493,1,0,0,0,1493,1494,1,0,0,0,1494,1495,5,183,0,0,
        1495,1496,5,87,0,0,1496,1497,5,183,0,0,1497,1511,3,10,5,0,1498,1500,
        5,183,0,0,1499,1498,1,0,0,0,1499,1500,1,0,0,0,1500,1501,1,0,0,0,
        1501,1503,5,2,0,0,1502,1504,5,183,0,0,1503,1502,1,0,0,0,1503,1504,
        1,0,0,0,1504,1505,1,0,0,0,1505,1507,3,24,12,0,1506,1508,5,183,0,
        0,1507,1506,1,0,0,0,1507,1508,1,0,0,0,1508,1509,1,0,0,0,1509,1510,
        5,3,0,0,1510,1512,1,0,0,0,1511,1499,1,0,0,0,1511,1512,1,0,0,0,1512,
        1517,1,0,0,0,1513,1515,5,183,0,0,1514,1513,1,0,0,0,1514,1515,1,0,
        0,0,1515,1516,1,0,0,0,1516,1518,3,202,101,0,1517,1514,1,0,0,0,1517,
        1518,1,0,0,0,1518,157,1,0,0,0,1519,1520,3,332,166,0,1520,1521,5,
        183,0,0,1521,1522,5,51,0,0,1522,1523,5,183,0,0,1523,1525,1,0,0,0,
        1524,1519,1,0,0,0,1524,1525,1,0,0,0,1525,1526,1,0,0,0,1526,1527,
        3,332,166,0,1527,159,1,0,0,0,1528,1539,3,158,79,0,1529,1531,5,183,
        0,0,1530,1529,1,0,0,0,1530,1531,1,0,0,0,1531,1532,1,0,0,0,1532,1534,
        5,4,0,0,1533,1535,5,183,0,0,1534,1533,1,0,0,0,1534,1535,1,0,0,0,
        1535,1536,1,0,0,0,1536,1538,3,158,79,0,1537,1530,1,0,0,0,1538,1541,
        1,0,0,0,1539,1537,1,0,0,0,1539,1540,1,0,0,0,1540,161,1,0,0,0,1541,
        1539,1,0,0,0,1542,1543,5,57,0,0,1543,1544,5,183,0,0,1544,1549,3,
        312,156,0,1545,1547,5,183,0,0,1546,1545,1,0,0,0,1546,1547,1,0,0,
        0,1547,1548,1,0,0,0,1548,1550,3,202,101,0,1549,1546,1,0,0,0,1549,
        1550,1,0,0,0,1550,1557,1,0,0,0,1551,1553,5,183,0,0,1552,1551,1,0,
        0,0,1552,1553,1,0,0,0,1553,1554,1,0,0,0,1554,1555,5,155,0,0,1555,
        1556,5,183,0,0,1556,1558,3,160,80,0,1557,1552,1,0,0,0,1557,1558,
        1,0,0,0,1558,163,1,0,0,0,1559,1560,5,118,0,0,1560,1562,5,183,0,0,
        1561,1559,1,0,0,0,1561,1562,1,0,0,0,1562,1563,1,0,0,0,1563,1565,
        5,106,0,0,1564,1566,5,183,0,0,1565,1564,1,0,0,0,1565,1566,1,0,0,
        0,1566,1567,1,0,0,0,1567,1570,3,204,102,0,1568,1569,5,183,0,0,1569,
        1571,3,202,101,0,1570,1568,1,0,0,0,1570,1571,1,0,0,0,1571,1574,1,
        0,0,0,1572,1573,5,183,0,0,1573,1575,3,166,83,0,1574,1572,1,0,0,0,
        1574,1575,1,0,0,0,1575,165,1,0,0,0,1576,1577,5,93,0,0,1577,1578,
        5,183,0,0,1578,1579,3,168,84,0,1579,167,1,0,0,0,1580,1581,6,84,-1,
        0,1581,1583,5,2,0,0,1582,1584,5,183,0,0,1583,1582,1,0,0,0,1583,1584,
        1,0,0,0,1584,1585,1,0,0,0,1585,1587,3,168,84,0,1586,1588,5,183,0,
        0,1587,1586,1,0,0,0,1587,1588,1,0,0,0,1588,1589,1,0,0,0,1589,1590,
        5,3,0,0,1590,1593,1,0,0,0,1591,1593,3,346,173,0,1592,1580,1,0,0,
        0,1592,1591,1,0,0,0,1593,1610,1,0,0,0,1594,1595,10,4,0,0,1595,1596,
        5,183,0,0,1596,1597,5,100,0,0,1597,1598,5,183,0,0,1598,1609,3,168,
        84,5,1599,1604,10,3,0,0,1600,1601,5,183,0,0,1601,1602,5,110,0,0,
        1602,1603,5,183,0,0,1603,1605,3,346,173,0,1604,1600,1,0,0,0,1605,
        1606,1,0,0,0,1606,1604,1,0,0,0,1606,1607,1,0,0,0,1607,1609,1,0,0,
        0,1608,1594,1,0,0,0,1608,1599,1,0,0,0,1609,1612,1,0,0,0,1610,1608,
        1,0,0,0,1610,1611,1,0,0,0,1611,169,1,0,0,0,1612,1610,1,0,0,0,1613,
        1615,5,144,0,0,1614,1616,5,183,0,0,1615,1614,1,0,0,0,1615,1616,1,
        0,0,0,1616,1617,1,0,0,0,1617,1618,3,244,122,0,1618,1619,5,183,0,
        0,1619,1620,5,51,0,0,1620,1621,5,183,0,0,1621,1622,3,332,166,0,1622,
        171,1,0,0,0,1623,1625,5,68,0,0,1624,1626,5,183,0,0,1625,1624,1,0,
        0,0,1625,1626,1,0,0,0,1626,1627,1,0,0,0,1627,1628,3,204,102,0,1628,
        173,1,0,0,0,1629,1631,5,108,0,0,1630,1632,5,183,0,0,1631,1630,1,
        0,0,0,1631,1632,1,0,0,0,1632,1633,1,0,0,0,1633,1638,3,204,102,0,
        1634,1635,5,183,0,0,1635,1637,3,176,88,0,1636,1634,1,0,0,0,1637,
        1640,1,0,0,0,1638,1636,1,0,0,0,1638,1639,1,0,0,0,1639,175,1,0,0,
        0,1640,1638,1,0,0,0,1641,1642,5,116,0,0,1642,1643,5,183,0,0,1643,
        1644,5,106,0,0,1644,1645,5,183,0,0,1645,1652,3,178,89,0,1646,1647,
        5,116,0,0,1647,1648,5,183,0,0,1648,1649,5,68,0,0,1649,1650,5,183,
        0,0,1650,1652,3,178,89,0,1651,1641,1,0,0,0,1651,1646,1,0,0,0,1652,
        177,1,0,0,0,1653,1655,5,131,0,0,1654,1656,5,183,0,0,1655,1654,1,
        0,0,0,1655,1656,1,0,0,0,1656,1657,1,0,0,0,1657,1668,3,180,90,0,1658,
        1660,5,183,0,0,1659,1658,1,0,0,0,1659,1660,1,0,0,0,1660,1661,1,0,
        0,0,1661,1663,5,4,0,0,1662,1664,5,183,0,0,1663,1662,1,0,0,0,1663,
        1664,1,0,0,0,1664,1665,1,0,0,0,1665,1667,3,180,90,0,1666,1659,1,
        0,0,0,1667,1670,1,0,0,0,1668,1666,1,0,0,0,1668,1669,1,0,0,0,1669,
        1686,1,0,0,0,1670,1668,1,0,0,0,1671,1673,5,131,0,0,1672,1674,5,183,
        0,0,1673,1672,1,0,0,0,1673,1674,1,0,0,0,1674,1675,1,0,0,0,1675,1677,
        3,290,145,0,1676,1678,5,183,0,0,1677,1676,1,0,0,0,1677,1678,1,0,
        0,0,1678,1679,1,0,0,0,1679,1681,5,6,0,0,1680,1682,5,183,0,0,1681,
        1680,1,0,0,0,1681,1682,1,0,0,0,1682,1683,1,0,0,0,1683,1684,3,220,
        110,0,1684,1686,1,0,0,0,1685,1653,1,0,0,0,1685,1671,1,0,0,0,1686,
        179,1,0,0,0,1687,1689,3,338,169,0,1688,1690,5,183,0,0,1689,1688,
        1,0,0,0,1689,1690,1,0,0,0,1690,1691,1,0,0,0,1691,1693,5,6,0,0,1692,
        1694,5,183,0,0,1693,1692,1,0,0,0,1693,1694,1,0,0,0,1694,1695,1,0,
        0,0,1695,1696,3,244,122,0,1696,181,1,0,0,0,1697,1698,5,76,0,0,1698,
        1700,5,183,0,0,1699,1697,1,0,0,0,1699,1700,1,0,0,0,1700,1701,1,0,
        0,0,1701,1703,5,73,0,0,1702,1704,5,183,0,0,1703,1702,1,0,0,0,1703,
        1704,1,0,0,0,1704,1705,1,0,0,0,1705,1716,3,244,122,0,1706,1708,5,
        183,0,0,1707,1706,1,0,0,0,1707,1708,1,0,0,0,1708,1709,1,0,0,0,1709,
        1711,5,4,0,0,1710,1712,5,183,0,0,1711,1710,1,0,0,0,1711,1712,1,0,
        0,0,1712,1713,1,0,0,0,1713,1715,3,244,122,0,1714,1707,1,0,0,0,1715,
        1718,1,0,0,0,1716,1714,1,0,0,0,1716,1717,1,0,0,0,1717,183,1,0,0,
        0,1718,1716,1,0,0,0,1719,1720,5,150,0,0,1720,1725,3,188,94,0,1721,
        1723,5,183,0,0,1722,1721,1,0,0,0,1722,1723,1,0,0,0,1723,1724,1,0,
        0,0,1724,1726,3,202,101,0,1725,1722,1,0,0,0,1725,1726,1,0,0,0,1726,
        185,1,0,0,0,1727,1728,5,127,0,0,1728,1729,3,188,94,0,1729,187,1,
        0,0,0,1730,1732,5,183,0,0,1731,1730,1,0,0,0,1731,1732,1,0,0,0,1732,
        1733,1,0,0,0,1733,1735,5,77,0,0,1734,1731,1,0,0,0,1734,1735,1,0,
        0,0,1735,1736,1,0,0,0,1736,1737,5,183,0,0,1737,1740,3,190,95,0,1738,
        1739,5,183,0,0,1739,1741,3,194,97,0,1740,1738,1,0,0,0,1740,1741,
        1,0,0,0,1741,1744,1,0,0,0,1742,1743,5,183,0,0,1743,1745,3,196,98,
        0,1744,1742,1,0,0,0,1744,1745,1,0,0,0,1745,1748,1,0,0,0,1746,1747,
        5,183,0,0,1747,1749,3,198,99,0,1748,1746,1,0,0,0,1748,1749,1,0,0,
        0,1749,189,1,0,0,0,1750,1761,5,161,0,0,1751,1753,5,183,0,0,1752,
        1751,1,0,0,0,1752,1753,1,0,0,0,1753,1754,1,0,0,0,1754,1756,5,4,0,
        0,1755,1757,5,183,0,0,1756,1755,1,0,0,0,1756,1757,1,0,0,0,1757,1758,
        1,0,0,0,1758,1760,3,192,96,0,1759,1752,1,0,0,0,1760,1763,1,0,0,0,
        1761,1759,1,0,0,0,1761,1762,1,0,0,0,1762,1779,1,0,0,0,1763,1761,
        1,0,0,0,1764,1775,3,192,96,0,1765,1767,5,183,0,0,1766,1765,1,0,0,
        0,1766,1767,1,0,0,0,1767,1768,1,0,0,0,1768,1770,5,4,0,0,1769,1771,
        5,183,0,0,1770,1769,1,0,0,0,1770,1771,1,0,0,0,1771,1772,1,0,0,0,
        1772,1774,3,192,96,0,1773,1766,1,0,0,0,1774,1777,1,0,0,0,1775,1773,
        1,0,0,0,1775,1776,1,0,0,0,1776,1779,1,0,0,0,1777,1775,1,0,0,0,1778,
        1750,1,0,0,0,1778,1764,1,0,0,0,1779,191,1,0,0,0,1780,1781,3,244,
        122,0,1781,1782,5,183,0,0,1782,1783,5,51,0,0,1783,1784,5,183,0,0,
        1784,1785,3,332,166,0,1785,1788,1,0,0,0,1786,1788,3,244,122,0,1787,
        1780,1,0,0,0,1787,1786,1,0,0,0,1788,193,1,0,0,0,1789,1790,5,120,
        0,0,1790,1791,5,183,0,0,1791,1792,5,56,0,0,1792,1793,5,183,0,0,1793,
        1801,3,200,100,0,1794,1796,5,4,0,0,1795,1797,5,183,0,0,1796,1795,
        1,0,0,0,1796,1797,1,0,0,0,1797,1798,1,0,0,0,1798,1800,3,200,100,
        0,1799,1794,1,0,0,0,1800,1803,1,0,0,0,1801,1799,1,0,0,0,1801,1802,
        1,0,0,0,1802,195,1,0,0,0,1803,1801,1,0,0,0,1804,1805,5,162,0,0,1805,
        1806,5,183,0,0,1806,1807,3,244,122,0,1807,197,1,0,0,0,1808,1809,
        5,102,0,0,1809,1810,5,183,0,0,1810,1811,3,244,122,0,1811,199,1,0,
        0,0,1812,1817,3,244,122,0,1813,1815,5,183,0,0,1814,1813,1,0,0,0,
        1814,1815,1,0,0,0,1815,1816,1,0,0,0,1816,1818,7,1,0,0,1817,1814,
        1,0,0,0,1817,1818,1,0,0,0,1818,201,1,0,0,0,1819,1820,5,149,0,0,1820,
        1821,5,183,0,0,1821,1822,3,244,122,0,1822,203,1,0,0,0,1823,1834,
        3,206,103,0,1824,1826,5,183,0,0,1825,1824,1,0,0,0,1825,1826,1,0,
        0,0,1826,1827,1,0,0,0,1827,1829,5,4,0,0,1828,1830,5,183,0,0,1829,
        1828,1,0,0,0,1829,1830,1,0,0,0,1830,1831,1,0,0,0,1831,1833,3,206,
        103,0,1832,1825,1,0,0,0,1833,1836,1,0,0,0,1834,1832,1,0,0,0,1834,
        1835,1,0,0,0,1835,205,1,0,0,0,1836,1834,1,0,0,0,1837,1839,3,332,
        166,0,1838,1840,5,183,0,0,1839,1838,1,0,0,0,1839,1840,1,0,0,0,1840,
        1841,1,0,0,0,1841,1843,5,6,0,0,1842,1844,5,183,0,0,1843,1842,1,0,
        0,0,1843,1844,1,0,0,0,1844,1845,1,0,0,0,1845,1846,3,208,104,0,1846,
        1849,1,0,0,0,1847,1849,3,208,104,0,1848,1837,1,0,0,0,1848,1847,1,
        0,0,0,1849,207,1,0,0,0,1850,1851,3,210,105,0,1851,209,1,0,0,0,1852,
        1859,3,212,106,0,1853,1855,5,183,0,0,1854,1853,1,0,0,0,1854,1855,
        1,0,0,0,1855,1856,1,0,0,0,1856,1858,3,214,107,0,1857,1854,1,0,0,
        0,1858,1861,1,0,0,0,1859,1857,1,0,0,0,1859,1860,1,0,0,0,1860,1867,
        1,0,0,0,1861,1859,1,0,0,0,1862,1863,5,2,0,0,1863,1864,3,210,105,
        0,1864,1865,5,3,0,0,1865,1867,1,0,0,0,1866,1852,1,0,0,0,1866,1862,
        1,0,0,0,1867,211,1,0,0,0,1868,1870,5,2,0,0,1869,1871,5,183,0,0,1870,
        1869,1,0,0,0,1870,1871,1,0,0,0,1871,1876,1,0,0,0,1872,1874,3,332,
        166,0,1873,1875,5,183,0,0,1874,1873,1,0,0,0,1874,1875,1,0,0,0,1875,
        1877,1,0,0,0,1876,1872,1,0,0,0,1876,1877,1,0,0,0,1877,1882,1,0,0,
        0,1878,1880,3,224,112,0,1879,1881,5,183,0,0,1880,1879,1,0,0,0,1880,
        1881,1,0,0,0,1881,1883,1,0,0,0,1882,1878,1,0,0,0,1882,1883,1,0,0,
        0,1883,1888,1,0,0,0,1884,1886,3,220,110,0,1885,1887,5,183,0,0,1886,
        1885,1,0,0,0,1886,1887,1,0,0,0,1887,1889,1,0,0,0,1888,1884,1,0,0,
        0,1888,1889,1,0,0,0,1889,1890,1,0,0,0,1890,1891,5,3,0,0,1891,213,
        1,0,0,0,1892,1894,3,216,108,0,1893,1895,5,183,0,0,1894,1893,1,0,
        0,0,1894,1895,1,0,0,0,1895,1896,1,0,0,0,1896,1897,3,212,106,0,1897,
        215,1,0,0,0,1898,1900,3,352,176,0,1899,1901,5,183,0,0,1900,1899,
        1,0,0,0,1900,1901,1,0,0,0,1901,1902,1,0,0,0,1902,1904,3,356,178,
        0,1903,1905,5,183,0,0,1904,1903,1,0,0,0,1904,1905,1,0,0,0,1905,1907,
        1,0,0,0,1906,1908,3,218,109,0,1907,1906,1,0,0,0,1907,1908,1,0,0,
        0,1908,1910,1,0,0,0,1909,1911,5,183,0,0,1910,1909,1,0,0,0,1910,1911,
        1,0,0,0,1911,1912,1,0,0,0,1912,1913,3,356,178,0,1913,1943,1,0,0,
        0,1914,1916,3,356,178,0,1915,1917,5,183,0,0,1916,1915,1,0,0,0,1916,
        1917,1,0,0,0,1917,1919,1,0,0,0,1918,1920,3,218,109,0,1919,1918,1,
        0,0,0,1919,1920,1,0,0,0,1920,1922,1,0,0,0,1921,1923,5,183,0,0,1922,
        1921,1,0,0,0,1922,1923,1,0,0,0,1923,1924,1,0,0,0,1924,1926,3,356,
        178,0,1925,1927,5,183,0,0,1926,1925,1,0,0,0,1926,1927,1,0,0,0,1927,
        1928,1,0,0,0,1928,1929,3,354,177,0,1929,1943,1,0,0,0,1930,1932,3,
        356,178,0,1931,1933,5,183,0,0,1932,1931,1,0,0,0,1932,1933,1,0,0,
        0,1933,1935,1,0,0,0,1934,1936,3,218,109,0,1935,1934,1,0,0,0,1935,
        1936,1,0,0,0,1936,1938,1,0,0,0,1937,1939,5,183,0,0,1938,1937,1,0,
        0,0,1938,1939,1,0,0,0,1939,1940,1,0,0,0,1940,1941,3,356,178,0,1941,
        1943,1,0,0,0,1942,1898,1,0,0,0,1942,1914,1,0,0,0,1942,1930,1,0,0,
        0,1943,217,1,0,0,0,1944,1946,5,7,0,0,1945,1947,5,183,0,0,1946,1945,
        1,0,0,0,1946,1947,1,0,0,0,1947,1952,1,0,0,0,1948,1950,3,332,166,
        0,1949,1951,5,183,0,0,1950,1949,1,0,0,0,1950,1951,1,0,0,0,1951,1953,
        1,0,0,0,1952,1948,1,0,0,0,1952,1953,1,0,0,0,1953,1958,1,0,0,0,1954,
        1956,3,222,111,0,1955,1957,5,183,0,0,1956,1955,1,0,0,0,1956,1957,
        1,0,0,0,1957,1959,1,0,0,0,1958,1954,1,0,0,0,1958,1959,1,0,0,0,1959,
        1964,1,0,0,0,1960,1962,3,226,113,0,1961,1963,5,183,0,0,1962,1961,
        1,0,0,0,1962,1963,1,0,0,0,1963,1965,1,0,0,0,1964,1960,1,0,0,0,1964,
        1965,1,0,0,0,1965,1970,1,0,0,0,1966,1968,3,220,110,0,1967,1969,5,
        183,0,0,1968,1967,1,0,0,0,1968,1969,1,0,0,0,1969,1971,1,0,0,0,1970,
        1966,1,0,0,0,1970,1971,1,0,0,0,1971,1972,1,0,0,0,1972,1973,5,8,0,
        0,1973,219,1,0,0,0,1974,1976,5,9,0,0,1975,1977,5,183,0,0,1976,1975,
        1,0,0,0,1976,1977,1,0,0,0,1977,2011,1,0,0,0,1978,1980,3,340,170,
        0,1979,1981,5,183,0,0,1980,1979,1,0,0,0,1980,1981,1,0,0,0,1981,1982,
        1,0,0,0,1982,1984,5,164,0,0,1983,1985,5,183,0,0,1984,1983,1,0,0,
        0,1984,1985,1,0,0,0,1985,1986,1,0,0,0,1986,1988,3,244,122,0,1987,
        1989,5,183,0,0,1988,1987,1,0,0,0,1988,1989,1,0,0,0,1989,2008,1,0,
        0,0,1990,1992,5,4,0,0,1991,1993,5,183,0,0,1992,1991,1,0,0,0,1992,
        1993,1,0,0,0,1993,1994,1,0,0,0,1994,1996,3,340,170,0,1995,1997,5,
        183,0,0,1996,1995,1,0,0,0,1996,1997,1,0,0,0,1997,1998,1,0,0,0,1998,
        2000,5,164,0,0,1999,2001,5,183,0,0,2000,1999,1,0,0,0,2000,2001,1,
        0,0,0,2001,2002,1,0,0,0,2002,2004,3,244,122,0,2003,2005,5,183,0,
        0,2004,2003,1,0,0,0,2004,2005,1,0,0,0,2005,2007,1,0,0,0,2006,1990,
        1,0,0,0,2007,2010,1,0,0,0,2008,2006,1,0,0,0,2008,2009,1,0,0,0,2009,
        2012,1,0,0,0,2010,2008,1,0,0,0,2011,1978,1,0,0,0,2011,2012,1,0,0,
        0,2012,2013,1,0,0,0,2013,2014,5,10,0,0,2014,221,1,0,0,0,2015,2017,
        5,164,0,0,2016,2018,5,183,0,0,2017,2016,1,0,0,0,2017,2018,1,0,0,
        0,2018,2019,1,0,0,0,2019,2033,3,242,121,0,2020,2022,5,183,0,0,2021,
        2020,1,0,0,0,2021,2022,1,0,0,0,2022,2023,1,0,0,0,2023,2025,5,11,
        0,0,2024,2026,5,164,0,0,2025,2024,1,0,0,0,2025,2026,1,0,0,0,2026,
        2028,1,0,0,0,2027,2029,5,183,0,0,2028,2027,1,0,0,0,2028,2029,1,0,
        0,0,2029,2030,1,0,0,0,2030,2032,3,242,121,0,2031,2021,1,0,0,0,2032,
        2035,1,0,0,0,2033,2031,1,0,0,0,2033,2034,1,0,0,0,2034,223,1,0,0,
        0,2035,2033,1,0,0,0,2036,2038,5,164,0,0,2037,2039,5,183,0,0,2038,
        2037,1,0,0,0,2038,2039,1,0,0,0,2039,2040,1,0,0,0,2040,2057,3,240,
        120,0,2041,2043,5,183,0,0,2042,2041,1,0,0,0,2042,2043,1,0,0,0,2043,
        2049,1,0,0,0,2044,2046,5,11,0,0,2045,2047,5,164,0,0,2046,2045,1,
        0,0,0,2046,2047,1,0,0,0,2047,2050,1,0,0,0,2048,2050,5,164,0,0,2049,
        2044,1,0,0,0,2049,2048,1,0,0,0,2050,2052,1,0,0,0,2051,2053,5,183,
        0,0,2052,2051,1,0,0,0,2052,2053,1,0,0,0,2053,2054,1,0,0,0,2054,2056,
        3,240,120,0,2055,2042,1,0,0,0,2056,2059,1,0,0,0,2057,2055,1,0,0,
        0,2057,2058,1,0,0,0,2058,225,1,0,0,0,2059,2057,1,0,0,0,2060,2065,
        5,161,0,0,2061,2063,5,183,0,0,2062,2061,1,0,0,0,2062,2063,1,0,0,
        0,2063,2064,1,0,0,0,2064,2066,3,228,114,0,2065,2062,1,0,0,0,2065,
        2066,1,0,0,0,2066,2071,1,0,0,0,2067,2069,5,183,0,0,2068,2067,1,0,
        0,0,2068,2069,1,0,0,0,2069,2070,1,0,0,0,2070,2072,3,230,115,0,2071,
        2068,1,0,0,0,2071,2072,1,0,0,0,2072,2077,1,0,0,0,2073,2075,5,183,
        0,0,2074,2073,1,0,0,0,2074,2075,1,0,0,0,2075,2076,1,0,0,0,2076,2078,
        3,232,116,0,2077,2074,1,0,0,0,2077,2078,1,0,0,0,2078,227,1,0,0,0,
        2079,2080,5,48,0,0,2080,2082,5,183,0,0,2081,2079,1,0,0,0,2081,2082,
        1,0,0,0,2082,2083,1,0,0,0,2083,2085,5,152,0,0,2084,2086,5,183,0,
        0,2085,2084,1,0,0,0,2085,2086,1,0,0,0,2086,2087,1,0,0,0,2087,2089,
        5,2,0,0,2088,2090,5,183,0,0,2089,2088,1,0,0,0,2089,2090,1,0,0,0,
        2090,2091,1,0,0,0,2091,2093,3,340,170,0,2092,2094,5,183,0,0,2093,
        2092,1,0,0,0,2093,2094,1,0,0,0,2094,2095,1,0,0,0,2095,2096,5,3,0,
        0,2096,2104,1,0,0,0,2097,2104,5,132,0,0,2098,2099,5,48,0,0,2099,
        2100,5,183,0,0,2100,2104,5,132,0,0,2101,2104,5,139,0,0,2102,2104,
        5,45,0,0,2103,2081,1,0,0,0,2103,2097,1,0,0,0,2103,2098,1,0,0,0,2103,
        2101,1,0,0,0,2103,2102,1,0,0,0,2104,229,1,0,0,0,2105,2107,3,236,
        118,0,2106,2105,1,0,0,0,2106,2107,1,0,0,0,2107,2109,1,0,0,0,2108,
        2110,5,183,0,0,2109,2108,1,0,0,0,2109,2110,1,0,0,0,2110,2111,1,0,
        0,0,2111,2113,5,165,0,0,2112,2114,5,183,0,0,2113,2112,1,0,0,0,2113,
        2114,1,0,0,0,2114,2116,1,0,0,0,2115,2117,3,238,119,0,2116,2115,1,
        0,0,0,2116,2117,1,0,0,0,2117,2120,1,0,0,0,2118,2120,3,342,171,0,
        2119,2106,1,0,0,0,2119,2118,1,0,0,0,2120,231,1,0,0,0,2121,2123,5,
        2,0,0,2122,2124,5,183,0,0,2123,2122,1,0,0,0,2123,2124,1,0,0,0,2124,
        2125,1,0,0,0,2125,2127,3,332,166,0,2126,2128,5,183,0,0,2127,2126,
        1,0,0,0,2127,2128,1,0,0,0,2128,2129,1,0,0,0,2129,2131,5,4,0,0,2130,
        2132,5,183,0,0,2131,2130,1,0,0,0,2131,2132,1,0,0,0,2132,2133,1,0,
        0,0,2133,2145,3,332,166,0,2134,2136,5,183,0,0,2135,2134,1,0,0,0,
        2135,2136,1,0,0,0,2136,2137,1,0,0,0,2137,2139,5,11,0,0,2138,2140,
        5,183,0,0,2139,2138,1,0,0,0,2139,2140,1,0,0,0,2140,2141,1,0,0,0,
        2141,2143,3,202,101,0,2142,2144,5,183,0,0,2143,2142,1,0,0,0,2143,
        2144,1,0,0,0,2144,2146,1,0,0,0,2145,2135,1,0,0,0,2145,2146,1,0,0,
        0,2146,2166,1,0,0,0,2147,2149,5,183,0,0,2148,2147,1,0,0,0,2148,2149,
        1,0,0,0,2149,2150,1,0,0,0,2150,2152,5,11,0,0,2151,2153,5,183,0,0,
        2152,2151,1,0,0,0,2152,2153,1,0,0,0,2153,2154,1,0,0,0,2154,2156,
        3,234,117,0,2155,2157,5,183,0,0,2156,2155,1,0,0,0,2156,2157,1,0,
        0,0,2157,2158,1,0,0,0,2158,2160,5,4,0,0,2159,2161,5,183,0,0,2160,
        2159,1,0,0,0,2160,2161,1,0,0,0,2161,2162,1,0,0,0,2162,2164,3,234,
        117,0,2163,2165,5,183,0,0,2164,2163,1,0,0,0,2164,2165,1,0,0,0,2165,
        2167,1,0,0,0,2166,2148,1,0,0,0,2166,2167,1,0,0,0,2167,2168,1,0,0,
        0,2168,2169,5,3,0,0,2169,233,1,0,0,0,2170,2172,5,9,0,0,2171,2173,
        5,183,0,0,2172,2171,1,0,0,0,2172,2173,1,0,0,0,2173,2175,1,0,0,0,
        2174,2176,3,190,95,0,2175,2174,1,0,0,0,2175,2176,1,0,0,0,2176,2178,
        1,0,0,0,2177,2179,5,183,0,0,2178,2177,1,0,0,0,2178,2179,1,0,0,0,
        2179,2180,1,0,0,0,2180,2181,5,10,0,0,2181,235,1,0,0,0,2182,2183,
        5,170,0,0,2183,237,1,0,0,0,2184,2185,5,170,0,0,2185,239,1,0,0,0,
        2186,2187,3,346,173,0,2187,241,1,0,0,0,2188,2189,3,346,173,0,2189,
        243,1,0,0,0,2190,2191,3,246,123,0,2191,245,1,0,0,0,2192,2199,3,248,
        124,0,2193,2194,5,183,0,0,2194,2195,5,119,0,0,2195,2196,5,183,0,
        0,2196,2198,3,248,124,0,2197,2193,1,0,0,0,2198,2201,1,0,0,0,2199,
        2197,1,0,0,0,2199,2200,1,0,0,0,2200,247,1,0,0,0,2201,2199,1,0,0,
        0,2202,2209,3,250,125,0,2203,2204,5,183,0,0,2204,2205,5,153,0,0,
        2205,2206,5,183,0,0,2206,2208,3,250,125,0,2207,2203,1,0,0,0,2208,
        2211,1,0,0,0,2209,2207,1,0,0,0,2209,2210,1,0,0,0,2210,249,1,0,0,
        0,2211,2209,1,0,0,0,2212,2219,3,252,126,0,2213,2214,5,183,0,0,2214,
        2215,5,50,0,0,2215,2216,5,183,0,0,2216,2218,3,252,126,0,2217,2213,
        1,0,0,0,2218,2221,1,0,0,0,2219,2217,1,0,0,0,2219,2220,1,0,0,0,2220,
        251,1,0,0,0,2221,2219,1,0,0,0,2222,2224,5,113,0,0,2223,2225,5,183,
        0,0,2224,2223,1,0,0,0,2224,2225,1,0,0,0,2225,2227,1,0,0,0,2226,2222,
        1,0,0,0,2227,2230,1,0,0,0,2228,2226,1,0,0,0,2228,2229,1,0,0,0,2229,
        2231,1,0,0,0,2230,2228,1,0,0,0,2231,2232,3,254,127,0,2232,253,1,
        0,0,0,2233,2243,3,258,129,0,2234,2236,5,183,0,0,2235,2234,1,0,0,
        0,2235,2236,1,0,0,0,2236,2237,1,0,0,0,2237,2239,3,256,128,0,2238,
        2240,5,183,0,0,2239,2238,1,0,0,0,2239,2240,1,0,0,0,2240,2241,1,0,
        0,0,2241,2242,3,258,129,0,2242,2244,1,0,0,0,2243,2235,1,0,0,0,2243,
        2244,1,0,0,0,2244,2282,1,0,0,0,2245,2247,3,258,129,0,2246,2248,5,
        183,0,0,2247,2246,1,0,0,0,2247,2248,1,0,0,0,2248,2249,1,0,0,0,2249,
        2251,5,163,0,0,2250,2252,5,183,0,0,2251,2250,1,0,0,0,2251,2252,1,
        0,0,0,2252,2253,1,0,0,0,2253,2254,3,258,129,0,2254,2255,1,0,0,0,
        2255,2256,6,127,-1,0,2256,2282,1,0,0,0,2257,2259,3,258,129,0,2258,
        2260,5,183,0,0,2259,2258,1,0,0,0,2259,2260,1,0,0,0,2260,2261,1,0,
        0,0,2261,2263,3,256,128,0,2262,2264,5,183,0,0,2263,2262,1,0,0,0,
        2263,2264,1,0,0,0,2264,2265,1,0,0,0,2265,2275,3,258,129,0,2266,2268,
        5,183,0,0,2267,2266,1,0,0,0,2267,2268,1,0,0,0,2268,2269,1,0,0,0,
        2269,2271,3,256,128,0,2270,2272,5,183,0,0,2271,2270,1,0,0,0,2271,
        2272,1,0,0,0,2272,2273,1,0,0,0,2273,2274,3,258,129,0,2274,2276,1,
        0,0,0,2275,2267,1,0,0,0,2276,2277,1,0,0,0,2277,2275,1,0,0,0,2277,
        2278,1,0,0,0,2278,2279,1,0,0,0,2279,2280,6,127,-1,0,2280,2282,1,
        0,0,0,2281,2233,1,0,0,0,2281,2245,1,0,0,0,2281,2257,1,0,0,0,2282,
        255,1,0,0,0,2283,2284,7,2,0,0,2284,257,1,0,0,0,2285,2296,3,260,130,
        0,2286,2288,5,183,0,0,2287,2286,1,0,0,0,2287,2288,1,0,0,0,2288,2289,
        1,0,0,0,2289,2291,5,11,0,0,2290,2292,5,183,0,0,2291,2290,1,0,0,0,
        2291,2292,1,0,0,0,2292,2293,1,0,0,0,2293,2295,3,260,130,0,2294,2287,
        1,0,0,0,2295,2298,1,0,0,0,2296,2294,1,0,0,0,2296,2297,1,0,0,0,2297,
        259,1,0,0,0,2298,2296,1,0,0,0,2299,2310,3,262,131,0,2300,2302,5,
        183,0,0,2301,2300,1,0,0,0,2301,2302,1,0,0,0,2302,2303,1,0,0,0,2303,
        2305,5,17,0,0,2304,2306,5,183,0,0,2305,2304,1,0,0,0,2305,2306,1,
        0,0,0,2306,2307,1,0,0,0,2307,2309,3,262,131,0,2308,2301,1,0,0,0,
        2309,2312,1,0,0,0,2310,2308,1,0,0,0,2310,2311,1,0,0,0,2311,261,1,
        0,0,0,2312,2310,1,0,0,0,2313,2325,3,266,133,0,2314,2316,5,183,0,
        0,2315,2314,1,0,0,0,2315,2316,1,0,0,0,2316,2317,1,0,0,0,2317,2319,
        3,264,132,0,2318,2320,5,183,0,0,2319,2318,1,0,0,0,2319,2320,1,0,
        0,0,2320,2321,1,0,0,0,2321,2322,3,266,133,0,2322,2324,1,0,0,0,2323,
        2315,1,0,0,0,2324,2327,1,0,0,0,2325,2323,1,0,0,0,2325,2326,1,0,0,
        0,2326,263,1,0,0,0,2327,2325,1,0,0,0,2328,2329,7,3,0,0,2329,265,
        1,0,0,0,2330,2342,3,270,135,0,2331,2333,5,183,0,0,2332,2331,1,0,
        0,0,2332,2333,1,0,0,0,2333,2334,1,0,0,0,2334,2336,3,268,134,0,2335,
        2337,5,183,0,0,2336,2335,1,0,0,0,2336,2337,1,0,0,0,2337,2338,1,0,
        0,0,2338,2339,3,270,135,0,2339,2341,1,0,0,0,2340,2332,1,0,0,0,2341,
        2344,1,0,0,0,2342,2340,1,0,0,0,2342,2343,1,0,0,0,2343,267,1,0,0,
        0,2344,2342,1,0,0,0,2345,2346,7,4,0,0,2346,269,1,0,0,0,2347,2359,
        3,274,137,0,2348,2350,5,183,0,0,2349,2348,1,0,0,0,2349,2350,1,0,
        0,0,2350,2351,1,0,0,0,2351,2353,3,272,136,0,2352,2354,5,183,0,0,
        2353,2352,1,0,0,0,2353,2354,1,0,0,0,2354,2355,1,0,0,0,2355,2356,
        3,274,137,0,2356,2358,1,0,0,0,2357,2349,1,0,0,0,2358,2361,1,0,0,
        0,2359,2357,1,0,0,0,2359,2360,1,0,0,0,2360,271,1,0,0,0,2361,2359,
        1,0,0,0,2362,2363,7,5,0,0,2363,273,1,0,0,0,2364,2375,3,276,138,0,
        2365,2367,5,183,0,0,2366,2365,1,0,0,0,2366,2367,1,0,0,0,2367,2368,
        1,0,0,0,2368,2370,5,23,0,0,2369,2371,5,183,0,0,2370,2369,1,0,0,0,
        2370,2371,1,0,0,0,2371,2372,1,0,0,0,2372,2374,3,276,138,0,2373,2366,
        1,0,0,0,2374,2377,1,0,0,0,2375,2373,1,0,0,0,2375,2376,1,0,0,0,2376,
        275,1,0,0,0,2377,2375,1,0,0,0,2378,2386,3,286,143,0,2379,2387,3,
        280,140,0,2380,2382,3,278,139,0,2381,2380,1,0,0,0,2382,2383,1,0,
        0,0,2383,2381,1,0,0,0,2383,2384,1,0,0,0,2384,2387,1,0,0,0,2385,2387,
        3,284,142,0,2386,2379,1,0,0,0,2386,2381,1,0,0,0,2386,2385,1,0,0,
        0,2386,2387,1,0,0,0,2387,277,1,0,0,0,2388,2389,5,183,0,0,2389,2391,
        5,96,0,0,2390,2392,5,183,0,0,2391,2390,1,0,0,0,2391,2392,1,0,0,0,
        2392,2393,1,0,0,0,2393,2408,3,288,144,0,2394,2395,5,7,0,0,2395,2396,
        3,244,122,0,2396,2397,5,8,0,0,2397,2408,1,0,0,0,2398,2400,5,7,0,
        0,2399,2401,3,244,122,0,2400,2399,1,0,0,0,2400,2401,1,0,0,0,2401,
        2402,1,0,0,0,2402,2404,7,6,0,0,2403,2405,3,244,122,0,2404,2403,1,
        0,0,0,2404,2405,1,0,0,0,2405,2406,1,0,0,0,2406,2408,5,8,0,0,2407,
        2388,1,0,0,0,2407,2394,1,0,0,0,2407,2398,1,0,0,0,2408,279,1,0,0,
        0,2409,2421,3,282,141,0,2410,2411,5,183,0,0,2411,2412,5,134,0,0,
        2412,2413,5,183,0,0,2413,2421,5,150,0,0,2414,2415,5,183,0,0,2415,
        2416,5,81,0,0,2416,2417,5,183,0,0,2417,2421,5,150,0,0,2418,2419,
        5,183,0,0,2419,2421,5,65,0,0,2420,2409,1,0,0,0,2420,2410,1,0,0,0,
        2420,2414,1,0,0,0,2420,2418,1,0,0,0,2421,2423,1,0,0,0,2422,2424,
        5,183,0,0,2423,2422,1,0,0,0,2423,2424,1,0,0,0,2424,2425,1,0,0,0,
        2425,2426,3,288,144,0,2426,281,1,0,0,0,2427,2429,5,183,0,0,2428,
        2427,1,0,0,0,2428,2429,1,0,0,0,2429,2430,1,0,0,0,2430,2431,5,24,
        0,0,2431,283,1,0,0,0,2432,2433,5,183,0,0,2433,2434,5,99,0,0,2434,
        2435,5,183,0,0,2435,2443,5,115,0,0,2436,2437,5,183,0,0,2437,2438,
        5,99,0,0,2438,2439,5,183,0,0,2439,2440,5,113,0,0,2440,2441,5,183,
        0,0,2441,2443,5,115,0,0,2442,2432,1,0,0,0,2442,2436,1,0,0,0,2443,
        285,1,0,0,0,2444,2446,5,166,0,0,2445,2447,5,183,0,0,2446,2445,1,
        0,0,0,2446,2447,1,0,0,0,2447,2449,1,0,0,0,2448,2444,1,0,0,0,2449,
        2452,1,0,0,0,2450,2448,1,0,0,0,2450,2451,1,0,0,0,2451,2453,1,0,0,
        0,2452,2450,1,0,0,0,2453,2458,3,288,144,0,2454,2456,5,183,0,0,2455,
        2454,1,0,0,0,2455,2456,1,0,0,0,2456,2457,1,0,0,0,2457,2459,5,167,
        0,0,2458,2455,1,0,0,0,2458,2459,1,0,0,0,2459,287,1,0,0,0,2460,2467,
        3,290,145,0,2461,2463,5,183,0,0,2462,2461,1,0,0,0,2462,2463,1,0,
        0,0,2463,2464,1,0,0,0,2464,2466,3,326,163,0,2465,2462,1,0,0,0,2466,
        2469,1,0,0,0,2467,2465,1,0,0,0,2467,2468,1,0,0,0,2468,289,1,0,0,
        0,2469,2467,1,0,0,0,2470,2480,3,298,149,0,2471,2480,3,336,168,0,
        2472,2480,3,328,164,0,2473,2480,3,310,155,0,2474,2480,3,312,156,
        0,2475,2480,3,322,161,0,2476,2480,3,324,162,0,2477,2480,3,332,166,
        0,2478,2480,3,292,146,0,2479,2470,1,0,0,0,2479,2471,1,0,0,0,2479,
        2472,1,0,0,0,2479,2473,1,0,0,0,2479,2474,1,0,0,0,2479,2475,1,0,0,
        0,2479,2476,1,0,0,0,2479,2477,1,0,0,0,2479,2478,1,0,0,0,2480,291,
        1,0,0,0,2481,2483,5,48,0,0,2482,2484,5,183,0,0,2483,2482,1,0,0,0,
        2483,2484,1,0,0,0,2484,2485,1,0,0,0,2485,2487,5,2,0,0,2486,2488,
        5,183,0,0,2487,2486,1,0,0,0,2487,2488,1,0,0,0,2488,2489,1,0,0,0,
        2489,2491,3,294,147,0,2490,2492,5,183,0,0,2491,2490,1,0,0,0,2491,
        2492,1,0,0,0,2492,2493,1,0,0,0,2493,2494,5,3,0,0,2494,2538,1,0,0,
        0,2495,2497,5,46,0,0,2496,2498,5,183,0,0,2497,2496,1,0,0,0,2497,
        2498,1,0,0,0,2498,2499,1,0,0,0,2499,2501,5,2,0,0,2500,2502,5,183,
        0,0,2501,2500,1,0,0,0,2501,2502,1,0,0,0,2502,2503,1,0,0,0,2503,2505,
        3,294,147,0,2504,2506,5,183,0,0,2505,2504,1,0,0,0,2505,2506,1,0,
        0,0,2506,2507,1,0,0,0,2507,2508,5,3,0,0,2508,2538,1,0,0,0,2509,2511,
        5,114,0,0,2510,2512,5,183,0,0,2511,2510,1,0,0,0,2511,2512,1,0,0,
        0,2512,2513,1,0,0,0,2513,2515,5,2,0,0,2514,2516,5,183,0,0,2515,2514,
        1,0,0,0,2515,2516,1,0,0,0,2516,2517,1,0,0,0,2517,2519,3,294,147,
        0,2518,2520,5,183,0,0,2519,2518,1,0,0,0,2519,2520,1,0,0,0,2520,2521,
        1,0,0,0,2521,2522,5,3,0,0,2522,2538,1,0,0,0,2523,2525,5,154,0,0,
        2524,2526,5,183,0,0,2525,2524,1,0,0,0,2525,2526,1,0,0,0,2526,2527,
        1,0,0,0,2527,2529,5,2,0,0,2528,2530,5,183,0,0,2529,2528,1,0,0,0,
        2529,2530,1,0,0,0,2530,2531,1,0,0,0,2531,2533,3,294,147,0,2532,2534,
        5,183,0,0,2533,2532,1,0,0,0,2533,2534,1,0,0,0,2534,2535,1,0,0,0,
        2535,2536,5,3,0,0,2536,2538,1,0,0,0,2537,2481,1,0,0,0,2537,2495,
        1,0,0,0,2537,2509,1,0,0,0,2537,2523,1,0,0,0,2538,293,1,0,0,0,2539,
        2540,3,296,148,0,2540,2541,5,183,0,0,2541,2542,3,202,101,0,2542,
        295,1,0,0,0,2543,2544,3,332,166,0,2544,2545,5,183,0,0,2545,2546,
        5,96,0,0,2546,2547,5,183,0,0,2547,2548,3,244,122,0,2548,297,1,0,
        0,0,2549,2556,3,334,167,0,2550,2556,5,168,0,0,2551,2556,3,300,150,
        0,2552,2556,5,115,0,0,2553,2556,3,302,151,0,2554,2556,3,306,153,
        0,2555,2549,1,0,0,0,2555,2550,1,0,0,0,2555,2551,1,0,0,0,2555,2552,
        1,0,0,0,2555,2553,1,0,0,0,2555,2554,1,0,0,0,2556,299,1,0,0,0,2557,
        2558,7,7,0,0,2558,301,1,0,0,0,2559,2561,5,7,0,0,2560,2562,5,183,
        0,0,2561,2560,1,0,0,0,2561,2562,1,0,0,0,2562,2576,1,0,0,0,2563,2565,
        3,244,122,0,2564,2566,5,183,0,0,2565,2564,1,0,0,0,2565,2566,1,0,
        0,0,2566,2573,1,0,0,0,2567,2569,3,304,152,0,2568,2570,5,183,0,0,
        2569,2568,1,0,0,0,2569,2570,1,0,0,0,2570,2572,1,0,0,0,2571,2567,
        1,0,0,0,2572,2575,1,0,0,0,2573,2571,1,0,0,0,2573,2574,1,0,0,0,2574,
        2577,1,0,0,0,2575,2573,1,0,0,0,2576,2563,1,0,0,0,2576,2577,1,0,0,
        0,2577,2578,1,0,0,0,2578,2579,5,8,0,0,2579,303,1,0,0,0,2580,2582,
        5,4,0,0,2581,2583,5,183,0,0,2582,2581,1,0,0,0,2582,2583,1,0,0,0,
        2583,2585,1,0,0,0,2584,2586,3,244,122,0,2585,2584,1,0,0,0,2585,2586,
        1,0,0,0,2586,305,1,0,0,0,2587,2589,5,9,0,0,2588,2590,5,183,0,0,2589,
        2588,1,0,0,0,2589,2590,1,0,0,0,2590,2591,1,0,0,0,2591,2593,3,308,
        154,0,2592,2594,5,183,0,0,2593,2592,1,0,0,0,2593,2594,1,0,0,0,2594,
        2605,1,0,0,0,2595,2597,5,4,0,0,2596,2598,5,183,0,0,2597,2596,1,0,
        0,0,2597,2598,1,0,0,0,2598,2599,1,0,0,0,2599,2601,3,308,154,0,2600,
        2602,5,183,0,0,2601,2600,1,0,0,0,2601,2602,1,0,0,0,2602,2604,1,0,
        0,0,2603,2595,1,0,0,0,2604,2607,1,0,0,0,2605,2603,1,0,0,0,2605,2606,
        1,0,0,0,2606,2608,1,0,0,0,2607,2605,1,0,0,0,2608,2609,5,10,0,0,2609,
        307,1,0,0,0,2610,2613,3,348,174,0,2611,2613,5,168,0,0,2612,2610,
        1,0,0,0,2612,2611,1,0,0,0,2613,2615,1,0,0,0,2614,2616,5,183,0,0,
        2615,2614,1,0,0,0,2615,2616,1,0,0,0,2616,2617,1,0,0,0,2617,2619,
        5,164,0,0,2618,2620,5,183,0,0,2619,2618,1,0,0,0,2619,2620,1,0,0,
        0,2620,2621,1,0,0,0,2621,2622,3,244,122,0,2622,309,1,0,0,0,2623,
        2625,5,2,0,0,2624,2626,5,183,0,0,2625,2624,1,0,0,0,2625,2626,1,0,
        0,0,2626,2627,1,0,0,0,2627,2629,3,244,122,0,2628,2630,5,183,0,0,
        2629,2628,1,0,0,0,2629,2630,1,0,0,0,2630,2631,1,0,0,0,2631,2632,
        5,3,0,0,2632,311,1,0,0,0,2633,2635,5,67,0,0,2634,2636,5,183,0,0,
        2635,2634,1,0,0,0,2635,2636,1,0,0,0,2636,2637,1,0,0,0,2637,2639,
        5,2,0,0,2638,2640,5,183,0,0,2639,2638,1,0,0,0,2639,2640,1,0,0,0,
        2640,2641,1,0,0,0,2641,2643,5,161,0,0,2642,2644,5,183,0,0,2643,2642,
        1,0,0,0,2643,2644,1,0,0,0,2644,2645,1,0,0,0,2645,2711,5,3,0,0,2646,
        2648,5,59,0,0,2647,2649,5,183,0,0,2648,2647,1,0,0,0,2648,2649,1,
        0,0,0,2649,2650,1,0,0,0,2650,2652,5,2,0,0,2651,2653,5,183,0,0,2652,
        2651,1,0,0,0,2652,2653,1,0,0,0,2653,2654,1,0,0,0,2654,2656,3,316,
        158,0,2655,2657,5,183,0,0,2656,2655,1,0,0,0,2656,2657,1,0,0,0,2657,
        2668,1,0,0,0,2658,2660,5,51,0,0,2659,2661,5,183,0,0,2660,2659,1,
        0,0,0,2660,2661,1,0,0,0,2661,2662,1,0,0,0,2662,2669,3,114,57,0,2663,
        2665,5,4,0,0,2664,2666,5,183,0,0,2665,2664,1,0,0,0,2665,2666,1,0,
        0,0,2666,2667,1,0,0,0,2667,2669,3,316,158,0,2668,2658,1,0,0,0,2668,
        2663,1,0,0,0,2669,2671,1,0,0,0,2670,2672,5,183,0,0,2671,2670,1,0,
        0,0,2671,2672,1,0,0,0,2672,2673,1,0,0,0,2673,2674,5,3,0,0,2674,2711,
        1,0,0,0,2675,2677,3,314,157,0,2676,2678,5,183,0,0,2677,2676,1,0,
        0,0,2677,2678,1,0,0,0,2678,2679,1,0,0,0,2679,2681,5,2,0,0,2680,2682,
        5,183,0,0,2681,2680,1,0,0,0,2681,2682,1,0,0,0,2682,2687,1,0,0,0,
        2683,2685,5,77,0,0,2684,2686,5,183,0,0,2685,2684,1,0,0,0,2685,2686,
        1,0,0,0,2686,2688,1,0,0,0,2687,2683,1,0,0,0,2687,2688,1,0,0,0,2688,
        2706,1,0,0,0,2689,2691,3,316,158,0,2690,2692,5,183,0,0,2691,2690,
        1,0,0,0,2691,2692,1,0,0,0,2692,2703,1,0,0,0,2693,2695,5,4,0,0,2694,
        2696,5,183,0,0,2695,2694,1,0,0,0,2695,2696,1,0,0,0,2696,2697,1,0,
        0,0,2697,2699,3,316,158,0,2698,2700,5,183,0,0,2699,2698,1,0,0,0,
        2699,2700,1,0,0,0,2700,2702,1,0,0,0,2701,2693,1,0,0,0,2702,2705,
        1,0,0,0,2703,2701,1,0,0,0,2703,2704,1,0,0,0,2704,2707,1,0,0,0,2705,
        2703,1,0,0,0,2706,2689,1,0,0,0,2706,2707,1,0,0,0,2707,2708,1,0,0,
        0,2708,2709,5,3,0,0,2709,2711,1,0,0,0,2710,2633,1,0,0,0,2710,2646,
        1,0,0,0,2710,2675,1,0,0,0,2711,313,1,0,0,0,2712,2713,3,348,174,0,
        2713,315,1,0,0,0,2714,2716,3,348,174,0,2715,2717,5,183,0,0,2716,
        2715,1,0,0,0,2716,2717,1,0,0,0,2717,2718,1,0,0,0,2718,2719,5,164,
        0,0,2719,2721,5,6,0,0,2720,2722,5,183,0,0,2721,2720,1,0,0,0,2721,
        2722,1,0,0,0,2722,2724,1,0,0,0,2723,2714,1,0,0,0,2723,2724,1,0,0,
        0,2724,2725,1,0,0,0,2725,2728,3,244,122,0,2726,2728,3,318,159,0,
        2727,2723,1,0,0,0,2727,2726,1,0,0,0,2728,317,1,0,0,0,2729,2731,3,
        320,160,0,2730,2732,5,183,0,0,2731,2730,1,0,0,0,2731,2732,1,0,0,
        0,2732,2733,1,0,0,0,2733,2734,5,166,0,0,2734,2736,5,15,0,0,2735,
        2737,5,183,0,0,2736,2735,1,0,0,0,2736,2737,1,0,0,0,2737,2738,1,0,
        0,0,2738,2740,3,244,122,0,2739,2741,5,183,0,0,2740,2739,1,0,0,0,
        2740,2741,1,0,0,0,2741,319,1,0,0,0,2742,2767,3,348,174,0,2743,2745,
        5,2,0,0,2744,2746,5,183,0,0,2745,2744,1,0,0,0,2745,2746,1,0,0,0,
        2746,2747,1,0,0,0,2747,2749,3,348,174,0,2748,2750,5,183,0,0,2749,
        2748,1,0,0,0,2749,2750,1,0,0,0,2750,2761,1,0,0,0,2751,2753,5,4,0,
        0,2752,2754,5,183,0,0,2753,2752,1,0,0,0,2753,2754,1,0,0,0,2754,2755,
        1,0,0,0,2755,2757,3,348,174,0,2756,2758,5,183,0,0,2757,2756,1,0,
        0,0,2757,2758,1,0,0,0,2758,2760,1,0,0,0,2759,2751,1,0,0,0,2760,2763,
        1,0,0,0,2761,2759,1,0,0,0,2761,2762,1,0,0,0,2762,2764,1,0,0,0,2763,
        2761,1,0,0,0,2764,2765,5,3,0,0,2765,2767,1,0,0,0,2766,2742,1,0,0,
        0,2766,2743,1,0,0,0,2767,321,1,0,0,0,2768,2773,3,212,106,0,2769,
        2771,5,183,0,0,2770,2769,1,0,0,0,2770,2771,1,0,0,0,2771,2772,1,0,
        0,0,2772,2774,3,214,107,0,2773,2770,1,0,0,0,2774,2775,1,0,0,0,2775,
        2773,1,0,0,0,2775,2776,1,0,0,0,2776,323,1,0,0,0,2777,2779,7,8,0,
        0,2778,2780,5,183,0,0,2779,2778,1,0,0,0,2779,2780,1,0,0,0,2780,2781,
        1,0,0,0,2781,2783,5,9,0,0,2782,2784,5,183,0,0,2783,2782,1,0,0,0,
        2783,2784,1,0,0,0,2784,2785,1,0,0,0,2785,2787,5,106,0,0,2786,2788,
        5,183,0,0,2787,2786,1,0,0,0,2787,2788,1,0,0,0,2788,2789,1,0,0,0,
        2789,2794,3,204,102,0,2790,2792,5,183,0,0,2791,2790,1,0,0,0,2791,
        2792,1,0,0,0,2792,2793,1,0,0,0,2793,2795,3,202,101,0,2794,2791,1,
        0,0,0,2794,2795,1,0,0,0,2795,2800,1,0,0,0,2796,2798,5,183,0,0,2797,
        2796,1,0,0,0,2797,2798,1,0,0,0,2798,2799,1,0,0,0,2799,2801,3,166,
        83,0,2800,2797,1,0,0,0,2800,2801,1,0,0,0,2801,2803,1,0,0,0,2802,
        2804,5,183,0,0,2803,2802,1,0,0,0,2803,2804,1,0,0,0,2804,2805,1,0,
        0,0,2805,2806,5,10,0,0,2806,325,1,0,0,0,2807,2809,5,5,0,0,2808,2810,
        5,183,0,0,2809,2808,1,0,0,0,2809,2810,1,0,0,0,2810,2813,1,0,0,0,
        2811,2814,3,340,170,0,2812,2814,5,161,0,0,2813,2811,1,0,0,0,2813,
        2812,1,0,0,0,2814,327,1,0,0,0,2815,2820,5,58,0,0,2816,2818,5,183,
        0,0,2817,2816,1,0,0,0,2817,2818,1,0,0,0,2818,2819,1,0,0,0,2819,2821,
        3,330,165,0,2820,2817,1,0,0,0,2821,2822,1,0,0,0,2822,2820,1,0,0,
        0,2822,2823,1,0,0,0,2823,2838,1,0,0,0,2824,2826,5,58,0,0,2825,2827,
        5,183,0,0,2826,2825,1,0,0,0,2826,2827,1,0,0,0,2827,2828,1,0,0,0,
        2828,2833,3,244,122,0,2829,2831,5,183,0,0,2830,2829,1,0,0,0,2830,
        2831,1,0,0,0,2831,2832,1,0,0,0,2832,2834,3,330,165,0,2833,2830,1,
        0,0,0,2834,2835,1,0,0,0,2835,2833,1,0,0,0,2835,2836,1,0,0,0,2836,
        2838,1,0,0,0,2837,2815,1,0,0,0,2837,2824,1,0,0,0,2838,2847,1,0,0,
        0,2839,2841,5,183,0,0,2840,2839,1,0,0,0,2840,2841,1,0,0,0,2841,2842,
        1,0,0,0,2842,2844,5,79,0,0,2843,2845,5,183,0,0,2844,2843,1,0,0,0,
        2844,2845,1,0,0,0,2845,2846,1,0,0,0,2846,2848,3,244,122,0,2847,2840,
        1,0,0,0,2847,2848,1,0,0,0,2848,2850,1,0,0,0,2849,2851,5,183,0,0,
        2850,2849,1,0,0,0,2850,2851,1,0,0,0,2851,2852,1,0,0,0,2852,2853,
        5,80,0,0,2853,329,1,0,0,0,2854,2856,5,148,0,0,2855,2857,5,183,0,
        0,2856,2855,1,0,0,0,2856,2857,1,0,0,0,2857,2858,1,0,0,0,2858,2860,
        3,244,122,0,2859,2861,5,183,0,0,2860,2859,1,0,0,0,2860,2861,1,0,
        0,0,2861,2862,1,0,0,0,2862,2864,5,137,0,0,2863,2865,5,183,0,0,2864,
        2863,1,0,0,0,2864,2865,1,0,0,0,2865,2866,1,0,0,0,2866,2867,3,244,
        122,0,2867,331,1,0,0,0,2868,2869,3,348,174,0,2869,333,1,0,0,0,2870,
        2873,3,344,172,0,2871,2873,3,342,171,0,2872,2870,1,0,0,0,2872,2871,
        1,0,0,0,2873,335,1,0,0,0,2874,2877,5,25,0,0,2875,2878,3,348,174,
        0,2876,2878,5,170,0,0,2877,2875,1,0,0,0,2877,2876,1,0,0,0,2878,337,
        1,0,0,0,2879,2881,3,290,145,0,2880,2882,5,183,0,0,2881,2880,1,0,
        0,0,2881,2882,1,0,0,0,2882,2883,1,0,0,0,2883,2884,3,326,163,0,2884,
        339,1,0,0,0,2885,2886,3,346,173,0,2886,341,1,0,0,0,2887,2888,5,170,
        0,0,2888,343,1,0,0,0,2889,2890,7,9,0,0,2890,345,1,0,0,0,2891,2892,
        3,348,174,0,2892,347,1,0,0,0,2893,2899,5,179,0,0,2894,2895,5,182,
        0,0,2895,2899,6,174,-1,0,2896,2899,5,171,0,0,2897,2899,3,350,175,
        0,2898,2893,1,0,0,0,2898,2894,1,0,0,0,2898,2896,1,0,0,0,2898,2897,
        1,0,0,0,2899,349,1,0,0,0,2900,2901,7,10,0,0,2901,351,1,0,0,0,2902,
        2903,7,11,0,0,2903,353,1,0,0,0,2904,2905,7,12,0,0,2905,355,1,0,0,
        0,2906,2907,7,13,0,0,2907,357,1,0,0,0,495,360,364,369,373,378,381,
        385,388,412,418,425,429,433,437,440,444,448,452,457,461,463,470,
        474,483,488,498,502,506,511,524,528,536,540,544,548,556,560,564,
        568,583,588,594,598,601,604,610,614,619,622,627,631,635,640,655,
        659,666,686,690,693,696,699,702,706,711,715,725,729,734,739,744,
        750,754,758,763,770,774,778,781,798,802,806,810,814,817,820,828,
        837,841,846,850,854,858,862,864,868,872,874,882,887,891,895,899,
        903,907,912,930,937,950,957,973,977,986,994,997,1007,1010,1018,1021,
        1027,1030,1036,1051,1069,1076,1083,1094,1117,1126,1132,1136,1141,
        1150,1154,1159,1165,1171,1177,1181,1185,1191,1195,1199,1205,1209,
        1213,1219,1223,1227,1231,1235,1241,1245,1249,1253,1257,1267,1273,
        1280,1285,1291,1296,1313,1319,1325,1329,1333,1342,1356,1361,1366,
        1370,1375,1381,1386,1389,1393,1397,1401,1407,1411,1416,1421,1425,
        1428,1430,1434,1438,1444,1448,1453,1457,1466,1472,1480,1484,1488,
        1492,1499,1503,1507,1511,1514,1517,1524,1530,1534,1539,1546,1549,
        1552,1557,1561,1565,1570,1574,1583,1587,1592,1606,1608,1610,1615,
        1625,1631,1638,1651,1655,1659,1663,1668,1673,1677,1681,1685,1689,
        1693,1699,1703,1707,1711,1716,1722,1725,1731,1734,1740,1744,1748,
        1752,1756,1761,1766,1770,1775,1778,1787,1796,1801,1814,1817,1825,
        1829,1834,1839,1843,1848,1854,1859,1866,1870,1874,1876,1880,1882,
        1886,1888,1894,1900,1904,1907,1910,1916,1919,1922,1926,1932,1935,
        1938,1942,1946,1950,1952,1956,1958,1962,1964,1968,1970,1976,1980,
        1984,1988,1992,1996,2000,2004,2008,2011,2017,2021,2025,2028,2033,
        2038,2042,2046,2049,2052,2057,2062,2065,2068,2071,2074,2077,2081,
        2085,2089,2093,2103,2106,2109,2113,2116,2119,2123,2127,2131,2135,
        2139,2143,2145,2148,2152,2156,2160,2164,2166,2172,2175,2178,2199,
        2209,2219,2224,2228,2235,2239,2243,2247,2251,2259,2263,2267,2271,
        2277,2281,2287,2291,2296,2301,2305,2310,2315,2319,2325,2332,2336,
        2342,2349,2353,2359,2366,2370,2375,2383,2386,2391,2400,2404,2407,
        2420,2423,2428,2442,2446,2450,2455,2458,2462,2467,2479,2483,2487,
        2491,2497,2501,2505,2511,2515,2519,2525,2529,2533,2537,2555,2561,
        2565,2569,2573,2576,2582,2585,2589,2593,2597,2601,2605,2612,2615,
        2619,2625,2629,2635,2639,2643,2648,2652,2656,2660,2665,2668,2671,
        2677,2681,2685,2687,2691,2695,2699,2703,2706,2710,2716,2721,2723,
        2727,2731,2736,2740,2745,2749,2753,2757,2761,2766,2770,2775,2779,
        2783,2787,2791,2794,2797,2800,2803,2809,2813,2817,2822,2826,2830,
        2835,2837,2840,2844,2847,2850,2856,2860,2864,2872,2877,2881,2898
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

export class Ku_StatementsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_ku_Statements;
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
    public kU_CreateUser(): KU_CreateUserContext {
        return this.getTypedRuleContext(KU_CreateUserContext, 0);
    }
    public kU_CreateRole(): KU_CreateRoleContext {
        return this.getTypedRuleContext(KU_CreateRoleContext, 0);
    }
    public kU_CreateNodeTable(): KU_CreateNodeTableContext {
        return this.getTypedRuleContext(KU_CreateNodeTableContext, 0);
    }
    public kU_CreateRelTable(): KU_CreateRelTableContext {
        return this.getTypedRuleContext(KU_CreateRelTableContext, 0);
    }
    public kU_CreateSequence(): KU_CreateSequenceContext {
        return this.getTypedRuleContext(KU_CreateSequenceContext, 0);
    }
    public kU_CreateType(): KU_CreateTypeContext {
        return this.getTypedRuleContext(KU_CreateTypeContext, 0);
    }
    public kU_Drop(): KU_DropContext {
        return this.getTypedRuleContext(KU_DropContext, 0);
    }
    public kU_AlterTable(): KU_AlterTableContext {
        return this.getTypedRuleContext(KU_AlterTableContext, 0);
    }
    public kU_CopyFrom(): KU_CopyFromContext {
        return this.getTypedRuleContext(KU_CopyFromContext, 0);
    }
    public kU_CopyFromByColumn(): KU_CopyFromByColumnContext {
        return this.getTypedRuleContext(KU_CopyFromByColumnContext, 0);
    }
    public kU_CopyTO(): KU_CopyTOContext {
        return this.getTypedRuleContext(KU_CopyTOContext, 0);
    }
    public kU_StandaloneCall(): KU_StandaloneCallContext {
        return this.getTypedRuleContext(KU_StandaloneCallContext, 0);
    }
    public kU_CreateMacro(): KU_CreateMacroContext {
        return this.getTypedRuleContext(KU_CreateMacroContext, 0);
    }
    public kU_CommentOn(): KU_CommentOnContext {
        return this.getTypedRuleContext(KU_CommentOnContext, 0);
    }
    public kU_Transaction(): KU_TransactionContext {
        return this.getTypedRuleContext(KU_TransactionContext, 0);
    }
    public kU_Extension(): KU_ExtensionContext {
        return this.getTypedRuleContext(KU_ExtensionContext, 0);
    }
    public kU_ExportDatabase(): KU_ExportDatabaseContext {
        return this.getTypedRuleContext(KU_ExportDatabaseContext, 0);
    }
    public kU_ImportDatabase(): KU_ImportDatabaseContext {
        return this.getTypedRuleContext(KU_ImportDatabaseContext, 0);
    }
    public kU_AttachDatabase(): KU_AttachDatabaseContext {
        return this.getTypedRuleContext(KU_AttachDatabaseContext, 0);
    }
    public kU_DetachDatabase(): KU_DetachDatabaseContext {
        return this.getTypedRuleContext(KU_DetachDatabaseContext, 0);
    }
    public kU_UseDatabase(): KU_UseDatabaseContext {
        return this.getTypedRuleContext(KU_UseDatabaseContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Statement;
    }
}


export class KU_CopyFromContext extends antlr.ParserRuleContext {
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
    public kU_ScanSource(): KU_ScanSourceContext {
        return this.getTypedRuleContext(KU_ScanSourceContext, 0);
    }
    public kU_ColumnNames(): KU_ColumnNamesContext {
        return this.getTypedRuleContext(KU_ColumnNamesContext, 0);
    }
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CopyFrom;
    }
}


export class KU_ColumnNamesContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_ColumnNames;
    }
}


export class KU_ScanSourceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_FilePaths(): KU_FilePathsContext {
        return this.getTypedRuleContext(KU_FilePathsContext, 0);
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
        return CypherParser.RULE_kU_ScanSource;
    }
}


export class KU_CopyFromByColumnContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_CopyFromByColumn;
    }
}


export class KU_CopyTOContext extends antlr.ParserRuleContext {
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
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CopyTO;
    }
}


export class KU_ExportDatabaseContext extends antlr.ParserRuleContext {
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
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ExportDatabase;
    }
}


export class KU_ImportDatabaseContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_ImportDatabase;
    }
}


export class KU_AttachDatabaseContext extends antlr.ParserRuleContext {
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
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AttachDatabase;
    }
}


export class KU_OptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
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
        return CypherParser.RULE_kU_Option;
    }
}


export class KU_OptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_Option__list(): KU_OptionContext[] {
        return this.getTypedRuleContexts(KU_OptionContext);
    }
    public kU_Option(i: number): KU_OptionContext {
        return this.getTypedRuleContext(KU_OptionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Options;
    }
}


export class KU_DetachDatabaseContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_DetachDatabase;
    }
}


export class KU_UseDatabaseContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_UseDatabase;
    }
}


export class KU_StandaloneCallContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_StandaloneCall;
    }
}


export class KU_CommentOnContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_CommentOn;
    }
}


export class KU_CreateMacroContext extends antlr.ParserRuleContext {
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
    public kU_PositionalArgs(): KU_PositionalArgsContext {
        return this.getTypedRuleContext(KU_PositionalArgsContext, 0);
    }
    public kU_DefaultArg__list(): KU_DefaultArgContext[] {
        return this.getTypedRuleContexts(KU_DefaultArgContext);
    }
    public kU_DefaultArg(i: number): KU_DefaultArgContext {
        return this.getTypedRuleContext(KU_DefaultArgContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateMacro;
    }
}


export class KU_PositionalArgsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_PositionalArgs;
    }
}


export class KU_DefaultArgContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_DefaultArg;
    }
}


export class KU_FilePathsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_FilePaths;
    }
}


export class KU_IfNotExistsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_IfNotExists;
    }
}


export class KU_CreateNodeTableContext extends antlr.ParserRuleContext {
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
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public oC_Query(): OC_QueryContext {
        return this.getTypedRuleContext(OC_QueryContext, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public kU_CreateNodeConstraint(): KU_CreateNodeConstraintContext {
        return this.getTypedRuleContext(KU_CreateNodeConstraintContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateNodeTable;
    }
}


export class KU_CreateRelTableContext extends antlr.ParserRuleContext {
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
    public kU_FromToConnections(): KU_FromToConnectionsContext {
        return this.getTypedRuleContext(KU_FromToConnectionsContext, 0);
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public kU_PropertyDefinitions(): KU_PropertyDefinitionsContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionsContext, 0);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateRelTable;
    }
}


export class KU_FromToConnectionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_FromToConnection__list(): KU_FromToConnectionContext[] {
        return this.getTypedRuleContexts(KU_FromToConnectionContext);
    }
    public kU_FromToConnection(i: number): KU_FromToConnectionContext {
        return this.getTypedRuleContext(KU_FromToConnectionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_FromToConnections;
    }
}


export class KU_FromToConnectionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_FromToConnection;
    }
}


export class KU_CreateSequenceContext extends antlr.ParserRuleContext {
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public kU_SequenceOptions__list(): KU_SequenceOptionsContext[] {
        return this.getTypedRuleContexts(KU_SequenceOptionsContext);
    }
    public kU_SequenceOptions(i: number): KU_SequenceOptionsContext {
        return this.getTypedRuleContext(KU_SequenceOptionsContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateSequence;
    }
}


export class KU_CreateTypeContext extends antlr.ParserRuleContext {
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
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateType;
    }
}


export class KU_SequenceOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_IncrementBy(): KU_IncrementByContext {
        return this.getTypedRuleContext(KU_IncrementByContext, 0);
    }
    public kU_MinValue(): KU_MinValueContext {
        return this.getTypedRuleContext(KU_MinValueContext, 0);
    }
    public kU_MaxValue(): KU_MaxValueContext {
        return this.getTypedRuleContext(KU_MaxValueContext, 0);
    }
    public kU_StartWith(): KU_StartWithContext {
        return this.getTypedRuleContext(KU_StartWithContext, 0);
    }
    public kU_Cycle(): KU_CycleContext {
        return this.getTypedRuleContext(KU_CycleContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_SequenceOptions;
    }
}


export class KU_WithPasswdContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_WithPasswd;
    }
}


export class KU_CreateUserContext extends antlr.ParserRuleContext {
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public kU_WithPasswd(): KU_WithPasswdContext {
        return this.getTypedRuleContext(KU_WithPasswdContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateUser;
    }
}


export class KU_CreateRoleContext extends antlr.ParserRuleContext {
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
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_CreateRole;
    }
}


export class KU_IncrementByContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_IncrementBy;
    }
}


export class KU_MinValueContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_MinValue;
    }
}


export class KU_MaxValueContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_MaxValue;
    }
}


export class KU_StartWithContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_StartWith;
    }
}


export class KU_CycleContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_Cycle;
    }
}


export class KU_IfExistsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_IfExists;
    }
}


export class KU_DropContext extends antlr.ParserRuleContext {
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
    public kU_IfExists(): KU_IfExistsContext {
        return this.getTypedRuleContext(KU_IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Drop;
    }
}


export class KU_AlterTableContext extends antlr.ParserRuleContext {
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
    public kU_AlterOptions(): KU_AlterOptionsContext {
        return this.getTypedRuleContext(KU_AlterOptionsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AlterTable;
    }
}


export class KU_AlterOptionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_AddProperty(): KU_AddPropertyContext {
        return this.getTypedRuleContext(KU_AddPropertyContext, 0);
    }
    public kU_DropProperty(): KU_DropPropertyContext {
        return this.getTypedRuleContext(KU_DropPropertyContext, 0);
    }
    public kU_RenameTable(): KU_RenameTableContext {
        return this.getTypedRuleContext(KU_RenameTableContext, 0);
    }
    public kU_RenameProperty(): KU_RenamePropertyContext {
        return this.getTypedRuleContext(KU_RenamePropertyContext, 0);
    }
    public kU_AddFromToConnection(): KU_AddFromToConnectionContext {
        return this.getTypedRuleContext(KU_AddFromToConnectionContext, 0);
    }
    public kU_DropFromToConnection(): KU_DropFromToConnectionContext {
        return this.getTypedRuleContext(KU_DropFromToConnectionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AlterOptions;
    }
}


export class KU_AddPropertyContext extends antlr.ParserRuleContext {
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
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public kU_Default(): KU_DefaultContext {
        return this.getTypedRuleContext(KU_DefaultContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AddProperty;
    }
}


export class KU_DefaultContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_Default;
    }
}


export class KU_DropPropertyContext extends antlr.ParserRuleContext {
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
    public kU_IfExists(): KU_IfExistsContext {
        return this.getTypedRuleContext(KU_IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DropProperty;
    }
}


export class KU_RenameTableContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_RenameTable;
    }
}


export class KU_RenamePropertyContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_RenameProperty;
    }
}


export class KU_AddFromToConnectionContext extends antlr.ParserRuleContext {
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
    public kU_FromToConnection(): KU_FromToConnectionContext {
        return this.getTypedRuleContext(KU_FromToConnectionContext, 0);
    }
    public kU_IfNotExists(): KU_IfNotExistsContext {
        return this.getTypedRuleContext(KU_IfNotExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AddFromToConnection;
    }
}


export class KU_DropFromToConnectionContext extends antlr.ParserRuleContext {
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
    public kU_FromToConnection(): KU_FromToConnectionContext {
        return this.getTypedRuleContext(KU_FromToConnectionContext, 0);
    }
    public kU_IfExists(): KU_IfExistsContext {
        return this.getTypedRuleContext(KU_IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DropFromToConnection;
    }
}


export class KU_ColumnDefinitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_ColumnDefinition__list(): KU_ColumnDefinitionContext[] {
        return this.getTypedRuleContexts(KU_ColumnDefinitionContext);
    }
    public kU_ColumnDefinition(i: number): KU_ColumnDefinitionContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ColumnDefinitions;
    }
}


export class KU_ColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
        return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ColumnDefinition;
    }
}


export class KU_PropertyDefinitionsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_PropertyDefinition__list(): KU_PropertyDefinitionContext[] {
        return this.getTypedRuleContexts(KU_PropertyDefinitionContext);
    }
    public kU_PropertyDefinition(i: number): KU_PropertyDefinitionContext {
        return this.getTypedRuleContext(KU_PropertyDefinitionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_PropertyDefinitions;
    }
}


export class KU_PropertyDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_ColumnDefinition(): KU_ColumnDefinitionContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public kU_Default(): KU_DefaultContext {
        return this.getTypedRuleContext(KU_DefaultContext, 0);
    }
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(CypherParser.PRIMARY, 0);
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(CypherParser.KEY, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_PropertyDefinition;
    }
}


export class KU_CreateNodeConstraintContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_CreateNodeConstraint;
    }
}


export class KU_UnionTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UNION(): antlr.TerminalNode {
        return this.getToken(CypherParser.UNION, 0);
    }
    public kU_ColumnDefinitions(): KU_ColumnDefinitionsContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionsContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_UnionType;
    }
}


export class KU_StructTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRUCT(): antlr.TerminalNode {
        return this.getToken(CypherParser.STRUCT, 0);
    }
    public kU_ColumnDefinitions(): KU_ColumnDefinitionsContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionsContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_StructType;
    }
}


export class KU_MapTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MAP(): antlr.TerminalNode {
        return this.getToken(CypherParser.MAP, 0);
    }
    public kU_DataType__list(): KU_DataTypeContext[] {
        return this.getTypedRuleContexts(KU_DataTypeContext);
    }
    public kU_DataType(i: number): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_MapType;
    }
}


export class KU_DecimalTypeContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_DecimalType;
    }
}


export class KU_DataTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
    }
    public kU_UnionType(): KU_UnionTypeContext {
        return this.getTypedRuleContext(KU_UnionTypeContext, 0);
    }
    public kU_StructType(): KU_StructTypeContext {
        return this.getTypedRuleContext(KU_StructTypeContext, 0);
    }
    public kU_MapType(): KU_MapTypeContext {
        return this.getTypedRuleContext(KU_MapTypeContext, 0);
    }
    public kU_DecimalType(): KU_DecimalTypeContext {
        return this.getTypedRuleContext(KU_DecimalTypeContext, 0);
    }
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
    }
    public kU_ListIdentifiers(): KU_ListIdentifiersContext {
        return this.getTypedRuleContext(KU_ListIdentifiersContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_DataType;
    }
}


export class KU_ListIdentifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_ListIdentifier__list(): KU_ListIdentifierContext[] {
        return this.getTypedRuleContexts(KU_ListIdentifierContext);
    }
    public kU_ListIdentifier(i: number): KU_ListIdentifierContext {
        return this.getTypedRuleContext(KU_ListIdentifierContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ListIdentifiers;
    }
}


export class KU_ListIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_IntegerLiteral(): OC_IntegerLiteralContext {
        return this.getTypedRuleContext(OC_IntegerLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ListIdentifier;
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


export class KU_TransactionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_Transaction;
    }
}


export class KU_ExtensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_LoadExtension(): KU_LoadExtensionContext {
        return this.getTypedRuleContext(KU_LoadExtensionContext, 0);
    }
    public kU_InstallExtension(): KU_InstallExtensionContext {
        return this.getTypedRuleContext(KU_InstallExtensionContext, 0);
    }
    public kU_UninstallExtension(): KU_UninstallExtensionContext {
        return this.getTypedRuleContext(KU_UninstallExtensionContext, 0);
    }
    public kU_UpdateExtension(): KU_UpdateExtensionContext {
        return this.getTypedRuleContext(KU_UpdateExtensionContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Extension;
    }
}


export class KU_LoadExtensionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_LoadExtension;
    }
}


export class KU_InstallExtensionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_InstallExtension;
    }
}


export class KU_UninstallExtensionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_UninstallExtension;
    }
}


export class KU_UpdateExtensionContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_UpdateExtension;
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
    public kU_QueryPart__list(): KU_QueryPartContext[] {
        return this.getTypedRuleContexts(KU_QueryPartContext);
    }
    public kU_QueryPart(i: number): KU_QueryPartContext {
        return this.getTypedRuleContext(KU_QueryPartContext, i);
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


export class KU_QueryPartContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_QueryPart;
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
    public kU_InQueryCall(): KU_InQueryCallContext {
        return this.getTypedRuleContext(KU_InQueryCallContext, 0);
    }
    public kU_LoadFrom(): KU_LoadFromContext {
        return this.getTypedRuleContext(KU_LoadFromContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ReadingClause;
    }
}


export class KU_LoadFromContext extends antlr.ParserRuleContext {
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
    public kU_ScanSource(): KU_ScanSourceContext {
        return this.getTypedRuleContext(KU_ScanSourceContext, 0);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(CypherParser.WITH, 0);
    }
    public HEADERS(): antlr.TerminalNode {
        return this.getToken(CypherParser.HEADERS, 0);
    }
    public kU_ColumnDefinitions(): KU_ColumnDefinitionsContext {
        return this.getTypedRuleContext(KU_ColumnDefinitionsContext, 0);
    }
    public kU_Options(): KU_OptionsContext {
        return this.getTypedRuleContext(KU_OptionsContext, 0);
    }
    public oC_Where(): OC_WhereContext {
        return this.getTypedRuleContext(OC_WhereContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_LoadFrom;
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


export class KU_InQueryCallContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_InQueryCall;
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
    public kU_Hint(): KU_HintContext {
        return this.getTypedRuleContext(KU_HintContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_Match;
    }
}


export class KU_HintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HINT(): antlr.TerminalNode {
        return this.getToken(CypherParser.HINT, 0);
    }
    public SP(): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, 0);
    }
    public kU_JoinNode(): KU_JoinNodeContext {
        return this.getTypedRuleContext(KU_JoinNodeContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_Hint;
    }
}


export class KU_JoinNodeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_JoinNode__list(): KU_JoinNodeContext[] {
        return this.getTypedRuleContexts(KU_JoinNodeContext);
    }
    public kU_JoinNode(i: number): KU_JoinNodeContext {
        return this.getTypedRuleContext(KU_JoinNodeContext, i);
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
        return CypherParser.RULE_kU_JoinNode;
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
    public kU_Properties(): KU_PropertiesContext {
        return this.getTypedRuleContext(KU_PropertiesContext, 0);
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
    public kU_Properties(): KU_PropertiesContext {
        return this.getTypedRuleContext(KU_PropertiesContext, 0);
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
    public kU_RecursiveDetail(): KU_RecursiveDetailContext {
        return this.getTypedRuleContext(KU_RecursiveDetailContext, 0);
    }
    public kU_Properties(): KU_PropertiesContext {
        return this.getTypedRuleContext(KU_PropertiesContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_RelationshipDetail;
    }
}


export class KU_PropertiesContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_Properties;
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


export class KU_RecursiveDetailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public kU_RecursiveType(): KU_RecursiveTypeContext {
        return this.getTypedRuleContext(KU_RecursiveTypeContext, 0);
    }
    public oC_RangeLiteral(): OC_RangeLiteralContext {
        return this.getTypedRuleContext(OC_RangeLiteralContext, 0);
    }
    public kU_RecursiveComprehension(): KU_RecursiveComprehensionContext {
        return this.getTypedRuleContext(KU_RecursiveComprehensionContext, 0);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RecursiveDetail;
    }
}


export class KU_RecursiveTypeContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_RecursiveType;
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


export class KU_RecursiveComprehensionContext extends antlr.ParserRuleContext {
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
    public kU_RecursiveProjectionItems__list(): KU_RecursiveProjectionItemsContext[] {
        return this.getTypedRuleContexts(KU_RecursiveProjectionItemsContext);
    }
    public kU_RecursiveProjectionItems(i: number): KU_RecursiveProjectionItemsContext {
        return this.getTypedRuleContext(KU_RecursiveProjectionItemsContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_RecursiveComprehension;
    }
}


export class KU_RecursiveProjectionItemsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_RecursiveProjectionItems;
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
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
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
    public kU_BitwiseOrOperatorExpression__list(): KU_BitwiseOrOperatorExpressionContext[] {
        return this.getTypedRuleContexts(KU_BitwiseOrOperatorExpressionContext);
    }
    public kU_BitwiseOrOperatorExpression(i: number): KU_BitwiseOrOperatorExpressionContext {
        return this.getTypedRuleContext(KU_BitwiseOrOperatorExpressionContext, i);
    }
    public kU_ComparisonOperator__list(): KU_ComparisonOperatorContext[] {
        return this.getTypedRuleContexts(KU_ComparisonOperatorContext);
    }
    public kU_ComparisonOperator(i: number): KU_ComparisonOperatorContext {
        return this.getTypedRuleContext(KU_ComparisonOperatorContext, i);
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


export class KU_ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_ComparisonOperator;
    }
}


export class KU_BitwiseOrOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_BitwiseAndOperatorExpression__list(): KU_BitwiseAndOperatorExpressionContext[] {
        return this.getTypedRuleContexts(KU_BitwiseAndOperatorExpressionContext);
    }
    public kU_BitwiseAndOperatorExpression(i: number): KU_BitwiseAndOperatorExpressionContext {
        return this.getTypedRuleContext(KU_BitwiseAndOperatorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_BitwiseOrOperatorExpression;
    }
}


export class KU_BitwiseAndOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_BitShiftOperatorExpression__list(): KU_BitShiftOperatorExpressionContext[] {
        return this.getTypedRuleContexts(KU_BitShiftOperatorExpressionContext);
    }
    public kU_BitShiftOperatorExpression(i: number): KU_BitShiftOperatorExpressionContext {
        return this.getTypedRuleContext(KU_BitShiftOperatorExpressionContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_BitwiseAndOperatorExpression;
    }
}


export class KU_BitShiftOperatorExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public oC_AddOrSubtractExpression__list(): OC_AddOrSubtractExpressionContext[] {
        return this.getTypedRuleContexts(OC_AddOrSubtractExpressionContext);
    }
    public oC_AddOrSubtractExpression(i: number): OC_AddOrSubtractExpressionContext {
        return this.getTypedRuleContext(OC_AddOrSubtractExpressionContext, i);
    }
    public kU_BitShiftOperator__list(): KU_BitShiftOperatorContext[] {
        return this.getTypedRuleContexts(KU_BitShiftOperatorContext);
    }
    public kU_BitShiftOperator(i: number): KU_BitShiftOperatorContext {
        return this.getTypedRuleContext(KU_BitShiftOperatorContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_BitShiftOperatorExpression;
    }
}


export class KU_BitShiftOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_BitShiftOperator;
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
    public kU_AddOrSubtractOperator__list(): KU_AddOrSubtractOperatorContext[] {
        return this.getTypedRuleContexts(KU_AddOrSubtractOperatorContext);
    }
    public kU_AddOrSubtractOperator(i: number): KU_AddOrSubtractOperatorContext {
        return this.getTypedRuleContext(KU_AddOrSubtractOperatorContext, i);
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


export class KU_AddOrSubtractOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MINUS(): antlr.TerminalNode {
        return this.getToken(CypherParser.MINUS, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_AddOrSubtractOperator;
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
    public kU_MultiplyDivideModuloOperator__list(): KU_MultiplyDivideModuloOperatorContext[] {
        return this.getTypedRuleContexts(KU_MultiplyDivideModuloOperatorContext);
    }
    public kU_MultiplyDivideModuloOperator(i: number): KU_MultiplyDivideModuloOperatorContext {
        return this.getTypedRuleContext(KU_MultiplyDivideModuloOperatorContext, i);
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


export class KU_MultiplyDivideModuloOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STAR(): antlr.TerminalNode {
        return this.getToken(CypherParser.STAR, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_MultiplyDivideModuloOperator;
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
    public kU_StructLiteral(): KU_StructLiteralContext {
        return this.getTypedRuleContext(KU_StructLiteralContext, 0);
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
    public kU_ListEntry__list(): KU_ListEntryContext[] {
        return this.getTypedRuleContexts(KU_ListEntryContext);
    }
    public kU_ListEntry(i: number): KU_ListEntryContext {
        return this.getTypedRuleContext(KU_ListEntryContext, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_ListLiteral;
    }
}


export class KU_ListEntryContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_ListEntry;
    }
}


export class KU_StructLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_StructField__list(): KU_StructFieldContext[] {
        return this.getTypedRuleContexts(KU_StructFieldContext);
    }
    public kU_StructField(i: number): KU_StructFieldContext {
        return this.getTypedRuleContext(KU_StructFieldContext, i);
    }
    public SP__list(): antlr.TerminalNode[] {
            return this.getTokens(CypherParser.SP);
    }
    public SP(i: number): antlr.TerminalNode {
        return this.getToken(CypherParser.SP, i);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_StructLiteral;
    }
}


export class KU_StructFieldContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_StructField;
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
    public kU_FunctionParameter__list(): KU_FunctionParameterContext[] {
        return this.getTypedRuleContexts(KU_FunctionParameterContext);
    }
    public kU_FunctionParameter(i: number): KU_FunctionParameterContext {
        return this.getTypedRuleContext(KU_FunctionParameterContext, i);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(CypherParser.AS, 0);
    }
    public kU_DataType(): KU_DataTypeContext {
        return this.getTypedRuleContext(KU_DataTypeContext, 0);
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


export class KU_FunctionParameterContext extends antlr.ParserRuleContext {
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
    public kU_LambdaParameter(): KU_LambdaParameterContext {
        return this.getTypedRuleContext(KU_LambdaParameterContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_kU_FunctionParameter;
    }
}


export class KU_LambdaParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public kU_LambdaVars(): KU_LambdaVarsContext {
        return this.getTypedRuleContext(KU_LambdaVarsContext, 0);
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
        return CypherParser.RULE_kU_LambdaParameter;
    }
}


export class KU_LambdaVarsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_LambdaVars;
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
    public kU_Hint(): KU_HintContext {
        return this.getTypedRuleContext(KU_HintContext, 0);
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
    public oC_SchemaName(): OC_SchemaNameContext {
        return this.getTypedRuleContext(OC_SchemaNameContext, 0);
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
    public oC_SymbolicName(): OC_SymbolicNameContext {
        return this.getTypedRuleContext(OC_SymbolicNameContext, 0);
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
    public kU_NonReservedKeywords(): KU_NonReservedKeywordsContext {
        return this.getTypedRuleContext(KU_NonReservedKeywordsContext, 0);
    }
    public override get ruleIndex(): number {
        return CypherParser.RULE_oC_SymbolicName;
    }
}


export class KU_NonReservedKeywordsContext extends antlr.ParserRuleContext {
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
        return CypherParser.RULE_kU_NonReservedKeywords;
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
