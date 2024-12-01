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
     Red:"#f03e2e",
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
        $('.title').text(bookTitleGet) || 'Vincent的日記';
    }

    let keepBookTitle =$('#bookname');
    if(keepBookTitle){
        keepBookTitle.val(bookTitleGet)
    }

});

//Subtitle

$(function(){
    let SubtitleGet = localStorage.getItem('bookSubtitle');
    if(SubtitleGet){
        $('.publisher').text(SubtitleGet) || 'write something'
    }
    let keepSubtilte = $('Subtitle');
    if(keepSubtilte){
        keepSubtilte.val(SubtitleGet)
    }
})

