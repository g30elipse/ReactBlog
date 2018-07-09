import React, {Component} from 'react'
import './newpost.css'

export default class NewBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        }
    }

    titleInputHandler(e) {
        this.setState({title: e.target.value})
    }

    bodyInputHandler(e) {
        this.setState({body: e.target.value})
    }

    submit(e) {
        this.props.handler(this.state.title, this.state.body)
        alert("Added new blog " +this.state.title)
        this.setState({
            title: "",
            body: ""
        })
    }

  render() {
    return (
      <div className="new-post">
        <h2>TITLE</h2>
        <input type="text" value={this.state.title} onChange={this.titleInputHandler.bind(this) } />
        <hr/>
        <h3>BODY</h3>
        <textarea value={this.state.body} onChange={this.bodyInputHandler.bind(this)}/>
        <br/>
        <button onClick={this.submit.bind(this)}>Post</button>
      </div>
    )
  }
}
