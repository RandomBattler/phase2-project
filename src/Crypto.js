import React from "react";

function Stock({crypto}) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{crypto.name}</h5>
          <p className="card-text">{crypto.amount}:......{crypto.price}   
          ---------------{crypto.amount*crypto.price}
          
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;