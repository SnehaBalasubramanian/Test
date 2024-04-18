import React, { useState } from 'react'

import './Outterpage.css'
import { useNavigate } from 'react-router-dom';
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
const Outterpage = () => {
    const [roomid,setRoomid] = useState('');
    const [currentDate, setCurrentDate] = useState(getDate())
    console.log(roomid);
    const navigation = useNavigate();
    const navigationafterclick = ()=>{
        navigation(`Videoconference/${roomid}`)
    }
    
    return (
        <div className='outterpage'>
            <navbar>
                <div className='left'>
                    <img src='https://download.logo.wine/logo/Google_Meet/Google_Meet-Logo.wine.png' alt='' />
                    <span><b>GO</b>Meet</span>
                </div>
                <div className='right'>
                    <i class="fa-solid fa-circle-info"></i>
                    <i class="fa-regular fa-flag"></i>
                    <i class="fa-solid fa-gear"></i>

                </div>
                <div className='one'>
                    <p>{currentDate}</p>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    <img src='data:image/png;base64,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' alt='' />
                </div>
            </navbar>
            <div className='Red'>
                <div className='red1'>
                    <h1>Video Calls And Meeting For</h1>
                    <h1>Everyone</h1>
                    <p>Go meet provides secure, easy to use video calls and</p>
                    <p>meeting for everyone, on any device.</p>
                    <div className='red2'>
                        <input type='search' placeholder='Enter a Code or Link' onChange={(event)=>setRoomid(event.target.value)}></input>
                        <button type="button" class="btn btn-primary" onClick={()=>navigationafterclick()}>Join</button>
                    </div>
                    <hr></hr>
                    <p><span>Learn More</span> about google meet</p>
                </div>
                <div className='green'>
                      <img src='https://c8.alamy.com/comp/2D5TMPC/online-conference-distance-education-web-courses-or-business-meeting-with-manager-online-distance-education-characters-vector-illustration-2D5TMPC.jpg' alt=''/>
                      <h4>Your meet is safe</h4>
                      <p>No one can join the unless invite or admitted by the host</p>
                      
                </div>
            </div>
        </div>
    )
}

export default Outterpage
