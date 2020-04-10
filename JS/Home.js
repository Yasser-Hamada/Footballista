$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
      }
    });

  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},2000);
    });

    $('.nav-link').click(function(e){
        var link = $(this).attr('href');
        $('html , body').animate({
            scrollTop: $(link).offset().top
        },2000);
        e.preventDefault();
    });


    $("#logo").click(function(){
      $('html ,body').animate({scrollTop : 0},2000);
    });

    $(".navbar-brand").click(function(){
      $('html ,body').animate({scrollTop : 0},2000);
    });

    $('#down').click(function(e){
        $('html , body').animate({
            scrollTop: $("#best-players").offset().top
        },2000);
        e.preventDefault();
    });

    
    $('#hazstatbtn').click(function(e){
      $(".player-data").hide();
      $("#hazardStat").show();
      $('.counter').counterUp({
        delay: 10,
        time: 3000
      });
      $("#hazardStat").animate({
        opacity: '1'
      },7000);
      var link = $(this).attr('href');
      $('html , body').animate({
          scrollTop: $(link).offset().top-60+"px"
      },2000);
      e.preventDefault();
  });
  
  $('#crstatbtn').click(function(e){
    $(".player-data").hide();
    $("#cristianoStat").show();
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });
    $("#cristianoStat").animate({
      opacity: '1'
    },7000);
    var link = $(this).attr('href');
    $('html , body').animate({
        scrollTop: $(link).offset().top-60+"px"
    },2000);
    e.preventDefault();
});

$('#messistatbtn').click(function(e){
  $(".player-data").hide();
  $("#messiStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#messiStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#neymarstatbtn').click(function(e){
  $(".player-data").hide();
  $("#neymarStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#neymarStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#beckerstatbtn').click(function(e){
  $(".player-data").hide();
  $("#beckerStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#beckerStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#arnoldstatbtn').click(function(e){
  $(".player-data").hide();
  $("#arnoldStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#arnoldStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#ligtstatbtn').click(function(e){
  $(".player-data").hide();
  $("#ligtStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#ligtStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#kantestatbtn').click(function(e){
  $(".player-data").hide();
  $("#kanteStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#kanteStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#robertstatbtn').click(function(e){
  $(".player-data").hide();
  $("#robertsonStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#robertsonStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#salahstatbtn').click(function(e){
  $(".player-data").hide();
  $("#salahStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#salahStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#sonstatbtn').click(function(e){
  $(".player-data").hide();
  $("#sonStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#sonStat").animate({
    opacity: '1'
  },7000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});

$('#vanstatbtn').click(function(e){
  $(".player-data").hide();
  $("#vanStat").show();
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
  $("#vanStat").animate({
    opacity: '1'
  },3000);
  var link = $(this).attr('href');
  $('html , body').animate({
      scrollTop: $(link).offset().top-60+"px"
  },2000);
  e.preventDefault();
});


var stay = 0;
var leave = 11;
  $( ".playerimg" ).draggable({revert:"invalid"});
  $('#droppable').droppable({
    accept:".playerimg",
    drop:function(event,ui){
      
          $(ui.draggable).css("border","none");
          stay++;
          leave--;
          if( stay >=11 || leave <=0)
          {
            $( "#droppable" ).droppable({
              disabled: true
              });
          }
          else
          {
            {
              $( "#droppable" ).droppable({
                disabled: false
                });
            }
          }
          if(stay==11)
          {
            $(this).css("border"," rgba(149, 238, 71) 0.1rem solid");
          }
    }
    
  });

  $( ".playerimg" ).draggable({revert:"invalid"});
  $('#block').droppable({
    accept:".playerimg",
    drop:function(event,ui){
      $(ui.draggable).css("border-radius"," 15em");
      $(ui.draggable).css("border-top"," rgb(149, 238, 71) 0.1rem solid");
      $(ui.draggable).css("border-bottom"," rgb(149, 238, 71) 0.1rem solid");
      leave++;
      stay--;
         
      if( stay >=11 && leave <=0)
      {
        $( "#droppable" ).droppable({
          disabled: true
          });
      }
      else
      {
        $( "#droppable" ).droppable({
          disabled: false
          });
      }
      if(stay<=0)
          {
            $('#droppable').css("border","none");
          }
    }
    
    
    
  });
 
});
 
  
