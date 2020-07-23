$(function() {
	$("#sidebar .nav ul li").mouseover(function() {
		var _index = $(this).index() + 1;
		$(this).addClass("active").siblings().removeClass("active");
		$("#main .test" + _index).show().siblings().hide();
	});
});

function helloworld2() {
	alert("helloworld2");
}

function typesqrt() {
	var ts = $("#ts").val();
	if (isNaN(ts) != true)
		alert(Math.pow(ts, 2));
	else
		alert("请录入数值");
}

function varnum() {
	num = parseInt(Math.random() * 19) + 1;
}
varnum();

function guessnum() {
	var gn = $("#gn").val();
	if (isNaN(gn) != true) {
		if (gn != num) {
			if (gn > num)
				alert("大了");
			else
				alert("小了");
		} else
			alert("猜对了");
	} else
		alert("请录入数值");
}

function factorial() {
	var temp = 1;
	var fn = $("#fn").val();
	if (isNaN(fn) != true) {
		for (var i = 1; i <= fn; i++)
			temp = temp * i;
		alert(fn + "的阶层为" + temp);
	} else
		alert("请录入数值");
}

function filter() {
	var sn = $("#sn").val();
	var sf = $("#sf").val();
	alert(sn.replace(sf, ""));
}

function arrayInit() {
	var an = $("#an").val();
	var arr = new Array(an.length);
	for (var i = 0; i < an.length; i++)
		arr[i] = an.charAt(i);
	return arr;
}

function reverse() {
	alert(arrayInit().reverse());
}

function tsort() {
	alert(arrayInit().sort());
}

function sortNumber(a, b) {
	return a - b;
}

function nsort() {
	alert(arrayInit().sort(sortNumber));
}

function buy() {
	var x, y, z, answer = "";
	// 时间复杂度：O(N2)
	//for (x = 0; x <= 20; x++) { // 公鸡
	//	for (y = 0; y <= 33; y++) { // 母鸡
	//		z = 100 - x - y; // 小鸡
	//		if ((z % 3 == 0) && (x * 5 + y * 3 + z / 3 == 100))
	//			answer += ("公鸡" + x + "只，母鸡" + y + "只，小鸡" + z + "只\n");
	//	}
	//}
	// 时间复杂度：O(N)
	for (var k = 0; k <= 3; k++) {
		x = 4 * k; // 公鸡
		y = 25 - 7 * k; // 母鸡
		z = 75 + 3 * k; // 小鸡
		answer += ("公鸡" + x + "只，母鸡" + y + "只，小鸡" + z + "只\n");
	}
	alert(answer);
}

function regexp1() {
	var un = $("#username input").val();
	var pt1 = new RegExp(/^\w{3,6}$/);
	if (!pt1.test(un))
		alert("录入错误！");
	else
		alert("录入正确！");
}

function regexp2() {
	var tp = $("#telphone input").val();
	var pt2 = new RegExp(/^\d{6}$/);
	if (!pt2.test(tp))
		alert("录入错误！");
	else
		alert("录入正确！");
}
var sec = 6;
var sto;

function startCount() {
	if (sec != 0) {
		sec -= 1;
		$("#tz").attr("value", sec + "秒后打开新页面");
		sto = setTimeout("startCount()", 1000);
	} else {
		open("http://www.w3school.com.cn/");
		$(".test13 input").attr("value", "重新开始").attr("onClick", "resetCount()");
		stopCount();
	}
}

function resetCount() {
	sec = 6;
	startCount();
}

function stopCount() {
	clearTimeout(sto);
}
var imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];
var imageIndex = 1;
var imageTimer;

function startRotate() {
	$(".test14 input").attr("value", "暂停").attr("onClick", "stopRotate()");
	var rotateFunc = function() {
		var image = $("#img");
		image.attr("src", "img/" + imageArray[imageIndex]);
		if (imageIndex == imageArray.length - 1)
			imageIndex = 0;
		else
			imageIndex++;
	};
	imageTimer = setInterval(rotateFunc, 3000);
}

function stopRotate() {
	$(".test14 input").attr("value", "开始").attr("onClick", "startRotate()");
	clearInterval(imageTimer);
}

function valiAccount() {
	$("#txtAccount").className = "txt";
	var account = $("#txtAccount").val();
	var reg = /^[A-Za-z0-9]{1,10}$/;
	var error = reg.test(account);
	var spanObj = $("#accountInfo");
	if (error) {
		spanObj.html("");
		spanObj.attr("class", "vali_success");
	} else {
		spanObj.html("10长度以内的字母，数字组合");
		spanObj.attr("class", "vali_fail");
	}
	return error;
}

function valiPhone() {
	$("#txtPhone").className = "txt";
	var phone = $("#txtPhone").val();
	var reg = /^0\d{2,3}-\d{7,8}$/;
	var error = reg.test(phone);
	var spanObj = $("#phoneInfo");
	if (error) {
		spanObj.html("");
		spanObj.attr("class", "vali_success");
	} else {
		spanObj.html("形如：0755-36281947");
		spanObj.attr("class", "vali_fail");
	}
	return error;
}

function valiAll() {
	var r1 = valiAccount();
	var r2 = valiPhone();
	return r1 && r2;
}

function tableInit() {
	$("#datalist tr:odd").css("background-color", "#fff");
	$("#datalist tr:even").css("background-color", "#eee");
}
tableInit();
var _name, _num, _price;
var _fullPrice = parseFloat($("#datalist tfoot tr:eq(0) td:nth-child(2)").html());

function defaultNum(nowIn) {
	dnum = $(nowIn).val();
}

function changeNum(nowIn) {
	_num = $(nowIn).val();
	_price = parseFloat($(nowIn).parent().parent().find("td:nth-child(2)").html());
	if (_num >= 0) {
		if (dnum > _num) {
			dnum -= _num;
			_fullPrice -= _price * dnum;
		}
		if (dnum < _num) {
			dnum = _num - dnum;
			_fullPrice += _price * dnum;
		}
		$(nowIn).attr("value", _num);
		$(nowIn).parent().parent().find("td:nth-child(4)").html(_price * _num).formatCurrency();
		$("#datalist tfoot tr:eq(0) td:nth-child(2)").html(_fullPrice).formatCurrency();
	} else
		alert("请输入整数！");
}

function increaseNum(nowBtn) {
	_num = $(nowBtn).prev().val();
	_price = parseFloat($(nowBtn).parent().parent().find("td:nth-child(2)").html());
	$(nowBtn).prev().attr("value", ++_num);
	$(nowBtn).parent().parent().find("td:nth-child(4)").html(_price * _num).formatCurrency();
	_fullPrice += _price;
	$("#datalist tfoot tr:eq(0) td:nth-child(2)").html(_fullPrice).formatCurrency();
}

function decreaseNum(nowBtn) {
	_num = $(nowBtn).next().val();
	_price = parseFloat($(nowBtn).parent().parent().find("td:nth-child(2)").html());
	if (_num > 0) {
		$(nowBtn).next().attr("value", --_num);
		$(nowBtn).parent().parent().find("td:nth-child(4)").html(_price * _num).formatCurrency();
		_fullPrice -= _price;
		$("#datalist tfoot tr:eq(0) td:nth-child(2)").html(_fullPrice).formatCurrency();
	} else if (confirm("是否删除该项？"))
		delOne(nowBtn);
}

function insert() {
	_name = $("#name").val();
	_price = $("#price").formatCurrency().val() || "0.00";
	if (isNaN(_price) != true) {
		$("<tr><td>" + _name + "</td><td>" + _price + "</td><td><input type='button' value='-' onclick='decreaseNum(this);' /> <input type='text' value='1' onfocus='defaultNum(this);' onblur='changeNum(this);' /> <input type='button' value='+' onclick='increaseNum(this);' /></td><td>" + _price + "</td><td><input type='button' class='btn green' value='编辑'>&nbsp;<input type='button' class='btn red' value='删除' onclick='delOne(this);'></td></tr>").insertAfter($("#datalist tbody:first"));
		_fullPrice += parseFloat(_price);
		$("#datalist tfoot tr:eq(0) td:nth-child(2)").html(_fullPrice).formatCurrency();
		tableInit();
	} else
		alert("价格不是数值！");
}

function edit() {}

function delOne(nowTr) {
	_price = $(nowTr).parent().parent().find("td:nth-child(4)").html();
	_fullPrice -= parseFloat(_price);
	$("#datalist tfoot tr:eq(0) td:nth-child(2)").html(_fullPrice).formatCurrency();
	$(nowTr).parent().parent().remove();
	tableInit();
}

function delAll() {
	_fullPrice = 0;
	$("#datalist tr:not(:first):not(:last)").remove();
	$("#datalist tfoot tr:eq(0) td:nth-child(2)").html(_fullPrice).formatCurrency();
}

var div = document.getElementById("div");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
div3.innerHTML = div2.innerHTML;

function leftMove() {
	if (div3.offsetWidth - div.scrollLeft <= 0)
		div.scrollLeft -= div2.offsetWidth;
	else
		div.scrollLeft++;
}

function rightMove() {
	if (div3.offsetWidth - div.scrollLeft >= 600)
		div.scrollLeft += div2.offsetWidth;
	else
		div.scrollLeft--;
}
var flag = 0;
var speed = 10;
var start;
div.onmouseover = function() {
	if (start)
		clearInterval(start);
}

function moveout(way) {
	if (start)
		clearInterval(start);
}

function moveThis(way) {
	if (way == 'right') {
		flag = 1;
		if (start)
			clearInterval(start);
		start = setInterval(rightMove, speed);
	} else {
		flag = 0;
		if (start)
			clearInterval(start);
		start = setInterval(leftMove, speed);
	}
	if (flag)
		div.onmouseout = function() {
			start = setInterval(rightMove, speed)
		}
	else
		div.onmouseout = function() {
			start = setInterval(leftMove, speed)
		}
}