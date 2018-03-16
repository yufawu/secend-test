window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
      // 轮播图的方向，也可以是vertical方向
      direction:'horizontal',
      // 自动播放时间
      autoplay:true,
      // 播放的速度
      speed:2000,
      
      // 如果需要分页器，即下面的小圆点
      pagination: '.swiper-pagination',
      paginationClickable:true,

　　　　　　// 这样，即使我们滑动之后， 定时器也不会被清除
　　　　  autoplayDisableOnInteraction : false,
     
      
      
    });
  }        