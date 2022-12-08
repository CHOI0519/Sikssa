  
const foods = [
  {
    id: 3,
    name: "맘스파스타",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjExMTJfMjEw/MDAxNjY4MTc5ODEyNTUw.05MOBgaa7Kk9tgXR7xc50tfH92FpgIV9nDdEVpBjyNcg.1YTRzozwMJnxOkzYgA8-Gqjj2EhltUBp9oszhlm60dUg.JPEG/3C9E3887-E141-484D-BFB9-3D76A6B7A4A1.jpeg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1201970534?c=14132543.0924846,4487558.6148782,17.54,0,0,0,dh"
  },
  {
    id: 3,
    name: "59쌀피자 당정점",
    url: "https://myplace-phinf.pstatic.net/20220211_129/1644576389494PFWpE_JPEG/upload_bed742cbf910e1bb09e0ed4bce31c99b.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/21143303?c=14131948.1559705,4487201.8293101,17.54,0,0,0,dh"
  },
  {
    id: 3,
    name: "피자스쿨 한세대점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEwMDdfMjAz/MDAxNjY1MTA4NjAyODE4.oEXIC7iR2xfNzYtK150OyfyUpBbMzqXnMgjPuJnkcHEg.GI4hyDSWY9NBOQRarLBo8M5uzMvodljg2IMHMrtJQScg.JPEG/20221002_175933.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/35482121?c=14132583.0757920,4487622.3760901,17.54,0,0,0,dh" 
  },
  {
    id: 3,
    name: "알로라",
    url: "https://ldb-phinf.pstatic.net/20210121_92/1611193834048CwNyO_JPEG/bn3FG2FSHV4AJQbukFJn41LQ.jpeg.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1397212851?c=14131492.0855946,4487966.1537166,15,0,0,0,dh"
  },
  {
    id: 3,
    name: "고급양식 군포점",
    url: "https://ldb-phinf.pstatic.net/20220831_21/1661943144327i1eFH_JPEG/KakaoTalk_20220831_195215232.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1055463790?c=14130799.9316025,4487254.0639574,15,0,0,0,dh"
  },
  {
    id: 3,
    name: "긱스피자 군포점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA2MTFfMjA2%2FMDAxNTYwMjYzODEwMjAw.twUp8rDd-ztJB9ZafRnJ3C-YlTz5dQhkBZ9Rp6haLZwg.l2pBzd2rKjO4VjESpR399NTgr6wpBEtnrHotXfrGt6Yg.JPEG.minah0111%2FIMG_5704.JPG",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1115095467?c=14130799.9316025,4487254.0639574,15,0,0,0,dh"
  },
  {
    id: 3,
    name: "피자팜 군포점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEyMDFfMTk2/MDAxNjY5ODkwNTUyMjg3.JMscffXrVLNpu8V8xFgd75AKn4HKK774vGQM3RI0PxQg.iHLf-dFVdCxnFpwDQ7uqzCNzUimQJye0110Z2jthSzMg.JPEG/20221201_135333.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1006713007?c=14130799.9316025,4487254.0639574,15,0,0,0,dh"
  },
  {
    id: 3,
    name: "스테이크존 금정본사점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDhfMjkz%2FMDAxNjI4NDEzMzg1Mjk5.zkIT3sxAPst4hL0DWnqmesCylEm5oeF78ILeu9SWD8Ig.DOV6U4FmsU8Qus-1xrT08Khn8svlJ4Bx6k2lG1S1x-kg.JPEG.owhite77%2F20210808%25A3%25DF172417.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1794411374?c=14131273.8143984,4487959.5336800,14.76,0,0,0,dh"
  },
  {
    id: 3,
    name: "피자알볼로 당동점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MjlfMTIg%2FMDAxNjMyOTIyNTkwOTA5.zx2K59wuAU-siNwthVaYErlX3K20BGpbuU56pe0t8-0g.iqTvgwy-dOYTB1yWeSlM-naEcuJxu9aGJ0u0vH5C8XIg.JPEG.angel_bie%2F20210915_181741.jpg",
    button: "더보기" ,
    href:"https://map.naver.com/v5/entry/place/35002769?c=14131273.8143984,4487959.5336800,14.76,0,0,0,dh"
  },
  {
    id: 3,
    name: "지정환피자 군포점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150405_66%2Fjj_peco_142824032157369huG_JPEG%2FDSC08303.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/13478432?c=14131273.8143984,4487959.5336800,14.76,0,0,0,dh"
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

