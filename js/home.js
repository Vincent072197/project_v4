

// gsap.registerPlugin(ScrollTrigger);

// gsap.from('#page1 h1',{
//     opacity:0,
//     y:-200,
//     delay:0.3,
//     duration:1.5,


// })

// gsap.from('#page1 h3',{
//     opacity:0,
//     delay:1.5,
//     duration:2.5,
//     x:-200,
    

// })


// gsap.from('#page1 img',{
//     y:200,
//     opacity:0,
//     delay:2,
//     duration:1,
// })


gsap.to('#page1 .hidden-text',{
    scrollTrigger:{
        trigger:"#page1 ",// 觸發動畫的元素
        start:"top 90%",
        end:"top 30% ",
        scrub:1,
        },
        opacity:1,
        x:0,          // 文字移動到原位
        stagger:0.5,  //每個字母的延遲
        // duration:1.2,
        ease:"power2.out"

})

gsap.from('#page2 .KAFKA',{
    opacity:0,
    x:-200,
    delay:0.3,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page2 .KAFKA",
        scroller:"body",
        start:"top 100%",
        end:"top 30% ",
        scrub:1,


    }
})
gsap.to('#page2 .hidden-text',{
    scrollTrigger:{
        trigger:"#page2 ",// 觸發動畫的元素
        start:"top 90%",
        end:"top 30% ",
        scrub:1,
        },
        opacity:1,
        x:0,          // 文字移動到原位
        stagger:0.5,  //每個字母的延遲
        // duration:1.2,
        ease:"power2.out"

})

// gsap.from('#page2 h2',{
//     opacity:0,
//     x:200,
//     delay:1.5,
//     duration:1.5,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         start:"top 100%",
//         end:"top 20% ",
//         scrub:1,


//     }
// })


gsap.from('#page3 .temple',{
    opacity:0,
    x:200,
    delay:0.3,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page3 .temple",
        scroller:"body",
        start:"top 100%",
        end:"top 30% ",
        scrub:1,


    }
})

gsap.from('#page3 h2',{
    opacity:0,
    x:-200,
    delay:1.5,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        start:"top 100%",
        end:"top 30% ",
        scrub:1,


    }
})
// -------------------------------
$(document).ready(function(){
    $('#chinese-rankboard').show();  //畫面載入先show中文排行
    $('#english-rankboard, #children-rankboard').hide();
    $('#chinese-button').addClass('active'); // 為預設按鈕添加 active 樣式

    $('.rankType button').click(function(){ //點擊click事件功能執行以下事情

        $('.rankType button').removeClass('active'); //移除active
        $(this).addClass('active'); //增加指定active

        $('.rankboard').hide(); //不加這行點擊，會同時顯示

        const target = $(this).attr('id').replace('button','rankboard')
        $('#'+target).show() //用replace替換部分id名，在用字串串接接起來，成為一個元素
    
    })

})
// --------------------------------
    // 初始化 GSAP 和 ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 設定水平滾動動畫
    const horizontalSection = document.querySelector('.horizontal-section-wrapper');
    gsap.to(horizontalSection, {
      x: () => -(horizontalSection.scrollWidth - window.innerWidth), // 水平滾動範圍
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalSection,
        start: 'top top',
        end: () => `+=${horizontalSection.scrollWidth - window.innerWidth}`, // 滾動長度
        pin: true, // 固定水平區域
        scrub: true, // 平滑滾動

      },
    });

// -------------rank-----------------



