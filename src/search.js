const ENDPOINT_USER = "https://api.github.com/users/";
const URL_DEFAULT = "https://github.com/"
const REPOSITORIES = "/repos";
const STARRED = "/starred";

let activeUser;

$("#btnSearch").click(function () { 

    clearErrorMessage();
    
    let username = $("#txtUsername").val().toLowerCase();

    if(isEmptyInput(username)){
        showErrorMessage("How can I search for nothing?");
    }else{
        searchUsername(username);
    }

    $("#txtUsername").val("");

});

