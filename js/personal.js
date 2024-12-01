
//使用監聽 <select> 的 change 事件 選擇字型打小
document.getElementById('fontSize').addEventListener('change',function(){
let selectedFontSize = this.value; //get fontsize
localStorage.setItem('selectedFontSize',selectedFontSize);//儲存到 localStorage
alert(`已選擇字體大小：${selectedFontSize}`);
})


//選擇字體樣式

document.getElementById('fontStyle').addEventListener('change',function(){
    let selectedFontStyle =this.value;
    localStorage.setItem('selectedFontStyle',selectedFontStyle);
    alert(`已選擇字體樣式：${selectedFontStyle}`);
})