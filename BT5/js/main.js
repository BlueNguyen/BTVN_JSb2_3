function tinhSum(){
    let num= +document.getElementById("num").value;
    let ten= Math.floor(num/10);
    let unit= num%10;
    let sum= ten+ unit;

    document.getElementById("result").innerHTML="Tổng 2 ký số của số "+num+ " là: " +sum;
}
