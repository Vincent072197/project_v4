// 初始化書架內容
function initializeBookshelf() {
    const booksArray = JSON.parse(localStorage.getItem('booksArray')) || [];
    if (booksArray.length > 0) {
        booksArray.forEach(book => {

            //動態生成的元素無法直接訪問資料
            //程式中，動態生成的 li 與 booksArray 中的書籍資料相關聯，但在 li 點擊事件的作用域中，原本的 book 變數已經不存在，因此無法直接訪問這些資料。
            // 所以需要使用 data-* 屬性

            $('.bookshelf .layer').append(`
                <li 
                    style="background-color:${book.bgcolor}" 
                    data-title="${book.title}" 
                    data-photo="${book.photo}" 
                    data-subtitle="${book.subtitle}" 
                    data-bgcolor="${book.bgcolor}" 
                    data-color="${book.color}" 
                    data-family="${book.family}">
                    <div class="bookDisplay" style="color: ${book.color}; font-family: ${book.family};">
                        <h1>${book.title}</h1>
                        <div class="Display-photo-wrapper">
                            <img src="${book.photo}" alt="${book.title}">
                        </div>
                        <div class="displaySubtitle" style="color:${book.color}; font-family:${book.family}">${book.subtitle}</div>
                    </div>
                </li>
            `);
        });
    } else {
        console.warn('沒有書籍資料可顯示。');
    }
}

// 動態顯示書籍詳情
function bindBookClickEvents() {
    $('.layer').on('click', 'li', function () {
        const bookDetails = {
            title: $(this).data('title'),
            photo: $(this).data('photo'),
            subtitle: $(this).data('subtitle'),
            bgcolor: $(this).data('bgcolor'),
            color: $(this).data('color'),
            family: $(this).data('family')
        };

        const bookFrame = $('.bookframe');
        bookFrame.empty().append(`
            <div id="dynamic-books">
                <div class="cover" style="background-color:${bookDetails.bgcolor}">
                    <h1 style="color:${bookDetails.color}; font-family:${bookDetails.family}">${bookDetails.title}</h1>
                    <div class="photo-wrapper">
                        <img src="${bookDetails.photo}" alt="${bookDetails.title}">
                    </div>
                    <div class="SubTitle" style="color:${bookDetails.color}; font-family:${bookDetails.family}">${bookDetails.subtitle}</div>
                </div>
                      <div class="page">Page 1</div>
        <div class="page" style="background-color:white">Page 2</div>
        <div class="page" style="background-color:white">Page 3</div>
        <div class="page" style="background-color:white">Page 4</div>
            </div>
        `);

        // 初始化翻頁效果
        $('#dynamic-books').turn({
            width: 700,
            height: 500,
            elevation: 50,
            gradients: true,
            autoCenter: true,
        });
        $(window).on('keydown', function (e) {
            if (e.target.tagName.toLowerCase() !== 'input') { // 確保焦點不在輸入框中
                if (e.keyCode === 37) $('#dynamic-books').turn('previous'); // 左鍵翻到上一頁
                if (e.keyCode === 39) $('#dynamic-books').turn('next');     // 右鍵翻到下一頁
            }
        });

        bookFrame.css('display', 'block');
    });

    $('.close').click(function() {
        const bookclose = $('#dynamic-books');
        if ($('.bookframe').css("display") === "block") {
         
            $('.bookframe').css("display", "none");
            window.location.href = './bookshelf.html'; // 跳轉頁面
        }
    });
    
}



// 初始化書架功能
$(document).ready(function () {
    initializeBookshelf();
    bindBookClickEvents();
});