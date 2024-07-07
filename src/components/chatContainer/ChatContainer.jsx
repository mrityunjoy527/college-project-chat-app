import ChatList from "../chatList/ChatList";
import "./chatContainer.css";
import { CiSettings } from "react-icons/ci";
import { MdChat } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import Chat from "../chat/Chat";

export default function ChatContainer() {
    return <div className="chatContainer">
        <div className="top">
            <ChatList />
            <Chat />
        </div>
        <div className="bottom">
            <div className="iconBg">
                <CiSettings className="icons" title="Settings"/>
            </div>
            <div className="bottom-middle">
                <div className="iconBg">
                    <MdChat className="icons" />
                </div>
                <div className="iconBg">
                    <MdGroup className="icons" />
                </div>
            </div>
            <img src="./tom.png" alt="" />
        </div>
    </div>;
}