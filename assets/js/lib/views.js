class View {
    constructor(el, template) {
        this.el = el
        this.template = template
        this.changeHandler = null;
        this.clickHandler = null
    }
    addEventListeners(selector, event, handler) {
        Array.prototype.forEach.call(
            selector,
            function(el, index) {
                el.addEventListener(event, handler);
            }
        );
    }
    render(data) {
        this.el.innerHTML = this.template.postsTemplate(data).join("")
        var select = document.querySelectorAll(".select-container select")
        var button = document.querySelectorAll('.btn');
        this.addEventListeners(select, "change", this.changeHandler)
        this.addEventListeners(button, "click", this.clickHandler)
    }
}