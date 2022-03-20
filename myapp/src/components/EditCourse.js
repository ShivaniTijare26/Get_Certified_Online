import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditCourse extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        //fetch(process.env.REACT_APP_API+'course'
        fetch('https://localhost:5000/api/Admin/EditCourse',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //CourseId:null,
                courseId:event.target.courseId.value,
                courseName:event.target.courseName.value,
                description:event.target.description.value,
                duration:event.target.duration.value,
                price:event.target.price.value,
                courseType:event.target.courseType.value,
                status:event.target.status.value
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
            Edit Course
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="courseId">
                        <Form.Label>CourseId</Form.Label>
                        <Form.Control type="text" name="courseId" required 
                        disabled
                        defaultValue={this.props.couid}
                        placeholder="courseId"/>
                    </Form.Group>
                    <Form.Group controlId="courseName">
                        <Form.Label>CourseName</Form.Label>
                        <Form.Control type="text" name="courseName" required 
                        defaultValue={this.props.couname}
                        placeholder="courseName"/>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" required 
                        defaultValue={this.props.descript}
                        placeholder="description"/>
                    </Form.Group>
                    <Form.Group controlId="duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" name="duration" required 
                        defaultValue={this.props.durat}
                        placeholder="duration"/>
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price" required 
                        defaultValue={this.props.pri}
                        placeholder="price"/>
                    </Form.Group>
                    <Form.Group controlId="courseType">
                        <Form.Label>CourseType</Form.Label>
                        <Form.Control type="text" name="courseType" required 
                        defaultValue={this.props.coursetype}
                        placeholder="courseType"/>
                    </Form.Group>
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" required 
                        defaultValue={this.props.status}
                        placeholder="status"/>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Edit Course
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