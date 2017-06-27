import React, {Component} from 'react';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class ToDo extends Component{

    constructor(){
        super();
        this.state = {
            todos: [],
            inputValue: ""
        }
    }

    addToDo = () => {
        if(this.state.inputValue.length > 0){
        this.setState({todos: [...this.state.todos, this.state.inputValue]});
        }else{
            alert("Your ToDo field is empty");
        }
        this.setState({inputValue: ""});
    }

    changeValue = (event) => {
        this.setState({inputValue: event.target.value});
    }

    deleteToDo = (event) => {

        let index = event.target.id;
        let unusedToDo = [];

        
    }

    render(){

        let addTo = this.state.todos.map((item, index) => {
            return (
                    <TableRow key = {index} className = "trow" >
                        <TableRowColumn>{item}</TableRowColumn>
                        <TableRowColumn>
                            <RaisedButton label="Edit" primary={true} />
                        </TableRowColumn>
                        <TableRowColumn>
                            <button onClick = {this.deleteToDo} id = {index}>Delete</button>
                            {/*<div onClick = {this.deleteToDo} className = "deleteBtn" id = {index}>
                                <RaisedButton label="Delete" secondary={true} className = "deleteBtn" />
                            </div>*/}
                        </TableRowColumn>
                    </TableRow>
                    )
        })

        return(
            <MuiThemeProvider>
                <div>
                    <form>
                        <TextField hintText="Add Your ToDo" ref = "newToDoValue" value = {this.state.inputValue} onChange = {this.changeValue} className = "inpStyle"/>
                        <FloatingActionButton mini={true} onClick = {this.addToDo}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </form>
                    <Table className = "table" multiSelectable = {true}>
                        <TableBody className = "tbody">
                            {addTo}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        )
    }
}