
var localVideo = document.getElementById('localVideo');
var localStream;

const constraints = {
    'video' : true,
    'audio' : false
}

navigator.mediaDevices.getUserMedia(constraints)
    .then(gotStream)
    .catch(error => {
        console.log('Error get user local stream',error);
    });

function gotStream(stream){
    console.log('Success get user local stream');
    localStream = stream;
    localVideo.srcObject = stream;
}