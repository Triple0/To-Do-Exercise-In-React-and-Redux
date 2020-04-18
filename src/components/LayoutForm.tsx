import React from 'react'
import { Divider, Grid, Image, Segment, Form, Input, Button } from 'semantic-ui-react';

export default class LayoutForm extends React.Component {


    render() {
        return (
            <Segment>
                <Grid centered>
                    <Grid.Row centered>
                        <h1>React To-Do Exercise</h1>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Form>
                            <Form.Field>
                                <label htmlFor="new-task">Enter New Task</label>
                                <Input name='new-task' type='text' />
                            </Form.Field>

                        </Form>
                    </Grid.Row>

                    <Grid.Row centered>
                        <Button color="green">Add Task</Button>
                    </Grid.Row>

                </Grid>


                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <h3 style={{color: "yellow"}}>New Tasks</h3>
                        <ul>
                            <li>
                                <Image src='/images/wireframe/short-paragraph.png' />
                            </li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column>
                        <h3 style={{color: "green"}}>Done Tasks</h3>
                        <ul>
                            <li>
                                <Image src='/images/wireframe/short-paragraph.png' />
                            </li>
                        </ul>

                    </Grid.Column>
                    <Divider vertical></Divider>
                </Grid>

                {/* <Divider vertical></Divider> */}
            </Segment>
        );
    }

}

