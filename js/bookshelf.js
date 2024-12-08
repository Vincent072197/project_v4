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
                        <h1>${book.title}${isPinned ? ' (釘選)' : ''}</h1>
                        <div class="Display-photo-wrapper">
                            <img src="${book.photo}" alt="${book.title}">
                        </div>
                        <div class="displaySubtitle" style="color:${book.color}; font-family:${book.family}">
                            ${book.subtitle}
                        </div>
                        <div class="pageCount">頁數: ${numberOfPages}</div>
                    </div>
                    <button class="pinBook">${isPinned ? '已釘選' : '釘選'}</button>
                </li>
            `);
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
                <div class="page" id="page-${index + 1}">
                    <p>${pageContent}</p>
                </div>
            `);
        });

        // 初始化翻頁效果
        $('#dynamic-books').turn({
            acceleration: true,
            pages: numberOfPages,
            width: 700,
            height: 500,
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

        bookFrame.css('display', 'block');
    });

    // 關閉書籍詳情視圖
    $('.close').click(function () {
        if ($('.bookframe').css('display') === 'block') {
            $('.bookframe').css('display', 'none');
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