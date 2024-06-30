import { useEffect, useState } from "react";
import "./addUser.css";
import { userData } from "../../../userData";
import useChatStore from "../../../useChatStore";

const AddUser = ({search}) => {
    const {chats, addToChats} = useChatStore();
    const [added, setAdded] = useState(chats);
    const [width, setWidth] = useState(window.screen.width);


    const handleWidth = () => {
        setWidth(window.screen.width);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWidth);

        return () => {
            window.removeEventListener("resize", handleWidth);
        }
    });

    const handleAdd = (user) => {
        setAdded((prev) => [...prev, user]);
        addToChats(user);
    }

    const filtered = userData.filter((user) => !chats.includes(user) && user.name.toLowerCase().startsWith(search.toLowerCase()));


    return <div className="addUser">
        {filtered.map((user) => (
            <div className="userItem" key={user.id}>
                <div className="user">
                    <img src={user.img} alt="" />
                    <span>{user.name}</span>
                </div>
                <button onClick={() => handleAdd(user)}>{width <= 540 || (width >= 1240 && width <= 1325)? "Add" : "Add User"}</button>
            </div>
        ))}
    </div>
}

export default AddUser;