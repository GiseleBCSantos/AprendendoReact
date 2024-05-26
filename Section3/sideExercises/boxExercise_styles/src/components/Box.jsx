import React from "react";

export default function Box (props) {
    const styles = {
        backgroundColor: props.on ? 'transparent' : 'black',
    }

    return(
        <button className="box" style={styles} onClick={props.handleClick}>

        </button>
    )
}