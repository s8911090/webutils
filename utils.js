///<reference path="jquery.d.ts" />
///<reference path="angular.d.ts" />

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
function getDefaultDate() {
    var now = new Date();
    return getDecentDate( now , "/");
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
	  return str.replace(/&#(\d+);/g, function(match, dec) {
	    return String.fromCharCode(dec);
	  });
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