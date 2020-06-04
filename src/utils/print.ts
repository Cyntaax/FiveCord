let debug_state: boolean = false;

export function Print(message: any, debug: Boolean = false, error: Boolean = false) {
    if(debug == true) {
        if(debug_state == true) {
            return console.log("[DEBUG] " + message)
        } else {
            return false;
        }
    }
    if(error == true) {
        return console.log("[ERROR] " + message)
    }
    return console.log("[Fivecord] " + message)
}