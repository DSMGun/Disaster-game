$("#login").on("click", function() {
    let jsonData = JSON.stringify({
        "username": $("#username").val(),
        "password": $("#password").val()
    });
    $.ajax({
        url: '/login',
        type : 'post',
        dataType: 'json',
        data : jsonData,
        success : function() {
            alert("로그인 성공");
            window.location.href = "/";
        },
        error : function() {
            alert("로그인 실패");
        }
    }); 
});