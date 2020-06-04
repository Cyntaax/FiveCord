"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
var debug_state = false;
function Print(message, debug, error) {
    if (debug === void 0) { debug = false; }
    if (error === void 0) { error = false; }
    if (debug == true) {
        if (debug_state == true) {
            return console.log("[DEBUG] " + message);
        }
        else {
            return false;
        }
    }
    if (error == true) {
        return console.log("[ERROR] " + message);
    }
    return console.log("[Fivecord] " + message);
}
exports.Print = Print;
//# sourceMappingURL=print.js.map