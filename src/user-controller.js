function searchUsername (username){

    clearErrorMessage();

    if(activeUser===username){
        hideContent("#repTable");
        showHiddedContent("#tablesSection");
        showHiddedContent("#userTable");
    }else{
        $.ajax({
            url: ENDPOINT_USER + username,
            type: "GET",
            success: function (data) {
                activeUser = username;
                showUserTable(data);
            },
            error: function (data) {
                showErrorMessage("We are with a connection problem or this user doesn't exist, please, try again");
            }
        });
    }

}

function showUserTable(userData){

    hideContent("#repTable");

    let username = userData.login;

    $("#userAvatar").attr("src",shiftContentWhenEmpty($("#userAvatar").attr("src"),userData.avatar_url));
    $("#userName").text(shiftContentWhenEmpty("-",userData.name));
    $("#userCompany").text(shiftContentWhenEmpty("-",userData.company));
    $("#userLink").attr("href",URL_DEFAULT + username);
    $("#userRepos").attr("onclick",'searchRepository("'+ REPOSITORIES + '","' + username + '")');
    $("#userStarred").attr("onclick",'searchRepository("'+ STARRED + '","' + username + '")');

    showHiddedContent("#tablesSection");
    showHiddedContent("#userTable");

}