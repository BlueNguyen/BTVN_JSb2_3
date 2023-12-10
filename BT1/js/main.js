// MÔ HÌNH 3 KHỐI:
// Input: lương 1 ngày, số ngày làm
// Giải: B1: tạo biến number (số ngày làm), base (lương 1 ngày), wagePay (tiền lương)
//       B2: gán giá trị cho biến number, base
//       B3: tính tiền lương: wagePay= base* number;
//       B4: in Kết quả ra màn hình web
// Output: Kết quả tiền lương wagePay
function tinhTien() {
  let number = +document.getElementById("number").value;
  let base = +document.getElementById("base").value;
  let wagePay = base * number;

  wagePay = wagePay.toLocaleString("en-US");
  document.getElementById("result").innerHTML =
    "Tiền lương cho " + number + " ngày làm là: " + wagePay + " đ";
}
