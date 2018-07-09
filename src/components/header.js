import React from 'react'

export default (props) => {

  // console.log(props)
  return (
    <header style={{
        textAlign: 'center',
        backgroundColor: '#fd0',
        padding: '20px 0px',
        color: '#fff',
        boxShadow: '1px 1px 6px #aaa'
    }}>

        <h1>{props.children}</h1>
    
    </header>

  )
}
