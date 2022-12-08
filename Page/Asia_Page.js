  
const foods = [
  {
    id: 1,
    name: "미스사이공",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDhfMjQ4%2FMDAxNTk0MTg5MTM4MDMw.IHi4hs6ttNh6nmrdqi-agyl9JY0MsoLzOD9O3C_4bYIg.4BTEb1iYKsXEhndnGcSf9gCz_4hi2heJr_wULB9RKWMg.JPEG.chlgkdud453%2F1594189136672.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1349454981?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 2,
    name: "쉔통",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MTlfNjUg%2FMDAxNjYzNTE3NzI2MDM2.tVFQO5iSGS73w0SYN4HfJV1kyF5VaK9qjIIFzdcjgK4g.j6zOxNdOpyHHJUb48olq0JATfbmiyO9mNVk_739-2LYg.JPEG.qeteeee%2F20220829%25A3%25DF120840.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1647955701?c=14131664.7393305,4487149.7183563,15,0,0,0,dh"
  },
  {
    id: 3,
    name: "벤탄빌라 군포당동점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMjFfMTk5%2FMDAxNjM0Nzk5ODA0Nzgz.MoFkIr0Do0xVGkYU89SAtZ30p6LT0J9pPDMNe7IVewog.OnLJVQN-84NL4EEC87uJ0zYnFnuqN4Bm5en2Our71WAg.JPEG.uxxdenim%2FIMG_4482.JPG",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1349082393?c=14131664.7393305,4487149.7183563,15,0,0,0,dh" 
  },
  {
    id: 4,
    name: "강원도막국수",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzAzMTlfMjQy%2FMDAxNDg5ODg1NzIwOTMy.pDn21ye5pw2vlhiznDHO1T4WE_J8SEdrTG8PsQvAWE4g.mqSFkEuxR2HmBPzJ46AdNGYX5d8yrJVfhafyk0n4AgIg.JPEG.kimey486%2FIMG_2818.JPG",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/18988242?c=14132465.4512771,4487591.1151953,17.2,0,0,0,dh"
  },
  {
    id: 5,
    name: "사이공쌀국수 군포역점",
    url: "https://myplace-phinf.pstatic.net/20211128_10/1638102966976eykdt_JPEG/upload_f5cc7f6059a48030415fbdb41a7922ad.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1413701467?c=14131113.2715666,4488086.7774440,15,0,0,0,dh"
  },
  {
    id: 6,
    name: "포비엣콴",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEyMDNfMTcx/MDAxNjY5OTk0MzQ0MjQ3.0ZEG8Lp5LjsdfKcFxsKA5_eVNpxusfXqttoP2dx3T2cg.94DpiuX2Mwoyyf5rxGhzaRFrBDcR6jr8EV269pHDxTAg.JPEG/20221202_120046.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1763465599?c=14131113.2715666,4488086.7774440,15,0,0,0,dh"
  },
  {
    id: 7,
    name: "베트남쌀국수",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEwMTFfMTY5/MDAxNjY1NDgyMzg2ODY3.3A-NSiYnJ4XjYVa_5vYoi80qzxiHOE_op2fOll4ks1Yg.g0oUmlG6MbATzPqPeGtK30DOJxFUWrd3sHnZkzM2hfQg.JPEG/20221011_174241.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1235886233?c=14131113.2715666,4488086.7774440,15,0,0,0,dh"
  },
  {
    id: 8,
    name: "포베이 군포점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEwMjRfMTQx/MDAxNjY2NjE2MDcwOTIz.H0pLW-AlYTrj0GihF6oh0zn0KxSyeNzKlliG5MAngfIg.QysYHJNR116SB_rZZb4e9OtmpR25nDKQrSULgM4MM9Eg.JPEG/AB663F90-6094-4AB8-9C80-B561D35500CD.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1146261579?c=14132059.9895865,4488401.3075718,15.27,0,0,0,dh"
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

