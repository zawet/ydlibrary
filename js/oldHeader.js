/****
下拉菜单可选择值到输入框
****/ 

define(function(require,exports) {//dedine闭包
	var fun=require('./common_default/com_function');
	exports.header=function(i){
		fun.htmlajax("mould_html/oldHeader.html",function(html){
			$(".qky_header").html(html);
			$(".qky_top_navs li a").removeClass("cur");
		$(".qky_top_navs li").eq(i).find("a").addClass("cur");
		});	
	}
	
});
