'use strict';
var t=0;
var timerId;
var g_mc_ws_component ={
    ws:null,
    url:'ws://127.0.0.1:3001/',
    init: function(){

    },
    connect: function(url, onExternalMessage){
        this.url = url || this.url;

        this.ws = new WebSocket(this.url);

        this.ws.onopen = this.onConnected;

        this.ws.onmessage = onExternalMessage || this.onMessage;

        this.ws.onclose = this.onClosed;
    },
    sendMessage: function(txt){
        if (this.ws != null) {
            this.ws.send(txt);
        } else {
            alert('connection not established, please connect.');
        }
    },
    disconnect: function () {

        if (this.ws != null) {
            this.ws.close();
            this.ws = null;
        }
    },
    onConnected: function () {
        console.info('Info: connection opened.');
    },
    onMessage: function (event) {
        console.info('Received: ' + event.data);
    },

    onClosed: function (event) {
        console.info('Info: connection closed.');
        console.info(event);
    }
};

function start(){
    timerId = setInterval("timer()",1);
}

function timer(){
    t++;
    var tim = (t%1000);
    var m = parseInt((t/1000)/60);
    var s =  parseInt((t/1000));
    var time = document.getElementById("time");
    time.innerHTML=  s+" : "+tim;
}
function stop(){
    clearInterval(timerId);
}
function restart(){
    t=0;
    var time = document.getElementById("time");
    time.innerHTML= "00"+ " : " +"00"+" : "+"000";
}
function send(){
    sendMessage(t);
}
function list(){
    var list = document.getElementById("list_memo");
    list.innerHTML= "내용";
}