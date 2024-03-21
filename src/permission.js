import router from "@/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

//白名单
const whiteList = ["no-network", "no-permission", "404"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const { title = "模板" } = to.meta;
  document.title = title;

  //白名单跳转
  if (whiteList.includes(to.name)) {
    return next();
  }
  next();
});

router.afterEach(() => {
  // console.log(to);
  //进入路由之后进行面包屑设置
  NProgress.done();
});
