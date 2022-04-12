import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App() {
    return (
        <div className="app">
            <Header />
            <div className="contents">
                <Meme />
            </div>
        </div>
        
    )
}
