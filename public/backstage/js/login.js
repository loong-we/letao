; (function () {

 // 表单神器第一步：引包
 // 第二步：初始化
 //使用表单校验插件
 $("#form").bootstrapValidator({

  //指定校验字段
  fields: {
   //校验用户名，对应name表单的name属性
   username: {
    validators: {
     //不能为空
     notEmpty: {
      message: '用户名不能为空'
     },
     //长度校验
     stringLength: {
      min: 2,
      max: 6,
      message: '用户名长度必须在2到6之间'
     },
     callback: {
      message: "用户名不存在"
     }
    },
   },
   password: {
    validators: {
     notEmpty: {
      message: '密码不得为空'
     },
     stringLength: {
      min: 6,
      max: 12,
      message: '密码长度必须在6到12之间'
     },
     callback: {
      message: "密码错误"
     }
    },
   },
  },
  feedbackIcons: {
   valid: 'glyphicon glyphicon-ok',
   invalid: 'glyphicon glyphicon-remove',
   validating: 'glyphicon glyphicon-refresh'
  },
 });
 // console.log(123);
 //表单提交
 $("#form").on("success.form.bv", function (e) {
  //阻止表单默认的提交跳转
  e.preventDefault();
  // 发送ajax请求
  $.ajax({
   type: 'post',
   url: '/employee/employeeLogin',//本地路径
   data: $("#form").serialize(),//表单序列化
   dataType: 'json',
   success: function (res) {
    console.log(res);
    if (res.success) {
     location.href = "index.html"
    }
    if (res.error === 1000) {
     $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
    }
    if (res.error === 1001) {
     $('#form').data("bootstrapValidator").updateStatus("password", "INVALID", "callback")
    }
   }
  })
 })

 // 表单重置
 $("[type='reset']").on("click", function () {

  $("#form").data("bootstrapValidator").resetForm()
 })
})();