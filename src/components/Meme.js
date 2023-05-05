import { useState } from 'react'
import memesData from "../memesData"

const Meme =()=> {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
        alt: ''
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    

    
    const getMemeImage =()=> {
        const memesArray =  allMemeImages.data.memes
        let idx = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: memesArray[idx].url,
                alt: memesArray[idx].name

            }
        })
    }
    
    return (
        <section className="meme-section section">
            <div className="meme-form">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input className="input-1 form-control" type="text" />
                        </div>
                        <div className="col">
                            <input className="input-1 form-control" type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-grid">
                            <button onClick={getMemeImage} className="btn meme-btn" type="button">Get a new meme image</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='meme-div text-center'>
                <img src={meme.randomImage} alt={meme.alt} className='img-fluid meme-image' />
            </div>
        </section>
    )
}




export default Meme