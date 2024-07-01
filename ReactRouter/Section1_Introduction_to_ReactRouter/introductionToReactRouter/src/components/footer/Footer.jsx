import React from 'react'

function Footer() {
    const styles = {
        background: '#252525',
        color: '#AAAAAA',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '.9rem',
        padding: '25px'
    }
  return (
    <footer style={styles}>
        <p className="footer--text">Ⓒ 2022 #VANLIFE</p>
    </footer>
  )
}

export default Footer