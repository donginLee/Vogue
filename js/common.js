
let mob = 0; // 1-모바일, 0-모바일아님

let reFn = () => {
 
    if ($(window).width() <= 500){ 
        mob = 1;
        $("#top").removeClass("on");
    }
    else {
        mob = 0;
    }
    console.log("모바일상태:"+mob);
};

reFn();

$(window).resize(reFn);
$(function () {
    $("html,body").animate({
        scrollTop: "0px"
    }, 100);

    let scTop;
    let scSts = 1;
    let scSts2 = 1;
    let tm = $("#top");
    let tbtn = $(".tbtn");

    $(window).scroll(function () {

        scTop = $(this).scrollTop();
        console.log("스위:" + scTop/5);
        $(".rainbow").css("color","hsl("+scTop/5+",100%,50%)");
        $("a").css("color","hsl("+scTop/5+",100%,50%)");

        if (scTop >= 300 && scSts2 === 1) {
            scSts2 = 0;
            tbtn.fadeIn(300);
        } 
        else if (scTop < 300 && scSts2 === 0) {
            scSts2 = 1; //한번만
            tbtn.fadeOut(300); //쓱~숨겨
        }

        if (mob) return;

        if (scTop >= 100 && scSts === 1) {
            scSts = 0; 
            tm.addClass("on");
        } ////////// if //////////
        else if (scTop < 100 && scSts === 0) {
            scSts = 1;
            console.log("실행2");
            tm.removeClass("on");
        }




    });
    tbtn.click(function (e) { 
        e.preventDefault();

        $("html,body").animate({
            scrollTop: "0px"
        }, 1000, "easeInOutQuad");
    }); 
    $(".hbtn").click(function(e){

    
        e.preventDefault();

        $("#mobx").slideToggle(600,"easeInOutQuart");
        $("#top").toggleClass("hv");
    }); 

    $(".sbtn").click(function(e){

        e.preventDefault();

        // 검색창 보이기/숨기기 : slideToggle()
        $(".mos").slideToggle(300,"easeOutQuint");

    });

});
