//document.querySelector(".card-flip").classList.toggle("flip");
$('.card-flip').bind({
    click: function() {
      $('.card-flip .flip-me').removeClass('flip');
    },
    mouseenter: function(){
      $('.card-flip .flip-me').addClass('flip');
    }
  });