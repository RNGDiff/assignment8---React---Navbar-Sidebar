import React, { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar() {
    const [menuOpen, open] = useState(false);

    return (
        <>
            <button className="hamburger" onClick={() => open(!menuOpen)}>
                {menuOpen ? "❌" : "☰"}
            </button>
            <div className={`sidebar-container ${menuOpen ? "open" : ""}`}>
                <aside className="sidebar">
                    <a href="/uppgift2">Uppgift 2</a>
                    <a href="/uppgift3">Uppgift 3</a>
                </aside>
            </div>
        </>
    );
}

export default Sidebar;
