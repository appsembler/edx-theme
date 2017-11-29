function log(obj) {
    response = JSON.stringify(obj);
    if (response.search("sent")){
      alert("Email sent successfully")
    }
    else {
      alert("There was an issue please contact administrator")
    }
}

var m = new mandrill.Mandrill('866XzPk_1F35JMmBF8MN_Q');

function sendTheMail() {
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
}
