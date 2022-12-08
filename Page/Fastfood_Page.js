  
const foods = [
  {
    id: 6,
    name: "버거리 군포당동점",
    url: "https://ldb-phinf.pstatic.net/20220609_179/1654758763773A57l4_JPEG/4.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1768388721?c=14132192.4277317,4487576.2508383,15.91,0,0,0,dh"
  },
  {
    id: 6,
    name: "오지버거 군포1호점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDhfMjUy%2FMDAxNjU0NjY1NzI2NTgw.-rQVwyNtg-ouXyjlNEzZJsKVltZJ1opQxq16L6DjP6Ug.FzCPvydGs1pkT8DiOciyUbv6baXY1llEJzdnXIA87pYg.JPEG.mymyzzu%2FKakaoTalk_20220608_123334134_04.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1351326739?c=14131242.2322527,4487473.7987282,15.91,0,0,0,dh"
  },
  {
    id: 6,
    name: "프랭크버거 군포당동점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjA5MjZfNDgg/MDAxNjY0MTgxODYwOTQz.vumXLVkDPBjRmcxoBMcmDRQrmIMiDbgs-MYu5ae-WSUg.BehADV78m32-oSV9XZyLmB5lXuigxgxRHZDP_1bCsfIg.JPEG/20220926_173702.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1175670698?c=14131242.2322527,4487473.7987282,15.91,0,0,0,dh" 
  },
  {
    id: 6,
    name: "맥도날드 군포당동SKDT",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjExMTZfNDcg/MDAxNjY4NTU0OTY2Mjg1.CxkZ5s89WXzT8DPtJN02qf25KgYJsN1gtHm6w4rj-6Ig.ZOxj-_IjD2hy44wGeWJT5qRGDN85G_MgKU5IFK8wZs8g.JPEG/D3E4289F-B279-4167-9E72-9F41ACA1B761.jpeg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/37411106?c=14131813.9325065,4487520.3655707,15,0,0,0,dh"
  },
  {
    id: 6,
    name: "롯데리아 군포당동점",
    url: "https://ldb-phinf.pstatic.net/20220825_197/1661415561325liiSo_JPEG/202208_%B7%D4%B5%A5%B8%AE%BE%C6_%B3%D7%C0%CC%B9%F6%C0%CC%B9%CC%C1%F6-1-01.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/11824734?c=14131242.2322527,4487473.7987282,15.91,0,0,0,dh"
  },
  {
    id: 6,
    name: "테그42 군포당동점",
    url: "https://myplace-phinf.pstatic.net/20211108_261/1636353681498Wu2pH_JPEG/upload_3a6449cba1c5e670832546cb26d4fbe8.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1376819913?c=14131123.3748950,4487474.8995390,15,0,0,0,dh"
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

