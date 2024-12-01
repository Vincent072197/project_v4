const books=[
    {
        srcimg:'../img/temple.jpg',
        bookTitle:'金閣寺',
        author:'三島由紀夫',
        price:300,
    },
    {
        srcimg:'../img/wall.jpg',
        bookTitle:'城與不確定的牆',
        author:'村上春樹',
        price:300,
    },
    {
        srcimg:'../img/beach.jpg',
        bookTitle:'海邊的卡夫卡',
        author:'村上春樹',
        price:300,
    },
    {
        srcimg:'../img/book.jpg',
        bookTitle:'素食者【亞洲首部榮獲國際曼布克獎作品】',
        author:'韓江',
        price:300,
    },
    {
        srcimg:'../img/book2.webp',
        bookTitle:'地獄變：芥川龍之介經典小說集',
        author:'芥川龍之介',
        price:250,
    },
    {
        srcimg:'../img/book3.jpg',
        bookTitle:'人間失格',
        author:'太宰治',
        price:250,
    },
    {
        srcimg:'../img/book4.jpg',
        bookTitle:'白',
        author:'韓江',
        price:250,
    },
    {
        srcimg:'../img/book5.jpg',
        bookTitle:'我是貓',
        author:'夏目漱石',
        price:250,
    },
    {
        srcimg:'../img/book6.jpg',
        bookTitle:'少爺',
        author:'夏目漱石',
        price:250,
    },
    {
        srcimg:'../img/book7.jpg',
        bookTitle:'罪與罰',
        author:'杜斯妥也夫斯基 ',
        price:250,
    },
    {
        srcimg:'../img/book8.jpg',
        bookTitle:'百年孤寂【平裝典藏版】：首度正式授權繁體中文版！',
        author:'加布列．賈西亞．馬奎斯',
        price:250,
    },
    {
        srcimg:'../img/book9.jpg',
        bookTitle:'紅玫瑰與白玫瑰【張愛玲百歲誕辰紀念版】',
        author:'張愛玲',
        price:250,
    },
    {
        srcimg:'../img/book10.jpg',
        bookTitle:'屁屁偵探讀本11新的怪盜',
        author:'Troll',
        price:250,
    },
];
// -------------------

const booklist = document.querySelector('.main_search ul');

books.forEach((book, index) => {
  const bookTemplate = `
  <li data-index="${index}">
    <div class="box_img">
      <a href="#"><picture><img src="${book.srcimg}" alt="${book.bookTitle}" /></picture></a>
    </div>
    <div class="boxDetail">
      <h3><a href="#">${book.bookTitle}</a></h3>
      <div class="author"><a href="#">${book.author}</a> 著</div>
    </div>
    <div class="pricebox">
      <span><b>${book.price}</b>元</span>
      <div class="buyBtn" ><span>加入購物車</span></div>
    </div>
  </li>
  `;
  booklist.innerHTML += bookTemplate;

});

// --------------------------


const englishbooks=[
    {
        srcimg:'../img/ch01.webp',
        bookTitle:'The Hospital Book',
        author:'Lisa Brown',
        price:300,
    },
    {
        srcimg:'../img/ch02.jpg',
        bookTitle:'Diary of a Wimpy Kid 18',
        author:'Jeff Kinney',
        price:250,
    },
    {
        srcimg:'../img/ch03.webp',
        bookTitle:'The Perfect Camping Day',
        author:'Fifi Kuo',
        price:250,
    },
    {
        srcimg:'../img/ch04.webp',
        bookTitle:'Child of Glass',
        author:'Beatrice Alemagna',
        price:250,
    },
    {
        srcimg:'../img/ch05.jpg',
        bookTitle:'Bear and Bird',
        author:'Jarvis',
        price:250,
    },
    {
        srcimg:'../img/ch06.webp',
        bookTitle:'We are All Wonders',
        author:'R. J. Palacio',
        price:250,
    },

];












const englishbook = document.querySelector('.englishbook ul');

// 渲染書籍列表
englishbooks.forEach((book, index) => {
  const bookTemplate = `
  <li>
    <div class="box_img">
      <a href="#"><picture><img src="${book.srcimg}" alt="${book.bookTitle}" /></picture></a>
    </div>
    <div class="boxDetail">
      <h3><a href="#">${book.bookTitle}</a></h3>
      <div class="author"><a href="#">${book.author}</a> 著</div>
    </div>
    <div class="pricebox">
      <span><b>${book.price}</b>元</span>
      <div class="buyBtn" data-index="${index}"><span>加入購物車</span></div>
    </div>
  </li>
  `;
  englishbook.innerHTML += bookTemplate;
});








// -------------------------


const childrenbooks=[
    {
        srcimg:'../img/ch01.webp',
        bookTitle:'The Hospital Book',
        author:'Lisa Brown',
        price:300,
    },
    {
        srcimg:'../img/ch02.jpg',
        bookTitle:'Diary of a Wimpy Kid 18',
        author:'Jeff Kinney',
        price:250,
    },
    {
        srcimg:'../img/ch03.webp',
        bookTitle:'The Perfect Camping Day',
        author:'Fifi Kuo',
        price:250,
    },
    {
        srcimg:'../img/ch04.webp',
        bookTitle:'Child of Glass',
        author:'Beatrice Alemagna',
        price:250,
    },
    {
        srcimg:'../img/ch05.jpg',
        bookTitle:'Bear and Bird',
        author:'Jarvis',
        price:250,
    },
    {
        srcimg:'../img/ch06.webp',
        bookTitle:'We are All Wonders',
        author:'R. J. Palacio',
        price:250,
    },

];

const childrenbook = document.querySelector('.childrenbook ul');

// 渲染書籍列表
childrenbooks.forEach((book, index) => {
  const bookTemplate = `
  <li>
    <div class="box_img">
      <a href="#"><picture><img src="${book.srcimg}" alt="${book.bookTitle}" /></picture></a>
    </div>
    <div class="boxDetail">
      <h3><a href="#">${book.bookTitle}</a></h3>
      <div class="author"><a href="#">${book.author}</a> 著</div>
    </div>
    <div class="pricebox">
      <span><b>${book.price}</b>元</span>
      <div class="buyBtn" data-index="${index}"><span>加入購物車</span></div>
    </div>
  </li>
  `;
  childrenbook.innerHTML += bookTemplate;
});



















// 點擊事件：將索引存入 localStorage
document.querySelectorAll('.main_search ul li .box_img').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const index = event.target.closest('.main_search ul li').dataset.index; // 取得索引
    localStorage.setItem('selectedBookIndex', index); // 存到 localStorage
    window.location.href = './buypage01.html'; // 跳轉頁面
  });
});



$(document).ready(function(){
    $('.search').on('input', function(){
        let productName = $(this).val()

        $('.main_search ul li').each(function(){
            let item = $(this).find('.boxDetail h3 a').text()
            let author = $(this).find('.author a').text()


            if(item.indexOf(productName) != -1 || author.indexOf(productName) != -1) {
                $(this).show()
            }else{
                $(this).hide()
            }
        })
    })
});


$(document).ready(function () {
    $('.Dobi').css('opacity', 0.8);
    $('.Dobi').hover(function(){
        $('.Dobi').fadeTo(500,1);
        },
        function(){
            $('.Dobi').fadeTo(500,0.8)
        }
    );

  });
// ----------------------------------


$(document).ready(function () {
    $('.cloud').css('opacity',0)
    $('.Dobi').hover(
        function(){
            $('.cloud').fadeTo(2000,1)
   },
        function(){
            $('.cloud').fadeTo(500,0)
        }
)

  });


// ---------------------------------

$(document).ready(function(){

    $('.header_trolley .count').hide()

    let amount = 0
    $('.buyBtn').click(function(){
        $('.header_trolley .count ').show()
        amount++
       document.querySelector('.header_trolley .count span').innerHTML=`${amount}`
       
})
    
})
 

// -----------------------------------
$(document).ready(function(){
    $('.ball').css('left','-28px').css('transform','rotate(0deg)')
    
    $('.cat').mouseover(function(){
        kickBall('toplant');
          })
     $('.plant').mouseover(function(){
        kickBall('tocat');
        })     

function kickBall(target){
    let location ,rotation;


    if(target ==='toplant'){
        location = '848px'
        rotation =1100
    }else if(target ==='tocat'){
        location ='-28px'
        rotation = -1100
    }

    $('.ball').stop(true).animate({left:location},3000);

    $({deg:0}).stop(true).animate({deg:rotation},
    {duration:3000,
        step:function(now){
            $('.ball').css({
             transform: `rotate(${now}deg)`
            })
        },

    }
    )

}
})




// 滾動式跳頁

$(document).on('click', 'a', function (event) {
    event.preventDefault();
    let target = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(target).offset().top - 120
    }, 500);
  });


  
    