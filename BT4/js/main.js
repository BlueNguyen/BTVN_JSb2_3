// MÔ HÌNH 3 KHỐI
// Input: chiều dài, chiều rộng hình chữ nhật nhập vào
// Giải: B1: tạo biến num1 là chiều dài, num2 là chiều rộng, chuVi là chu vu, are là diện tích hình chữ nhật
//       B2: gán giá trị cho biến num1, num2
//       B3: tính chu vi=(dài + rộng)*2; diện tích = dài *rộng;
//       B4: in giá trị aver ra màn hình
// Output: giá trị chu vi, diện tích
function tinhHCN() {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let chuVi = (num1 + num2) * 2;
  let area = num1 * num2;

  document.getElementById("result").innerHTML =
    "Chu vi là: " + chuVi + " ; " + "Diện tích là: " + area;
}
