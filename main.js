'use strict';

//어댑터가 앞의 index.html 파일에서 처리가 다되어서
// navigator.getUserMedia 생성자를 초기화 해줄 필요가 없었다. 
var constraints = {audio : false, video: true};

var video = document.querySelector('video');

function camera_success(stream){
    window.stream = stream;
    if(window.URL){
        video.src = window.URL.createObjectURL(stream);
    }else{
        video.src = stream;
    }
}
function camera_error(error){
    console.log('navigator.getUserMedia error: ', error);
}

navigator.getUserMedia(constraints).then(camera_success).error(camera_error);