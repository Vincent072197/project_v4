function initializeBookshelf() {
    const booksArray = JSON.parse(localStorage.getItem('booksArray')) || [];
    const pinnedBook = JSON.parse(localStorage.getItem('pinnedBook'));

    if (booksArray.length > 0) {
        booksArray.forEach((book, index) => {
            const isPinned = pinnedBook && pinnedBook.id === book.id;
            const numberOfPages = (book.pages || []).length;

            // 為每本書分配唯一 ID（防止缺少 ID）
            if (!book.id) {
                book.id = `book-${index}-${Date.now()}`;
            }

            // 動態生成書架內容
            $('.bookshelf .layer').append(`
                <li 
                    style="background-color:${book.bgcolor}" 
                    data-id="${book.id}" 
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
                        <div class="displaySubtitle" style="color:${book.color}; font-family:${book.family}">
                            ${book.subtitle}
                        </div>
                      
                    </div>
                    <button class="pinBook">${isPinned ? '已釘選' : '釘選'}</button>
                     <span id="delete"> <i class="fa-solid fa-xmark"></i></span>
                </li>
            `);
        });
        $('.bookshelf .layer').on('click', '#delete', function () {
            const parentLi = $(this).closest('li');
            const bookId = parentLi.data('id');
            let booksArray = JSON.parse(localStorage.getItem('booksArray')) || [];
            const pinnedBook = JSON.parse(localStorage.getItem('pinnedBook'));

                // 彈出確認視窗
            const confirmDelete = confirm('確定要刪除此書籍嗎？');
            if (!confirmDelete) {
            return; // 使用者取消刪除
                }


            // 移除被刪除的書籍
            booksArray = booksArray.filter(book => book.id !== bookId);
            localStorage.setItem('booksArray', JSON.stringify(booksArray));

            // 如果刪除的是釘選的書，釘選下一本書（如果有）
            if (pinnedBook && pinnedBook.id === bookId && booksArray.length > 0) {
                const nextBook = booksArray[0]; // 預設釘選第一本書
                if(nextBook){
                    $(`li[data-id="${nextBook.id}"] .pinBook`).trigger("click")
                }
              
               
            } 
            parentLi.remove();
            window.location.reload();
        });
   

        // 將更新的陣列儲存回 localStorage
        localStorage.setItem('booksArray', JSON.stringify(booksArray));
    } else {
        console.warn('沒有書籍資料可顯示。');
    }
}

// 動態顯示書籍詳情
function bindBookClickEvents() {
    $('.layer').on('click', 'li', function () {
        const bookId = $(this).data('id');
        const booksArray = JSON.parse(localStorage.getItem('booksArray')) || [];
        const bookDetails = booksArray.find(book => book.id === bookId);

        if (!bookDetails) {
            console.error('找不到對應的書籍資料');
            return;
        }

        const pagesContent = bookDetails.pages || [];
        const numberOfPages = pagesContent.length;

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
            </div>
        `);

        // 動態添加頁面
        pagesContent.forEach((pageContent, index) => {
            $('#dynamic-books').append(`
                <div class="page ${index % 2 === 0 ? 'odd' : 'even'}" id="page-${index + 1}">
                    <p>${pageContent}</p>
                </div>
            `);
         
        });
        const pagesCount = pagesContent.length;
        if (pagesCount % 2 === 1) {
            $('#dynamic-books').append(`
                <div class="page blank-page even" style="font-size:3rem">
                    <!-- 空白頁 -->
                </div>
            `);
        }
    
    
 

        // 初始化翻頁效果
        $('#dynamic-books').turn({
            acceleration: true,
            pages: numberOfPages,
            width: 800,
            height: 550,
            elevation: 50,
            gradients: true,
            autoCenter: true,
        });

        // 翻頁按鍵綁定
        $(window).bind('keydown', function (e) {
            if (e.target && e.target.tagName.toLowerCase() != 'input') {
                if (e.keyCode == 37) $('#dynamic-books').turn('previous');
                else if (e.keyCode == 39) $('#dynamic-books').turn('next');
            }
        });

        $('.lightbox').css('display', 'block');
    });

    // 關閉書籍詳情視圖
    $('.close').click(function () {
        if ($('.lightbox').css('display') === 'block') {
            $('.lightbox').css('display', 'none');
            window.location.reload();
        }
    });
}

// 綁定釘選按鈕事件
function bindPinButtonEvents() {
    $('.layer').on('click', '.pinBook', function (e) {
        e.stopPropagation(); // 避免觸發 li 的點擊事件
        const parentLi = $(this).closest('li');
        const pinnedBook = {
            id: parentLi.data('id'),
            title: parentLi.data('title'),
            photo: parentLi.data('photo'),
            subtitle: parentLi.data('subtitle'),
            bgcolor: parentLi.data('bgcolor'),
            color: parentLi.data('color'),
            family: parentLi.data('family'),
        };
        //同步personal 的選項跟它localstory的值
        // localStorage.getItem('selectedCoverColor')
        localStorage.setItem('selectedCoverColor', pinnedBook.bgcolor)
        // localStorage.getItem('bookTitle');
        localStorage.setItem('bookTitle', pinnedBook.title)
        localStorage.setItem('bookSubtitle', pinnedBook.subtitle)
        localStorage.setItem('selectedTextColor', pinnedBook.color)
        localStorage.setItem('selectedFontStyle', pinnedBook.family)
        localStorage.setItem('coverImage', pinnedBook.photo)
        

        // 儲存釘選的書籍到 localStorage
        localStorage.setItem('pinnedBook', JSON.stringify(pinnedBook));
        alert(`已釘選: ${pinnedBook.title}`);
        window.location.reload()
    });
}

// 初始化書架功能
$(document).ready(function () {
    initializeBookshelf();
    bindBookClickEvents();
    bindPinButtonEvents();
});