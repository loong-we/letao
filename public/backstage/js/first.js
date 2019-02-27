
; (function () {
 var currentPage = 1;
 var pageSize = 5;
 render()
 function render() {
  // 发送ajax请求，渲染页面
  $.ajax({
   type: "get",
   url: "/category/queryTopCategoryPaging",
   data: {
    page: currentPage,
    pageSize: pageSize
   },
   dataType: "json",
   success: function (res) {
    var htmlStr = template("firstTable", res);
    $("tbody").html(htmlStr)

    // 分页插件的使用bootstrapPaginator
    $("#paginator").bootstrapPaginator({
     // 版本号
     bootstrapMajorVersion: 3,
     // 当前页
     currentPage: res.page,
     // 总页数
     totalPages: Math.ceil(res.total / res.size),
     // 给页码添加点击事件
     onPageClicked: function (a, b, c, page) {
      // 将选中的页码更新到全局变量的页码中，然后渲染
      currentPage = page;
      render();
     }

    })
   }
  })
 }

 // 给模态框注册点击事件
 $("#addFirst").on("click", function () {
  $("#firstModal").modal("show")
 })

 // 通过校验插件，添加校验功能
 $("#form").bootstrapValidator({
  // 指定校验时的图标显示，默认是bootstrap风格
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
   },  
   // 指定校验字段
   fields: {
     //校验用户名，对应name表单的name属性
     categoryName: {
       validators: {
         //不能为空
         notEmpty: {
           message: '请输入一级分类名称'
         }
       }
     },
   }
 }) 

 // 注册表单校验成功事件
 $("#form").on('success.form.bv', function (e) {
  e.preventDefault();
  //使用ajax提交逻辑
  $.ajax({
   type:"POST",
   url:"/category/addTopCategory",
   data: $("#form").serialize(),
   dataType:"json",
   success:function(res){
    if(res.success){
     // 关闭模态框
     $("#firstModal").modal("hide");
     // 重新渲染页面，更新页面页码
     currentPage = 1;
     render();

     // 重置表单校验状态 和表单内容
     // 传true不仅可以重置状态，还可以重置内容
     $("#form").data("bootstrapValidator").resetForm(true);
    }
   }
  })
});


})();




