
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

    alert("更新完成")

})


// upload image

document.getElementById('upload').addEventListener('click', function () {
    const fileInput = document.getElementById('photo');
    const file = fileInput.files[0]; // 獲取上傳的文件

    if (file) {
        const reader = new FileReader(); // 創建 FileReader 來讀取文件
        reader.onload = function (e) {
            const imageData = e.target.result; // 獲取圖片數據 URL
            localStorage.setItem('coverImage', imageData); // 保存到 localStorage
            alert('圖片已成功上傳並保存！');
        };
        reader.readAsDataURL(file); // 以數據 URL 格式讀取文件
    } else {
        alert('請選擇一張圖片！');
    }
});