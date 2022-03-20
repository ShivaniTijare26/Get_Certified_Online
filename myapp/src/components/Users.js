import React,{Component} from 'react';
import {Table} from 'react-bootstrap'
export class Users extends Component
{
    constructor(props){
        super(props);
        this.state={deps:[]}
    }
    refreshList(){
        //fetch(process.env.REACT_APP_API+'course')
        fetch('https://localhost:5000/api/Admin/ViewAllUsers')
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
                    <th>RegId</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>EmailId</th>
                    <th>ContactNo</th>
                    <th>Dob</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {deps.map(cou=>
                        <tr key={cou.regId}>
                            <td>{cou.regId}</td>
                            <td>{cou.firstName}</td>
                            <td>{cou.lastName}</td>
                            <td>{cou.emailId}</td>
                            <td>{cou.contactNo}</td>
                            <td>{cou.dob}</td>
                            
                        </tr>)}
                        
                </tbody>
            </Table>
         </div>
    )
    }


}