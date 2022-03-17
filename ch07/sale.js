function showPrice(){
    var op = document.querySelector("#originalPrice").value;
    var dr = document.querySelector("#discountRate").value;

    if(op > 0 && dr > 0) {
        var savedPrice = op * (dr / 100);
        var resultPrice = op - savedPrice;
    }

    document.querySelector("#showResult").innerHTML = "상품의 기존 가격은 " + op + "원이고, 할인율은 " + dr + "%입니다. " + savedPrice + "원을 절약한 " + resultPrice + "원에 상품을 살 수 있습니다.";
}