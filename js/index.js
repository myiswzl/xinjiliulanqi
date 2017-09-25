/*
* @Author: Shinelon
* @Date:   2017-06-08 15:01:02
* @Last Modified by:   Shinelon
* @Last Modified time: 2017-06-13 09:21:25
*/

'use strict';
$(function(){
	$('section>div').eq(0).removeClass('divs').siblings().addClass('divs');
	$('ol li').click(function(event) {		
		var index=$(this).index();
		/*$('section').css({'top':-100%index})
		上下左右移动要给其定位。注意字符串拼接*/
		num=index;
		$('section').animate({'top':-100*index+'%'},500)
		$(this).addClass('list')
		$(this).siblings().removeClass('list');
		$('section>div').eq(num).removeClass('divs').siblings().addClass('divs');
	});
    
    var num=0;
    var timer;
	$(document).mousewheel(function(e,d){
		/*如果向下滚动： d=-1*/
		/*如果向上滚动： d=1*/
		/*num-d = 0-(-1) num=1
		  num-d = 1-(-1) num=2
		  num-d = 2-(-1) num=3
		  num-d = 3-(1)  num=2(向上)*/
		  clearTimeout(timer)
	timer=setTimeout(function(){

		num=num-d;
		  if(num>6){
             num=6;
		  }
		  if(num<0){
		  	num=0;
		  }
        $('section').animate({'top':-100*num+'%'},500)
        $('ol li').eq(num).addClass('list');
        $('ol li').eq(num).siblings().removeClass('list');
		$('section>div').eq(num).removeClass('divs').siblings().addClass('divs');

	},500)
	/*setTimeout(function(){},时间)
		单次定时器：只执行一次。相当于每隔一段时间之后再执行定时器里面的代码*/		  
	})

/*控制音乐*/
  $('.music').click(function(event) {
  	  if($(this).hasClass('zizhuan')){  /*判断是否有其类*/
  	  		$('audio')[0].currentTime=0;
  	  		$('audio')[0].pause();

  	  		$(this).removeClass('zizhuan');
  	  }else{
  	  		$('audio')[0].play();
  	  		$(this).addClass('zizhuan');

  	  }
  });







})