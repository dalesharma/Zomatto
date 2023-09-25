import React from "react";

const btn=()=>{
//  alert("if you buy this order")

}


const Products = ({ data }) => {
    return (
        <div className="image">
            <div className="row">
                {data.map(data =>
                    <div className="col-md-4 bg-white border rounded-lg p-4; bg-cover">
                        <div class="card"style={{ "width": "18rem" }}/>
                        <img class=" hover:scale-110 transition-transform duration-300 transform  
                           class="src={data.recipe.image} alt="Card image cap"/>
                        <div class="card-body" />
                        <center>
                            <h5 class="card-title mt-3 mb-4 ml-2 mr-2">{data.recipe.label}</h5>
                            <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                            {/* <p class="card-text">Prize:{(data.recipe.price)}</p> */}
                            <a href="#" class="btn btn-primary" onClick={btn}>Buy</a>
                          
                        </center>

                    </div>
                )}
            </div>
         
        </div>
    )
}
export default Products