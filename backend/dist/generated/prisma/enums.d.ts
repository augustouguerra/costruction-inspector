export declare const UserRole: {
    readonly architect: "architect";
    readonly tradesperson: "tradesperson";
    readonly project_manager: "project_manager";
    readonly admin: "admin";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const TradeType: {
    readonly plumber: "plumber";
    readonly electrician: "electrician";
    readonly carpenter: "carpenter";
    readonly painter: "painter";
    readonly hvac: "hvac";
    readonly mason: "mason";
    readonly tiler: "tiler";
    readonly glazier: "glazier";
    readonly general: "general";
    readonly unknown: "unknown";
};
export type TradeType = (typeof TradeType)[keyof typeof TradeType];
export declare const IssueStatus: {
    readonly open: "open";
    readonly acknowledged: "acknowledged";
    readonly in_progress: "in_progress";
    readonly resolved: "resolved";
    readonly rejected: "rejected";
};
export type IssueStatus = (typeof IssueStatus)[keyof typeof IssueStatus];
