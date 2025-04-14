
const ten = document.getElementById("bookTitle");
const tacGia = document.getElementById("author");
const nam = document.getElementById("year");
const theLoai = document.getElementById("genre");
const timKiem = document.getElementById("searchInput");
const bang = document.getElementById("bookTableBody");
const nutThem = document.getElementById("addBookBtn");
let danhSach = [{
    ten: "Harry Potter",
    tacGia: "JK Rowling",
    nam: "1995",
    theLoai: "Fiction"
}];
let dangSua = -1;
function render(ds = danhSach) {
    bang.innerHTML = "";
    ds.forEach((sach, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${sach.ten}</td>
            <td>${sach.tacGia}</td>
            <td>${sach.nam}</td>
            <td>${sach.theLoai}</td>
            <td class = "Buttons">
                <button class="btn btn-primary btn-sm" data-sua="${i}">Sửa</button>
                <button class="btn btn-primary btn-sm" data-xoa="${i}">Xóa</button>
            </td>
        `;
        bang.appendChild(row);
    });
}
render(); 
function themHoacCapNhat() {
    const sach = {
        ten: ten.value,
        tacGia: tacGia.value,
        nam: nam.value,
        theLoai: theLoai.value
    };
    dangSua === -1 ? danhSach.push(sach) : danhSach[dangSua] = sach;
    resetForm();
    render();
}
function sua(i) {
    const update = danhSach[i];
    ten.value = update.ten;
    tacGia.value = update.tacGia;
    nam.value = update.nam;
    theLoai.value = update.theLoai;
    dangSua = i;
    nutThem.textContent = "Cập nhật";
}
function xoa(i) {
    if (confirm("Bạn muốn xoá sách này?")) {
        danhSach.splice(i, 1);
        render();
    }
}
function resetForm() {
    ten.value = tacGia.value = nam.value = theLoai.value = "";
    dangSua = -1;
    nutThem.textContent = "Thêm sách";
}
nutThem.addEventListener("click", themHoacCapNhat);

timKiem.addEventListener("input", () => {
    const tuKhoa = timKiem.value.toLowerCase();
    const ketQua = danhSach.filter(sach => sach.ten.toLowerCase().includes(tuKhoa));
    render(ketQua);
});
