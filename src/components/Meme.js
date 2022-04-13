import React from "react";
import MemeData from "../memeData";

export default function Meme() {

    const [ memeImage, getMemeImage] = React.useState("https://static.actu.fr/uploads/2021/04/img-0404-960x640.jpg");

    const newMemeImg = () => {
        let memeArray = MemeData.data.memes;
        let randomNum = Math.floor(Math.random() * (memeArray.length - 1));
        return getMemeImage(memeArray[randomNum].url) 
    }

    return (
        <div className="main">
            <form>
                <div className="meme--inputs">
                    <input type="text" placeholder="Top text" className="meme--input"/>
                    <input type="text" placeholder="Bottom text" className="meme--input"/>
                </div>
                <button type="button" onClick={newMemeImg} className="meme--submit">Get a new meme image 🖼</button>
            </form>
            <img src={memeImage} alt="meme representation" className="meme--img" />
        </div>
    )
}