import React , {Component} from 'react'

export default class TodoDetails extends Component{
    render(){
        return(
            <div>
                Details Page
                {this.props.match.params.todoId}
            </div>
            )
        }
    }

