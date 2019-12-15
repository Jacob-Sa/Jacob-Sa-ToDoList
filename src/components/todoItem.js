import React, { Component } from 'react'

export class todoItem extends Component {
    render() {
        return (
            <div>
                {this.props.todo.title}
            </div>
        )
    }
}

export default todoItem
