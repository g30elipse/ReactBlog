import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//COMPONENTS
import Home from './home'
import Admin from './admin'
import Blogs from './blogs'
import NewBlog from './newBlog'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            blogs: [
                {
                    title: "Travelling",
                    body: "Laborum commodo eiusmod do irure minim excepteur et aliqua eiusmod cupidatat dolor labore. Reprehenderit Lorem id consequat aliqua anim sint ad adipisicing proident. Voluptate culpa commodo fugiat nulla ullamco dolore magna qui excepteur Lorem in dolore. Irure aliqua anim tempor occaecat aliquip occaecat. Fugiat culpa exercitation mollit officia qui ut id tempor exercitation. Deserunt ipsum do laboris mollit ea aute aliquip esse eu laborum reprehenderit ullamco magna id. Laborum aliqua velit pariatur fugiat dolor."
                },
                {
                    title: "A Dream",
                    body: "Elit ex laborum ipsum eiusmod proident elit consequat non laborum laboris. Nostrud exercitation aliqua magna pariatur eiusmod esse ad minim Lorem. Incididunt adipisicing anim veniam aute mollit deserunt veniam. Quis proident anim exercitation tempor laboris dolor qui."
                }
            ]
        }
    }

    // Utility for managing a Blog Post
    blogHandler(index, action) {
        // Deleting a blog post
        switch (action) {
            case 'DEL':
                this.setState({
                    blogs: this.state.blogs.filter((blog, i) => (
                        i !== index
                    ))
                })
                break
            case 'EDIT':
                // TODO
                console.log(index)
                break
            default:
                break
        }
    }

    newBlog(e, title, body) {
        if (title && body) {
            // let temp = this.state.blogs
            // temp.push({ title, body })
            // this.setState({
            //     blogs: temp
            // })
            const post = {title, body}
            this.setState({
                blogs: this.state.blogs.concat(post)
            })
        } else {
            alert("Empty field(s)")
        }
    }



    render() {
        return (
            <Router>
                <div>

                    <Route exact path='/' render={() => (
                        <Home data={this.state.blogs} />
                    )} />

                    <Route path='/admin' render={(index) => (
                        <Admin data={this.state.blogs}
                            handler={this.blogHandler.bind(this)}
                            newBlogHandler={this.newBlog.bind(this)} />
                    )} />

                    <Route path="/blogs" render={() => (
                        <Blogs data={this.state.blogs} />
                    )} />
                    <Route path="/new" render={() => (
                        <NewBlog handler={this.newBlog.bind(this)} />
                    )} />

                </div>
            </Router>
        )
    }
}
