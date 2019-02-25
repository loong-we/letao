; (function () {

 // 初始化echarts实例
 var echarts_left = echarts.init(document.querySelector(".echarts_left"));

 var optionl = {
  // 大标题
  title: {
   text: "2019年注册人数"
  },
  // 提示框组件
  tooltip: {},
  // 图例，图例一定要和数据项的 name一一对应
  legend: {
   data: ['销量', '人数']
  },

  xAxis: {
   data: ["1月", "2月", "3月", "4月", "5月", "6月"]
  },
  yAxis: {},
  // Declare several bar series, each will be mapped
  series: [
   {
    name: '销量',
    type: 'bar',//bar为柱状图,line折线图
    data: [100, 123, 555, 654, 888, 1234]
   },
   {
    name: '人数',
    type: 'bar',
    data: [332, 456, 789, 546, 111, 456]
   },
  ]
 };

 // 使用配置好的optionl进行图表显示
 echarts_left.setOption(optionl)

 var echarts_right = echarts.init(document.querySelector(".echarts_right"));

 var optionr = {
  // 大标题
  title: {
   // 标题
   text: "热门品牌销售",
   // 副标题
   subtext: "2019年2月",
   // 控制方向
   x: "center",
   // 控制主标题文本的样式
   textStyle: {
    fontSize: 25
   }
  },
  // 提示框组件
  tooltip: {
   trigger: 'item',
   // 专门配置提示框组件的内容
   // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
   formatter: "{a} <br/>{b} : {c} ({d}%)"
 },
 // 图例
 legend: {
   // 配置图例的对齐方式  vertical: 垂直排列,   horizontal: 水平排布
   orient: 'vertical',
   left: 'left',
   data: ['耐克', '阿迪', '老北京', '老奶奶', '回力']
 },
 series: [
   { 
     name: '品牌热销',   // 系列名称
     type: 'pie',   // 饼图
     radius: '55%', // 控制圆的大小
     center: ['50%', '60%'],  // 控制圆心的坐标
     data: [
       { value: 335, name: '耐克' },   // 数据项名称
       { value: 310, name: '阿迪' },
       { value: 234, name: '老北京' },
       { value: 135, name: '老奶奶' },
       { value: 1548, name: '回力' }
     ],
     // 额外效果
     // 额外的效果
     itemStyle: {
      // 设置一些阴影效果
      emphasis: {
        shadowBlur: 100,
        shadowOffsetX: 0,
        shadowColor: 'yellow'
      }
    }
  }
]
};

// 使用刚指定的配置项和数据显示图表。
echarts_right.setOption(optionr);

 

})();