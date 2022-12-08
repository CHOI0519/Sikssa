  
const foods = [
  {
    id: 5,
    name: "응급실국물떡볶이 군포당정점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjRfMjMy%2FMDAxNjUzMzY5Njc3NzE3._8zvkgA8z578V_0NsgQJ69KkLn5m_j0hWvsReWbLrtog.vTHfC6_btYhhVb2dN6VGkAolQxj3w450OF6gSGNHWHUg.JPEG.ka91777%2FIMG_8251.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1489050042?c=14131946.0627179,4487090.4370442,17.83,0,0,0,dh"
  },
  {
    id: 5,
    name: "꾼떡 당정2호점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120114_292%2Fcookup_1326536419930_y9CZQ1_jpg%2F000010.jpg&type=sc960_832",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/36860322?c=14132591.7708109,4487524.4676682,17.83,0,0,0,dh"
  },
  {
    id: 5,
    name: "골목떡볶이",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MTVfNjYg%2FMDAxNjUyNTc2NDI3MTY3.WTv2A1a5Y2kl7FVXvI3--Ewe2svWk8fU9ioCsKEJJ7Mg.YRduHK8jntdMkfZ13_oux99ReEuaGm3m0PLfHlY9rHEg.JPEG.doooju%2FIMG_0043.jpg&type=sc960_832",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1492133993?c=14131795.3906440,4487108.7462394,15.24,0,0,0,dh" 
  },
  {
    id: 5,
    name: "김밥하우스",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMjJfMjAz%2FMDAxNjY5MDg2NTYwMzYy.QtP3wUjhHgBe5OsyiPkUHAeene-ZR-Xf1R9-DglRZj4g.57xMk_oNi127izib43DpnV42K6GsjXex5rl_PL3IqEAg.JPEG.mymyzzu%2FKakaoTalk_20221122_104903015.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/32815789?c=14131937.5351198,4487157.1519906,17.6,0,0,0,dh"
  },
  {
    id: 5,
    name: "진주손만두",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MjhfMTk3%2FMDAxNjY0MzQ0ODMwMTAw.0Hr1SBCt6c_wb68jg4ULH0w80b_QjavFHpaupp5q3Qcg.I0wSSTSj97QSMrT7jcGjAscX71MY_nCl52xsM-kUvTkg.JPEG.okphy124%2FIMG_3742.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1373413933?c=14132157.0289404,4487674.3553370,16.94,0,0,0,dh"
  },
  {
    id: 5,
    name: "김밥플러스",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDJfOTIg%2FMDAxNjUxNDk3OTExMzA1.GD2l68Hng6BkwhWGjjL0sb6mJ73LsPohLz_TV9f4Yjkg.o3CU_XSqwDXgPi8E_jvi_E1kNCpwxIikA7zSQFkPxwYg.JPEG.fairycom%2F20220415%25A3%25DF115310.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/40310665?c=14132168.1497581,4487800.8171108,16.94,0,0,0,dh"
  },
  {
    id: 5,
    name: "봉구스밥버거 당정점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MzBfMTMw%2FMDAxNjY0NTM2NDQ2MzE3.cHoK3uBCrZ0lRyvRrhjxq-bmz_BDCwFb32LSoOtxj3Ig.rvQDN82KO0XSYwOptkvKR1IvgySIsTA_GO7TKzFUGqMg.PNG.tgather%2F%25BF%25B5%25BC%25F6%25C1%25F5%25B8%25AE%25BA%25E4-%25BA%25C0%25B1%25B8%25BD%25BA%25B9%25E4%25B9%25F6%25B0%25C5_%25C4%25A1%25C1%25EE%25C4%25A1%25C5%25B2%25B8%25B6%25BF%25E4%2528%25BA%25C0%25C4%25C5%2529_007.png",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/32874924?c=14132576.6568983,4487608.7146404,16.55,0,0,0,dh"
  },
  {
    id: 5,
    name: "김밥여행",
    url: "https://myplace-phinf.pstatic.net/20210517_20/1621221091210kidtY_JPEG/upload_74b508b93661852604ceed6c4bbe236e.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1927293098?c=14132203.4385080,4487866.4707538,16.84,0,0,0,dh"
  },
  {
    id: 5,
    name: "김밥여행",
    url: "https://myplace-phinf.pstatic.net/20210517_20/1621221091210kidtY_JPEG/upload_74b508b93661852604ceed6c4bbe236e.jpg",
    button: "더보기" ,
    href:"https://map.naver.com/v5/entry/place/33850767?c=14132561.1007192,4487730.7204636,18.78,0,0,0,dh"
  },
  {
    id: 5,
    name: "뚠뚠이김밥 당동점",
    url: "https://myplace-phinf.pstatic.net/20210412_154/16181938385397k5LR_JPEG/upload_02776d05c81cd099f0b695999189a4d1.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1543164437?c=14132386.0488120,4487590.3187734,18.61,0,0,0,dh"
  },
  {
    id: 5,
    name: "혜화동돈까스극장",
    url: "https://ldb-phinf.pstatic.net/20221123_30/1669186485101zMy2M_JPEG/%B8%DE%B4%BA%C6%C7%BB%E7%C1%F8_%283%29.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1331420559?c=14131832.6723588,4487167.2072343,18.07,0,0,0,dh"
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

