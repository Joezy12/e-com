import React, { useState } from "react";
import ChatBox from "./chatbox";

function Chat() {

    const [dropState, setDropState] = useState(false);
    const [chatFilter, setChatFilter] = useState(false);
    return (
        <section className="chat" onClick={() => {
            if (dropState != false || chatFilter != false) {
                setDropState(false);
                setChatFilter(false);
            }

        }}>
            <div className="left-section">
                <div className="chat-nav">
                    <h1>Chats</h1>
                    <ul className="uler">
                        <li><i className="bi-bell"></i></li>
                        <li onClick={() => setDropState(!dropState)}><i className="bi-three-dots-vertical"></i>
                            {dropState ? <div className="drop-down">
                                <ul>
                                    <li>New Chat</li>
                                    <li>Create Group</li>
                                    <li>Invite Others</li>
                                </ul>
                            </div> : ""}</li>
                    </ul>
                </div>
                <div className="chat-filter">
                    <div className="filter-left">
                        <p onClick={() => { setChatFilter(!chatFilter) }}>All Chats <i className="bi-caret-down-fill"></i></p>
                        {
                            chatFilter ? <div className="drop-down drp2">
                                <ul>
                                    <li>All chat</li>
                                    <li>Friends</li>
                                    <li>Group</li>
                                    <li>Unread</li>
                                    <li>Archived</li>
                                </ul>
                            </div> : ""
                        }
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search Users" />
                        <button><i className="bi-search"></i></button>
                    </div>
                </div>
                <div className="main-chats">
                    <div className="chat-user">
                        <div className="chat-profile-pic"></div>
                        <div className="chat-user-right">
                            <div className="the-top">
                                <h1>Catherine Richardson</h1>
                                <p>Just now</p>
                            </div>
                            <div className="the-bottom">
                                <p>Am sorry, I didnt catch that, could you please tell ..</p>
                            </div>
                        </div>
                    </div>

                    <div className="chat-user">
                        <div className="chat-profile-pic"></div>
                        <div className="chat-user-right">
                            <div className="the-top">
                                <h1>Catherine Richardson</h1>
                                <p>Just now</p>
                            </div>
                            <div className="the-bottom">
                                <p>Am sorry, I didnt catch that, could you please tell ..</p>
                            </div>
                        </div>
                    </div>

                    <div className="chat-user">
                        <div className="chat-profile-pic"></div>
                        <div className="chat-user-right">
                            <div className="the-top">
                                <h1>Catherine Richardson</h1>
                                <p>Just now</p>
                            </div>
                            <div className="the-bottom">
                                <p>Am sorry, I didnt catch that, could you please tell ..</p>
                            </div>
                        </div>
                    </div>

                    <div className="chat-user">
                        <div className="chat-profile-pic"></div>
                        <div className="chat-user-right">
                            <div className="the-top">
                                <h1>Catherine Richardson</h1>
                                <p>Just now</p>
                            </div>
                            <div className="the-bottom">
                                <p>Am sorry, I didnt catch that, could you please tell ..</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <ChatBox />
        </section>
    )
}

export default Chat;