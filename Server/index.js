var ip = require('ip');
var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

console.log("Server nodejs chay tai dia chi: " + ip.address());

//giải nén chuỗi JSON thành các OBJECT
function ParseJson(jsondata) {
    try {
        return JSON.parse(jsondata);
    } catch (error) {
        return null;
    }
}

//Gửi dữ liệu thông qua
function sendTime() {

	var json = {
    }
    io.sockets.emit('atime', json);
}

io.on("connection", function(socket){

  console.log("Co nguoi ket noi:" + socket.id);

  socket.on('disconnect', function() {
		console.log(socket.id + " da ngat ket noi")
	})

  // STM to Web
  socket.on("Click-revice-data", function(data){
    socket.broadcast.emit("MuonDoc", data);
  });

  socket.on("Click-revice-data-dieuchinh", function(data){
    socket.broadcast.emit("MuonDocDC", data);
  });

  socket.on('DocXongNhietDo', function (data) {
    	var jsonStr = JSON.stringify(data);
	    var DuLieu = ParseJson(jsonStr);
      socket.broadcast.emit("STM-send-NhietDo", DuLieu.sensorNhietDo);
   });

   socket.on('DocXongDoAm', function (data) {
     	var jsonStr = JSON.stringify(data);
 	    var DuLieu = ParseJson(jsonStr);
       socket.broadcast.emit("STM-send-DoAm", DuLieu.sensorDoAm);
    });

    socket.on('DocXongAnhSang', function (data) {
      var jsonStr = JSON.stringify(data);
      var DuLieu = ParseJson(jsonStr);
      socket.broadcast.emit("STM-send-AnhSang", DuLieu.sensorAnhSang);
   });

   socket.on('DocXongLuongMua', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-LuongMua", DuLieu.sensorLuongMua);
   });

   socket.on('TrangThaiBomThoat', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-BomThoat", DuLieu.motorBomThoat);
   });

   socket.on('TrangThaiBomTuoi', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-BomTuoi", DuLieu.motorBomTuoi);
   });

   socket.on('TrangThaiMaiChe', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-MaiChe", DuLieu.motorMaiChe);
   });

   socket.on('TrangThaiQuatThoang', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-QuatThoang", DuLieu.motorQuatThoang);
   });

   socket.on('DocXongNhietDoDC', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-NhietDo-DieuChinh", DuLieu.sensorNhietDoDC);
   });

   socket.on('DocXongDoAmDC', function (data) {
     var jsonStr = JSON.stringify(data);
     var DuLieu = ParseJson(jsonStr);
     socket.broadcast.emit("STM-send-DoAm-DieuChinh", DuLieu.sensorDoAmDC);
   });

   socket.on('DocXongAnhSangDC', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-AnhSang-DieuChinh", DuLieu.sensorAnhSangDC);
   });

   socket.on('DocXongLuongMuaDC', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-LuongMua-DieuChinh", DuLieu.sensorLuongMuaDC);
   });

   socket.on('TrangThaiBomThoatHard', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-BomThoatHard", DuLieu.motorBomThoatHard);
   });

   socket.on('TrangThaiBomTuoiHard', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-BomTuoiHard", DuLieu.motorBomTuoiHard);
   });

   socket.on('TrangThaiMaiCheHard', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-MaiCheHard", DuLieu.motorMaiCheHard);
   });

   socket.on('TrangThaiQuatThoangHard', function (data) {
    var jsonStr = JSON.stringify(data);
    var DuLieu = ParseJson(jsonStr);
    socket.broadcast.emit("STM-send-QuatThoangHard", DuLieu.motorQuatThoangHard);
   });

   //Web to STM
   socket.on("Click-send-data-AnhSang", function(data){
     io.sockets.emit("MuonChinhAnhSang", Number(data));
   });
   socket.on("Click-send-data-DoAm", function(data){
    io.sockets.emit("MuonChinhDoAm", Number(data));
  });
  socket.on("Click-send-data-NhietDo", function(data){
    io.sockets.emit("MuonChinhNhietDo", Number(data));
  });
  socket.on("Click-send-data-LuongMua", function(data){
    io.sockets.emit("MuonChinhLuongMua", Number(data));
  });
  socket.on("Click-send-data-BomThoat", function(data){
    io.sockets.emit("MuonChinhBomThoat", Number(data));
  });
  socket.on("Click-send-data-BomTuoi", function(data){
    io.sockets.emit("MuonChinhBomTuoi", Number(data));
  });
  socket.on("Click-send-data-MaiChe", function(data){
    io.sockets.emit("MuonChinhMaiChe", Number(data));
  });
  socket.on("Click-send-data-QuatThoang", function(data){
    io.sockets.emit("MuonChinhQuatThoang", Number(data));
  });
});

app.get("/", function(req,res){
  res.render("trangchu");
});
