function calc(){
    var currentYear = 2022;
    var birthYear = prompt("태어난 년도입력", "YYYY");
    var age = 0; //초기화
    age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML = "당신의 나이는" + age + "세 입니다.";
}