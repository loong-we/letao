
;(function(){
 var currentPage = 1;
 var pageSize =5;
 render()
 function render(){
  // 发送ajax请求，渲染页面
  $.ajax({
   type:"get",
   url:"/category/queryTopCategoryPaging",
   data:{
    page:currentPage,
    pageSize:pageSize
   },
   dataType:"json",
   success:function(res){
    console.log(res);
    var htmlStr = template("firstTable",res);
    $("tbody").html(htmlStr)
   }
  })
 }
 
 // 给模态框注册点击事件
 $("#addFirst").on("click",function(){
  $("#firstModal").modal("show")
 })
})();




