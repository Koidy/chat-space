$(function() {
  function addUser(user){
    var html = `
              <div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザー名</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id}" data-user-name="${user.name}">追加</div>
              </div>
              `
  }

  function addNoUser(user){
    var html = `
              <div class="chat-group-user cleafix">
                <p class="chat-group-user__name">ユーザーがみつかりません</p>
              <div>`
  }

  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();

    $.ajax({
      type: "GET",
      url: "/users",
      dataType: "json",
      data: { keyword: input }
    })
      .done(function(users) {
        $("#user-search-result").empty();

        if (users.length !== 0) {
          users.forEach(function(user) {
            addUser(user);
          });
        } else if (input.length == 0) {
          return false;
        } else {
          addNoUser();
        }
      })
      .fail(function() {
        alert("通信エラーです。ユーザーが表示できません。");
      });
  });
});