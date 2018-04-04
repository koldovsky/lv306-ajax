document.getElementById('fetch-html')
    .addEventListener('click', fetchHtml);
    
function fetchHtml() {
    fetch('ajax-text.html')
        .then( res => res.text() )
        .then( html => document.getElementById('html-placeholder').innerHTML = html);
}
