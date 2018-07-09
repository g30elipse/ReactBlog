import React, {Component} from 'react'
import './newpost.css'

export default class NewBlog extends Component {
    constructor(props) {
        super(props)
        this.title = ""
        this.body = ""
    }

    titleInputHandler(e) {
        this.title = e.target.value
    }

    bodyInputHandler(e) {
        this.body = e.target.value
    }

    submit(e) {
        this.props.handler(e, this.title, this.body)
        alert("Added new blog " +this.title)
    }

  render() {
    return (
      <div className="new-post">
        <h2>TITLE</h2>
        <input type="text" onChange={this.titleInputHandler.bind(this) } />
        <hr/>
        <h3>BODY</h3>
        <textarea onChange={this.bodyInputHandler.bind(this)}/>
        <br/>
        <button onClick={this.submit.bind(this)}>Post</button>
      </div>
    )
  }
}
