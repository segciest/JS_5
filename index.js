// Quản lí sinh viên
var toan =[];
var van =[];
var anh =[];
var sinhVien =[];
var khuVuc =[];
var doiTuong =[];

// Hàm lấy thông tin
function hoTenSV(){
    sinhVien.push(document.getElementById('txt_id').value);
}
function diemToanSV(){
    toan.push(document.getElementById('txt_toan').value*1);
}
function diemVanSV(){
    van.push(document.getElementById('txt_van').value*1);
}
function diemAnhSV(){
    anh.push(document.getElementById('txt_anh').value*1);
}
function khuVucSV(){
    var khuVucCanCheck = document.getElementById('txt_khuVuc').value;
    return khuVucCanCheck.toUpperCase();
}
function doiTuongSV(){
    var doiTuongCanCheck = document.getElementById('txt_doiTuong').value*1;
    return doiTuongCanCheck;
}

function khuVucCheck (khuVuc){
    switch(khuVuc){
        case "A": {
            return 2;
        }
        case "B": {
            return 1;
        }
        case "C": {
            return 0.5;
        }
        default: {
            return 0;
        }
    }
}
function doiTuongCheck (doiTuong){
    switch(doiTuong){
        case 1: {
            return 2.5;
        }
        case 2: {
            return 1.5;
        }
        case 3: {
            return 1;
        }
        default: {
            return 0;
        }
    }
}

// Kiểm tra (button)
document.getElementById('btn_submit').onclick = function(){
    hoTenSV();
    diemToanSV();
    diemVanSV();
    diemAnhSV();
    khuVuc.push(khuVucCheck(khuVucSV()));
    doiTuong.push(doiTuongCheck(doiTuongSV()));
    console.log(sinhVien);
    console.log(toan);
    console.log(van);
    console.log(anh);
    console.log(khuVuc);
    console.log(doiTuong);
}
document.getElementById('btn_check').onclick = function(){
    var sinhVienCheck = document.getElementById('txt_xemSinhVien').value;
    for (var i = 0; i<sinhVien.length; i++) { 
        if (sinhVien[i]== sinhVienCheck){
            var tongDiem = toan[i] + van[i] + anh[i] + khuVuc[i] + doiTuong[i];
            break;
        }
    }
    document.getElementById('kqTuyenSinh').innerHTML = tongDiem;
    console.log("acd");
}


// Tính tiền điện 
// Giá điện 
const a = 500;
const b = 650;
const c = 850;
const d = 1100;
const e = 1300;

document.getElementById('btn_tienDien').onclick= function(){
    var kw = document.getElementById('txt_kwDien').value*1;
    document.getElementById('kqDien').innerHTML = tinhTienDien(kw).toLocaleString({
        style: 'currency',
        currency: 'VND',
    }) + ' VNĐ';
}
function tinhTienDien (x){
    var tienDien;
    if (x > 350) {
        tienDien = 50*a + 50*b + 100*c +150*d + (x-350)*e;
        console.log(350);
    } else if (x > 200) {
        tienDien = 50*a + 50*b + 100*c + (x-200)*d;
        console.log(200);
    } else if (x > 100) {
        tienDien = 50*a + 50*b + (x-100)*c;
        console.log(100);
    } else if (x > 50) {
        tienDien = 50*a + (x-50)*b;
        console.log(50);
    } else {
        tienDien = x*a;
        console.log('min50');
    }
    return tienDien;
}


// Tính Thuế thu nhập 
document.getElementById('btn_tinhThue').onclick = function(){
    var phuThuocFinal = document.getElementById('txt_phuThuoc').value*1;
    var thuNhapFinal = document.getElementById('txt_thuNhap').value*1; 
    var thuNhapChiuThueFinal = thuNhapChiuThue(thuNhapFinal,phuThuocFinal);
    var phanTramThueFinal = phanTramThue(thuNhapChiuThue(thuNhapFinal,phuThuocFinal));
    var tinhThueFinal = tinhThue(phanTramThueFinal,thuNhapChiuThueFinal)*1000000;
    console.log(tinhThueFinal);
    document.getElementById('kqThue').innerHTML=`Tiền thuế phải đóng cho chính quyền : ${tinhThueFinal.toLocaleString({
        style: 'currency',
        currency: 'VND',
    })} VNĐ` 
}
function  tinhThue (phanTramThue,thuNhapChiuThue) {
    var tienThue = thuNhapChiuThue*phanTramThue;
    return tienThue;
}
function thuNhapChiuThue (thuNhap,phuThuoc) {
    var thuNhapChiuThue = thuNhap - 4 - phuThuoc * 1.6;
    return thuNhapChiuThue;
}
function phanTramThue (chiuThue){
    if (chiuThue > 960) {
        return 35/100
        console.log(960);
    } else if (chiuThue > 624) {
        return 30/100
        console.log(624);
    } else if (chiuThue > 384) {
        return 25/100
        console.log(384);
    } else if (chiuThue > 210) {
        return 20/100
        console.log(210);
    } else if (chiuThue > 120) {
        return 15/100
        console.log(120);
    } else if (chiuThue > 60) {
        return 10/100
        console.log(60);
    } else {
        return 5/100
        console.log('min60');
    }
}

// Tính tiền cáp 
// var loaiKH = document.querySelector("input[name='selector']:checked").value;
 var loaiKH;
 var maKH =[];
document.getElementById('btn_loaiKH').onclick = function () {
    loaiKH = document.querySelector("input[name='selector']:checked").value;
    maKH.push(document.getElementById('txt_maKH')).value;
    if (loaiKH=='doanhNghiep') {
        document.getElementById('blockKN').style.display = 'block';
    } else {
        document.getElementById('blockKN').style.display = 'none';
    }
    document.getElementById('blockKCC').style.display = 'block';
    document.getElementById('btn_tinhTienCap').style.display = 'block';
}

document.getElementById('btn_tinhTienCap').onclick= function () {
    console.log(loaiKH);
    var soKenhKN = document.getElementById('txt_KN').value*1;
    var soKCC = document.getElementById('txt_KCC').value*1;
    var tienCap = xuLyhoadon(loaiKH) + thueKenhCaoCap(loaiKH,soKCC) + ketNoi(loaiKH,soKenhKN);
    document.getElementById('kqTienCap').innerHTML = `Hoá đơn tiền cáp của bạn là  ${tienCap.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD',
    })}` ;
}

function xuLyhoadon (loaiKH){
    if (loaiKH=='doanhNghiep'){
        return 15;
    } else {
        return 4.5;
    }
}
function thueKenhCaoCap (loaiKH,KCC){
    if (loaiKH=='doanhNghiep'){
        return 50*KCC;
    } else {
        return 7.5*KCC;
    }
}
function ketNoi (loaiKH,kenhKetNoi){
    if (loaiKH == 'hoGiaDinh') {
        return 20.5
    } else if (loaiKH == 'doanhNghiep') {
        if (kenhKetNoi <= 10 ){
            return 75;
        } else {
            return 75 + (kenhKetNoi-10)*5;
        }
    }
}