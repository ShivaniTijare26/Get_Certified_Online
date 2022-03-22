import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Button,ButtonToolbar } from 'react-bootstrap';

//import {ViewCourseDetail} from './ViewCourseDetail'
export class MyCoursesPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={deps:[]}
    }
    refreshList()
    {
        //fetch(process.env.REACT_APP_API+'course')
        fetch('https://gco-apinew.azurewebsites.net/api/Admin/ViewAllCourse')
       // fetch('http://localhost:10434/swagger')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data})
        });
    }

    componentDidMount()
    {
        this.refreshList();
    }

    componentDidUpdate()
    {
        this.refreshList();
    }
 
    render()
    {
        // const { deps,  detid, couid, vlink, uploaddt, modifieddt, stat } = this.state;

        const {deps}=this.state;
       // let viewModalClose=()=>this.setState({viewModalShow:false});

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
                            {/* <td><ButtonToolbar>
                            <Button className="mr-2 mb-2" variant="info"
                                            onClick={() => this.setState({
                                                viewModalShow: true,
                                                couid: cou.courseId, vlink: cou.videoLink, uploaddt: cou.uploadedDate, modifieddt: cou.modifiedDate,stat:cou.status

                                            })}>
                                            View
                                        </Button>
                            </ButtonToolbar></td>    */}
                                                              

                            
                        </tr>)}
                        
                </tbody>
            </Table>
            {/* <ButtonToolbar>
                
               

                <ViewCourseDetail show={this.state.viewModalShow}
                onHide={viewModalClose}/>
            </ButtonToolbar> */}
         </div>
    )
    }


}
