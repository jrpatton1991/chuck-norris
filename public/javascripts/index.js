
$(document).ready(function(){
  $('#newBtn').click(function(){
    $.ajax({
      url:'/newRandom',
      type:'get',
      dataType:'json'

    })
    .done(function(data, textStatus){
      jokeObj = $.parseJSON(data);
      $('#quote').html('<p>' + jokeObj.value.joke + "</p>" );
    })

    .fail(function(data, textStatus){
      console.log(data + " " + textStatus);
    })
  })
});


// twitter logic
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs')
