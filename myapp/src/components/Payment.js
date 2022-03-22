import React,{Component} from 'react';
import {Table} from 'react-bootstrap'
export class Payment extends Component
{
    constructor(props){
        super(props);
        this.state={deps:[]}
    }
    refreshList(){
        //fetch(process.env.REACT_APP_API+'course')
        fetch('https://gco-apinew.azurewebsites.net/api/Admin/ViewAllCoursePayment')
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
                    <th>PaymentId</th>
                    <th>CourseId</th>
                    <th>RegId</th>
                    <th>Amount</th>
                    <th>ModeofPayment</th>
                    <th>Paiddate</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {deps.map(cou=>
                        <tr key={cou.paymentId}>
                            <td>{cou.paymentId}</td>
                            <td>{cou.courseId}</td>
                            <td>{cou.regId}</td>
                            <td>{cou.amount}</td>
                            <td>{cou.modeOfPayment}</td>
                            <td>{cou.paiddate}</td>
                            
                            
                        </tr>)}
                        
                </tbody>
            </Table>
         </div>
    )
    }




    // constructor(props){
    //     super(props);
    //     this.state={items:[],isLoaded: false,}
    // }
    

    // componentDidMount(){
    //     fetch('https://localhost:44361/api/Course')
    //     .then(res=>res.json())
    //     .then(json => {
    //         this.setState({
    //             items: json,
    //             isLoaded: true, 
    //         })
    //     }).catch((err) => {
    //         console.log(err);
    //     });
        
    // }
    // render() {

    //     const { isLoaded, items } = this.state;

    //     if (!isLoaded)
    //         return <div>Loading...</div>;

    //         return (
    //             <div className="App">
    //                 <ul>
    //                     {items.map(item => (
    //                         <li key={item.CourseId}>
    //                             Name: {item.CourseName} | Email: {item.email}
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         );
    // }
    




    // constructor(props){
    //     super(props);
    //     this.state={course:[]}
    // }
    // getCoursesList(){
    //     fetch('https://localhost:44361/api/Course')
    //     .then(response=>response.json())
    //     .then(data => {
    //         this.setState({course : data});
    //     })
    //     .catch(error =>
    //         {
    //             console.log(error);
    //         });
    // }
}
