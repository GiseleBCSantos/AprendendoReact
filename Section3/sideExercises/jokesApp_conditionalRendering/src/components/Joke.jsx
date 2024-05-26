import React, { useState } from 'react'

const Joke = (props) => {

    const [isShown, setIsShown] = useState(false)
    

    function toggle(){
        setIsShown(prevState => !prevState)
    }    

    return (
        <div className='jokeComponent'>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}

            <button onClick={toggle} className='show-punchline'>{isShown ? 'Hide' : 'Show'} Punchline</button>
        </div>

        
    )
}

export default Joke