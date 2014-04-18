// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {

    // 自分のhostnameに変更する
    var path = "http://90202024n.local:8000/result/";

    // xhrの準備
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = drawResult;

    $('#bloodTypeBox').change(function() {
        // 選択された値を取得する
	var selectedOption = $('#bloodTypeBox option:selected')[0];
        var selectedBloodType = selectedOption.value;
        //alert (selectedBloodType);

        if (selectedBloodType !== "default") {
            // urlを作成し、xhrでtxtファイルを取得する
            var url = path + "type-" + selectedBloodType + ".txt";
            xhr.open("get", url, true);
            xhr.send();
        }
    });

    function drawResult() {
        if((xhr.readyState === 4) && (xhr.status === 200)) {
            //alert(xhr.responseText);
            var result = xhr.responseText.trim();
            var area = $('#resultArea');
            if (result === '大吉') {
                area.css('font-size', '80px').css('color', 'red');
            }
            else {
		area.css('font-size', '').css('color', '');
            }
            area.text(result);
        }
    }
}
