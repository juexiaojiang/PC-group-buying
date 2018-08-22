/*
 *description: 1号抢购;
 *author: yuting2;
 *date: 2017/01/22;
 *update: 2017/05/17;
 */

var seckillScript = {
	initFun: function() {
		this.popMethods();
		this.ziying_label();
		this.hide_nav();
		this.click_change_background();
		this.will_on_sale_change();
		this.tiaozhuan();
		// this.getTop();
		$(window).on('scroll', function() {
			var top = $(document).scrollTop();
			if(top>112){
				$('.header_nav_wrap_hide').addClass('fixed');
			} else {
				$('.header_nav_wrap_hide').removeClass('fixed');
			}
		});
		$(window).on('scroll', function() {
			var top = $(document).scrollTop();
			if(top>700){
				$('.back_top').show();
			} else {
				$('.back_top').hide();
			}
		});
	},
	popMethods:function(){
		// $('.qianggou_product_box.need_hover').on('mouseover',function() {
		// 	$('.car_hover').show();
		// 	$('.sale_percent_num_wrap.need_hover').hide();
		// });
		// $('.qianggou_product_box.need_hover').on('mouseout',function() {
		// 	$('.car_hover').hide();
		// 	$('.sale_percent_num_wrap.need_hover').show();
		// });
		$('.qianggou_product_box.mask').on('mouseover',function() {
			$('.look_careful').show();
			$('.product_price_wrap.mask').css('margin-top','16px');
		});
		$('.qianggou_product_box.mask').on('mouseout',function() {
			$('.look_careful').hide();
			$('.product_price_wrap.mask').css('margin-top','47px');
		});
	},
	ziying_label:function(){
		$('.no_select').on('click',  function() {
			$('.select').show();
			$('.no_select').hide();
			$('.ziying').show();
			$('.no_ziying').hide();
		});
		$('.select').on('click',  function() {
			$('.no_select').show();
			$('.select').hide();
			$('.no_ziying').show();
			$('.ziying').show();
		});
	},
	hide_nav:function(){
		$('.last').on('click', function(event) {
			event.stopPropagation()
			$('.icon-arrow-down').hide();
			$('.icon-arrow-up').show();
			$('.hide_nav').show();
		});
		$(document).on('click', function() {
			$('.icon-arrow-up').hide();
			$('.icon-arrow-down').show();
			$('.hide_nav').hide();
		});
		$('.icon-arrow-left').on('click', function() {
			$('.bottom_ad').addClass('right_to_left');
			$('.tuoyuan').hide();
			$('.icon-arrow-left').hide();
			$('.out_ad').show();
		});
		$('.icon-arrow-right').on('click', function() {
			$('.bottom_ad').addClass('left_to_right').removeClass('right_to_left');
			$('.tuoyuan').show();
			$('.icon-arrow-left').show();
			$('.out_ad').hide();
		});
		// $('.icon-arrow-left').on('click', function() {
		// 	$('.bottom_ad').hide();
		// 	$('.out_ad').show();
		// });
	},
	click_change_background:function(){
		$('.big_nav li').on('click', function() {
			$(this).addClass('selected').siblings().removeClass('selected');
		});
		$('.small_nav li').on('click', function() {
			$(this).addClass('selected').siblings().removeClass('selected');
		});
		$('.will_sale_btn').on('click', function() {
			$('.will_sale_btn').addClass('selected').removeClass('normal')
			$('.on_sale_btn').removeClass('selected').addClass('normal');
		});
		$('.on_sale_btn').on('click', function() {
			$('.on_sale_btn').addClass('selected').removeClass('normal')
			$('.will_sale_btn').removeClass('selected').addClass('normal');
		});
	},
	will_on_sale_change:function(){
		$('.will_sale_btn').on('click',  function() {
			$('.will_sale').show();
			$('.on_sale').hide();
		});
		$('.on_sale_btn').on('click',  function() {
			$('.on_sale').show();
			$('.will_sale').hide();
		});
		// $('.jingxuan').on('click',  function() {
		// 	$('.small_nav_product').hide();
		// 	$('.big_nav_product').show();
		// });
	},
	tiaozhuan:function(){
		$('.on_sale_btn_two').on('click', function(event) {
			window.location.href="#top";
			$('.on_sale_btn').addClass('selected').removeClass('normal')
			$('.will_sale_btn').removeClass('selected').addClass('normal');
			$('.on_sale').show();
			$('.will_sale').hide();
		});
		$('.will_sale_btn_two').on('click', function(event) {
			window.location.href="#top";
			$('.will_sale_btn').addClass('selected').removeClass('normal')
			$('.on_sale_btn').removeClass('selected').addClass('normal');
			$('.will_sale').show();
			$('.on_sale').hide();
		});
		$('.icon-zhiding').on('click', function(event) {
			window.location.href="#top";
		});
	},
	// getTop:function(){
 //        var top = $(document).scrollTop();
 //        if(top>112){
 //            $('.header_nav_wrap_hide').addClass('fixed');
 //        } else {
 //            $('.header_nav_wrap_hide').removeClass('fixed');
 //        }
 //        // setTimeout("getTop",);
 //    },
};
seckillScript.initFun();