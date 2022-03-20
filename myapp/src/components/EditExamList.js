import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditExamList extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        //fetch(process.env.REACT_APP_API+'course'
        fetch('https://localhost:5000/api/Admin/EditExam',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //CourseId:null,
                //examid:event.target.examid.value,
                examDate:event.target.examDate.value,
                courseName:event.target.courseName.value,
               
                duration:event.target.duration.value
               
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed v');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Exam
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                {/* <Form.Group controlId="examId">
                        <Form.Label>ExamId</Form.Label>
                        <Form.Control type="text" name="examId" required 
                        disabled
                        defaultValue={this.props.exid}
                        placeholder="examId"/>
                    </Form.Group> */}
                    <Form.Group controlId="examDate">
                        <Form.Label>ExamDate</Form.Label>
                        <Form.Control type="text" name="examDate" required 
                        defaultValue={this.props.exdate}
                        placeholder="examDate"/>
                    </Form.Group>
                    <Form.Group controlId="courseName">
                        <Form.Label>CourseName</Form.Label>
                        <Form.Control type="text" name="courseName" required 
                        defaultValue={this.props.couname}
                        placeholder="courseName"/>
                    </Form.Group>
                    
                    <Form.Group controlId="duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" name="duration" required 
                        defaultValue={this.props.durat}
                        placeholder="duration"/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Edit ExamList
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}