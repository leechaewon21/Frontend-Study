var mediaRecorder;
var recordedBlobs;

var recordButton = document.getElementById('recordButton');
var playButton = document.getElementById('playButton');
var recordVideo = document.getElementById('recordVideo');
var localVideo = document.getElementById('localVideo');

recordButton.addEventListener("click",recordButtonHandler,false);
playButton.addEventListener("click",playButtonHandler,false);

//EVENT LISTNER
function recordButtonHandler() {
    if(recordButton.innerText == 'Start Recording') {
        startRecording();
        recordButton.innerText = 'Stop Recording';
        playButton.disabled = true;
    } else {
        stopRecording();
        recordButton.innerText = 'Start Recording';
        playButton.disabled = false;
    }
}

function playButtonHandler() {
    recordVideo.controls = true;
    var blob = new Blob(recordedBlobs, {mimeType:'video/mp4'});
    recordVideo.src = window.URL.createObjectURL(blob);
    recordVideo.play();
}

function dataAvailableHandler(e) {
    if(e.data && e.data.size>0) {
        recordedBlobs.push(e.data);
    }
}

//FUNCTION
function startRecording() {
    recordedBlobs = [];
    try {
        mediaRecorder = new MediaRecorder(localVideo.srcObject,{mimeType: 'video/webm'});
    }catch(error) {
        console.log('[Error get media recorder]'+error);
        return;
    }
    mediaRecorder.addEventListener('dataavailable',dataAvailableHandler,false);
    mediaRecorder.start();
}

function stopRecording() {
    mediaRecorder.stop();
}