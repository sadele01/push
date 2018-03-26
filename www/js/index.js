function onDeviceReady() {
    //document.addEventListener("backbutton", onBackButton, false);
}

var IAMapp = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', onDeviceReady, false);
         var push = PushNotification.init({ "android": {"senderID": "YOUR_SENDER_ID"}});
         push.on('registration', function(data) {
            console.log(data.registrationId);
            document.getElementById("gcm_id").innerHTML = data.registrationId;
         });

            push.on('notification', function(data) {
            alert(data.title+" Message: " +data.message);
         });

            push.on('error', function(e) {
            alert(e);
         });
    }
};

function onBackButton(e) {
    e.preventDefault();
    if ($('imgModal').getStyle('display') === 'block') {
        $('imgModal').removeClass('in').setStyle('display', 'none');
    }
}
