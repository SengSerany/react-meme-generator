import React from "react";

export default function Header() {
    return (
        <nav>
            <div className="nav--title">
                <img src={require("../images/troll-face.png")} alt="logo of the website" className="nav--logo" />
                <h1 className="nav--h1">Meme Generator</h1>
            </div>
            <div className="nav--subtitle">
                <p>React Course - Project 3</p>
            </div>
        </nav>
    )
}