const idx = [
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
];
var htmlStr = "";
var box = 1;

for (box; box <= 12; box++) {
  htmlStr += "<button onclick='console.log(1)'>";
  // htmlStr += a();

//   htmlStr += a();
  htmlStr += "<img src='https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg' width='250px' height='250px' >"
  htmlStr += "<p>" + "음식" + "</p>";
  htmlStr += "</button>";
}

var boxs = document.getElementById("boxs");
boxs.innerHTML = htmlStr;

const a = () => {
  "<p>1</p>";
};
