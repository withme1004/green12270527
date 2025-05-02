$("document").ready(function(){

    // $("html").smoothScroll();
    // let pro_chk = false;

    // $(".home h2").textillate({
    //     in:{
    //         effect:"fadeInLeftBig"
    //     }
    // })
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
    loop: true
    });

    typewriter.typeString('Welcome to my portfolio')
    .pauseFor(1000)
    .deleteAll()
    .deleteChars()
    // .typeString('<strong>altered!</strong>')
    // .pauseFor(2500)
    .start();
    $("#js-rotating").Morphext({
        animation: "bounceIn",
        separator: ",",
        speed: 2000,
        complete: function () {
        }
    });

// progressbar

function pro(id, per){
    let pro = new ProgressBar.Line(id,{
        strokeWidth: 3,
        easing: "easeInOut",
        duration: 1400,
        color: "#F1D258",
        trailWidth: 3,
        trailColor: "#ededed",
        step: function(state, circle){
            circle.setText(Math.round(circle.value() * 100)+"%")
        },
        text: {
            style: {
                fontSize: ".8vw",
                fontFamily: "'Cairo', sans-serif",
                position: "absolute",
                right: "3px",
                bottom: "-6px",
                color: "#000",
                fontWeight: "bold"
            }
        }
    })
    pro.animate(per)
}





// progressbar









    $(".aside").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1000)
    }) // click end

    let pro_chk = false;
    let pos2 = 0;
    let pos = 0;
    $(window).scroll(function(){
        pos = $(window).scrollTop();
        console.log(pos)
        if(pos >= 150){
            $(".nav").addClass("on")
        }else{
            $(".nav").removeClass("on")
        }

        if(pos >= 300){
            $(".aside").show();
            $(".indicator").fadeIn();
        }else{
            $(".aside").hide();
            $(".indicator").fadeOut();
        }



        if(pos >= $(".section").eq(4).offset().top-50){
            $(".nav ul li").removeClass("on").eq(4).addClass("on")
            $(".indicator ul li").removeClass("on").eq(4).addClass("on")
        }else if(pos >= $(".section").eq(3).offset().top-100 && pos < $(".section").eq(4).offset().top){
            $(".nav ul li").removeClass("on").eq(3).addClass("on")
            $(".indicator ul li").removeClass("on").eq(3).addClass("on")
        }else if(pos >= $(".section").eq(2).offset().top-100 && pos < $(".section").eq(3).offset().top){
            $(".nav ul li").removeClass("on").eq(2).addClass("on")
            $(".indicator ul li").removeClass("on").eq(2).addClass("on")
        }else if(pos >= $(".section").eq(1).offset().top-100 && pos < $(".section").eq(2).offset().top){
            $(".nav ul li").removeClass("on").eq(1).addClass("on")
            $(".indicator ul li").removeClass("on").eq(1).addClass("on")
        }else{
            $(".nav ul li").removeClass("on").eq(0).addClass("on")
            $(".indicator ul li").removeClass("on").eq(0).addClass("on")
        }


        if(pos >= $(".progress-area").offset().top-750){
            if(pro_chk)return;
            pro("#html", "0.9")
            pro("#css", "0.8")
            pro("#js", "0.6")
            pro("#ps", "0.8")
            pro("#ai", "0.8")
            pro("#op", "0.6")
            pro_chk = true
        }


        

    })  // scroll end
    $(".indicator ul li, .nav ul li").click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop : $(".section").eq(i).offset().top
        }, 1000)
    })
    
    const $img = $(".item");
    const $window = $(".window");
    const $window_content = $(".window-content");
    const img_list = [
        "images/content2.jpg",
        "images/Business Card Mockup33.jpg",
        "images/Artboard 232323.jpg",
        "images/cardbanner4.jpg",
        "images/dodot.png",
        "images/head22.jpg",
        "images/sale22.jpg",
        "images/gongcha.jpg"

    ]


    

    $img.click(function(e){
        e.preventDefault()
        e.stopPropagation()
        let i = $(this).index();
        pos = $(window).scrollTop();
        $window.slideDown()
        $window_content.slideDown();
        $window_content.find("img").attr("src", img_list[i])

        // $("html, body").addClass("not_scroll");
        $('html, body').css({'overflow': 'hidden'}); // 모달팝업 중 html,body의 scroll을 hidden시킴 
        // setTimeout(() => {
            //     alert("1")
        // }, 1000);        
        $(window).on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
            event.preventDefault();     event.stopPropagation();     return false; });
                $("html, body").scrollTop(pos)
            pos2 = pos;

            $(".home").css("opacity", 0)
            
    })
    $window.click(function(){
        $window.slideUp();
        $window_content.slideUp();
        $('html, body').css({'overflow': 'visible'}); 
        $("html, body").scrollTop(pos2)
        
        $(".home").css("opacity", 1)
    })

    $("#button").click(function(e){
        e.preventDefault();
        window.open('page.html','','width=1920 height=1334')
     })

     $("#button_1").click(function(e){
         e.preventDefault();
        window.open('chanel.html','','width=1920 height=1334')
     })

     $("#button_2").click(function(e){
        e.preventDefault();
        window.open('page_2.html','','width=1920 height=1334')
     })


     setTimeout(function(){
        $(".item-box").twentytwenty();
        }, 100)


        $("body").smoothScroll({
            delegateSelector: ".nav ul li a, .indicator ul li a"
        })



        new WOW().init();

     
})