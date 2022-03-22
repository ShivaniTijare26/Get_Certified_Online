import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddExamList } from './AddExamList';
import { EditExamList } from './EditExamList';


export class ExamList extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false, editModalShow: false }
    }
    refreshList() {
        //fetch(process.env.REACT_APP_API+'course')
        fetch('https://gco-apinew.azurewebsites.net/api/Admin/ViewAllExams')
            // fetch('http://localhost:10434/swagger')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data })
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    deleteExam(exaid){
        if(window.confirm('Are you sure?')){
            fetch('https://gco-apinew.azurewebsites.net/api/Admin/DeleteExamById/'+exaid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render() {
        const { deps, exid, exdate, couname, durat } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ExamId</th>
                            <th>ExamDate</th>
                            <th>CourseName</th>
                            <th>Duration</th>
                            
                            <th>options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(cou =>
                            <tr key={cou.examId}>
                                <td>{cou.examId}</td>
                                <td>{cou.examDate}</td>
                                <td>{cou.courseName}</td>
                                <td>{cou.duration}</td>
                                
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                exdate:cou.examDate, couname: cou.courseName, durat: cou.duration 
                                            })}>
                                            Edit
                                        </Button>
                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteExam(cou.examId)}>
                                            Delete
                                        </Button>


                                        <EditExamList show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            //exid={exid}
                                            exdate={exdate}
                                            couname={couname}                                            
                                            durat={durat}
                                             />

                                    </ButtonToolbar>

                                </td>
                            </tr>)}

                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>Add Exam</Button>

                    <AddExamList show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>

            </div>
        )
    }




}