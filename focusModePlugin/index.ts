import "./styles.css";
import definePlugin from "@utils/types";

function handleKeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key.toLowerCase() === "l") {
        event.preventDefault();
        document.body.classList.toggle("focus_mode");
    }
}

export default definePlugin({
    name: "FocusMode",
    description: "Hide Discord sidebar to focus on the current conversation",
    authors: [
        {
            name: "Tammy"
        }
    ],

    start() {
        document.addEventListener("keydown", handleKeydown);
    },

    stop() {
        document.removeEventListener("keydown", handleKeydown);
        document.body.classList.remove("focus_mode");
    }
});