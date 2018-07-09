import React from 'react'
import BlogItem from './blogitem'


export default (props) => {
  return (
    <div style={{
        backgroundColor: '#ffd',
        margin: '10px 0px'
    }}>
        <BlogItem data={props.data} handler={props.handler}/>
    </div>
  )
}
