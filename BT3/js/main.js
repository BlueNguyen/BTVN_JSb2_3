// MÔ HÌNH 3 KHỐI
// Input: số tiền quy đổi
// Giải: B1: tạo biến from lưu giá trị đơn vị tiền tệ, tạo biến num lưu giá trị số tiền nhập vào, tạo hằng số 23500
//       B2: gán giá trị cho biến from, num
//       B3: nếu là USD sang VND thì số tiền quy đổi là: 23500*số tiền (23500*num)
//           ngược lại nếu là VND sang USD thì số tiền quy đổi là: số tiền/23500  (num/23500)
//       B4: in giá trị số tiền quy đổi ra màn hình
// Output: giá trị số tiền quy đổi
function getResult() {
  const USD = 23500;
  let from = document.getElementById("idFrom").value;
  let num = +document.getElementById("idInput").value;

  if (from == "USD") {
    document.getElementById("result").innerHTML =
      "Số tiền quy đổi là: " + (num * USD).toLocaleString("en-US") + " VNĐ";
  } else {
    document.getElementById("result").innerHTML =
      "Số tiền quy đổi là: " + (num / USD).toLocaleString("vi-VN") + " USD";
  }
}
//     if(from=="USD" && to=="USD"){
//         document.getElementById("result").innerHTML =
//           "Số tiền quy đổi là: " + num + " USD";
//     } else if (from=="VND" && to=="VND"){
//         document.getElementById("result").innerHTML =
//           "Số tiền quy đổi là: " + num + " VND";
//     } else if (from=="USD" && to=="VND"){
//         document.getElementById("result").innerHTML =
//           "Số tiền quy đổi là: " + (num * USD).toLocaleString("en-US") + " đ";
//     }else{
//         document.getElementById("result").innerHTML =
//           "Số tiền quy đổi là: " + num / USD + " USD";
//     }
// }
