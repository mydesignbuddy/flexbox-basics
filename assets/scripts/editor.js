// create preview
const preview = document.getElementById("preview");
const htmlPreviewElement = document.createElement("div");
htmlPreviewElement.id = "preview-html";
preview.append(htmlPreviewElement);
const cssPreviewElement = document.createElement("style");
cssPreviewElement.id = "preview-style";
preview.append(cssPreviewElement);

// create IDE
const ide = document.getElementById("ide");

const htmlEditorElement = document.createElement("div");
htmlEditorElement.id = "html-editor";
htmlEditorElement.className = "editor";
ide.append(htmlEditorElement);

const cssEditorElement = document.createElement("div");
cssEditorElement.id = "css-editor";
cssEditorElement.className = "editor";
ide.append(cssEditorElement);

const htmlEditor = ace.edit("html-editor");
htmlEditor.setTheme("ace/theme/monokai");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.session.setValue(
  document.getElementById("default-html-code").innerText
);
const loadHtmlCode = () => {
  document.getElementById("preview-html").innerHTML = htmlEditor.getValue();
};
loadHtmlCode();
htmlEditor.session.on("change", loadHtmlCode);

const cssEditor = ace.edit("css-editor");
cssEditor.setTheme("ace/theme/monokai");
cssEditor.session.setMode("ace/mode/css");
cssEditor.session.setValue(
  document.getElementById("default-css-code").innerText
);
const loadCSSCode = () => {
  document.getElementById("preview-style").innerText = cssEditor.getValue();
};
loadCSSCode();
cssEditor.session.on("change", loadCSSCode);
