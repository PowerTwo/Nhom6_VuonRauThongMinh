var socket = io("http://localhost:3000");

$(document).ready(function(){
  $("#btnXTS").click(function(){
    socket.emit("Click-revice-data","Hello!");
  });
});

$(document).ready(function(){
  $("#btnXTSDC").click(function(){
    socket.emit("Click-revice-data-dieuchinh","Hello!");
  });
});

socket.on("STM-send-NhietDo", function(data){
    $("#listXTS").append("<div class='ms'>" + "Nhiệt độ: " + data + "*C"+"</div>");
});

socket.on("STM-send-DoAm", function(data){
    $("#listXTS").append("<div class='ms'>" + "Độ ẩm đất: " + data + "%"+"</div>");
});

socket.on("STM-send-AnhSang", function(data){
  $("#listXTS").append("<div class='ms'>" + "Ánh sáng: " + data + "%"+"</div>");
});

socket.on("STM-send-LuongMua", function(data){
  $("#listXTS").append("<div class='ms'>" + "Lượng mưa: " + data + "%"+"</div>");
});

socket.on("STM-send-BomThoat", function(data){
  $("#listXTS").append("<div class='ms'>" + "Bơm thoát: " + data +"</div>");
  });

socket.on("STM-send-BomTuoi", function(data){
  $("#listXTS").append("<div class='ms'>" + "Bơm tưới: " + data +"</div>");
  });

socket.on("STM-send-MaiChe", function(data){
  $("#listXTS").append("<div class='ms'>" + "Mái che: " + data +"</div>");
  });

socket.on("STM-send-QuatThoang", function(data){
  $("#listXTS").append("<div class='ms'>" + "Quạt thoáng: " + data +"</div>");
  });

socket.on("STM-send-NhietDo-DieuChinh", function(data){
  $("#listXTSDC").append("<div class='ms'>" + "Nhiệt độ: " + data + "*C"+"</div>");
});

socket.on("STM-send-DoAm-DieuChinh", function(data){
  $("#listXTSDC").append("<div class='ms'>" + "Độ ẩm đất: " + data + "%"+"</div>");
});

socket.on("STM-send-AnhSang-DieuChinh", function(data){
$("#listXTSDC").append("<div class='ms'>" + "Ánh sáng: " + data + "%"+"</div>");
});

socket.on("STM-send-LuongMua-DieuChinh", function(data){
  $("#listXTSDC").append("<div class='ms'>" + "Lượng mưa: " + data + "%"+"</div>");
  });

socket.on("STM-send-BomThoatHard", function(data){
  $("#listXTSDC").append("<div class='ms'>" + "Bơm thoát đặt cứng: " + data +"</div>");
  });

socket.on("STM-send-BomTuoiHard", function(data){
  $("#listXTSDC").append("<div class='ms'>" + "Bơm tưới đặt cứng: " + data +"</div>");
  });

socket.on("STM-send-MaiCheHard", function(data){
  $("#listXTSDC").append("<div class='ms'>" + "Mái che đặt cứng: " + data +"</div>");
  });

socket.on("STM-send-QuatThoangHard", function(data){
  $("#listXTSDC").append("<div class='ms'>" + "Quạt thoáng đặt cứng: " + data +"</div>");
  });

$(document).ready(function(){
  $("#btnDCAnhSang").click(function(){
    socket.emit("Click-send-data-AnhSang",$("#txtDCAnhSang").val());
  });
});

$(document).ready(function(){
  $("#btnDCDoAm").click(function(){
    socket.emit("Click-send-data-DoAm",$("#txtDCDoAm").val());
  });
});

$(document).ready(function(){
  $("#btnDCNhietDo").click(function(){
    socket.emit("Click-send-data-NhietDo",$("#txtDCNhietDo").val());
  });
});

$(document).ready(function(){
  $("#btnDCLuongMua").click(function(){
    socket.emit("Click-send-data-LuongMua",$("#txtDCLuongMua").val());
  });
});

socket.on("MuonChinhAnhSang", function(data){
    $("#listDCAnhSang").append("<div class='ms'>" + "Cảm biến ánh sáng vừa cài đặt: " + data +"</div>");
});

socket.on("MuonChinhDoAm", function(data){
  $("#listDCDoAm").append("<div class='ms'>" + "Cảm biến độ ẩm đất vừa cài đặt: " + data +"</div>");
});

socket.on("MuonChinhNhietDo", function(data){
  $("#listDCNhietDo").append("<div class='ms'>" + "Cảm biến nhiệt độ vừa cài đặt: " + data +"</div>");
});

socket.on("MuonChinhLuongMua", function(data){
  $("#listDCLuongMua").append("<div class='ms'>" + "Cảm biến lượng mưa vừa cài đặt: " + data +"</div>");
});

$(document).ready(function(){
  $("#btnDCBomThoat").click(function(){
    socket.emit("Click-send-data-BomThoat",$("#txtDCBomThoat").val());
  });
});

$(document).ready(function(){
  $("#btnDCBomTuoi").click(function(){
    socket.emit("Click-send-data-BomTuoi",$("#txtDCBomTuoi").val());
  });
});

$(document).ready(function(){
  $("#btnDCMaiChe").click(function(){
    socket.emit("Click-send-data-MaiChe",$("#txtDCMaiChe").val());
  });
});

$(document).ready(function(){
  $("#btnDCQuatThoang").click(function(){
    socket.emit("Click-send-data-QuatThoang",$("#txtDCQuatThoang").val());
  });
});

socket.on("MuonChinhBomThoat", function(data){
  $("#listDCBomThoat").append("<div class='ms'>" + "Đã đặt bơm thoát: " + data +"</div>");
});

socket.on("MuonChinhBomTuoi", function(data){
  $("#listDCBomTuoi").append("<div class='ms'>" + "Đã đặt bơm tưới: " + data +"</div>");
});

socket.on("MuonChinhMaiChe", function(data){
  $("#listDCMaiChe").append("<div class='ms'>" + "Đã đặt mái che: " + data +"</div>");
});

socket.on("MuonChinhQuatThoang", function(data){
  $("#listDCQuatThoang").append("<div class='ms'>" + "Đã đặt quạt thoáng: " + data +"</div>");
});