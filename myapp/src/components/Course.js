import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Button,ButtonToolbar } from 'react-bootstrap';
import {AddCourse}    from './AddCourse';
import { EditCourse } from './EditCourse';
export class Course extends Component
{
    constructor(props){
        super(props);
        this.state={deps:[],addModalShow:false, editModalShow:false}
    }
    refreshList(){
        //fetch(process.env.REACT_APP_API+'course')
        fetch('https://localhost:5000/api/Admin/ViewAllCourse')
       // fetch('http://localhost:10434/swagger')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data})
        });
    }
    // handleSubmit(event){
    //     event.preventDefault();
    //         //fetch(process.env.REACT_APP_API+'course')
    //         fetch('http://localhost:5000/api/Admin/ViewAllCourse')
    //        // fetch('http://localhost:10434/swagger')
    //         .then(response=>response.json())
    //         .then(data=>{
    //             this.setState({deps:data})
    //         });
    //     }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    deleteCou(couid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:5000/api/Admin/DeleteCourseById/'+couid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        //const {deps}=this.state;
        const { deps, couid, couname, descript, durat, pri, coursetype,stat } = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose = () => this.setState({ editModalShow: false });


    return(
         <div >
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>CourseId</th>
                    <th>CourseName</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>CourseType</th>
                    <th>Status</th>
                    <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(cou=>
                        <tr key={cou.courseId}>
                            <td>{cou.courseId}</td>
                            <td>{cou.courseName}</td>
                            <td>{cou.description}</td>
                            <td>{cou.duration}</td>
                            <td>{cou.price}</td>
                            <td>{cou.courseType}</td>
                            <td>{cou.status}</td>
                            <td><ButtonToolbar>
                                        <Button className="mr-2 mb-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                couid: cou.courseId, couname: cou.courseName, descript: cou.description, durat: cou.duration, pri: cou.price, coursetype: cou.CourseType,stat:cou.status
                                            })}>
                                            Edit
                                        </Button>
                                        <Button className="mr-2 mb-2" variant="danger"
                                            onClick={() => this.deleteCou(cou.courseId)}>
                                            Delete
                                        </Button>



                                        <EditCourse show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            couid={couid}
                                            couname={couname}
                                            descript={descript}
                                            durat={durat}
                                            pri={pri}
                                            coursetype={coursetype}
                                            stat={stat} />

                                    </ButtonToolbar>

</td>
                        </tr>)}
                        
                </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant='primary'
                onClick={()=>this.setState({addModalShow:true})}>Add Course</Button>

                <AddCourse show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
         </div>
    )
    }
}

