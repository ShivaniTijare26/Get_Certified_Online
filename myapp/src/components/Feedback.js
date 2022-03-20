import React,{Component} from 'react';
import {Table} from 'react-bootstrap'
export class Feedback extends Component
{
    constructor(props){
        super(props);
        this.state={deps:[]}
    }
    refreshList(){
        //fetch(process.env.REACT_APP_API+'course')
        fetch('https://localhost:5000/api/Admin/ViewAllFeedback')
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
    render(){
        const {deps}=this.state;
    return(
         <div >
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>FeedbackId</th>
                    <th>RegId</th>
                    <th>feedBack1</th>
                    <th>Ratings</th>
                    <th>CourseId</th>
                    <th>FeedbackDate</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {deps.map(cou=>
                        <tr key={cou.feedbackId}>
                            <td>{cou.feedbackId}</td>
                            <td>{cou.regId}</td>
                            <td>{cou.feedBack1}</td>
                            <td>{cou.ratings}</td>
                            <td>{cou.courseId}</td>
                            <td>{cou.feedbackdate}</td>
                            
                            
                        </tr>)}
                        
                </tbody>
            </Table>
         </div>
    )
    }


}