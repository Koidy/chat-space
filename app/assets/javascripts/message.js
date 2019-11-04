$(function(){ 
    function buildHTML(message){
      var addimage = ( message.image.url !== null ) ? `<img class = class: "lower-message__image", src="${message.image.url}">` : ''
        var html =
          `<div class="message" data-message-id="${message.id}">
            <div class="upper-message">
               <div class="upper-message__user-name">
                 ${message.user_name}
              </div>
              <div class="upper-message__date">
                ${message.date}
              </div>
            </div>
            <div class="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
              ${addimage}
            </div>
          </div>`
        return html;
      } 
$('#new_message.new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
     })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        $('form')[0].reset();
      })
      .fail(function(){
        alert("メッセージ送信に失敗しました");
      });
      return false;
})

    var reloadMessages = function() {
      last_message_id = $('.message:last').data("message-id"); 

      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {last_id: last_message_id}
      })
      .done(function(messages) {
        console.log('success');
      })
      .fail(function() {
        console.log('error');
      });
    };
});