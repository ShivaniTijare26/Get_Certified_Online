import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// import { Button, ButtonToolbar } from 'react-bootstrap';
// import { AddExamList } from './AddExamList';
// import { EditExamList } from './EditExamList';


export class ExamList extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [] }
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
    
    render() {
        const { deps } = this.state;
       
        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ExamId</th>
                            <th>ExamDate</th>
                            <th>CourseName</th>
                            <th>Duration</th>
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(cou =>
                            <tr key={cou.examId}>
                                <td>{cou.examId}</td>
                                <td>{cou.examDate}</td>
                                <td>{cou.courseName}</td>
                                <td>{cou.duration}</td>
                                
                               
                            </tr>)}

                    </tbody>
                </Table>
                
            </div>
        )
    }




}