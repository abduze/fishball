/**
 *  autor:Chation
 */
function xxxx(){
	document.getElementById("right_col_peck").click();
}
var i=15;
var t=setInterval(function(){
	if (i == 0) { 
		clearInterval(t);
	} 
	document.getElementsByClassName('cs-textarea')[0].value = '6666' + i; 
	document.getElementsByClassName('b-btn')[0].click(); 
	i--;
}, 10000);
t;
setInterval("xxxx()",50);
var ss=document.getElementsByClassName("y1 fl")[0].getElementsByTagName("em")[0].innerHTML;
document.onkeydown=function(event){
	var keyplay=event||window.event||arguments.callee.caller.arguments[0];
	if(keyplay && keyplay.keyCode==86){
		var ss1=document.getElementsByClassName("y1 fl")[0].getElementsByTagName("em")[0].innerHTML;
		var numyw=ss1-ss;alert("哇哦~你在这个房间抢到了 "+numyw+" 个鱼丸呢~!");
	}
};