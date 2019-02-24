// 有ajax开启时
$(document).ajaxStart(function () {
 // 进度条开始
 NProgress.start();
});
// 所有ajax结束时
$(document).ajaxStop(function () {

 setTimeout(function(){
  // 结束进度条
  NProgress.done()
 },500)
})