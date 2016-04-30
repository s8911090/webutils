
var EnglishRegxp = /^[A-Za-z0-9]*$/;
var Now = new Date();
var MillisPerDay = 24*60*60*1000;

function dupObj(obj) {
	return JSON.parse(JSON.stringify(obj));;
}

function dump(obj) {
    var out = '';
	if( (typeof(obj) === 'string')){
		out  = obj;
	} else {
		for (var i in obj) {
			out += i + ": " + obj[i] + "\n";
		}
	}
    //alert(out);
    // or, if you wanted to avoid alerts...
    var pre = document.createElement('pre');
    pre.innerHTML = out;
    document.body.appendChild(pre);
}

function isDateNearInDays( nearInDays, baseDate, compareToDate){
	if (typeof(nearInDays)==='undefined'){
		return false;
	}
	if (typeof(baseDate)==='undefined'){
		return false;
	}
	if (typeof(compareToDate)==='undefined'){
		compareToDate = Now;
	}
	return Math.abs(compareToDate - baseDate) <= nearInDays * MillisPerDay;
}

function getDefaultDate() {
    return getDecentDate( Now , "/");
}

function getDecentDate( date ,  splitor) {
	if (typeof(splitor)==='undefined'){
		splitor = "";
	}
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var full = date.getFullYear() + splitor + (month) + splitor + (day);
    return full;
}

function getDecentTime( date ,  splitor) {
	if (typeof(splitor)==='undefined'){
		splitor = ":";
	}
    var h = ("0" + date.getHours()).slice(-2);
    var m = ("0" + date.getMinutes()).slice(-2);
    var s = ("0" + date.getSeconds()).slice(-2);
    return h + splitor + m + splitor + s;
}

var decodeHtmlEntity = function(str) {
	var elm = document.createElement('textarea');
	elm.innerHTML = str;
	return elm.value;
};

var encodeHtmlEntity = function(str) {
  var buf = [];
  for (var i=str.length-1;i>=0;i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};

function uniqArray(arr) {
    var seen = {};
    var out = [];
    var len = arr.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = arr[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}

function getAllCssText() {
	var allCss = getAllCss(), allCssText = "";

		for (var i = 0 ; i < allCss.length ;i++) {
			allCssText += allCss[i].cssText ;
		}
    return allCssText;
}
function getAllCss() {
    var sheets = document.styleSheets, allCSS = new Array();

    for ( var i = 0; i < sheets.length ; i++) {

		if( sheets[i].href != null ){
			//external css			
			continue;
		}
        var rules = sheets[i].rules || sheets[i].cssRules;
		if(rules == null){
			//external css			
			continue;
		}
		
		for (var r = 0 ; r < rules.length ;r++) {
			allCSS.push(rules[r]);
		}
    }
    return allCSS;
}