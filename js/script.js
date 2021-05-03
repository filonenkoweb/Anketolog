new Swiper (".product__items-swiper",{
      navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev',
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 2,
      },
      380: {
        slidesPerView: 3,
      },
      530: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 7,
      },
    },
});
new Swiper (".product__cards-swiper",{
  slidesPerView: 3,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1.7,
    },
    992: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 2.5,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});
new Swiper (".shop__swiper",{
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.shop-button-next',
    prevEl: '.shop-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.7,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    770: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 4,
    },
  }
});
new Swiper (".resources__body",{
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.resources__next',
    prevEl: '.resources__prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    380: {
      slidesPerView: 1.3
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    560: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 2.6
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 3.3
    },
    1200: {
      slidesPerView: 3.5,
    },
    1300: {
      slidesPerView: 4,
    },
  }
});
new Swiper (".tariff__main",{
  slidesPerView: 3,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    460: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      allowSlideNext: true,
      allowSlidePrev: true,
      centeredSlides: true,
    },
    500: {
      centeredSlides: false,
    },
    660: {
      slidesPerView: 1.8,
    },
    765:{
      slidesPerView: 2,
      spaceBetween: 20,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    992: {
      slidesPerView: 3,
      allowSlideNext: false,
      allowSlidePrev: false,
    },
  }
});
// burger menu
const burger = document.querySelector(".header__burger")
const menu = document.querySelector(".user-menu")
const overlay = document.querySelector(".overlay")

burger.addEventListener("click", function(){
  menu.classList.toggle("active")
  burger.classList.toggle("active")
  overlay.classList.toggle("active")
})

//tariff

const tariffCard = document.querySelectorAll(".tariff__column");

for (let tariffItem of tariffCard){
  tariffItem.addEventListener("click", function(){
    for (let tariffItem of tariffCard){
      tariffItem.classList.remove("active")
    }
    tariffItem.classList.add("active")
  })
} 

//tariff-date

const tariffDate = document.querySelectorAll(".tariff__date li");

for(let tariffDateItem of tariffDate){
  tariffDateItem.addEventListener("click", function(){
    for(let tariffDateItem of tariffDate){
      tariffDateItem.classList.remove("active")
    }
    tariffDateItem.classList.add("active")
  })
}

//footer spoilers

const tabsBtn = document.querySelectorAll(".footer__list span")
const tabsItem = document.querySelectorAll(".footer__sub")

tabsBtn.forEach(function(item){
  item.addEventListener("click", function(){
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab")
    let currentTab = document.querySelector(tabId)

    tabsBtn.forEach(function(item){
      item.classList.remove("active")
    })

    tabsItem.forEach(function(item){
      item.classList.remove("active")
    })

    currentBtn.classList.add("active");
    currentTab.classList.add("active")
  })
})

