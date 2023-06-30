import React from "react";

function Crypto({crypto}) {

    function handleSubmit(e)
    {
        e.preventDefault()
    }


  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{crypto.name}</h5>
          <p className="card-text">{crypto.amount}:......{crypto.price}   
          ---------------{crypto.amount*crypto.price}
          
          </p>
          <form onSubmit={handleSubmit}>
            <input type="number" id="value" min="0" />
            <button type="submit" id="buy">Buy</button>
            <button type="submit" id="Sell">Sell</button>

        </form>
        </div>
      </div>
    </div>
  );
}
export default Crypto;