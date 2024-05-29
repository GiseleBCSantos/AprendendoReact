import React, { useId, useState } from 'react'
// import memesData from '../memesData'
import { useEffect } from 'react';

const Meme = () => {
    let url;
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    const id = useId()


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        url = allMemeImages[randomNumber].url

        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target

        setMeme(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    useEffect(() => {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        
        getMemes()

    }, [])

    return (
        <main>
            <div className='form'>
                <div className="form--items">
                    <div className="form--topText">
                        <label htmlFor={id + 'topText'}>Top text</label>
                        <input
                            type="text"
                            id={id + 'topText'}
                            placeholder='Shut up'
                            value={meme.topText}
                            name='topText'
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form--bottomText">
                        <label htmlFor={id + 'bottomText'}>Bottom text</label>
                        <input
                            type="text"
                            id={id + 'bottomText'}
                            placeholder='And take my money'
                            value={meme.bottomText}
                            name='bottomText'
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button onClick={getMemeImage} className='form--button'>
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
                <img src={`${meme.randomImage}`} alt="" className='meme--image' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme