// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {

    // 自分のhostnameに変更する
    var url = "http://90202024n.local:8000/result/type-A.txt";

    // xhrの準備
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = drawResult;

    // xhrでテキストファイルを取得する
    xhr.open( "get", url, true );
    xhr.send();

    function drawResult() {
        if((xhr.readyState === 4) && (xhr.status === 200)) {
            alert(xhr.responseText);
        }
    }
}
