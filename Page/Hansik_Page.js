  
const foods = [
  {
    id: 1,
    name: "84양은냄비",
    url: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220313_264%2F1647144747968Nkkxe_JPEG%2Fupload_e4cba8f1c321d93bbe27afdff04b0d80.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/895939418?c=14132447.4909810,4487558.6404526,18.07,0,0,0,dh"
  },
  {
    id: 2,
    name: "전주감자탕",
    url: "https://ldb-phinf.pstatic.net/20190124_149/1548335809088Yq37q_JPEG/IMG_20181006_223738_085.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1803953268?c=14132461.4289872,4487607.3131968,17.2,0,0,0,dh"
  },
  {
    id: 3,
    name: "석기사랑부대찌개",
    url: "https://myplace-phinf.pstatic.net/20210519_44/1621393413075bvAYL_JPEG/upload_4145c0cee71177221b11bd4b1c65c1e8.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/11850471?c=14132401.5742511,4487572.6670026,16.85,0,0,0,dh" 
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
    name: "왕대박",
    url: "https://myplace-phinf.pstatic.net/20210809_125/16284821208798BltK_JPEG/upload_521a0ed4d0bddc640308ded64acdc6b7.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1792174965?c=14131813.9325065,4487520.3655707,15,0,0,0,dh"
  },
  {
    id: 6,
    name: "이모네 집밥",
    url: "https://ldb-phinf.pstatic.net/20200309_226/1583755301660IC1DA_JPEG/Jlm2XVh2wqbARPA7ELw5KMPu.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1026353059?c=14132356.1155410,4487759.3398339,17.39,0,0,0,dh"
  },
  {
    id: 7,
    name: "은빛",
    url: "https://ldb-phinf.pstatic.net/20180405_212/1522923738873iIe5c_JPEG/YHapmZv0Ysxwi_oanolT-J8v.JPG.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/37098012?c=14132536.7466456,4487743.3903102,18.67,0,0,0,dh"
  },
  {
    id: 8,
    name: "담소소사골순대육개장",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjExMTFfMTgz/MDAxNjY4MTczODgxNDEz.JI2OFXzhv_3_-ALB3BMWtSMEnXOTWpIzNDvaOcMZZbEg.WrJZ8jWTTxB4HkjpLq09bAD2td-GjyoojUwy0gyFA5Mg.JPEG/20221102_194015.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1981440056?c=14132469.8238727,4487739.1226522,18.25,0,0,0,dh"
  },
  {
    id: 9,
    name: "방일해장국",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEyMDZfMjgy/MDAxNjcwMjk2NzMyOTA5.QtzF1EcfoS0Nl5vqTYzFXrXG89RJyjQ_w7IItefID6gg.uSgrm_4I_J1V1mUWobo1orsrf9WCecTIjFaOQpUlpxsg.JPEG/AE2C5926-107F-4FBB-9473-225E56E1EA9C.jpeg",
    button: "더보기" ,
    href:"https://map.naver.com/v5/entry/place/33850767?c=14132561.1007192,4487730.7204636,18.78,0,0,0,dh"
  },
  {
    id: 10,
    name: "청진동해장국",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjBfMjg1%2FMDAxNjAwNTYxODIwNDM1.JVClss6SWzwOl4NQc-UsEvDtmmkxIFmCMZ2JxRDQSjMg.TQqGBH6tpptWFHOFWOV7K8FOYpZEU1cphXT_3PIUu7Ug.JPEG.jandimori%2F20200919_122350.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1052306418?c=14132024.2644576,4487159.0524727,19.15,0,0,0,dh"
  },
  {
    id: 11,
    name: "장수국수",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjExMDFfMjc3/MDAxNjY3MjYzNjM0NzA1.3j3LiA6Qj3PaXimk5zCuAvebwPnf1BFMiWdvNcwnsaog.u53YFaXXfLTWqN8pdyMZPS1CISt9AIyNOc5Pq2cxr1Ug.JPEG/20220930_115656.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/31650675?c=14132024.2644576,4487159.0524727,19.15,0,0,0,dh"
  },
  {
    id: 12,
    name: "옹골네순대국",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDFfODUg%2FMDAxNjU0MDc3MjgwNTY0.UGsQxdMwJRrceSjadB4MMQgNaGbBH1dGXSQSN8zJ07Qg.usYDvfyjKefFKdvqG3terNQ0d4ksurtC8f5Hsjmau2sg.JPEG.hyim63%2F20220601%25A3%25DF182932.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/36967917?c=14132024.2644576,4487159.0524727,19.15,0,0,0,dh"
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

