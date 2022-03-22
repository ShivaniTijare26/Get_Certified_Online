import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Button,ButtonToolbar } from 'react-bootstrap';
import {AddCourseDetail}    from './AddCourseDetail';
import { EditCourseDetail } from './EditCourseDetail';

export class CourseDetail extends Component
{
    constructor(props){
        super(props);
        this.state={deps:[],addModalShow:false}
    }
    refreshList(){
        //fetch(process.env.REACT_APP_API+'course')
        fetch('https://gco-apinew.azurewebsites.net/api/Admin/ViewAllCourseDetails')
       // fetch('http://localhost:10434/swagger')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data})
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    deleteCou(detid){
        if(window.confirm('Are you sure?')){
            fetch('https://gco-apinew.azurewebsites.net/api/Admin/DeleteCourseDetailById/'+detid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        //const {deps}=this.state;
        const { deps, detid, couid, vlink, uploaddt, modifieddt, stat } = this.state;

        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose = () => this.setState({ editModalShow: false });


    return(
         <div >
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>DetailsId</th>
                    <th>CourseId</th>
                    <th>VideoLink</th>
                    <th>UploadedDate</th>
                    <th>ModifiedDate</th>
                    
                    <th>Status</th>
                    <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(cou=>
                        <tr key={cou.detailsId}>
                            <td>{cou.detailsId}</td>
                            <td>{cou.courseId}</td>
                            <td>{cou.videoLink}</td>
                            <td>{cou.uploadedDate}</td>
                            <td>{cou.modifiedDate}</td>
                            
                            <td>{cou.status}</td>
                            <td><ButtonToolbar>
                                        <Button className="mr-2 mb-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                detid:cou.detailsId,couid: cou.courseId, vlink: cou.videoLink, uploaddt: cou.uploadedDate, modifieddt: cou.modifiedDate,stat:cou.status
                                            })}>
                                            Edit
                                        </Button>
                                        <Button className="mr-2 mb-2" variant="danger"
                                            onClick={() => this.deleteCou(cou.detailsId)}>
                                            Delete
                                        </Button>



                                        <EditCourseDetail show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            detid={detid}
                                            couid={couid}
                                            vlink={vlink}
                                            uploaddt={uploaddt}
                                            modifieddt={modifieddt}                                           
                                            stat={stat} />

                                    </ButtonToolbar>
</td>
                        </tr>)}
                        
                </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant='primary'
                onClick={()=>this.setState({addModalShow:true})}>Add CourseDetails</Button>

                <AddCourseDetail show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
         </div>
    )
    }
}