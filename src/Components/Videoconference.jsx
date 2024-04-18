import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import React from 'react'
import { useParams } from 'react-router-dom'

const Videoconference = () => {
    const {roomid} = useParams();
    const popvideo = async(element)=>{
        const appID = 434636503; 
        const serverSecret = '5c0df7e24040a37461f7b0d35479a8b5';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomid,Date.now().toString(),"Sneha");
        const zp= ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            }
        })

    }
  return (
    <div ref={popvideo}>
      
    </div>
  )
}

export default Videoconference
