import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
//COMPONENTS
import Blogs from './blogs'
import NewBlog from './newBlog'
import Home from './home'
import './link.css'

export default (props) => {
    return (
      <Router>
        <div>
          <Link className="link" to="/">BACK</Link>
          <Link className="link" to="/new">NEW POST</Link>
          <Link className="link" to="/blogs">BLOGS</Link>

          <Route exact path="/" render={() => (
            <Home data={props.data}/>
          )} />
          <Route path="/blogs" render={() => (
            <Blogs data={props.data} handler={props.handler}/>
          )}/>
          <Route path="/new" render={() => (
            <NewBlog handler={props.newBlogHandler}/>
          )}/>
        </div>
      </Router>
  )
}
