 
 $(document).ready(function () {
    const pinnedBook = JSON.parse(localStorage.getItem('pinnedBook'));
    const booksArray = JSON.parse(localStorage.getItem('booksArray')) || [];

    if (pinnedBook && pinnedBook.id) {
        // 根據編號從 booksArray 中抓取書籍內容
        const bookDetails = booksArray.find(book => book.id === pinnedBook.id);
        if (bookDetails) {
            $('.title').text(bookDetails.title);
            $('.title').css('color', bookDetails.color);
            $('.title').css('font-family', bookDetails.family);
            $('.publisher').text(bookDetails.subtitle);
            $('.publisher').css('color', bookDetails.color);
            $('.publisher').css('font-family', bookDetails.family);
            $('.CoverImage').attr('src', bookDetails.photo);
            $('.book-cover').css('background-color', bookDetails.bgcolor);
            $('.book-cover-back').css('background-color', bookDetails.bgcolor);
            $('.book-back').css('background-color', bookDetails.bgcolor);
            $('.book-bone').css('background-color', bookDetails.bgcolor);
            $('#cover-color').val(bookDetails.bgcolor)
            $('#textcolor').val(bookDetails.color)
            $('#bookname').val(bookDetails.title)
            $('#Subtitle').val(bookDetails.subtitle)
            $('#fontStyle').val(bookDetails.family)
         
           
            // -----personal setting--------
          
            // $('#diary-textarea').val(bookDetails.text || '');
        }
      
        
    }
    // ------------------------
    $(document).ready(function () {
        let booksArray = JSON.parse(localStorage.getItem('booksArray')) || [];
        let pinnedBook = JSON.parse(localStorage.getItem('pinnedBook'));

     
        const bookId = pinnedBook && pinnedBook.id; // 替換為目標書籍 ID
        const bookIndex = booksArray.findIndex(book => book.id === bookId);
        
        if (bookIndex !== -1) {
            // 修改目標書籍的屬性
           // -----------------bgcolor----------
            let selectedCoverColor=localStorage.getItem('selectedCoverColor');
            booksArray[bookIndex].bgcolor = selectedCoverColor || '#29303a'; // 新背景顏色
        //--------fontcolor-------------------
        let selectedTextColor =localStorage.getItem('selectedTextColor')|| '#92684F';

        booksArray[bookIndex].color = selectedTextColor ;

        //-------------------fontStyle------------------
        let selectedFontStyle =localStorage.getItem('selectedFontStyle') || 'Lato';
        booksArray[bookIndex].family = selectedFontStyle ;

        //----------------image------------------

        const savedImage = localStorage.getItem('coverImage') ||  '../img/002.JPG' ; // 從 localStorage 獲取圖片
       booksArray[bookIndex].photo = savedImage ;
        //------------title-------------
        let bookTitleGet = localStorage.getItem('bookTitle') || 'New Title';
        booksArray[bookIndex].title = bookTitleGet ;
        //------------Subtitle--------------
        let SubTitleGet = localStorage.getItem('bookSubtitle') || 'New Subtitle';
        booksArray[bookIndex].subtitle = SubTitleGet ;

       // 保存更新到 localStorage
            localStorage.setItem('booksArray', JSON.stringify(booksArray));
         
        } else {
            $('#StartNew').trigger('click');
   
        }
    });
    
    // ------------
});


$(document).ready(function () {
    let backtext = localStorage.getItem('backtextarea');
    if (backtext) {
        $('.description p').text(backtext) || '“There is no eternal winter in the world; every effort paves the way for spring.”';
    }

    let fontStyle = localStorage.getItem('selectedFontStyle');
    if (fontStyle) {
        $('.description').css('font-family',fontStyle) || 'Lato';
    }

    let fontcolor = localStorage.getItem('selectedTextColor');
    if (fontcolor) {
        $('.description').css('color',fontcolor) || '#92684F';
    }

    let keepSubTitle =$('#backtext');
    if(keepSubTitle){
        keepSubTitle.val(backtext)
    }
});

//name
$(document).ready(function () {
    let NickName = localStorage.getItem('NickName');
    if (NickName) {
        $('.Name').text(NickName) || '';
    }

    let keepNickName =$('#name');
    if(keepNickName){
        keepNickName.val(NickName)
    }

});


// -------------------------------------------------

$('#bookSave').click(function () {
    const booksArray = JSON.parse(localStorage.getItem('booksArray')) || [];
    const pinnedBook = JSON.parse(localStorage.getItem('pinnedBook'));

    const newDiaryEntry = $('#diary-textarea').val();

    if (!newDiaryEntry) {
        alert('尚未撰寫任何內容！');
        return;
    }

    if (pinnedBook && pinnedBook.id) {
        const bookIndex = booksArray.findIndex(book => book.id === pinnedBook.id);
        if (bookIndex !== -1) {
            const existingBook = booksArray[bookIndex];

            // 確保 pages 是陣列
            if (!Array.isArray(existingBook.pages)) {
                existingBook.pages = [];
            }

            // 新增日記內容
            existingBook.pages.push(newDiaryEntry);

            // 更新書籍
            booksArray[bookIndex] = {
                ...existingBook,
            };

            // 更新釘選的書籍
            localStorage.setItem('pinnedBook', JSON.stringify(existingBook));
        }
    } else {
        booksArray.push({
            id: `book-${booksArray.length}-${Date.now()}`,
            // title: $('.title').text(),
            // photo: $('.CoverImage').attr('src'),
            // subtitle: $('.publisher').text(),
            // color: $('.title').css('color'),
            // family: $('.title').css('font-family'),
            // bgcolor: $('.book-cover').css('background-color'),
            pages: [newDiaryEntry], // 初始化 pages 為陣列
        });
    }

    // 儲存更新後的 booksArray
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
    alert('日記內容已儲存到新頁！');
});


// --------
$('#StartNew').click(function () {
    // 預設的書籍樣式和內容
    const defaultBook = {
        id: `book-${Date.now()}`, // 使用當前時間戳生成唯一 ID
        title: 'New Title', // 預設標題
        subtitle: 'New Subtitle', // 預設副標題
        photo: '../img/002.JPG', // 預設封面圖片
        bgcolor: '#29303a', // 預設背景顏色
        color: '#92684F', // 預設文字顏色
        family: 'Lato', // 預設字體
        pages: [], // 初始化為空的頁面內容
    };

    // 從 localStorage 獲取書籍清單，或初始化為空陣列
    const booksArray = JSON.parse(localStorage.getItem('booksArray')) || [];
    
    // 將新書添加到書籍清單
    booksArray.push(defaultBook);

    // 更新書籍清單到 localStorage
    localStorage.setItem('booksArray', JSON.stringify(booksArray));

    // 將新書設置為當前釘選的書籍
    localStorage.setItem('pinnedBook', JSON.stringify(defaultBook));

    // 提示用戶
    alert(`新書「${defaultBook.title}」已建立！請至個人設定修改樣式與內容。`);

    // 更新視圖（顯示新書的預設內容）
    $('.title').text(defaultBook.title);
    $('.title').css('color', defaultBook.color);
    $('.title').css('font-family', defaultBook.family);
    $('.publisher').text(defaultBook.subtitle);
    $('.publisher').css('color', defaultBook.color);
    $('.publisher').css('font-family', defaultBook.family);
    $('.CoverImage').attr('src', defaultBook.photo);
    $('.book-cover').css('background-color', defaultBook.bgcolor);
    $('.book-cover-back').css('background-color', defaultBook.bgcolor);
    $('.book-back').css('background-color', defaultBook.bgcolor);
    $('.book-bone').css('background-color', defaultBook.bgcolor);
    $('#diary-textarea').val(''); // 清空日記輸入框
    $('#cover-color').val(defaultBook.bgcolor)
    $('#textcolor').val(defaultBook.color)
    $('#bookname').val(defaultBook.title)
    $('#Subtitle').val(defaultBook.subtitle)
    $('#fontStyle').val(defaultBook.family)

    localStorage.setItem('selectedCoverColor', defaultBook.bgcolor)
    // localStorage.getItem('bookTitle');
    localStorage.setItem('bookTitle', defaultBook.title)
    localStorage.setItem('bookSubtitle', defaultBook.subtitle)
    localStorage.setItem('selectedTextColor', defaultBook.color)
    localStorage.setItem('selectedFontStyle', defaultBook.family)
    localStorage.setItem('coverImage', defaultBook.photo)

});