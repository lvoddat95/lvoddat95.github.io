var stringeeClient;
var call;
var userId;
var token;
var call_id;
function takePhoto() {
    let div =
        document.getElementById('remoteVideo');

    // Use the html2canvas
    // function to take a screenshot
    // and append it
    // to the output div
    html2canvas(div).then(
        function (canvas) {
            window.open(canvas.toDataURL());
        })
}
function switchCamera(){
    call.switchCamera();
}

function sendInfo(msg){
    call.sendInfo(msg, function (res){
        console.log('sendInfo res', res);
    });
}

function testLogin(p_userID) {
    var ranNum = Math.floor(Math.random() * 999999);
    sLink = '/Ajax/genToken?userID=' + p_userID + '&rnd=' + ranNum;
    AjaxRequest.get({
        'url': sLink
        , 'onSuccess': function (req) {
            with (req.responseXML.getElementsByTagName('Item').item(0)) {
                token = getNodeValue(getElementsByTagName('Params'));
            }
        }
        , 'onError': function (req) { }
    })
}
async function login_call() {
    token = $("#TOKEN_VIDEO_CALL").val();
    stringeeClient = new StringeeClient();
    settingsClientEvents(stringeeClient);
    stringeeClient.connect(token);
}
function settingsClientEvents(client) {
    client.on('authen', function (res) {
        console.log('on authen: ', res);
        if (res.r === 0) {
            userId = res.userId;
            $('#loggedUserId').html(res.userId);
            $('#isLogin').val(1);
            $('#loggedUserId').css('color', 'blue');
            $('#call2HangupBtn').removeAttr('disabled');
            $('#muteBtn').removeAttr('disabled');
            $('#enableVideoBtn').removeAttr('disabled');
        }
    });
    client.on('connect', function () {
        console.log('++++++++++++++ connected');
    });
    client.on('disconnect', function () {
        console.log('++++++++++++++ disconnected');
    });
    client.on('requestnewtoken', function () {
        console.log('++++++++++++++ requestnewtoken+++++++++');
    });
    client.on('incomingcall2', function (call2) {
        call = call2;
        settingCallEvent(call);

        $('#incomingcallBox').show();
        $('#incomingCallFrom').html(call2.fromNumber);
    });
}
function testCall2() {
    var fromNumber = userId;
    var toUser = $("#C_NAME_NGUOI_TAO").val();
    var toNumber = "userTest2";

    call = new StringeeCall2(stringeeClient, fromNumber, toNumber, true);

    settingCallEvent(call);
    call.makeCall(function (res) {
        if (res.r == 0) {
            console.log('make call success');
            setCallStatus('Calling...');
            call_id = res.callId;
        }
    });
}
function postUpdateRuiRoMP4(pk_insurance, call_id, file) {
    $.ajax({
        url: 'updateRuiRo',
        data: JSON.stringify({ "pk_insurance": pk_insurance, "call_id": call_id, "p_file": file, "type_file": "MP4" }),
        type: "POST",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $('#loading').hide();
            if (data.message.trim() != '') {
                if (data.status == "Success") {
                    alertZebraVideoCall('Th&#244;ng b&#225;o', data.message, 'information');
                } else {
                    alertZebraVideoCall('Th&#244;ng b&#225;o', data.message);
                }
            }

            if (data.js.trim() != '') {
                eval(data.js);
            }
        },
        error: function () {
            $('#loading').hide();
        }
    });
}
function alertZebraVideoCall(title, content, type = 'warning') {
    new $.Zebra_Dialog(content, {
        'type': type,
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: "OK" }
        ]
    });
}
function confirmZebraVideoCall(title, content) {
    var pk_insurance = $('#RecordID').val();
    $.Zebra_Dialog(content, {
        'type': 'confirmation',
        'overlay_close': false,
        'title': title,
        'buttons': [
            { caption: 'Yes', callback: function () { postUpdateRuiRoMP4(pk_insurance, call_id, ''); } },
            { caption: 'No', callback: function () { return } }
        ]
    });
}
function settingCallEvent(call1) {
    call1.on('addlocalstream', function (stream) {
        localVideo.srcObject = null;
        localVideo.srcObject = stream;
    });
    call1.on('addremotestream', function (stream) {
        remoteVideo.srcObject = null;
        remoteVideo.srcObject = stream;
        remoteAudio.srcObject = null;
        remoteAudio.srcObject = stream;
    });
    call1.on('signalingstate', function (state) {
        console.log('signalingstate ', state);
        if (state.code === 6) {
            $('#incomingcallBox').hide();
        }
        if (state.code === 6) {
            setCallStatus('Ended');
            onstop();
            document.getElementById("close_call").click();
        } else if (state.code === 3) {
            setCallStatus('Answered');
            confirmZebraVideoCall("Thông báo","Bạn có muốn lưu lại video call này không");
        } else if (state.code === 5) {
            setCallStatus('User busy');
            onstop();
            document.getElementById("close_call").click();
        }
    });
    call1.on('mediastate', function (state) {
        console.log('mediastate ', state);
    });
    call1.on('otherdevice', function (msg) {
        console.log('otherdevice ', msg);
        if (msg.type == 'CALL2_STATE') {
            if (msg.code == 200 || msg.code == 486) {
                $('#incomingcallBox').hide();
            }
        }
    });
    call1.on('info', function (info) {
        console.log('++++info ', info);
    });
}

function testAnswer() {
    call.answer(function (res) {
        console.log('answer res', res);
        if (res.r === 0) {
            setCallStatus('Answered');
        }
    });
    $('#incomingcallBox').hide();
}

function testReject() {
    console.log('testReject');
    call.reject(function (res) {
        console.log('reject res', res);
    });
    $('#incomingcallBox').hide();
}

function testHangup() {
    call.hangup(function (res) {
        console.log('hangup res', res);
    });
    onstop();
    document.getElementById("close_call").click();
}
function testCloseup() {
    if ($('#isLogin').val() == 1) {
        call.hangup(function (res) {
            console.log('hangup res', res);
        });
    }
    onstop();
}

function onstop() {
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
}

function setCallStatus(status) {
    $('#txtStatus').html(status);
}

function testMute() {
    if (call.muted) {
        call.mute(false);
        console.log('unmuted');
    } else {
        call.mute(true);
        console.log('muted');
    }
}

function testDisableVideo() {
    if (call.localVideoEnabled) {
        call.enableLocalVideo(false);
        console.log('disable Local Video');
    } else {
        call.enableLocalVideo(true);
        console.log('enable Local Video');
    }
}