import React, {Component} from 'react';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class ToDo extends Component{

    constructor(){
        super();
        this.state = {
            todos: [],
            inputValue: ""
        }
    }

    addToDo = () => {
        if(this.state.inputValue.length) {
            this.setState({todos: [...this.state.todos, this.state.inputValue]});
        }
        else{
            alert('Field is empty');
        }
        this.setState({inputValue: ""});
    };

    changeValue = (event) => {
        this.setState({inputValue: event.target.value});
    };

    render(){

        let addTo = this.state.todos.map((item, index) => {
            return (
                <tr key = {index}>
                    <td><input type = "checkbox"/></td>
                    <td>{item}</td>
                </tr>
            );
        });

        return(
            <MuiThemeProvider>
                <div>
                    <form>
                        <TextField hintText="Add Your ToDo" ref = "newToDoValue" value = {this.state.inputValue} onChange = {this.changeValue} className = "inpStyle"/>
                        <FloatingActionButton mini={true} onClick = {this.addToDo}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </form>
                    <table>
                        <tbody>
                            {addTo}
                        </tbody>
                    </table>
                </div>
            </MuiThemeProvider>
        )
    }
}