import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { Grid, Form, Input, Button } from 'semantic-ui-react';
import { deleteTaskFromList, addTaskToList } from '../store/layoutForm/action';
import { Task } from '../store/layoutForm/types';


export interface ILayoutFormProps {
    deleteTaskFromList: typeof deleteTaskFromList,
    addTaskToList: typeof addTaskToList,
    tasks: Task[]
}

interface IState {
    input: string
}


export class LayoutForm extends React.Component<ILayoutFormProps, IState> {
constructor(props: ILayoutFormProps) {
    super(props);
    this.state = {
        input: ""
    }

}

    generateID(): number {
        return this.props.tasks.length + 1;
    }

    
    newTask = (event: any) => {
        event.preventDefault();
        
        const newTask: HTMLInputElement | null = document.querySelector('[name="new-task"]');
        let newTaskValue = "";
        if (newTask !== null) {
            newTaskValue = newTask.value;
        }
        // Add new item to tasks if not null or empty
        if (newTaskValue !== "") {
            this.props.addTaskToList({
                id: this.generateID(),
                name: newTaskValue
            });
        }
        

    }

    deleteTask = (id: number) => {
        // Remove this tasks by the ID!
        this.props.deleteTaskFromList(id);

    }

    render() {
        return (

            <Grid centered>
                <Grid.Row centered>
                    <h1>React To-Do Exercise</h1>                    
                </Grid.Row>
                <Grid.Row centered>
                    <Form onSubmit={this.newTask}>
                        <Form.Field>
                            <label htmlFor="new-task">Enter New Task</label>
                            <Input name="new-task" type='text' placeholder='Enter New Task Here' defaultValue={this.state.input} />
                        </Form.Field>
                        <Input type="submit" value="Add Task" />
                    </Form>
                </Grid.Row>
                <Grid.Row centered>
                    <ul className = "listing">
                        <li><h3>Below are Your To Dos:</h3></li>
                        <li><h5><em>tick off (only appears when you hover at the end of each task) each task to remove from list</em></h5></li>
                    </ul>                    
                </Grid.Row>
                <Grid.Row centered>
                    <ul>
                        {(this.props.tasks.length > 0) ?
                            this.props.tasks.map((element) => (<li>
                                {element.name}<Button basic inverted color='green' size='mini' onClick={event => { this.deleteTask(element.id) }}>&#10004;</Button></li>)) :

                            <li>No Task to To Do/Remove</li>
                        }

                    </ul>
                </Grid.Row>
            </Grid>
        );
    }

}

const mapStateToProps = (state: RootState) => {
    return {
        tasks: state.task.tasks
    }
}

export default connect(
    mapStateToProps,
    { addTaskToList, deleteTaskFromList }
)(LayoutForm);

