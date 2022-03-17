window.onload = function() {
    var list = "";  //문자열 타입

    //list 변수에 문자열을 누적하는 중
    list += "<ul>";
    list += "   <li>안녕</li>";
    list += "   <li>안녕 자바스크립트</li>";
    list += "</ul>";

    // 문서에 출력하라.
    document.body.innerHTML = list;
}