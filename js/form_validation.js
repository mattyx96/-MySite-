function validate() {
    var comment = $("#TextArea").val();
    var sender = $("#Sender").val();

    if (comment == "") {
        alert("il commento non deve essere vuoto");
        return false;
    }

    const json = {
        comment: comment,
        sender: sender
    }

    console.log(json);



    $.ajax({
        url: 'http://matteoomicini.drink-web.eu/api/new-comment',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(json),
        crossDomain:true,
        success: function () {
            alert('comment sent, take a look!');
            $("#TextArea").val("");
            $("#Sender").val("");
        },
        error: function () {
            alert('error');
        }
    });
}