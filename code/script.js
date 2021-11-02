var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;
var aa,bb,cc,dd,ee,ff,gg,hh,ii;
var dowryAmount =0 ;

var ssiAmount = 0;
var csiAmount = 0;
var paiAmount = 0;
var ppiAmount = 0;
var cpiAmount = 0;

   var casteIndex = {c1: 300000 ,c2: 200000 ,c3: 750000 ,c4: 200000 ,c5: 150000 ,c6: 75000 ,c7: 150000 ,c8: 90000 };

   var langIndex  = {d1:1.25, d2:1.1, d3:1.15,d4:1.1 ,d5:1.1 ,d6:1 ,d7:1, d8:1, d9:1.1,d10: 1.2 ,d11: 1 ,d12: 1 };
   
   var propertyIndex = {k1:10000 ,k2:50000 ,k3:100000 ,k4:500000 ,k5: 2000000 ,k6:5000000 ,k7: 10000000 };

   var salaryIndex = {g1:150000,g2:200000,g3:300000,g4:500000,g5:700000,g6:800000,g7:1000000};

	var ageIndex = {b1:1.25,b2:1.2,b3:1.2,b4:1.2,b5:1.1,b6:1,b7:0.9,b8:0.8,b9:0.65};
	var occupationIndex = {h1:1.2 ,h2:1.25 ,h3:1.3 ,h4:1.1 ,h5:0.9 ,h6:1 ,h7:0.8};
	var collegeIndex  = {l1:1.2,l2:1.25,l3:1.4,l4:1.15,l5:1.25,l6:1.5,l7:1};


	var maleAgeIndex   = {b1:1.1,b2:1.2,b3:1.4,b4:1.5,b5:1.2,b6:1,b7:0.8,b8:0.5,b9:0.25};
	var femaleAgeIndex = {aa1:1.1,aa2:1.2,aa3:1.4,aa4:1.5,aa5:1.2,aa6:1,aa7:0.8,aa8:0.5,aa9:0.25};

	var femaleAgeIndex2   = {b1:1.1,b2:1.2,b3:1.4,b4:1.5,b5:1.2,b6:1,b7:0.8,b8:0.5,b9:0.25};
	var maleAgeIndex2 = {aa1:1.1,aa2:1.2,aa3:1.4,aa4:1.5,aa5:1.2,aa6:1,aa7:0.8,aa8:0.5,aa9:0.25};

	var maleHeightIndex = {i1:0.6 ,i2:0.75 ,i3:0.7 ,i4:0.8 ,i5:0.85 ,i6:0.9 ,i7:1 ,i8:1.1 ,i9:1.2 ,i10:1.3 ,i11:1.4 ,i12:1.4 };
	var femaleHeightIndex = {cc1:0.6,cc2:0.7,cc3:0.8,cc4:0.9,cc5:1,cc6:1.2,cc7:1.4,cc8:1,cc9:0.95,cc10:0.95,cc11:0.95,cc12:0.95};

	var maleColorIndex = {j1:1.1,j2:1.1,j3:1,j4:0.9,j5:0.9};
	var femaleColorIndex = {bb1:1.5,bb2:1.1,bb3:1,bb4:0.9,bb5:0.8};

	var maleBodyIndex = {f1:1.1,f2:1.1,f3:1,f4:0.9,f5:0.9};
	var femaleBodyIndex = {dd1:1.4,dd2:1.1,dd3:1,dd4:0.9,dd5:0.8};

	var femaleHeightIndex2 = {i1:0.6 ,i2:0.75 ,i3:0.7 ,i4:0.8 ,i5:0.85 ,i6:0.9 ,i7:1 ,i8:1.1 ,i9:1.2 ,i10:1.3 ,i11:1.4 ,i12:1.4 };
	var maleHeightIndex2 = {cc1:0.6,cc2:0.7,cc3:0.8,cc4:0.9,cc5:1,cc6:1.2,cc7:1.4,cc8:1,cc9:0.95,cc10:0.95,cc11:0.95,cc12:0.95};

	var femaleColorIndex2 = {j1:1.5,j2:1.1,j3:1,j4:0.9,j5:0.8};
	var maleColorIndex2 = {bb1:1.1,bb2:1.1,bb3:1,bb4:0.9,bb5:0.9};

	var femaleBodyIndex2 = {f1:1.4,f2:1.1,f3:1,f4:0.9,f5:0.8};
	var maleBodyIndex2 = {dd1:1.1,dd2:1.1,dd3:1,dd4:0.9,dd5:10.9};

	var hairStyleIndex = {e1:0.75,e2:0.9,e3:1};
	var siblingsIndex  = {ff1:1.1,ff2:1,ff3:0.8};


function processInputs(){
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	c = document.getElementById("c").value;
	d = document.getElementById("d").value;
	e = document.getElementById("e").value;
	f = document.getElementById("f").value;

	g = document.getElementById("g").value;
	h = document.getElementById("h").value;
	i = document.getElementById("i").value;
	j = document.getElementById("j").value;
	k = document.getElementById("k").value;
	l = document.getElementById("l").value;

	aa = document.getElementById("aa").value;
	bb = document.getElementById("bb").value;
	cc = document.getElementById("cc").value;
	dd = document.getElementById("dd").value;
	ee = document.getElementById("ee").value;
	ff = document.getElementById("ff").value;


}

function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
		num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
	return (((sign)?'':'-') + 'INR ' + num + '.' + cents);
}


function displayDowry(){

	paiAmount = Math.round(paiAmount * 100) / 100;
	ppiAmount = Math.round(ppiAmount * 100) / 100;

	dowryAmount = Math.round(dowryAmount * 100) / 100;
	var dAmount = dowryAmount;

	ssiAmount = formatCurrency(ssiAmount);
	csiAmount = formatCurrency(csiAmount);
	paiAmount = formatCurrency(paiAmount);
	ppiAmount = formatCurrency(ppiAmount);

	dowryAmount = formatCurrency(dowryAmount);

	var calcString = "( Social Status : " + ssiAmount + " ,<br> Career Status : " + csiAmount + " ,<br> Profile Availability : " + paiAmount + " ,<br> Partner Preference : " + ppiAmount + " )";

	if(document.getElementById("a").value == 'a1'){
		if(dAmount <= 0){
			document.getElementById("dowry").innerHTML  = "<b>you won't get any dowry<br>"+calcString+"</b>";
		}
		else{
			document.getElementById("dowry").innerHTML  = "<b>The Dowry Amount is <br>"+dowryAmount+"<br> "+calcString+"</b>";
		}
	}

	else{
		if(dAmount <= 0){
			document.getElementById("dowry").innerHTML  = "<b>you won't need to spend any dowry.<br>"+calcString+"</b>";
		}
		else{
		document.getElementById("dowry").innerHTML  = "<b>The Dowry Amount is "+dowryAmount+"<br> "+calcString+"</b>";
		}
	}

}

function clearDowry(){
	
	dowryAmount = 0;
	document.getElementById("dowry").innerHTML  = "<b>The Dowry Amount is  "+dowryAmount+"</b>";


}

function calculateSSI(){
	
       dowryAmount += casteIndex[c];

       dowryAmount *= langIndex[d];

	if(a=='a1'){
		dowryAmount += propertyIndex[k];
	}
	ssiAmount  = dowryAmount;

}

function salaryFunction(salary){
	
	return salaryIndex[salary];
}

function calculateCSI(){


	if(a == 'a1'){
		dowryAmount += salaryFunction(g)*ageIndex[b]*occupationIndex[h]*collegeIndex[l];
	}
	else{
		dowryAmount -= salaryFunction(g)*ageIndex[b]*occupationIndex[h]*collegeIndex[l];
	}

	csiAmount = dowryAmount - ssiAmount;
}

function calculatePAI(){

	var profileFactor = 1;

	if(a == 'a1'){
		
		profileFactor = profileFactor * maleAgeIndex[b] * maleHeightIndex[i] * maleColorIndex[j] * maleBodyIndex[f] * hairStyleIndex[e];
	}
	else{
		profileFactor = -1 * profileFactor * femaleAgeIndex2[b] * femaleHeightIndex2[i] * femaleColorIndex2[j] * femaleBodyIndex2[f];

	}

	dowryAmount +=  ssiAmount * profileFactor ;
	paiAmount = dowryAmount - ssiAmount - csiAmount;
}

function calculatePPI(){

	var preferenceFactor = 1;

	if(a == 'a1'){
		preferenceFactor = -1 * preferenceFactor * femaleAgeIndex[aa] * femaleColorIndex[bb] * femaleHeightIndex[cc] * femaleBodyIndex[dd] * siblingsIndex[ff];
	}
	else{
		preferenceFactor = preferenceFactor * maleAgeIndex2[aa] * maleColorIndex2[bb] * maleHeightIndex2[cc] * maleBodyIndex2[dd] * siblingsIndex[ff];
	}

	dowryAmount +=  ssiAmount * preferenceFactor;


	var compIndex = 0;

	
	ppiAmount = dowryAmount - ssiAmount - csiAmount - paiAmount ;
}

function calculateCPI(){

	if(a == 'a1'){


	}
	else{


	}

}

function computeDowry(){

	processInputs();
	dowryAmount = 0;

	calculateSSI();

	calculateCSI();

	calculatePAI();

	calculatePPI();

	calculateCPI();
	
	displayDowry();
}

function enableDisable(el,sel) {
	try {
		el.disabled = sel;
	}
	catch(E){
		}
	if (el.childNodes && el.childNodes.length > 0) {
		for (var x = 0; x < el.childNodes.length; x++) {
			enableDisable(el.childNodes[x],sel);
		}
	}
}

function edPSHS(){
	a = document.getElementById("a").value;
	if(a=='a2'){

		enableDisable(document.getElementById("k"),true);
		enableDisable(document.getElementById("e"),true);
	}
	else{
		enableDisable(document.getElementById("k"),false);
		enableDisable(document.getElementById("e"),false);

	 }

}


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-23210347-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


    window.setTimeout(function() {
        document.body.className = document.body.className.replace('loading', '');
      }, 10);



window['__wavt'] = 'AOuZoY4xVcs29tZCNiN2JPBG0BSBP-w20Q:1635662759989';_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d7541727651917563401','//dowrycalculator.blogspot.com/2013/06/dowry-calculator.html','7541727651917563401');
_WidgetManager._SetDataContext([{'name': 'blog', 'data': {'blogId': '7541727651917563401', 'title': 'Dowry Calculator for Indian Brides and Grooms', 'url': 'http://dowrycalculator.blogspot.com/2013/06/dowry-calculator.html', 'canonicalUrl': 'http://dowrycalculator.blogspot.com/2013/06/dowry-calculator.html', 'homepageUrl': 'http://dowrycalculator.blogspot.com/', 'searchUrl': 'http://dowrycalculator.blogspot.com/search', 'canonicalHomepageUrl': 'http://dowrycalculator.blogspot.com/', 'blogspotFaviconUrl': 'http://dowrycalculator.blogspot.com/favicon.ico', 'bloggerUrl': 'https://www.blogger.com', 'hasCustomDomain': false, 'httpsEnabled': true, 'enabledCommentProfileImages': true, 'gPlusViewType': 'FILTERED_POSTMOD', 'adultContent': false, 'analyticsAccountNumber': '', 'encoding': 'UTF-8', 'locale': 'en-GB', 'localeUnderscoreDelimited': 'en_gb', 'languageDirection': 'ltr', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'isDynamicViewsAvailable': true, 'feedLinks': '\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Dowry Calculator for Indian Brides and Grooms - Atom\x22 href\x3d\x22http://dowrycalculator.blogspot.com/feeds/posts/default\x22 /\x3e\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/rss+xml\x22 title\x3d\x22Dowry Calculator for Indian Brides and Grooms - RSS\x22 href\x3d\x22http://dowrycalculator.blogspot.com/feeds/posts/default?alt\x3drss\x22 /\x3e\n\x3clink rel\x3d\x22service.post\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Dowry Calculator for Indian Brides and Grooms - Atom\x22 href\x3d\x22https://www.blogger.com/feeds/7541727651917563401/posts/default\x22 /\x3e\n\n\x3clink rel\x3d\x22alternate\x22 type\x3d\x22application/atom+xml\x22 title\x3d\x22Dowry Calculator for Indian Brides and Grooms - Atom\x22 href\x3d\x22http://dowrycalculator.blogspot.com/feeds/5868064766907247558/comments/default\x22 /\x3e\n', 'meTag': '', 'adsenseHostId': 'ca-host-pub-1556223355139109', 'adsenseHasAds': false, 'adsenseAutoAds': false, 'ieCssRetrofitLinks': '\x3c!--[if IE]\x3e\x3cscript type\x3d\x22text/javascript\x22 src\x3d\x22https://www.blogger.com/static/v1/jsbin/403901366-ieretrofit.js\x22\x3e\x3c/script\x3e\n\x3c![endif]--\x3e', 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/091427a9c3afa5a8', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'disableGComments': true, 'sharing': {'platforms': [{'name': 'Get link', 'key': 'link', 'shareMessage': 'Get link', 'target': ''}, {'name': 'Facebook', 'key': 'facebook', 'shareMessage': 'Share to Facebook', 'target': 'facebook'}, {'name': 'BlogThis!', 'key': 'blogThis', 'shareMessage': 'BlogThis!', 'target': 'blog'}, {'name': 'Twitter', 'key': 'twitter', 'shareMessage': 'Share to Twitter', 'target': 'twitter'}, {'name': 'Pinterest', 'key': 'pinterest', 'shareMessage': 'Share to Pinterest', 'target': 'pinterest'}, {'name': 'Email', 'key': 'email', 'shareMessage': 'Email', 'target': 'email'}], 'disableGooglePlus': true, 'googlePlusShareButtonWidth': 0, 'googlePlusBootstrap': '\x3cscript type\x3d\x22text/javascript\x22\x3ewindow.___gcfg \x3d {\x27lang\x27: \x27en_GB\x27};\x3c/script\x3e'}, 'hasCustomJumpLinkMessage': false, 'jumpLinkMessage': 'Read more', 'pageType': 'item', 'postId': '5868064766907247558', 'pageName': 'Dowry Calculator for Indian Brides and Grooms', 'pageTitle': 'Dowry Calculator for Indian Brides and Grooms: Dowry Calculator for Indian Brides and Grooms', 'metaDescription': 'A Scientific Approach to calculate dowry for Indian Brides, Grooms and their parents.'}}, {'name': 'features', 'data': {'sharing_get_link_dialog': 'true', 'sharing_native': 'false'}}, {'name': 'messages', 'data': {'edit': 'Edit', 'linkCopiedToClipboard': 'Link copied to clipboard', 'ok': 'Ok', 'postLink': 'Post link'}}, {'name': 'template', 'data': {'name': 'custom', 'localizedName': 'Custom', 'isResponsive': false, 'isAlternateRendering': false, 'isCustom': true, 'variant': 'simplysimple', 'variantId': 'simplysimple'}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\x3dclassic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\x3dflipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\x3dmagazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\x3dmosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\x3dsidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\x3dsnapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\x3dtimeslide'}, 'isMobile': false, 'title': 'Dowry Calculator for Indian Brides and Grooms', 'description': 'A Scientific Approach to calculate dowry for Indian Brides, Grooms and their parents.', 'url': 'http://dowrycalculator.blogspot.com/2013/06/dowry-calculator.html', 'type': 'item', 'isSingleItem': true, 'isMultipleItems': false, 'isError': false, 'isPage': false, 'isPost': true, 'isHomepage': false, 'isArchive': false, 'isLabelSearch': false, 'postId': 5868064766907247558}}]);
_WidgetManager._RegisterWidget('_PageListView', new _WidgetInfo('PageList1', 'crosscol', document.getElementById('PageList1'), {'title': 'Pages', 'links': [{'isCurrentPage': false, 'href': 'http://dowrycalculator.blogspot.com/', 'title': 'Home'}, {'isCurrentPage': false, 'href': 'http://dowrycalculator.blogspot.com/p/algorithm.html', 'id': '5083314938090881899', 'title': 'About our Algorithm'}, {'isCurrentPage': false, 'href': 'http://dowrycalculator.blogspot.com/p/appeal.html', 'id': '7435368067767567147', 'title': 'Appeal'}], 'mobile': false}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'main', document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/609349452-lbx__en_gb.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/4076883957-lightbox_bundle.css'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_AttributionView', new _WidgetInfo('Attribution1', 'footer-3', document.getElementById('Attribution1'), {}, 'displayModeFull'));
