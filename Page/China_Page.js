  
const foods = [
  {
    id: 1,
    name: "애상금상 마라탕",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEyMDFfMTk0/MDAxNjY5ODg1MjU1NjQ3.bzwSandrf6tny0wmMkzCnJtRoLDBomWDQOk2TG-OfMYg.HdoUc5OOt_ZN67-7Bk8MF6ldzbjh-rTqK60xC4lY_E8g.JPEG/6FA57207-3ACD-4771-81AB-308D6BC1A5E6.jpeg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1365153042?c=14132595.0519477,4487599.6234558,18.49,0,0,0,dh"
  },
  {
    id: 2,
    name: "중식당화요",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MThfMTc5%2FMDAxNTI5MzMwNTc4NTM2.kfFJBX340KGYJztML2zv9BRg0CzB-4RftglMo9lKkpkg.5C9Ojj9e5Dj-DhIBsIadktgRyF1QVpomvld_FcbCsZ4g.JPEG.ska7901%2FIMG_0175.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1628812240?c=14132644.4647786,4487553.6376087,18.49,0,0,0,dh"
  },
  {
    id: 3,
    name: "중화요리 서경",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjhfNTEg%2FMDAxNjY2OTM2NDM5MzE2.7bf-3PK9wKcEqOjECBrBOQHKhMfS8mayRT-CIZpUaeIg.RFrYQ9ZfcKmC7fVzjva9JlIP9VOB8bDJCoEz7ulXrZgg.JPEG.jingahyun%2FKakaoTalk_20221028_110037404_07.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1417851543?c=14131132.1562852,4487115.5948250,15,0,0,0,dh" 
  },
  {
    id: 4,
    name: "짬봉데이 본점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA5MTJfMTQz%2FMDAxNTY4Mjg3MzQ0MTAy.GVNatpYRP8hRjQabnzaInL8KAqeFsolobwrD7q77flcg.PdyZ2wCthEVJy9EllXWv2TtWNflxmcZTBZqxUAVAnzsg.JPEG.soon83555%2FIMG_4942.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1317758295?c=14132004.4031282,4487178.0188365,19.47,0,0,0,dh"
  },
  {
    id: 5,
    name: "몽짬뽕",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMDJfMjU3%2FMDAxNjMzMTA4NDM1MTEx.8mfPqYbH96zimDrfxRJu3eM6YPkivvZHsAy5fPqPHD8g.6-6cUfcB7ZbmWwgZHLWy57iCEZrfavAwTIN2ohYfB7gg.JPEG.tlsusn%2FIMG_3055.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1510576093?c=14130946.9846497,4487793.4094422,15,0,0,0,dh"
  },
  {
    id: 6,
    name: "차즈융성마라탕 당정점",
    url: "https://ldb-phinf.pstatic.net/20210415_180/1618446985769DG61N_JPEG/srU3EfIHsR81QX_PWIW8S_Rj.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1181738009?c=14132033.8236433,4487296.5687587,15,0,0,0,dh"
  },
  {
    id: 7,
    name: "형제샤브샤브뷔폐",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEwMDdfNzQg/MDAxNjY1MTQyMDcxNjM2.YAoi7RwgARJfZE8BIC5jKph81Gkre7jvkkLc8ds_ebIg.zm1xeVHxIszFXNtjxPOr1tmQ4LEDNvSc8LmBVwg7c8wg.JPEG/20221007_184700.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1050219212?c=14132431.8522875,4487656.7395889,17.69,0,0,0,dh"
  },
  {
    id: 8,
    name: "다빈",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMzFfMjIw%2FMDAxNjQzNTk5NzM1MDU4.ROi0tvEwNMqjgapftjuOVTz0ekOOA24HeaKcqn4Po8Mg.yGwoEIzJQ4XrBfMi5buupTqXQ35PniszFke45qYJZaUg.JPEG.leenh9574%2FP20220131_113023352_57BBAC55-C50F-4F1D-BEF9-6438BB3809D1.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1970410503?c=14132281.2013979,4487612.9664027,17.69,0,0,0,dh"
  },
  {
    id: 9,
    name: "경성양꼬치 당동점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MDVfMTg5%2FMDAxNTI4MTcyMTM3NTM1.vJI88NUFDAP8yFq1LTerAvXJdEV3H-bwvkOdOC4ph1cg.7pgJWT-q-Eej-AJ8Rtlo9JzZD6oSlUXVR_J5OTPpo5Qg.JPEG.minah0111%2FDSC_1013.JPG",
    button: "더보기" ,
    href:"https://map.naver.com/v5/entry/place/988495908?c=14131282.4267348,4487521.9943236,17.29,0,0,0,dh"
  },
  {
    id: 10,
    name: "다복향마라탕 군포점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEyMDdfMTEx/MDAxNjcwNDA2MzAyNTgw.Oenle3e2-HvGmPuhzdq1nps5ns2IVrJB9Q_ZQczQZc4g.LG-0b3sIIzQw-V6THQ5wTPAK1h3r54DbUskT6_X9_Fcg.JPEG/20221207_172814%280%29.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1827998294?c=14130516.8659576,4487547.9745222,15,0,0,0,dh"
  },
  {
    id: 11,
    name: "칭구짬뽕",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA4MTJfMjMg%2FMDAxNTY1NTg4ODQ2Mjc1.vvpQ_YlLoERf3KHm1a-d8CkCBpp4aK46XbryRnUBFEYg.QKONZzCv_5cqImS5rBUOcjY2xEoRUNgzCjHEXdf6j6kg.JPEG.dpclxn5%2F2019-08-09-11-58-35.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1296302897?c=14131985.5127794,4487165.9020921,19.87,0,0,0,dh"
  },
  {
    id: 12,
    name: "이비가짬뽕 군포당동점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjExMjlfNjIg/MDAxNjY5Njc4ODg1MDc4.Th4k1PsuTzil-kWZCHb9qVvKn91_uEB9g9vP4Onkwfwg.oqHoB24Rk_SZqfFj2MrWIzaouNd-QxxtA9jWOI2YRU0g.JPEG/A5923E41-3679-405B-A7FC-8CED83537F0E.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1090042729?c=14133167.1151500,4488223.6650219,18.7,0,0,0,dh"
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

