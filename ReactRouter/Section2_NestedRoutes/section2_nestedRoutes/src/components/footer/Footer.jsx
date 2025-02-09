import React from 'react'

function Footer() {
    const styles = {
        background: '#252525',
        color: '#AAAAAA',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '.9rem',
        padding: '25px',
        bottom: '0',
        // position: 'fixed',
        width: '100vw',
    }
  return (
    <footer style={styles}>
        <p className="footer--text">Ⓒ 2022 #VANLIFE</p>
    </footer>
  )
}

export default Footer