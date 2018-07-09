import React from 'react'
//COMPONENTS
import Header from './header'
import Blogs from './blogs'


export default (props) => {
    const title = "Blogs and Blogs"
  return (
    <div>
      <Header>{title}</Header>
      <Blogs data={props.data}/>
    </div>
  )
}
