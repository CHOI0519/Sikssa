  
const foods = [
  {
    id: 1,
    name: "448돈까스 군포점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MjZfNjgg%2FMDAxNjU4ODM2NzA5MjM4.jKg6uF-WboUZJkxXciierEr9CWnfwrgg8jO2fpaHvS0g.Vj84gPNMnpcyvK1V_3q5kGY13OQJ3gy4VtXAugc3U_sg.JPEG.tjsaud8922%2F20220726%25A3%25DF115816.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1776441266?c=14131862.3154036,4487559.4334164,16.6,0,0,0,dh"
  },
  {
    id: 2,
    name: "별별카츠",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MDRfMjAx%2FMDAxNjU5NjA5OTIyNzA1.ZsUKJQ-7zcvidq1BwO8zJLOgV21W3ZnJpqRaNd2E7aUg.QgHi2TzBThpvjb6jDIdpRH-YGCkh7f69icxf2CmFHJ4g.JPEG.nabilra3%2Foutput_1072042487.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1822653246?c=14132576.4977431,4487483.5554265,16.6,0,0,0,dh"
  },
  {
    id: 3,
    name: "아리가또맘마 군포당정역점",
    url: "https://ldb-phinf.pstatic.net/20220111_70/1641873066110mQVAt_JPEG/%C4%C1%BC%C1%B9%E8%B0%E6_1.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/37207068?c=14131778.5191619,4487159.7138850,16.6,0,0,0,dh" 
  },
  {
    id: 4,
    name: "스시정",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjA5MTNfMjQ1/MDAxNjYzMDY3MzY4NjY0.BPzcg9SsJ05xbc6WQMlMsLFBZ6u-OL7UxSOb58Gg1Xog.BQzQ3haAqhIf2vchtYXm8mTljKL_BZNgtzVWy4kRWN4g.JPEG/20220913_191722.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1450381108?c=14131161.0770891,4487150.0404088,15,0,0,0,dh"
  },
  {
    id: 5,
    name: "즐거운돈까스",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjExMThfMTUz/MDAxNjY4NzY5MTE2ODg1.Kh8ZKaZEoTW_NFwcgKPOOayf0KxTFxb0eU_zscskY6Qg.nif9j39ZqT60r_QUHSvfAxXbH-rQmvBRLgvvU0RhDi4g.JPEG/20221118_181634.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/36721123?c=14131778.1975955,4487462.7166872,15,0,0,0,dh"
  },
  {
    id: 6,
    name: "고칸 군포점",
    url: "https://myplace-phinf.pstatic.net/20210427_65/1619520321410YPznV_JPEG/upload_d04599790da0672ad07b211c102116ae.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1600889986?c=14131945.6136801,4487137.4550712,17.85,0,0,0,dh"
  },
  {
    id: 7,
    name: "히노데",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2022_05_06_1044%2Fd493ce24-ccf6-11ec-8a91-505dac8c38f5_01.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1810313189?c=14131022.7737535,4487125.2563797,15,0,0,0,dh"
  },
  {
    id: 8,
    name: "가쯔미",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA5MjdfMjk0%2FMDAxNTM4MDQ1NjE2ODk0.W3jAVPdFETgvheSn-1pBmG6IsNxAAQpDARpEdvRt_D4g.H8p0R1Vb63_alRlc69ytTAAJ8nFOlYxCgQSx5NVU_3sg.JPEG.sujung_324%2F20180918_193642.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1668972416?c=14131197.1748260,4487551.0594412,16.97,0,0,0,dh"
  },
  {
    id: 9,
    name: "꼬치리다 당동점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjExMTlfMjcw/MDAxNjY4ODU0NTExODI5.jEMVfn3IMZ3_aXJuRrNApHyYyFJ4UCSXFswvV1BS7SMg.Si0-Qg-VGCuYpu-lfBC88KACFgg3eAbPM9MQnLHPHzEg.JPEG/20221118_192424.jpg",
    button: "더보기" ,
    href:"https://map.naver.com/v5/entry/place/1364576876?c=14131197.1748260,4487551.0594412,16.97,0,0,0,dh"
  },
  {
    id: 10,
    name: "어시장(군포점)",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMzBfODYg%2FMDAxNjA5MzE0NjYxOTc4.y3VDVca1daMpi9gyeHjGHgzTmhcFEEMv20sPGEwATTwg.iNxspWty4kv3x2qumi-n13WXh9womsUv3iiXgiQrFxAg.JPEG.wldnjs0915%2Foutput_15679366.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1559206167?c=14131237.0580752,4487532.0864436,16.97,0,0,0,dh"
  },
  {
    id: 11,
    name: "오늘에초밥",
    url: "https://ldb-phinf.pstatic.net/20191208_202/1575792899344OCf4o_JPEG/P_BeEq89921T2QBEFrGKI_-m.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1954182644?c=14131328.4444761,4488008.5678019,16.68,0,0,0,dh"
  },
  {
    id: 12,
    name: "재아수산",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDZfNyAg%2FMDAxNjU3MDY5ODIyNjc1.JXFJZsdsfReQ7KmJzWkmhuNhqCfN36-9AxMmQwLR5m8g.w604Z7MNSXkyrSDDk4iOd9Ug2d6kalo3FtBeo3WPVt0g.JPEG.name_sohee%2FIMG_5002.JPG",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/918922669?c=14132593.1802107,4487667.9758275,19.65,0,0,0,dh"
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

