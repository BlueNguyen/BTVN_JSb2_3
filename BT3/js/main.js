function getResult(){
    const USD= 23500;
    let from= document.getElementById("idFrom").value;
    let to= document.getElementById("idTo").value;
    let num= +document.getElementById("idInput").value;

    if(from=="USD" && to=="USD"){
        document.getElementById("result").innerHTML =
          "Số tiền quy đổi là: " + num + " USD";
    } else if (from=="VND" && to=="VND"){
        document.getElementById("result").innerHTML =
          "Số tiền quy đổi là: " + num + " VND";
    } else if (from=="USD" && to=="VND"){
        document.getElementById("result").innerHTML =
          "Số tiền quy đổi là: " + (num * USD).toLocaleString("en-US") + " đ";
    }else{
        document.getElementById("result").innerHTML =
          "Số tiền quy đổi là: " + num / USD + " USD";
    }
}