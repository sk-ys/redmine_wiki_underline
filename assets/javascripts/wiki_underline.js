(() => {
  if (typeof jsToolBar === "undefined") return;
  if (jsToolBar.prototype.elements["ins"] !== undefined) return;

  const underlineButton = {
    type: "button",
    title: "Underline",
    shortcut: "u",
    fn: {
      wiki: function () {
        this.singleTag("<ins>", "</ins>");
      },
    },
  };

  const jstbElements = {};
  for (const e in jsToolBar.prototype.elements) {
    jstbElements[e] = jsToolBar.prototype.elements[e];
    if (e === "em") {
      // Insert underline button after em
      jstbElements["ins"] = underlineButton;
    }
  }
  jsToolBar.prototype.elements = jstbElements;
})();
