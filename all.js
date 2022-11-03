let data = [{
        id: 0,
        name: "肥宅心碎賞櫻3日",
        imgUrl: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        area: "高雄",
        description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        group: 87,
        price: 1400,
        rate: 10,
    },
    {
        id: 1,
        name: "貓空纜車雙程票",
        imgUrl: "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        area: "台北",
        description: "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        group: 99,
        price: 240,
        rate: 2,
    },
    {
        id: 2,
        name: "台中谷關溫泉會1日",
        imgUrl: "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        area: "台中",
        description: "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        group: 20,
        price: 1765,
        rate: 7,
    },
];

// 印出套票
const ticketCard = document.querySelector(".ticketCard-area");
const result = document.querySelector("#searchResult-text");

// HTML結構
function showHTML(i) {
    let show = `
    <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                        <img src="${i.imgUrl}"
                            alt="">
                    </a>
                    <div class="ticketCard-region">${i.area}</div>
                    <div class="ticketCard-rank">${i.rate}</div>
                </div>
                <div class="ticketCard-content">
                    <div>
                        <h3>
                            <a href="#" class="ticketCard-name">${i.name}</a>
                        </h3>
                        <p class="ticketCard-description">
                            ${i.description}
                        </p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                            <span><i class="fas fa-exclamation-circle"></i></span>
                            剩下最後 <span id="ticketCard-num"> ${i.group} </span> 組
                        </p>
                        <p class="ticketCard-price">
                            TWD <span id="ticketCard-price">$${i.price}</span>
                        </p>
                    </div>
                </div>
            </li>
    `;
    return show;
}

function init() {
    let str = "";
    data.forEach((i) => {
        str += showHTML(i);
    });
    result.innerHTML = `目前共 ${data.length} 筆資料`;
    ticketCard.innerHTML = str;
}
init();

//搜尋功能
const search = document.querySelector(".regionSearch");
search.addEventListener("change", (e) => {
    console.log(e.target.value);
    // 判斷有無點選地點
    if (e.target.value == "地區搜尋") {
        console.log("請選擇地區");
        return;
    }
    let str = "";
    let resultNum = 0;

    data.forEach((i) => {
        if (e.target.value === "") {
            str += showHTML(i);
            resultNum++;
        } else if (e.target.value === i.area) {
            str += showHTML(i);
            resultNum++;
        }
    });
    // 本次搜尋共 3 筆資料
    result.innerHTML = `本次搜尋共 ${resultNum} 筆資料`;
    return (ticketCard.innerHTML = str);
});

// 新增卡片
// 套票名稱
const ticketName = document.querySelector("#ticketName");
// console.log(ticketName.value);
const errorTicketName = document.querySelector("#ticketName-message");
// 圖片網址
const imgUrl = document.querySelector("#ticketImgUrl");
const errorImgUrl = document.querySelector("#ticketImgUrl-message");
// 景點地區
const region = document.querySelector("#ticketRegion");
const errorRegion = document.querySelector("#ticketRegion-message");
// 金額
const price = document.querySelector("#ticketPrice");
const errorPrice = document.querySelector("#ticketPrice-message");
// 組數
const ticketNum = document.querySelector("#ticketNum");
const errorTicketNum = document.querySelector("#ticketNum-message");
// 星級
const ticketRate = document.querySelector("#ticketRate");
const errorTicketRate = document.querySelector("#ticketRate-message");
// 描述
const description = document.querySelector("#ticketDescription");
const errorDescription = document.querySelector("#ticketDescription-message");
// 新增套票
const add = document.querySelector("#add");

let errorObj = [
    errorTicketName,
    errorImgUrl,
    errorRegion,
    errorPrice,
    errorTicketNum,
    errorTicketRate,
    errorDescription,
];

function errorCheck() {
    let errorShow = `<i class="fas fa-exclamation-circle"></i>
    <span>必填!</span> `;
    let checkObj = [
        ticketName.value,
        imgUrl.value,
        region.value,
        price.value,
        ticketNum.value,
        ticketRate.value,
        description.value,
    ];
    for (let i = 0; i < checkObj.length; i++) {
        if (checkObj[i] === "") {
            console.log(checkObj[i]);
            errorObj[i].innerHTML = errorShow;
        } else {
            console.log("刪除");
            errorObj[i].innerHTML = "";
        }
    }
}

let obj = {};
console.log(obj);
add.addEventListener("click", () => {
    if (
        ticketName.value === "" ||
        imgUrl.value === "" ||
        region.value === "" ||
        price.value === "" ||
        ticketNum.value === "" ||
        ticketRate.value === "" ||
        description.value === ""
    ) {
        errorCheck();
    } else {
        errorCheck();
        // "id": 0,
        obj.id = data.length;
        // "name": "肥宅心碎賞櫻3日",
        obj.name = ticketName.value;
        // "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        obj.imgUrl = imgUrl.value;
        // "area": "高雄",
        obj.area = region.value;
        // "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        obj.description = description.value;
        // "group": 87,
        obj.group = ticketNum.value;
        // "price": 1400,
        obj.price = price.value;
        // "rate": 10
        obj.rate = ticketRate.value;
        // console.log(obj)
        data.push(obj);

        init();

        // 輸入完要初始化

        // form 標籤的 DOM 元素
        const formEl = document.querySelector(".addTicket-form");

        // 在 form 標籤的 DOM 元素使用 reset 就可以直接清空資料
        formEl.reset();

        // ticketName.value = "";
        // imgUrl.value = "";
        // region.value = "";
        // description.value = "";
        // ticketNum.value = "";
        // price.value = "";
        // ticketRate.value = "";
    }
});