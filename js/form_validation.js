function validate() {

    var comment = $("#TextArea").val();
    var sender = $("#Sender").val();
    var ip;

    fetch('https://freegeoip.net/json/', {headers: {}})

        .then(function (data) {

            return data.json();

        }).then(function (data) {

        ip = data.ip;

    }).then(function () {

        const json = {
            comment: comment,
            sender: sender,
            address: ip
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





