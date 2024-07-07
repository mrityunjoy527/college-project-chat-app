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
import EmojiPicker from "emoji-picker-react";
import Logout from "../logout/Logout";

const Chat = () => {

    const { openChatList, toggle } = useOpenChatList();
    const [showMore, setMore] = useState(false);
    const [openEmoji, setEmoji] = useState(false);
    const [text, setText] = useState("");
    const [openLogout, setLogout] = useState(false);

    const handleOpenChatList = () => {
        toggle(!openChatList);
    }

    const handleSend = () => {

    }

    return <div className="chat">
        <div className="userInfo">
            <div className="user">
                <img className="menu" src={openChatList ? "./cross.png" : "./burger.png"} alt="" onClick={handleOpenChatList} style={{ left: openChatList ? "80%" : "0" }} />
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
                <TbPhoneCall className="option-icon" title="Audio Call" />
                <MdVideoCall className="option-icon" title="Video Call" />
                <IoMdMore className="option-icon" title="More" onClick={() => {setLogout(prev => !prev)}}/>
                {openLogout && <Logout/>}
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
            <input id="file" type="file" style={{ display: "none" }} />
            <label htmlFor="file"><MdAttachFile className="icons" title="Attach File" /></label>
            <input type="text" placeholder="Type a message..." onChange={(e) => { setText(e.target.value) }} value={text} />
            <IoSend className="icons" title="Send" onClick={handleSend}/>
            <MdKeyboardVoice className="icons" title="Audio" />
            <div className="emoji">
                <BsEmojiSmileFill className="icons" title="Emoji" onClick={() => { setEmoji(prev => !prev) }} />
                <EmojiPicker className="emojiPicker" open={openEmoji} onEmojiClick={(e) => { setText(prev => prev + e.emoji) }} />
            </div>
        </div>
    </div>
}

export default Chat;