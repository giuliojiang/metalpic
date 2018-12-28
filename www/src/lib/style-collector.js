class StyleCollector {

    constructor() {
        this.alreadyRegistered = new Set(); // Set<string>
        this.styles = document.createElement("div");
        this.addToDom();
    }

    async addToDom() {
        while (document.body == null) {
            await utils.sleep(10);
        }

        let body = document.body;
        if (body.firstChild) {
            // Add before the first child
            body.insertBefore(this.styles, body.firstChild);
        } else {
            // Insert
            body.appendChild(this.styles);
        }
    }

    // name: string, name of the element registering the style
    // value: string, DOM string like <style></style>
    register(name, value) {
        if (this.alreadyRegistered.has(name)) {
            return;
        }
        this.alreadyRegistered.add(name);
        this.styles.innerHTML += value;
    }
        
}

var metalpicStyleCollector = new StyleCollector();

export {
    metalpicStyleCollector
}