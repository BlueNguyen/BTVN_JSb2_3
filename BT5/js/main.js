// MÔ HÌNH 3 KHỐI
// Input: 1 số có 2 chữ số nhập vào
// Giải: B1: tạo biến num, ten, unit, sum
//       B2: gán giá trị cho num
//       B3: tách giá trị hàng chục, công thức: ten=Math.floor(num/10);
//       B4: tách giá trị hàng đơn vị, công thức: unit= num%10;
//       B5: in KQ sum tổng 2 kí số ra màn hình
// Output: giá trị sum tổng 2 kí số
function tinhSum() {
  let num = +document.getElementById("num").value;
  let ten = Math.floor(num / 10);
  let unit = num % 10;
  let sum = ten + unit;

  document.getElementById("result").innerHTML =
    "Tổng 2 ký số của số " + num + " là: " + sum;
}
