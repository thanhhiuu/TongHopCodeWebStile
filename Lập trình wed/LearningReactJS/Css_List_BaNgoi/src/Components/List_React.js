import React from 'react'
import Example from './Example'

function List_React(props) {
    return (
        <div className='container d-flex'>
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.blog}</p>
                        <a href="/" className="btn btn-primary">{props.btn}</a>
                    </div>
            </div> 
        </div>
      
    )
}

export default List_React
