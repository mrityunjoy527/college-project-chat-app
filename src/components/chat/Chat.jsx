import "./chat.css";
import { TbPhoneCall } from "react-icons/tb";
import { MdVideoCall } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import useOpenChatList from "../../useOpenChatList";

const Chat = () => {

    const {openChatList, toggle } = useOpenChatList();
    const [showMore, setMore] = useState(false);

    const handleOpenChatList = () => {
        toggle(!openChatList);
    }

    return <div className="chat">
        <div className="userInfo">
            <div className="user">
                <img className="menu" src={openChatList ? "./cross.png" : "./burger.png"} alt="" onClick={handleOpenChatList} style={{left: openChatList? "80%": "0"}}/>
                <div className="pic">
                    <img src='./tom.png' alt="" />
                    <div className="dot"></div>
                </div>
                <div className="desc">
                    <span>Tom Holland Lorem ipsum dolor sit.</span>
                    <p>online now</p>
                </div>
            </div>
            <div className="options">
                <TbPhoneCall className="option-icon" />
                <MdVideoCall className="option-icon" />
                <IoMdMore className="option-icon"/>
            </div>
        </div>
        <div className="showMessage">
            <div className="message">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message own">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message own">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message own">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message own">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message own">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message own">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
            <div className="message own">
                <span>Today 7:00 am</span>
                <p>Dude this thing we are trying</p>
                <span>Today 7:00 am</span>
            </div>
        </div>
        <div className="typeMessage">
            <MdAttachFile className="icons" />
            <input type="text" placeholder="Type a message..." />
            <IoSend className="icons" />
            <MdKeyboardVoice className="icons" />
            <BsEmojiSmileFill className="icons" />
        </div>
    </div>
}

export default Chat;