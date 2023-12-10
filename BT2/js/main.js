// MÔ HÌNH 3 KHỐI
// Input: 5 số thực nhập vào
// Giải: B1: tạo biến num1, num2, num3, num4, num5 lần lượt là giá trị 5 số thực nhập vào  & biến aver lưu giá trị Trung bình của 5 số
//       B2: gán giá trị cho num1, num2, num3, num4, num5
//       B3: tính aver= (num1+ num2+ num3+ num4+ num5)/5;
//       B4: in giá trị aver ra màn hình
// Output: giá trị Trung bình aver của 5 số thực 
function tinhTrungBinh() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  let num4 = +document.getElementById("num4").value;
  let num5 = +document.getElementById("num5").value;

  let aver= (num1+ num2+ num3+ num4+ num5)/5;
  aver=aver.toFixed(2);
  
  document.getElementById("result").innerHTML =
    "Giá trị trung bình của 5 số " + num1+", "+num2+", "+num3+", "+num4+", "+num5 + " là:  " + aver;
}
