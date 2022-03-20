import React, { useState } from "react";
import Categories from "../components/Categories";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Checkout from "./Checkout";

const Category=() =>{
    let history=useHistory();
    const [data,setData]=useState(Categories);
    const filterResult=(catItem)=>{
        const result=Categories.filter((curData)=>{
            return curData.category===catItem;
        });
        setData(result);
        
    }
    

    return (
        <>

            <h1 className="page-title s24 fontb c333">Categories</h1>
            <div className="container-fluid">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                    <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(Categories)}>All Courses</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Web Development')}>Web Development</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Data Science')}>Data Science</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Mobile Development')}>Mobile Development</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Programming Languages')}>Programming Languages</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Database')}>Database</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Game Development')}>Game Development</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                        {data.map((values)=>{
                            const{id,title,price,image}=values;
                            return(

                                <>
                                 <div className="col-md-4 mb-4" key={id}>
                                <div className="card" >
                                    <img src={image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p>{price}</p>
                                        <p className="card-text">Learning is a never ending process .Click on the course and Lean the Courses.</p>
                                        {/* <button className="btn btn-dark">Buy Now</button> */}
                                        <button className="btn btn-warning w-100 mb-4"onClick={()=>{history.push("/Checkout");}}>Buy Now </button>
                                        

                                    </div>
                                </div>
                            </div>
                            
                        
                                </>
                            )
                        
                        })}
                                
                            </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Category;