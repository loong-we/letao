
; (function () {

 // 申明一个公共的页码和条数
 var currentPage = 1;
 var pageSize = 5;
 render()
 function render() {
  // 发送ajax请求，渲染table表单
  $.ajax({
   type: "get",
   url: "/user/queryUser",
   data: {
    page: currentPage,
    pageSize: pageSize
   },
   dataType: 'json',
   success: function (res) {
    // 渲染模板
    var htmlStr = template("userTable", res)
    $('tbody').html(htmlStr)
    console.log(res);

    // 渲染分页
    // 根据请求回来的数据, 完成分页的初始化显示
    $('#paginator').bootstrapPaginator({
     // 版本号
     bootstrapMajorVersion: 3,
     // 当前页
     currentPage: res.page,
     // 总页数
     totalPages: Math.ceil(res.total / res.size),
     // 给页码添加点击事件
     onPageClicked: function (a, b, c, page) {
      console.log(page);
      // 更新 currentPage, 并且重新渲染即可
      currentPage = page;
      render();
     }
    })
   }
  })
 }

 // 给按钮注册点击事件
 $(".btn-danger").on("click",function(){
  
 })


})();