$(function () {
   let gnb = [
      { tit: "gnb_a", url: "javascript:void(0)" },
      { tit: "gnb_b", url: "javascript:void(0)" },
      { tit: "gnb_c", url: "javascript:void(0)" },
   ]

   for (let i = 0; i < gnb.length; i++) {
      $(".gnbWrap").append(`<li><a href='${gnb[i].url}'>${gnb[i].tit}</a></li>`)
   }
   let lnb1 = [
      { tit: "lnb_d", url: "./pages/test.html" },
      { tit: "lnb_e", url: "./pages/test.html" },
      { tit: "lnb_f", url: "./pages/test.html" },
      { tit: "lnb_g", url: "./pages/test.html" },
   ]
   let lnb2 = [
      { tit: "lnb_h", url: "./pages/test.html" },
      { tit: "lnb_i", url: "./pages/test.html" },
      { tit: "lnb_j", url: "./pages/test.html" },
      { tit: "lnb_k", url: "./pages/test.html" },
   ]
   for (let i = 0; i < lnb1.length; i++) {
      $(".gnbWrap > li:nth-child(1)").append(`<ul><li><a href='${lnb1[i].url}'>${lnb1[i].tit}</a></li></ul>`)
   }
   for (let i = 0; i < lnb2.length; i++) {
      $(".gnbWrap > li:nth-child(2)").append(`<ul><li><a href='${lnb2[i].url}'>${lnb2[i].tit}</a></li></ul>`)
   }
})
