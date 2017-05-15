$(document).ready(function(){
    //cases
  $(window).scroll(function(){
    
        $('.hideme').each(function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){ $(this).animate({'opacity':'1'},1000);      
            } 
        }); 
    });
    
    
       //smooth scroll
  $("header a").on('click', function(event){
      if (this.hash !== "") {
          event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
  };
  });
    
    
    //news slide down
    $('#news_container div.thumbnail').hover(function(){
            $(this).find('.caption').slideDown(250); 
            $(this).next('h3').css('color', 'rgb(255,132,0)');
        }, 
                          
        function(){
            $(this).find('.caption').slideUp(250); 
            $(this).next('h3').css('color', 'rgb(116,116,116)');
        })

    //hover logo
        $('#partners img').mouseenter(function(){
            var logo = $(this).attr('src').charAt(15);
            $(this).attr('src', 'imgs/hk_partner'+logo+'1'+'.png');
        });
    $('#partners img').mouseleave(function(){
            var logo = $(this).attr('src').charAt(15);
            $(this).attr('src', 'imgs/hk_partner'+logo+'.png');
        });
    
        //wechat
$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'right',
  content: function(){return '<img src="'+$(this).data('img') + '" />';}
    
});
    
    
   //back-to-top
    $(window).on('scroll', function(){
        if($(this).scrollTop() + $(window).height() > $(document).height() - $("#footer").height()){
            $('#back-to-top').css('visibility', 'visible');   
        }else{
            $('#back-to-top').css('visibility', 'hidden');  
        };
    });
    
    
    
    
    
    
    
    
    
});
        
    
      
 


    
    
    




    
  


 
   
