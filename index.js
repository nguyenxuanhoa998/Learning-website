// Hàm tính BMI
function calculateBMI(weight, height) {
  // weight (kg), height (m)
  let bmi = weight / (height * height);
  return bmi.toFixed(2); // Làm tròn đến 2 chữ số sau dấu phẩy
}

// Ví dụ: nhập cân nặng và chiều cao
let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
let height = parseFloat(prompt("Nhập chiều cao (m):"));

// Tính BMI
let bmi = calculateBMI(weight, height);

// In ra kết quả
alert("Chỉ số BMI của bạn là: " + bmi);

// Phân loại BMI
if (bmi < 18.5) {
  alert("Bạn thuộc nhóm");
} else if (bmi < 24.9) {
  alert("Bạn thuộc nhóm: Bình thường");
} else if (bmi < 29.9) {
  alert("Bạn thuộc nhóm: Thừa cân");
} else {
  alert("Bạn thuộc nhóm: Béo phì");
}
