import React from "react";

export default function Meme() {

    const [ memeImage, getMemeImage] =
        React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        });


    const [ allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect( () => {
        const imgsFetch = async () => {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json() 
            setAllMemeImages(data.data.memes)
        }
        
        imgsFetch()

    }, [])
    
    const newMemeImg = () => {
        let randomNum = Math.floor(Math.random() * (allMemeImages.length - 1));
        return getMemeImage( prevMeme => ({
            ...prevMeme,
            randomImage: allMemeImages[randomNum].url
        })) 
    }

    const handleChange = (event) => {
        
        let { name, value} = event.target;

        getMemeImage( prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="meme--inputs" >
                <input 
                    type="text"
                    placeholder="Top text"
                    className="meme--input"
                    name="topText"
                    onChange={handleChange}
                    value={memeImage.topText}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="meme--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={memeImage.bottomText}
                />
            </div>
            <button type="button" onClick={newMemeImg} className="meme--submit">Get a new meme image 🖼</button>
            <div className="meme">
                <img src={memeImage.randomImage} alt="meme representation" className="meme--img" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}