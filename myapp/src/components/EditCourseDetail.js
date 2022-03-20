import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditCourseDetail extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        //fetch(process.env.REACT_APP_API+'course'
        fetch('https://localhost:5000/api/Admin/EditCourseDetail',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //CourseId:null,
                detailsId:event.target.detailsId.value,
                courseId:event.target.courseId.value,
                videoLink:event.target.videoLink.value,
                uploadedDate:event.target.uploadedDate.value,
                modifiedDate:event.target.modifiedDate.value,
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
            Edit Course Detail
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="detailsid">
                        <Form.Label>DetailsId</Form.Label>
                        <Form.Control type="text" name="detailsId" required 
                        disabled
                        defaultValue={this.props.detid}
                        placeholder="detailsId"/>
                    </Form.Group>
                    <Form.Group controlId="courseId">
                        <Form.Label>CourseId</Form.Label>
                        <Form.Control type="text" name="courseId" required 
                        defaultValue={this.props.couid}
                        placeholder="courseId"/>
                    </Form.Group>
                    <Form.Group controlId="videoLink">
                        <Form.Label>VideoLink</Form.Label>
                        <Form.Control type="text" name="videoLink" required 
                        defaultValue={this.props.vlink}
                        placeholder="videoLink"/>
                    </Form.Group>
                    <Form.Group controlId="uploadedDate">
                        <Form.Label>UploadedDate</Form.Label>
                        <Form.Control type="text" name="uploadedDate" required 
                        defaultValue={this.props.uploaddt}
                        placeholder="uploadedDate"/>
                    </Form.Group>
                    <Form.Group controlId="modifiedDate">
                        <Form.Label>ModifiedDate</Form.Label>
                        <Form.Control type="text" name="modifiedDate" required 
                        defaultValue={this.props.modifieddt}
                        placeholder="modifiedDate"/>
                    </Form.Group>
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" required 
                        defaultValue={this.props.stat}
                        placeholder="status"/>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Edit CourseDetails
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