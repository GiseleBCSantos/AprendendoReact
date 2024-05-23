import React from 'react'
import memesData from '../memesData'

const Meme = () => {
    let url;
    
    function getMemeImage(){
        // const randomMeme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url
        // console.log(randomMeme)

        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)

    }

    return (
        <main>
            <div className='form'>
                <div className="form--items">
                    <div className="form--topText">
                        <label htmlFor="topText">Top text</label>
                        <input type="text" id='topText' placeholder='Shut up' />
                    </div>

                    <div className="form--bottomText">
                        <label htmlFor="bottomText">Bottom text</label>
                        <input type="text" id='bottomText' placeholder='And take my money' />
                    </div>
                </div>

                <button onClick={getMemeImage} className='form--button'>
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="image">
                <img src={`${url}`} alt="" />
            </div>
        </main>
    )
}

export default Meme