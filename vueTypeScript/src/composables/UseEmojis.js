import { reactive } from "vue";
const files = import.meta.globEager("../assets/icons/emojis/*.svg");
export default function UseEmojis() {
    const emojis = reactive([]);
    for (const path in files) {
        const component = files[path];
        const name = path
            .replace("../assets/icons/emojis/", "")
            .replace("-emoji.svg", "");
        emojis.push({ name, component });
    }
    /**
     * Get a single emoji component by name
     */
    const findEmoji = (name) => emojis.find((emoji) => emoji.name === name)?.component;
    return { emojis, findEmoji };
}
