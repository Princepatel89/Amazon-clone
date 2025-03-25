import { todayDeals } from "./todayDeal.js";
console.log(todayDeals);

// IMAGE SLIDER SETUP
let slideBtnLeft = document.getElementById("slider-btn-left");
let slideBtnRight = document.getElementById("slider-btn-right");
let imageItems = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imageItems.length - 1) * 100;
let interval;

function updateSlider() {
  imageItems.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

function autoSlide() {
  interval = setInterval(() => {
    if (startSlider > -endSlider) {
      startSlider -= 100;
    } else {
      startSlider = 0;
    }
    updateSlider();
  }, 3000); // Adjust timing as needed
}

slideBtnRight.addEventListener("click", () => {
  clearInterval(interval);
  if (startSlider > -endSlider) {
    startSlider -= 100;
  }
  updateSlider();
  autoSlide();
});

slideBtnLeft.addEventListener("click", () => {
  clearInterval(interval);
  if (startSlider < 0) {
    startSlider += 100;
  }
  updateSlider();
  autoSlide();
});

autoSlide();

// TODAY DEALS RENDERING
let todayDealProductListEl = document.querySelector(".today-deals-product-list");
let todayDealProductHTML = "";
let todayDealLength = todayDeals.length;

for (let i = 0; i < todayDealLength; i++) {
  todayDealProductHTML += `
    <div class="today-deals-product-item">
      <div class="today-deals-product-image">
        <img src="${todayDeals[i].img}" alt="product">
      </div>
      <div class="discount-container">
        <a href="#">Up to ${todayDeals[i].discount}% off | Bottles</a>
        <a href="#">${todayDeals[i].DealofDay}</a>
      </div>
      <p>${todayDeals[i].desc}</p>
    </div>
  `;
}

todayDealProductListEl.innerHTML = todayDealProductHTML;

// TODAY DEALS SLIDER SETUP
let today_deals_btn_prevEL  = document.getElementById("today-deals-btn-prev");
let today_deals_btn_nextEL = document.getElementById("today-deals-btn-next");
let today_deals_product_itemEL = document.querySelectorAll(".today-deals-product-item");

let startProduct = 0;
const productCount = today_deals_product_itemEL.length;
const endProduct = (productCount - 1) * 500;

today_deals_btn_prevEL.addEventListener("click", () => {

    if (startProduct < 0) {
    startProduct += 500;
  } else {
    startProduct = -endProduct;
  }

  today_deals_product_itemEL.forEach((el) => {
    el.style.transform = `translateX(${startProduct}%)`;
  });
});

today_deals_btn_nextEL.addEventListener("click", () => {
  if (startProduct > -endProduct) {
    startProduct -= 500;
  } else {
    startProduct = 0;
  }
  today_deals_product_itemEL.forEach((el) => {
    el.style.transform = `translateX(${startProduct}%)`;
  });
});
