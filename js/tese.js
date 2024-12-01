$(document).ready(function () {
    // 初始化球的位置和旋轉角度
    $('.ball').css('left', '-28px').css('transform', 'rotate(0deg)');
  
    // 當滑鼠移入 cat，球移向 plant
    $('.cat').mouseover(function () {
      kickBall('plant');
    });
  
    // 當滑鼠移入 plant，球移向 cat
    $('.plant').mouseover(function () {
      kickBall('cat');
    });
  
    // 控制球的移動和旋轉
    function kickBall(target) {
      let location, rotation;
  
      if (target === 'plant') {
        // 移動到 plant
        location = '848px';
        rotation = 1100; // 順時針旋轉 1100 度
      } else if (target === 'cat') {
        // 移動回 cat
        location = '-28px';
        rotation = -1100; // 逆時針旋轉 1100 度
      }
  
      // 球的移動動畫
      $('.ball').stop(true).animate({ left: location }, 3000);
  
      // 球的旋轉動畫
      $({ deg: 0 }).stop(true).animate(
        { deg: rotation },
        {
          duration: 3000,
          step: function (now) {
            $('.ball').css({
              transform: 'rotate(' + now + 'deg)',
            });
          },
        }
      );
    }
  });