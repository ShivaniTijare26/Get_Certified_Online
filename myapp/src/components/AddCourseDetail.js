import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddCourseDetail extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        //fetch(process.env.REACT_APP_API+'course'
        fetch('https://gco-apinew.azurewebsites.net/api/Admin/AddCourseDetails',{
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
            body:JSON.stringify({
                //detailsId:null,
                // CourseId:event.target.courseId.value,
                courseId:event.target.CourseId.value,
                videoLink:event.target.videoLink.value,
                uploadDate:event.target.UploadDate.value,
                modifiedDate:event.target.ModifiedDate.value,
                status:event.target.Status.value
                
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
            Add CourseDetails
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="courseId">
                        <Form.Label>CourseId</Form.Label>
                        <Form.Control type="text" name="courseId" required 
                        placeholder="courseId"/>
                    </Form.Group>
                    <Form.Group controlId="videoLink">
                        <Form.Label>VideoLink</Form.Label>
                        <Form.Control type="text" name="videoLink" required 
                        placeholder="videoLink"/>
                    </Form.Group>
                    <Form.Group controlId="uploadedDate">
                        <Form.Label>UploadedDate</Form.Label>
                        <Form.Control type="text" name="uploadedDate" required 
                        placeholder="uploadedDate"/>
                    </Form.Group>
                    <Form.Group controlId="modifiedDate">
                        <Form.Label>ModifiedDate</Form.Label>
                        <Form.Control type="text" name="modifiedDate" required 
                        placeholder="modifiedDate"/>
                    </Form.Group>
                    
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type="text" name="status" required 
                        placeholder="status"/>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add CourseDetails
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