
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

 // 给按钮注册点击事件(事件委托)
 $("tbody").on("click", "button", function () {
  // if($(this).hasClass("btn-success")){
  //  $(this).attr("class","btn btn-danger");
  //  $(this).text("禁用");
  // }
  // 弹出层显示
  $('#forbModal').modal('show');
  // 获取点击的id
  console.log($(this).parent());
  var id = $(this).parent().data("id")
  // var isDelete = $(this).parent().data("isdelete")
  var isDelete = $(this).hasClass("btn-success") ? 1 : 0;
  console.log(id);
  console.log(isDelete);
  // 一个按钮上只能绑定一个事件
  $(".forbSure").off("click").on("click", function () {
   console.log(132123);
   $.ajax({
    type: "post",
    url: "/user/updateUser",
    data: {
     id: id,
     isDelete: isDelete
    },
    dataType: "json",
    success: function (res) {
     if (res.success) {
      // 隐藏模态框，并重新渲染页码
      $("#forbModal").modal("hide");
      render()
     }
    }
   })
  })
 })


})();