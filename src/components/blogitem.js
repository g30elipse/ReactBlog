import React from 'react'
import './blogitem.css'

export default (props) => {

    if(props.handler) {
        
        return props.data.map((item, index) => (
            // ADMIN VIEW
            <div className="blog-item" 
                key={index} 
            >
                <div>
                    <span className="edit"
                    onClick={props.handler.bind(this, index, 'EDIT')}>EDIT</span>
                    <span className="delete" 
                        onClick={props.handler.bind(this, index, 'DEL')}>DELETE</span>
                </div>

                <h2>{item.title}</h2>

                <p>{item.body}</p>
                <hr/>    
            </div>
            
        ))
    } else {
        return props.data.map((item, index) => (
            // USER VIEW
            <div key={index} 
                className="blog-item"
            >
                <h2> {item.title}  </h2>
                <p>   {item.body}  </p>
                <hr/>
            </div>
        ))
    }
}
