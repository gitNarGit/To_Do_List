import React, {Component} from 'react';
import './style.css';

export default class ToDo extends Component{

    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    addToDo = () => {
        this.setState({todos: [...this.state.todos, this.refs.newToDoValue.value]});
    }

    render(){

        let addTo = this.state.todos.map((item, index) => {
            return (<tr key = {index}>
                        <td><input type = "checkbox"/></td>
                        <td>{item}</td>
                    </tr>);
        })

        return(
            <div>
                <input ref = "newToDoValue" className = "newToDo"/>
                <button onClick = {this.addToDo}>Add ToDo</button>
                <br />
                <table>
                    <tbody>
                        {addTo}
                    </tbody>
                </table>
            </div>
        )
    }
}