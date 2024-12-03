 //字體大小
 let selectedFontSize =localStorage.getItem('selectedFontSize');//設變數 抓localStorage的物件
 if(selectedFontSize){ //防止空值
   let fontSizetarget={ 
    //抓option的value屬性 套進需要的值
     small:'54.5%',
     middle:'62.5%',
     large:'70.5%'
   };
   //抓html
   document.documentElement.style.fontSize=fontSizetarget[selectedFontSize] || '62.5%';
   
   //下面這邊是為了要讓select的選項鎖定在目前的value上
   let fontSizeSelect = document.getElementById('fontSize');
   if (fontSizeSelect) {
     fontSizeSelect.value = selectedFontSize;
   }
 }
//fontstyle
 let selectedFontStyle =localStorage.getItem('selectedFontStyle');
 if(selectedFontStyle){
   let FontStyletarget={
     Hachi :"Hachi Maru Pop", 
     Kablammo:"Kablammo",
     lato:"Lato"
   }
   //抓body
   document.body.style.fontFamily=FontStyletarget[selectedFontStyle] || 'sans-serif'

   //-----改用Jquery寫法 要注意使用上跟JS的不同
   let fontSizeSelect = $('#fontStyle')
    if(fontSizeSelect){
        fontSizeSelect.val(selectedFontStyle)
    }
}
 //textcolor
let selectedTextColor =localStorage.getItem('selectedTextColor');
if(selectedTextColor){
    let textColorSelect ={
        black:"#000000",
        lightblue:"#9fbbe3",
        gold:"#92684F",
        Red:"#f03e2e"
    }
    let mainElements =document.querySelectorAll('.main');
        for (let mainElement of mainElements ){
            mainElement.style.color=textColorSelect[selectedTextColor] || '#92684F'
        }
    let selectedcolor = $('#textcolor')
    if(selectedcolor){
        selectedcolor.val(selectedTextColor)
    }
    }




//bgcolor
 let selectedCoverColor=localStorage.getItem('selectedCoverColor');
 if(selectedCoverColor){
   let CoverColor={
     Midnightblue:"#29303a",
     lightblue:"#9fbbe3",
     green:"#2b5232",
     transparent:"transparent",
   }
   let elements =  document.querySelectorAll('.book-color');
   if (CoverColor[selectedCoverColor]) {
   for(let element of elements){
    element.style.backgroundColor=CoverColor[selectedCoverColor] || '#29303A';
   } // 加if else只是確保抓的到東西 不加也可以正常執行
    }else {
        console.warn(`選擇的顏色 "${selectedCoverColor}" 不在 CoverColor 中，請確認設定`);}


        let selectCoverColor =$('#cover-color');
        if(selectCoverColor){
            selectCoverColor.val(selectedCoverColor);
        }
 }

//bookTitle

$(document).ready(function () {
    let bookTitleGet = localStorage.getItem('bookTitle');
    if (bookTitleGet) {
        $('.title').text(bookTitleGet) || '';
    }

    let keepBookTitle =$('#bookname');
    if(keepBookTitle){
        keepBookTitle.val(bookTitleGet)
    }

});

//Subtitle

$(document).ready(function () {
    let SubTitleGet = localStorage.getItem('bookSubtitle');
    if (SubTitleGet) {
        $('.publisher').text(SubTitleGet) || 'write something';
    }

    let keepSubTitle =$('#Subtitle');
    if(keepSubTitle){
        keepSubTitle.val(SubTitleGet)
    }
});

//backtext


$(document).ready(function () {
    let backtext = localStorage.getItem('backtextarea');
    if (backtext) {
        $('.description').text(backtext) || '“There is no eternal winter in the world; every effort paves the way for spring.”';
    }

    let keepSubTitle =$('#Subtitle');
    if(keepSubTitle){
        keepSubTitle.val(SubTitleGet)
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



//image
document.addEventListener('DOMContentLoaded', function () {
    const savedImage = localStorage.getItem('coverImage'); // 從 localStorage 獲取圖片
    const coverImage = document.querySelector('.CoverImage'); // 選取封面圖片元素

    if (savedImage) {
        coverImage.src = savedImage; // 設置圖片來源
        coverImage.alt = '封面圖片'; // 設置替代文字
    } else {
        coverImage.src = '../img/002.JPG';
        coverImage.alt = '暫無封面圖片';
    }
});

// -------------------------------------------------

$('#bookSave').click(function(){
    let NewTitle = $('.title').text();
    let Newphoto = $('.CoverImage').attr('src');
    let NewSubTitle = $('.publisher').text();
    let TextColor =$('.title').css('color');
    let fontFamily =$('.title').css('font-family');
    let bg = $('.book-cover').css('background-color');
    let diraytext =$('#diary-textarea').val();
    let Bookid =$('#bookid').text()

    let booksArray = JSON.parse(localStorage.getItem('booksArray')) || []; // 取得現有資料，若無則初始化為空陣列
    //防止重複儲存，some() 是 JavaScript 陣列方法，用來檢查陣列中的某些元素是否滿足指定條件。
    let isDuplicate = booksArray.some(item => item.Bookid === Bookid);
    if (isDuplicate) {
        alert('此書籍已經存在，不需要重複儲存！');
        return; // 若重複則中止儲存
    }
    

    // 將新書籍資訊加入陣列
    booksArray.push({
        title: NewTitle,
        photo: Newphoto,
        subtitle: NewSubTitle,
        color:TextColor,
        family:fontFamily,
        bgcolor: bg,
        text:diraytext,
        Bookid:Bookid,
    });

    // 儲存陣列到 localStorage
    localStorage.setItem('booksArray', JSON.stringify(booksArray));

    console.log('儲存成功：', booksArray);
})


// ---------------------------------

//這邊是更精簡的寫法，自己練習的版本在下面

// document.addEventListener('DOMContentLoaded', function (){
//     let savedBookId = localStorage.getItem('currentBookId') || '0';
//     $('#bookid').text(savedBookId);

// })

// let currentBookId = parseInt($('#bookid').text(), 10); // 確保為整數

// $('#StartNew').click(function () {
//     // 增加書本 ID 並更新顯示
//     currentBookId++;
//     $('#bookid').text(currentBookId);

//     // 將新書本 ID 儲存到 localStorage
//     localStorage.setItem('currentBookId', currentBookId);

//     // 刪除書本相關的 localStorage 項目
//     const keysToRemove = [
//         'bookTitle',
//         'NickName',
//         'selectedTextColor',
//         'selectedCoverColor',
//         'bookSubtitle',
//         'coverImage',
//     ];
//     keysToRemove.forEach((key) => localStorage.removeItem(key));

//     // 清空頁面元素
//     resetBookUI();
// });

// // 重置書本的 UI
// function resetBookUI() {
//     // 預設值
//     const defaultTitle = 'Welcome';
//     const defaultSubtitle = 'Write something';
//     const defaultTextColor = 'black';
//     const defaultFontFamily = 'Arial';
//     const defaultBgColor = '#92684A';
//     const defaultDiaryText = '';
//     const defaultImageSrc = '';

//     // 重置文字與樣式
//     $('.title').text(defaultTitle);
//     $('.publisher').text(defaultSubtitle);
//     $('.main').css({
//         color: defaultTextColor,
//         'font-family': defaultFontFamily,
//     });
//     $('.book-cover').css('background-color', defaultBgColor);
//     $('#diary-textarea').val(defaultDiaryText);

//     // 重置圖片
//     $('.CoverImage').attr('src', defaultImageSrc);
// }




//----------------------------

document.addEventListener('DOMContentLoaded', function (){
    let savedBookId = localStorage.getItem('currentBookId') || '0';
    $('#bookid').text(savedBookId);

})

//span 或 div，使用 text() 來取得和更新內容；如果是輸入欄位，則用 val()
$('#StartNew').click(function(){
    let currentBookId = parseInt($('#bookid').text()) 
    currentBookId++ ;
    localStorage.setItem('currentBookId',currentBookId)

localStorage.removeItem('bookTitle'); // 刪除 'bookTitle'
localStorage.removeItem('NickName');  // 刪除 'NickName'
localStorage.removeItem('selectedTextColor');
localStorage.removeItem('selectedCoverColor');
localStorage.removeItem('bookSubtitle');
localStorage.removeItem('coverImage');

location.reload() //重整網頁跳回預設

})







