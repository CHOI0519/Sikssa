  
const foods = [
  {
    id: 1,
    name: "커피랑도서관 군포당정역점",
    url: "https://myplace-phinf.pstatic.net/20201220_277/1608441886922386A9_JPEG/upload_1276e13db6220424720014f3e260afca.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1375875738?c=14132152.5747357,4487636.1832526,15,0,0,0,dh"
  },
  {
    id: 2,
    name: "핑크쿠키랩",
    url: "https://ldb-phinf.pstatic.net/20220610_183/1654840824256lw25N_JPEG/2147C6F9-3367-46DB-9F04-356962CEBFF7.jpeg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1018605915?c=14132152.5747357,4487636.1832526,15,0,0,0,dh"
  },
  {
    id: 3,
    name: "카페이공",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEwMTVfOTYg/MDAxNjY1ODAzMjI3MDQx.Ewm4kZZpCedIfae9UX3DwkIEqYKhkJQULZCBjWCYA2Ug.KHpWcCEjDYrjIaf1Erw9DuyVJx_BNkBlpWXE1QVejAgg.JPEG/E6B62F37-F4FD-4D9B-AB1A-836C726C8895.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1089395462?c=14132152.5747357,4487636.1832526,15,0,0,0,dh" 
  },
  {
    id: 4,
    name: "데이롱카페 당정역점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjFfNDAg%2FMDAxNjQwMDc5OTIwNTIx.f1ebDoMTpTjwIMRubCBLZ0Tf1GOZCchxT-Zh6uemAiAg.hk1c0BZAHt978SIp1ew4QvdOSzsJS3SI96AOBAuh7eMg.JPEG.ajssd%2FIMG_3984.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1312486811?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 5,
    name: "카페 린",
    url: "https://myplace-phinf.pstatic.net/20220303_106/1646265975972UimtE_JPEG/upload_738336f138ddda74758739265d0495ba.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1135748790?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 6,
    name: "26.4",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjRfNSAg%2FMDAxNjY5Mjc1NjQxNzY0.didkzuX-5HQ69U7XB53Ze2KL7dpGja1tZSwRH5M6rPkg.DzclVKkIRVZ__m22nEMxKMk8pAYiFU30xR2MN8R6A_og.JPEG.redstar102%2Foutput_3420953974.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1205801073?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 7,
    name: "arr.",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjA3MjZfMjM1/MDAxNjU4ODA4Njc4MzU0.rKjczo-75PH-Z6OgF6GHnOaM-lxj58EpMbsNG5JLmHEg.bj2r7JyoeYZmMYloszqSVzTUwIwvi9DxxBB-IjJQk-8g.JPEG/upload_f8dd1fa9a771db346c78111495dba8b8.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1353404566?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 8,
    name: "하이오커피 군포당정점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MjZfMjcx%2FMDAxNjU4ODIzMjAyOTQy.-6c6obl5qKAZSY9-Bllh3dTvWQdlIYP87Xqau7nIMLYg.86lEiCs5j2KIubVr-gz6qa7z3DtCHVO4PzBFxaP2BdUg.JPEG.princess_bee%2FIMG_4260.JPG",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1908372564?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 9,
    name: "카페하라",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMzBfMjU1%2FMDAxNjM4MjgwNzE5NzM1.qdl6QugFifMTg66-jycViMdnJ6b6Qw3Rm7lyrtBoDKIg.ijkNGMCMNgC4tt6ywowXr33Xi-XOYQm4N4IZToWXbB0g.JPEG.woosoojs%2F1638280264714.jpg",
    button: "더보기" ,
    href:"https://map.naver.com/v5/entry/place/35306931?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 10,
    name: "요거프레소 한세대점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjA2MDdfMTM0/MDAxNjU0NjAwNzk1NDgx.ENR9-KVHOuWJLFQl8iHpTUeBsNVp1XAUBlWr1ZQXALwg.jawH_T1E3-qzWAzHzK_zEfee1hi9v5YQ0rmD3PG5ngAg.JPEG/upload_dc79720def66da4e95884d4f970a4720.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/36886430?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 11,
    name: "커피인더스트리 1호점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjA3MTBfMjUg/MDAxNjU3NDA4NDcxOTg4.3CHSElmoKHuXCwGaS1o76i4lPowkeIT5Ke_L-Jd6ZZ8g.QTQi0HMYsqVtYheB39wHYmcrPM1nz623wW1nycSaFhkg.JPEG/upload_396b4d80881f2223307e3c4d10983377.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/19742226?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 12,
    name: "로스팅아라비카",
    url: "https://ldb-phinf.pstatic.net/20201008_248/1602151146827ybXGe_JPEG/QHq0Oteif8nqZDP1qSW1LnU3.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1361548343?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
];

const list = document.getElementById('list');

function showList(val='') {
  list.innerHTML = '';
  const res = foods.forEach(food => {
    if(food.name.includes(val)) {
      let div = document.createElement('div');
    div.setAttribute("id","table");
    div.innerHTML = `
    <div style="display:flex">
      <div>
        <img src='${food.url}' alt='${food.name}' width="225px" height="225px" >
      </div>
      <div>
        <div style="font-size:18px">이름: ${food.name}</div>
        <div id=page_btn type=button style="font-size:15px" onclick=location.href='${food.href}'>
          ${food.button}
        </div>
      </div>
    </div>
        `;
        list.appendChild(div);
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

