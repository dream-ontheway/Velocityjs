(function($){
	//动画元素 事件变量
	var container = $(".container");
	var box = $(".box");
	var buddy = $(".buddy");
	var pop = $(".pop");
	var close = $(".close");
	var open = $(".btn");
	var imgs = pop.find('img');
//定义正面淡出
	$.Velocity.RegisterUI('jianwu.slideUpIn', {
		defaultDuration : 500,
		calls:[
			[{opacity:[1, 0], translateY:[0, 100]}]
		]
	});

//定义背面淡出
	$.Velocity.RegisterUI('jianwu.slideDownOut', {
		defaultDuration : 300,
		calls:[
			[{opacity:[0, 1], translateY:[100, 0]}]
		]
	});
//定义卡片弹出
	$.Velocity.RegisterUI('jianwu.scaleIn', {
		defaultDuration : 300,
		calls:[
			[{opacity:[1, 0], scale:[1, 0.3]}]
		]
	});
//关闭按钮
	$.Velocity.RegisterUI('jianwu.scaleOut', {
		defaultDuration : 300,
		calls:[
			[{opacity:[0, 1], scale:[0.3, 1]}]
		]
	});

//动画序列
	var seqInit = [{
		elements:container,
		properties:'jianwu.slideUpIn',
		opacity:{
			delay:300
		}
	},{
		elements:box,
		properties:'jianwu.slideUpIn',
		opacity:{
			sequenceQuence:false
		}
	},{
		elements:buddy,
		properties:'jianwu.slideUpIn',
		opacity:{
			delay:60,
			sequenceQuence:false
		}
	}];



	var seqClick = [{
		elements:container,
		properties:'jianwu.slideDownOut',
		
	},{
		elements:box,
		properties:'jianwu.slideDownOut',
		opacity:{
			sequenceQuence:false
		}
	},{
		elements:container,
		properties:'jianwu.slideUpIn',
	},{
		elements:pop,
		properties:'jianwu.slideUpIn',
		opacity:{
			sequenceQuence: false
		}
	},{
		elements:imgs,
		properties:'jianwu.scaleIn',
	}];


	var seqClose = [{
		elements:imgs,
		properties:'jianwu.scaleOut',
	},{
		elements:container,
		properties:'jianwu.slideDownOut',
		
	},{
		elements:pop,
		properties:'jianwu.slideDownOut',
		opacity:{
			sequenceQuence:false
		}
	},{
		elements:container,
		properties:'jianwu.slideUpIn',
	},{
		elements:box,
		properties:'jianwu.slideUpIn',
		opacity:{
			sequenceQuence: false
		}
	}];
	//事件绑定
	$.Velocity.RunSequence(seqInit);
	open.on('click',function(){
		$.Velocity.RunSequence(seqClick);
	})
	close.on('click',function(){
		$.Velocity.RunSequence(seqClose);
	})
	
})(jQuery);