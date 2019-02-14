import marked from "marked";

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
    return '<a target="_blank" href="' + href + '" title="' + title + '">' + text + "</a>";
};

marked.setOptions({
    breaks: true,
    gfm: true
});

export { marked, renderer };
