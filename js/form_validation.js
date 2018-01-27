function validate() {
    var comment = $("#TextArea").value;
    var sender = $("#Sender").value;

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
            data: JSON.stringify( json ),
            success: function(){
                alert('success');
            },
            error: function(){
                alert('error');
            }
        });


    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "", true);
    // xhttp.setRequestHeader("Content-type", json);
    // xhttp.send();
}