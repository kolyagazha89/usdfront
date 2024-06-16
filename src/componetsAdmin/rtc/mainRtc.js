import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import style from './style.module.scss'
const MainRtc = () => {
    const [user,setUser]=useState()
    var pc = null;
    var dc = null, dcInterval = null;

    function createPeerConnection() {
        var config = {
            sdpSemantics: 'unified-plan'
        };

        // config.iceServers = [{urls: ['stun:stun.l.google.com:19302']}];


        pc = new RTCPeerConnection(config);

        // connect audio / video
        pc.addEventListener('track', function(evt) {
            document.getElementById('video').srcObject = evt.streams[0];
        });

        return pc;
    }

    function negotiate() {
        return pc.createOffer().then(function(offer) {
            return pc.setLocalDescription(offer);
        }).then(function() {
            // wait for ICE gathering to complete
            return new Promise(function(resolve) {
                if (pc.iceGatheringState === 'complete') {
                    resolve();
                } else {
                    function checkState() {
                        if (pc.iceGatheringState === 'complete') {
                            pc.removeEventListener('icegatheringstatechange', checkState);
                            resolve();
                        }
                    }
                    pc.addEventListener('icegatheringstatechange', checkState);

                }
            });
        }).then(function() {
            var offer = pc.localDescription;
            return axios.post('http://127.0.0.1:8000/rtc/offer_cv', {
                    sdp: offer.sdp,
                    type: offer.type,
                },{
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        }).then(function(response) {
            return response.data;
        }).then(function(answer) {
            return pc.setRemoteDescription(answer);
        }).catch(function(e) {
            alert(e);
        });
    }

    function start() {
        document.getElementById('start').style.display = 'none';
        pc = createPeerConnection();
        dc = pc.createDataChannel('chat');
        dc.onmessage = (evt) =>{
            if(evt.data){
                axios.post('http://localhost:8000/users/num/?num='+evt.data).then((res)=>
                    setUser(res.data)
                )
                stop()
            }
        }
        dc.onclose = () => console.log(dc.readyState);
        dc.onopen=()=>{
            console.log(dc.readyState)
        }
        var constraints = {
            audio: false,
            video: { facingMode: "environment" }
        };
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            stream.getTracks().forEach(function (track) {
                pc.addTrack(track, stream);
            });
            return negotiate();
        })
    }
    function stop() {
        document.getElementById('start').style.display = 'inline-block';
        document.getElementById('media').style.display = 'none'

        // close transceivers
        if (pc.getTransceivers) {
            pc.getTransceivers().forEach(function(transceiver) {
                if (transceiver.stop) {
                    transceiver.stop();
                }
            });
        }

        // close local audio / video
        pc.getSenders().forEach(function(sender) {
            sender.track.stop();
        });

        // close peer connection
        setTimeout(function() {
            pc.close();
        }, 500);
    }
    return (
        <>
            {!user?
        <div className={style.main}>
            <button id="start" onClick={start}>Регистрация</button>
            <div id="media">
                <video id="video" autoPlay="true" playsInline="true"></video>
            </div>
        </div>:

        <div className={style.main}>
            <p>Номер:  E796YA89</p>
            <p>Гажа Николай Николаевич</p>
            <p>Марка авто: Лада приора</p>
            <p>Классы участия: BFSPL Wicket 1-6, SPL Sedan</p>
            <p></p>
        </div>}
        </>
    );
}

export default MainRtc;