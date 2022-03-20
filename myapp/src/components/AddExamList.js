import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddExamList extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        //fetch(process.env.REACT_APP_API+'course'
        fetch('https://localhost:5000/api/Admin/AddExamToExamlist',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                //'Content-Type':'application/json',
                'Content-type': 'application/json; charset=UTF-8',
                'access-control-allow-origin':'*',
                //'Access-Control-Allow-Headers':'*'
                //'Access-Control-Allow-Headers':
                 //'Origin, X-Requested-With, Accept'
                 //"Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, X-Requested-With,Content-Type, Accept'",
            },
           // mode: 'no-cors',

            body:JSON.stringify({
                //courseId:null,
               // courseId:event.target.courseId.value,
               examDate:event.target.examDate.value,
                courseName:event.target.courseName.value,
                
                duration:event.target.duration.value,
                
                // createdOn:'null',
                // modifiedOn:'null'
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
            Add Exam
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="examDate">
                        <Form.Label>ExamDate</Form.Label>
                        <Form.Control type="text" name="examDate" required 
                        placeholder="examDate"/>
                    </Form.Group>
                    <Form.Group controlId="courseName">
                        <Form.Label>CourseName</Form.Label>
                        <Form.Control type="text" name="courseName" required 
                        placeholder="courseName"/>
                    </Form.Group>
                    
                    <Form.Group controlId="duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" name="duration" required 
                        placeholder="duration"/>
                    </Form.Group>
                   
                   
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Exam
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