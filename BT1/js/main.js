function tinhTien(){
let number = +document.getElementById("number").value;
let base = +document.getElementById("base").value;
let wagePay = base * number;

wagePay = wagePay.toLocaleString("en-US");
document.getElementById("result").innerHTML="Tiền lương cho "+ number+ " ngày làm là: "+wagePay+" đ";

}

