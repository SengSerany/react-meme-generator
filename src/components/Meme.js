import React from "react";

export default function Meme() {
    return (
        <form>
            <div className="meme--inputs">
                <input type="text" value="Shut up" className="meme--input"/>
                <input type="text" value="and take my money" className="meme--input"/>
            </div>
            <input type="submit" value="Get a new meme image 🖼" className="meme--submit" />
        </form>
    )
}