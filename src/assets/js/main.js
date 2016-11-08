$(document).ready(function(){
	function getStyle(obj,attr)
{
  if(obj.currentStyle)
 {
return obj.currentStyle[attr];
 }
else
{
   return getComputedStyle(obj,false)[attr];
}
}

$("#showmenu").click(function(){
		$("#showmenu").toggleClass("active");
		$("#navigation").toggle();
		if($("#showmenu").attr("class")!="")
		{
			$("#showmenu>span").css("background-position","0 0");
		}
		else
		{
			$("#showmenu>span").css("background-position","0 -16px");
		}

	});
});
