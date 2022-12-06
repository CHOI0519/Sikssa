
const foods = [
  {
    id: 1,
    name: "뼈장꿍1",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 2,
    name: "뼈장꿍2",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 3,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 4,
    name: "뼈장꿍4",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 5,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 6,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 7,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 8,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 9,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 10,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 11,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
  {
    id: 12,
    name: "뼈장꿍3",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
  },
];

const list = document.getElementById('list');

function page() {
  const Food_Page = [

  ]
}

function showList(val='') {
  list.innerHTML = '';
  const res = foods.forEach(food => {
    if(food.name.includes(val)) {
      // const div = document.createElement('div');
      let div = document.createElement('div');
    div.setAttribute("id","table");
    div.innerHTML = `
    <div>
    <img src='${food.url}' alt='${food.name}' width="200px" >
    <p>이름: ${food.name}</p>

    </div>
        `;
        list.appendChild(div);
        
        window.onload = function () {
          var el = document.getElementById("table");
          el.onclick = table;

        function table()  {
          location.href = "main.html";
        }
      }
        

      // if  {}
      //   div.onclick = location.href="main.html" ;
      // }
    }
  }) //end showlist
}

showList();

//검색기능 
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  showList(val);
});

