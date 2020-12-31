
function PhanTram (){
     var pt = document.getElementById("slPhanTramTip").value;
     return pt;
}
 function TinhTien (){
      var phanTram =  PhanTram();
      var tongTien =  document.getElementById("txtTongTien").value;
      var soNguoi = document.getElementById("txtSoNguoi").value;
     document.getElementById("txtThongBaoTienTip").style.display = "block";
     var spanTien = document.getElementById("xuatTien");
     var thanhTien = ((parseFloat(tongTien)+ (parseFloat(tongTien)*(phanTram/100))) / (parseFloat(soNguoi)));
     spanTien.innerHTML = thanhTien;
 }
