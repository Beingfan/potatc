var DEFAULT_VERSION = "11.0";
var ua = navigator.userAgent.toLowerCase();

var isIE = ua.indexOf("msie") > -1;

var safariVersion;
if (isIE) {
    safariVersion = ua.match(/msie ([\d.]+)/)[1];
}

if (safariVersion*1 <= parseInt(DEFAULT_VERSION*1)) {
    $('.fixed-top').css('top','41px');
    $('.banner').css('margin-top','126px');
    $('.ieshow').show();
}
if(safariVersion == 8.0){
    $('.fixed-top').addClass('top41');
    $('.banner').addClass('margintop126');
    $('.ieshow').show();
}
$(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 0) {
        $("#toTop").css("display", "block");
    } else {
        $("#toTop").css("display", "none");
    }


    if(sc>600){
        $('.menu').addClass('suspension').css("max-width",$('.side-menu-wrap').width())
        $('.side-menu').addClass('suspension1').css("max-width",$('.side-menu-wrap').width())
    }else{
        $('.menu').removeClass('suspension')
        $('.side-menu').removeClass('suspension1')
    }

})
$("#toTop").click(function () {
    $('body,html').animate({scrollTop: 0}, 500);
})
$('.aa1').hover(function () {
    $(this).children('.a').show();
},function () {
    $(this).children('.a').hide();
})
$('.bb1').hover(function () {
    $(this).children('.b').show();
},function () {
    $(this).children('.b').hide();
})
$('.language1').click(function () {
    $(this).siblings('.language2').show();
})

function configDownloadUrl() {
    let download = $('#download');
    let ok = download.attr('isen');
    let hostname = /^\S+\.\S+\.\S+$/.test(window.location.hostname) ? window.location.hostname.replace(/^\S+?\./, 'help.') : 'help.' + window.location.hostname;
    let url = (ok === 'ok') ? `${window.location.protocol}//${hostname}/p/download.html`:
            'https://itunes.apple.com/us/app/potato-chat/id1204726898';
    $('#download').attr('href', url);
}

$(function() {


    $('a[data-c][data-v]').click(function() {
        var c = $(this).data('c');
        var v = $(this).data('v');
        var ter = 'IOS';
        switch (c) {
            case '01':
                ter = 'ANDROID';
                break;
            case '02':
                ter = 'IOS';
                break;
            default:
                ter = 'PC';
        }
        
        if( c && v) {
            $.ajax({
                type: 'POST',
                url: '/help/report/download',
                data: JSON.stringify({ ter_type: ter, channel: c, version: v, timestamp: Math.round(Date.now() / 1000) }),
                contentType: "application/json"
            });
        }
    });
    
    $(".qrcode-poc").qrcode({
        text: "https://www.potatocoin.com/",
        width: 64,
        height: 64,
        foreground: "#4c88ff",
        correctLevel: 0
    });


    $(".lanselect").change(function(){
        document.cookie = "lang="+$(this).val()+";path=/";
        window.location.reload();
    });

    var jsSrc =(navigator.language || navigator.browserLanguage).toLowerCase();

     var  isck = parseInt($("#usrck").val());
    if(isck==1){
          if(jsSrc.indexOf('zh')>=0)
          {
               document.cookie = "lang=zh;path=/";
               window.location.reload();
          }
          else if(jsSrc.indexOf('en')>=0)
          {
              document.cookie = "lang=en;path=/";
              window.location.reload();
          }
    }



    window.onresize = function(){
        $("body").css("width","auto");
    }
});



function getCookie(name){
    var strcookie = document.cookie;
    var arrcookie = strcookie.split("; ");
    for ( var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name){
            return arr[1];
        }
    }
    return "";
}