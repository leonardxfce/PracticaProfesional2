Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    loop: false,
    mouseWheel: true,
    rollingLinks: true,
    theme: Reveal.getQueryHash().theme || 'default',
    transition: 'fade',
    dependencies: [
        { src: 'highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } }
    ]
});