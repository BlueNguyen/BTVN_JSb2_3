function tinhHCN(){
    let num1= +document.getElementById("num1").value;
    let num2= +document.getElementById("num2").value;
    let chuVi= (num1+ num2)*2;
    let area= num1*num2;

    document.getElementById("result").innerHTML="Chu vi là: "+ chuVi+ " ; " +"Diện tích là: "+ area;
}