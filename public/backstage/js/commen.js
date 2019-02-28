// 有ajax开启时
$(document).ajaxStart(function () {
 // 进度条开始
 NProgress.start();
});
// 所有ajax结束时
$(document).ajaxStop(function () {

 setTimeout(function () {
  // 结束进度条
  NProgress.done()
 }, 500)
})

$(".lt_list").on("click", function () {
 $(".hidebox").toggle(300)
})

// 在进页面要进行登录状态获取
// 如果后端响应头中设置了 content-Type：application/json
// jQuery会自动识别，将返回数据类型，当成json字符串解析成对象
// 判断进入的页面地址是不是首页，如果不是发送ajax请求
if (location.href.indexOf("login.html") === -1) {
 $.ajax({
  type: "get",
  url: "/employee/checkRootLogin",
  success: function (res) {
   console.log(res);
   if(res.error==400){
    // 未登录，需要进行登录拦截
    location.href = "login.html";
   }
  }
 })
}




// 注册左移的点击事件
$(".leftBar").on("click", function () {
 $(".topBar").toggleClass("move");
 $(".lt_aside").toggleClass("move");
 $(".lt_content").toggleClass("move");
})

// 注册退出事件
$(".rightBar").on("click", function (e) {
 // 跳出模态框
 $('#allModal').modal('show');
})

$(".logOut").on("click", function () {
 // 发送ajax请求
 $.ajax({
  type: 'get',
  url: '/employee/employeeLogout',
  dataType: 'json',
  success: function (res) {
   console.log(res);
   if (res.success) {
    location.href = "login.html"
   }
  }
 })
})