




  //   //右侧导航栏
  //   //步骤分析：
  //   //1 通过顶部li点击操作，设置当前li的a类名(show)，其他li移除类名(removeClass)
    $(".title>span").mouseover(function(){
      $(this).addClass("blue").siblings().removeClass("blue");
      //2 根据当前li的索引值(index)找到底部对应的div，设置selected类名，其他div移除类名
      var index = $(this).index();//获取当前li的索引值

      //console.log(index);
      //console.log($(".show1").children())
      $(".show1").children().eq(index).addClass("show").siblings().removeClass("show");
    });


  
    
//左侧小轮播图开始

 // 0. 定义一个索引，控制切换项
    var index = 0;
    // 1. 获取右侧按钮并注册点击事件
    $('.arrow-right').click(function () {
      // 1.1 让索引自增
      index++;
      // 1.2 限制索引  轮播项总个数-1
      if (index > $('.left li').length - 1) {
        index = 0;
      }
      // 1.3 显示（淡入）下一个，其他兄弟隐藏（淡出）
      $('.left li').eq(index).fadeIn(500).siblings().fadeOut(500);
     
    });
    // 2. 获取左侧按钮并注册点击事件
    $('.arrow-left').click(function () {
      // 2.1 让索引自减
      index--;
      // 1.2 限制索引  ,不能小于0
      if (index < 0) {
        index = $('.left li').length - 1;
      }
      // 1.3 显示（淡入）下一个，其他兄弟隐藏（淡出）
      $('.left li').eq(index).fadeIn(500).siblings().fadeOut(500);
     
    });
    // 3. 封装自动轮播
    var num;;  // 定时器标识
    function autoPlay() {
      num = setInterval(function () {
        // 代码触发右侧按钮点击事件 
        // $('.arrow-right').click();
        $('.arrow-right').trigger('click');
      }, 2000);

    }
    // 启动轮播
    autoPlay();


    // 4. 鼠标进入轮播区，停止自动轮播
    $('.left').on('mouseover', function () {
      // 停止自动轮播
      clearInterval(num);
    });

    // 5. 鼠标离开轮播区，启动自动轮播
    $('.left').on('mouseout', function () {
      // 启动自动轮播
      autoPlay();
    });

      $('.arrow-right').click(function () {
      // 1.1 让索引自增
      index++;
      // 1.2 限制索引  轮播项总个数-1
      if (index > $('.left li').length - 1) {
        index = 0;
      }
      // 1.3 显示（淡入）下一个，其他兄弟隐藏（淡出）
      $('.left li').eq(index).fadeIn(500).siblings().fadeOut(500);
      // 1.4 小点按钮也要切换
      // $('.slider .controls a').eq(index).addClass('active').siblings().removeClass('active');
    });
    
    
    
    // //下边大图轮播图开始
    $('.yuan .yuan1 li').on('mouseover', function () {
      // this 代表谁 → a
      // 6.1 获取当前触发的a的索引
      var index = $(this).index();
      // 6.2 显示（淡入）下一个，其他兄弟隐藏（淡出）
      $('.photo li').eq(index).fadeIn(500).siblings().fadeOut(500); 
      //alert(index);
       // 6.3 小点按钮也要切换
       $(this).addClass('red').siblings().removeClass('red');
    });



// 人物介绍

 $(".footer-t>span").mouseover

 (function(){
      $(this).addClass("door").siblings().removeClass("door");
      //2 根据当前li的索引值(index)找到底部对应的div，设置selected类名，其他div移除类名
      var index = $(this).index();//获取当前li的索引值

      //console.log(index);
      //console.log($(".show1").children())
      $(".foo1").children().eq(index).show().siblings().hide();
    });
   
 

