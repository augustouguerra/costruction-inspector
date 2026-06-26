"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatus = exports.TradeType = exports.UserRole = void 0;
exports.UserRole = {
    architect: 'architect',
    tradesperson: 'tradesperson',
    project_manager: 'project_manager',
    admin: 'admin'
};
exports.TradeType = {
    plumber: 'plumber',
    electrician: 'electrician',
    carpenter: 'carpenter',
    painter: 'painter',
    hvac: 'hvac',
    mason: 'mason',
    tiler: 'tiler',
    glazier: 'glazier',
    general: 'general',
    unknown: 'unknown'
};
exports.IssueStatus = {
    open: 'open',
    acknowledged: 'acknowledged',
    in_progress: 'in_progress',
    resolved: 'resolved',
    rejected: 'rejected'
};
//# sourceMappingURL=enums.js.map