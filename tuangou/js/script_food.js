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
		// this.tiaozhuan();
	},
	popMethods:function(){
		$('.qianggou_product_box_hover').on('mouseover',function() {
			$('.car_hover').show();
			$('.sale_percent_num_wrap_hover').hide();
			$('.product_price_wrap_hover').css('margin-top','-5px');
		});
		$('.qianggou_product_box_hover').on('mouseout',function() {
			$('.car_hover').hide();
			$('.sale_percent_num_wrap_hover').show();
			$('.product_price_wrap_hover').css('margin-top','26px');
		});
		$('.qianggou_product_box_mask').on('mouseover',function() {
			$('.look_careful').show();
			$('.product_price_wrap_mask').css('margin-top','-5px');
		});
		$('.qianggou_product_box_mask').on('mouseout',function() {
			$('.look_careful').hide();
			$('.product_price_wrap_mask').css('margin-top','26px');
		});
		$('.qianggou_product_box_hover.will').on('mouseover',function() {
			$('.car_hover.will').show();
			$('.sale_percent_num_wrap_hover.will').hide();
			$('.product_price_wrap_hover.will').css('margin-top','-5px');
		});
		$('.qianggou_product_box_hover.will').on('mouseout',function() {
			$('.car_hover.will').hide();
			$('.sale_percent_num_wrap_hover.will').show();
			$('.product_price_wrap_hover.will').css('margin-top','26px');
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
		$('.icon-arrow-down').on('click', function() {
			$('.icon-arrow-down').hide();
			$('.icon-arrow-up').show();
			$('.hide_nav').show();
		});
		$('.icon-arrow-up').on('click', function() {
			$('.icon-arrow-up').hide();
			$('.icon-arrow-down').show();
			$('.hide_nav').hide();
		});
	},
	click_change_background:function(){
		$('.big_nav li').on('click', function() {
			$(this).addClass('selected').siblings().removeClass('selected');
			$(this).removeClass('normal').siblings().addClass('normal');
		});
		$('.small_nav li').on('click', function() {
			$(this).addClass('selected').siblings().removeClass('selected');
		});
	},
	will_on_sale_change:function(){
		$('.will_sale_btn_two').on('click',  function() {
			window.location.href="#qianggou_will";
		});
		$('.on_sale_btn_two').on('click',  function() {
			window.location.href="#qianggou_ing";
		});
	    $('.icon-zhiding').on('click', function(event) {
			window.location.href="#top";
		});
	},
	// tiaozhuan:function(){
	// 	$('.on_sale_btn_two').on('click', function(event) {
	// 		window.location.href="#top";
	// 		$('.on_sale_btn').addClass('selected').removeClass('normal')
	// 		$('.will_sale_btn').removeClass('selected').addClass('normal');
	// 		$('.on_sale').show();
	// 		$('.will_sale').hide();
	// 	});
	// 	$('.will_sale_btn_two').on('click', function(event) {
	// 		window.location.href="#top";
	// 		$('.will_sale_btn').addClass('selected').removeClass('normal')
	// 		$('.on_sale_btn').removeClass('selected').addClass('normal');
	// 		$('.will_sale').show();
	// 		$('.on_sale').hide();
	// 	});
	// 	$('.icon-zhiding').on('click', function(event) {
	// 		window.location.href="#top";
	// 	});
	// },
};
seckillScript.initFun();