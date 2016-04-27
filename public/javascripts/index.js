
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
