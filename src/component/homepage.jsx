import React from "react";
import Sidebar from "./sidebar";
import Chat from "./chat";

function Homepage() {
    return (
        <section className="homepage">
        <Sidebar />
        <Chat />
        </section>
    )
}

export default Homepage;