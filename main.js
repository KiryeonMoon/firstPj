var Body = {
    setColor:function(color){
      // document.querySelector('body').style.color = color;
      $('body').css('color',color);
    },
    setBackgroundColor: function(color){
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundcolor',color);
    }
  }
  var Links = {
    setColor: function(color){
    //   i = 0;
    // var count = document.getElementsByTagName('a');
    //   while (i < count.length) {
    //     count[i].style.color = color;
    //     i++;
    //   }
    $('a').css('color',color); // $('a')란, 이 웹페이지에 있는 모든 a 태그를 jQuery로 제어하겠다는 수식

    }
  }
  function nightDay(self){
    var target = document.querySelector('body');
    if (self.value == '어둡게') {
      target.style.backgroundColor = 'black';
      target.style.color = 'gray';
      self.value = '  밝게  ';
      Links.setColor('Yellow')
    }
    else {
      target.style.backgroundColor = 'gray';
      target.style.color = 'black';
      self.value = '어둡게';
      Links.setColor('Black')
    }
  }