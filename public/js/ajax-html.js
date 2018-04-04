document.getElementById('page-loaded')
    .innerText = (new Date()).toLocaleTimeString();

document.getElementById('get-html')
    .addEventListener('click', getHTML);
    
function getHTML() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('html-placeholder')
                .innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'ajax-text.html?r='+Math.random(), true);
    xhr.send();
}
