const ComposerHelpContentComponent = Em.Component.extend({
    tagName: "div",
    rowContents: null,
    
    this.set("rowContents", this.get("model.parsedContent"));
});

export default ComposerHelpContentComponent;
