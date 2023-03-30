$(function () {
  let gnb = [
    { tit: "gnb_a", url: "javascript:void(0)" },
    { tit: "gnb_b", url: "javascript:void(0)" },
    { tit: "gnb_c", url: "javascript:void(0)" },
  ];

  for (let i = 0; i < gnb.length; i++) {
    $(".gnb_wrap").append(`<li><a href='${gnb[i].url}'>${gnb[i].tit}</a></li>`);
  }

  let lnb1 = [
    { tit: "lnb_d", url: "./page/test.html" },
    { tit: "lnb_e", url: "./page/test.html" },
    { tit: "lnb_f", url: "./page/test.html" },
    { tit: "lnb_g", url: "./page/test.html" },
  ];
  let lnb2 = [
    { tit: "lnb_h", url: "./page/test.html" },
    { tit: "lnb_i", url: "./page/test.html" },
    { tit: "lnb_j", url: "./page/test.html" },
    { tit: "lnb_k", url: "./page/test.html" },
  ];
  for (let i = 0; i < lnb1.length; i++) {
    $(".gnb_wrap > li:nth-child(1)").append(
      `<ul><li><a href='${lnb1[i].url}'>${lnb1[i].tit}</a></li></ul>`
    );
  }
  for (let i = 0; i < lnb2.length; i++) {
    $(".gnb_wrap > li:nth-child(2)").append(
      `<ul><li><a href='${lnb2[i].url}'>${lnb2[i].tit}</a></li></ul>`
    );
  }
});
let gnb_wrap = document.querySelector(".gnb_wrap");

function navPc() {
  gnb_wrap.addEventListener("mouseenter", (event) => {
    let lnb = document.querySelectorAll(".gnb_wrap > li > ul");
    event.preventDefault();
    for (let i = 0; i < lnb.length; i++) {
      lnb[i].classList.add("on");
    }
  });
  gnb_wrap.addEventListener("mouseleave", (event) => {
    let lnb = document.querySelectorAll(".gnb_wrap > li > ul");
    event.preventDefault();
    for (let i = 0; i < lnb.length; i++) {
      lnb[i].classList.remove("on");
    }
  });
}

let gnbTit = document.querySelectorAll(".gnb_wrap > li > a");

function navMo() {
  console.log(gnbTit);
  gnbTit.style.border = "1px solid red";
  //   for (let i = 0; i < gnbA.length; i++) {
  //   }
}
if (matchMedia("screen and (min-width: 640px)").matches) {
  navPc();
} else {
  navMo();
}
