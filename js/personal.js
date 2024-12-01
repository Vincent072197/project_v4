
//使用監聽 <select> 的 change 事件 選擇字型打小
document.getElementById('fontSize').addEventListener('change',function(){
let selectedFontSize = this.value; //get fontsize
localStorage.setItem('selectedFontSize',selectedFontSize);//儲存到 localStorage


})


//選擇字體樣式

document.getElementById('fontStyle').addEventListener('change',function(){
    let selectedFontStyle =this.value;
    localStorage.setItem('selectedFontStyle',selectedFontStyle);
    
})

//封面顏色選擇 Jquery
$('#cover-color').change(function(){
    let selectedCoverColor =this.value;
    localStorage.setItem('selectedCoverColor',selectedCoverColor)
})

//textcolor

$('#textcolor').change(function(){
    let selectedTextColor = this.value;
   localStorage.setItem('selectedTextColor',selectedTextColor)
})



//文字設定

$('.save').click(function(){
    let bookTitle = $('#bookname').val();
    let bookSubtitle =$('#Subtitle').val();
    let backtextarea =$('#backtext').val();
    let NickName =$('#name').val();


    localStorage.setItem('bookTitle',bookTitle);
    localStorage.setItem('bookSubtitle',bookSubtitle);
    localStorage.setItem('backtextarea',backtextarea);
    localStorage.setItem('NickName',NickName);

})