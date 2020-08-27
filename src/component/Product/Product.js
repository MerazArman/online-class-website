import React from 'react';
import './Product.css'

const Product = (props) => {
    //console.log(props)
    const {name , img , instructor,price} = props.productItem;
    return (
        
        <div className=' card-deck product'>
               
                <div className=" container-fluid card  shadow-lg p-3 mb-5 bg-white rounded d-flex  align-items-center">
                     <img src= {img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title"> {name} </h5>
                    <p className="card-text"> {instructor} </p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                     <h4> $ {price} </h4>
                     <button className="btn btn-success " onClick = {() => props.addBtnHandler(props.productItem)}> Enroll Now</button>
                   </div>
                </div>

                <div className="card  shadow-lg p-3 mb-5 bg-white rounded d-flex  align-items-center">
                     <img src= {img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title"> {name} </h5>
                    <p className="card-text"> {instructor} </p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                     <h4> $ {price} </h4>
                     <button className="btn btn-success " onClick = {() => props.addBtnHandler(props.productItem)}> Enroll Now</button>
                   </div>
                </div>

                <div className="card  shadow-lg p-3 mb-5 bg-white rounded d-flex  align-items-center">
                     <img src= {img} className="card-img-top img-fluid" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title"> {name} </h5>
                    <p className="card-text"> {instructor} </p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                     <h4> $ {price} </h4>
                     <button className="btn btn-success " onClick = {() => props.addBtnHandler(props.productItem)}> Enroll Now</button>
                   </div>
                </div>
               
        </div>
       
    );
};

export default Product;