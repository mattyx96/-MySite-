function validate() {

    var comment = $("#TextArea").val();
    var sender = $("#Sender").val();
    var ip;
    var adblock = false;

    fetch('https://freegeoip.net/json/', {headers: {}})
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            ip = data.ip;
        })
        .catch(function(error) {
            console.log(error);
            adblock = true;
            alert("please disable your adblock and retry");
            return Promise.reject();

        }).then(function () {

        const json = {
            comment: comment,
            sender: sender,
            address: ip
        }

        if (adblock){
            return;
        }

        console.log(json);

        $.ajax({
            url: 'http://matteoomicini.drink-web.eu/api/new-comment',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(json),
            crossDomain: true,
            success: function () {
                alert('comment sent, take a look!');
                $("#TextArea").val("");
                $("#Sender").val("");
            },
            error: function () {
                alert('error');
            }
        });
    });

}