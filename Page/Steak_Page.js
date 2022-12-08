  
const foods = [
  {
    id: 1,
    name: "생고기한마당",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjA2MDJfNjYg/MDAxNjU0MTYyNzMwNjMy.sDQTu7-bt1RK63VXTBsIy_sxZ6-xb7fpWjQzklrgndQg.ICRSp8McDukWA4AUlvzEVcQjWd51QhsSOsJGveAvgXAg.JPEG/upload_f523cbb941a2f992e7d5c6d2ae6e1b85.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/21693316?c=14131273.8143984,4487959.5336800,14.76,0,0,0,dh"
  },
  {
    id: 2,
    name: "굴다리 본점",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MDhfMjgw%2FMDAxNTk2ODUxNjE4Mzk5.k5K1NG3eXzv68aKCzpm3Q-NOVis1eok7pl_yUjvg2sUg.s8bkjYT7B7x_WyNY1GTqF0iBVbqiByyqIoJDJpGZXSIg.JPEG.kjy4571%2F1596851616814.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1517550331?c=14131273.8143984,4487959.5336800,14.76,0,0,0,dh"
  },
  {
    id: 3,
    name: "숯불갈비코스요리 아리랑",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160824_207%2Fpapawolf8_1472003063505gzByO_JPEG%2FattachImage_941026983.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/13389548?c=14131273.8143984,4487959.5336800,14.76,0,0,0,dh" 
  },
  {
    id: 4,
    name: "일품맛소",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjEyMDVfMjAy/MDAxNjcwMTk4NzA0MzE2.T-M3zQ932i7SYwftUxvJHa-JvEpQnghiWcRLXfrn87Mg.i1Crw4XcRLnt71PTmbLP7ReG_wXIjniy4zSTkgVg_68g.JPEG/20221204_182501.jpg",
    button: "더보기", 
    href:"https://map.naver.com/v5/entry/place/1523120938?c=14131273.8143984,4487959.5336800,14.76,0,0,0,dh"
  },
  {
    id: 5,
    name: "무쏘 고기백화점",
    url: "https://pup-review-phinf.pstatic.net/MjAyMjExMTdfMTI4/MDAxNjY4NjYxODYyMTkw.jJZhkcy15S4iki35uUyDkgIsHJ-f_OZUnL-nFtLLKoUg.z1_cpN13zCLkO1_TmLXjJL1zgnw1mkZlPZQ_dKcggtwg.JPEG/IMG_20221117_140721_316.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1035016221?c=14130670.7420719,4488236.6209652,16.24,0,0,0,dh"
  },
  {
    id: 6,
    name: "원조부안집 군포당정점",
    url: "https://ldb-phinf.pstatic.net/20210617_153/1623912531648GYohA_JPEG/3_72R4eXtMDFTtydzB-aGJG3.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1858001247?c=14132430.9653893,4487694.0796599,16.24,0,0,0,dh"
  },
  {
    id: 7,
    name: "냉삼댁",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMTZfMTkx%2FMDAxNjY4NjAyOTU4MDQy.R_QUA7v-AQJwhvMBlHpGKYB4keNEjQcAeornvZLAP60g.gJuH72UscXqB-xR2EUhdpcKySwoElswQ80CEjlbrsP4g.JPEG.angel0272%2Foutput_3924076290.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1843381156?c=14132152.5747357,4487636.1832526,15,0,0,0,dh"
  },
  {
    id: 8,
    name: "돼지몽 한판",
    url: "https://ldb-phinf.pstatic.net/20220919_143/16635738002981059w_JPEG/99335852-C94F-4F67-BC1A-CB075232D146.jpeg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/37086015?c=14132152.5747357,4487636.1832526,15,0,0,0,dh"
  },
  {
    id: 9,
    name: "우가네곱창",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MDFfMjI3%2FMDAxNTMzMTExNDQ3NTU3.5JzNy3YifnS6CZF5oYgPOeEbElZtcqBkKTLamaRsnDwg.brxJGC1qG5fcnoTfyEGM-0Mo2IJqOHxe9s22t3y6xDMg.JPEG.chlgkdud453%2F2018-07-30-18-31-03.jpg",
    button: "더보기" ,
    href:"https://map.naver.com/v5/entry/place/19269264?c=14132152.5747357,4487636.1832526,15,0,0,0,dh"
  },
  {
    id: 10,
    name: "누이네곱창",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTBfNjIg%2FMDAxNjIzMjk5NzAwMzU0.3XHNVkr3vhnS-I7nnEK_IPCWDUWENQg-8ZTxpQjNz24g.W_41AjANpZvD0oRuye5ipCm32fRc8TMV6IqaV4MP90gg.JPEG.chlgkdud453%2F1623299419756.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/31167212?c=14132152.5747357,4487636.1832526,15,0,0,0,dh"
  },
  {
    id: 11,
    name: "불꽃돼지",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMzBfMjUw%2FMDAxNjE3MTEwMzM3NTUy.zhFYDiU96VhjFbfRUa0b4knqw1_eC4rgvOUjRYwExTwg.OKuvjk3NWJZ7UbqBmpv-rK_0jlVgwKCZq1klTw2yY1Qg.JPEG.pppnnp%2FIMG_9293.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/31650601?c=14132152.5747357,4487636.1832526,15,0,0,0,dh"
  },
  {
    id: 12,
    name: "군포갈비",
    url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTZfMTQ4%2FMDAxNjIzODEwNTg0NjU2.ySLb8--lVYT3WvBogUktMgjWmt5aXhY14Zo7U9APE2og.MwGMeorLqOEMmT-ECrpYiIBZO0sDgXc558TSNQ2Ks2wg.JPEG.ljsojsljs%2F20210614%25A3%25DF160836.jpg",
    button: "더보기",
    href:"https://map.naver.com/v5/entry/place/1095483131?c=14132152.5747357,4487636.1832526,15,0,0,0,dh"
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

