function isEmptyInput (input) {
    
    if(input === "" || input == null){
        return true;
    }else{
        return false;
    }

}

function showErrorMessage (message) {

    showHiddedContent("#txtError");
    $("#txtError").text(message);

}

function clearErrorMessage (){

    hideContent("#txtError");
    $("#txtError").text("");

}

function shiftContentWhenEmpty(original, newContent){
    if(isEmptyInput(newContent)){
        return original;
    }else{
        return newContent;
    }
}

function showHiddedContent(contentId){
    $(contentId).removeClass("d-none");
}

function hideContent(contentId){
    if(!$(contentId).hasClass("d-none")){
        $(contentId).addClass("d-none");
    }
}