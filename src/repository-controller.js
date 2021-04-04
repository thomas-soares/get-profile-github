function searchRepository (repType, username){

    clearErrorMessage();

    let message="";

    if(repType==STARRED){
        message="starred ";
    }

    $.ajax({
        url: ENDPOINT_USER + username + repType,
        type: "GET",
        success: function (data) {
            verifyRepository(data,message);
        },
        error: function (data) {
            showErrorMessage("We are with a connection problem, please, try again");
        }
    });

}

function showRepositoryTable(repData){

    $("#repTableContent tr").remove();

    hideContent("#userTable");

    let username = repData[0].owner.login;

    for(let i=0;i<repData.length;i++){
        $("#repTableContent").append(
            '<tr>' +
            '   <td class="align-middle"><button class="btn btn-success" type="button" onclick=\'searchUsername("'+ username + '")\'>' + username + '</button></td>' +
            '   <td class="align-middle">' + shiftContentWhenEmpty("-",repData[i].name) + '</td>' +
            '   <td class="align-middle"><a href="' + URL_DEFAULT + username + repData[i].name + '" class="btn btn-dark" role="button">Acess Repository</a></td>' +
            '</tr>'
        );
    }

    showHiddedContent("#repTable");

}

function verifyRepository(repData,message){
    if(repData.length==0){
        showErrorMessage("This user doesn't have " + message + "repositories");
    }else{
        showRepositoryTable(repData);
    }   
}