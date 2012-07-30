
function clearInput(inputControl) {
    inputControl.value = "";
}

function playUrl(isSoftWare) {
    var url = document.getElementById("playtext").value;
    url = url.trim();
    
    if (isSoftWare)
        window.open("kcplay://" + url);
    else {
        url = base64encode(utf16to8(encodeURIComponent(url)));
        window.open("http://lbspace.kcplayer.com/online/?playUrl=" + url);
    }
}