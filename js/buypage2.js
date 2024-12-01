$(function () {

    $('#increase').click(function(){
        changeSize('plus') // 呼叫
    })
    $('#decrease').click(function(){
        changeSize('minus')   // 呼叫
    })

    function changeSize(count){  // 宣告 + 定義

        let $input = $('input[type="number"]');
        let currentCount = parseInt($input.val()) || 1;

        if(count ==='plus'){
            $input.val(currentCount+1);
        }else if (count === 'minus'){
            
                if(currentCount > 0 ){
                    $input.val(currentCount - 1);
                }
            
        }



    }
    
});

