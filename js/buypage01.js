// -------------
$(document).ready(function () {
    // 從 localStorage 獲取書本索引
    const index = localStorage.getItem('selectedBookIndex');
  
    // 確保索引存在
    if (index !== null) {
      const book = books[index]; // 根據索引獲取書本資料
  
      // 渲染書本資訊
      const bookTemplate = `
        <div class="leftpart">
          <img src="${book.srcimg}" alt="${book.bookTitle}" />
          <a href="../pal/read.html">試閱</a>
        </div>
        <div class="rightpart">
          <div class="rightpart_detail">
            <h1>${book.bookTitle}</h1>
            <h4>${book.author}</h4>
            <div class="rightpart_detail_author">
              <span>作者</span>
              <a href="#">${book.author}</a>
            </div>
            <div class="rightpart_detail_publisher">
              <span>出版社</span>
              <a href="#">漫遊者文化事業股份有限公司</a>
            </div>
            <div class="rightpart_detail_publisher">
              <span>出版日期</span>
              <span>2023/05/08</span>
            </div>
          </div>
          <div class="rightpart_amount">
            <span>數量</span>
            <div class="rightpart_amount_count">
              <button id="increase">
                <i class="fa-solid fa-plus"></i>
              </button>
              <input type="number" value="1" min="1" max="5" />
              <button id="decrease">
                <i class="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>
          <div class="rightpart_price">
            <span>$</span>
            <span>${book.price}</span>
          </div>
          <div class="rightpart_buy">
            <button><span>收藏</span></button>
            <button><span>加入購物車</span></button>
            <button><a href="../template/buypage2.html">直接購買</a></button>
          </div>
        </div>
      `;
  
      $('.wrapper').html(bookTemplate); // 將模板插入到頁面
    } else {
      // 如果索引不存在，顯示錯誤信息或返回首頁
      $('.wrapper').html('<p>書籍資料未找到。</p>');
    }
  });

// ---------------數量加減功能----------------------

$(document).ready(function(){
    $('#increase').click(function(){
        changeSize('plus')
          })
     $('#decrease').click(function(){
        changeSize('minus')
        })     
})

function   changeSize(count){
    let input = $('input[type="number"]')
    let currentcount = parseInt(input.val()) || 1

    if(count==='plus'){
        currentcount += 1
    }else if(count ==='minus'){
        currentcount -= 1
    }

     // 更新輸入框的值
     input.val(currentcount);
}