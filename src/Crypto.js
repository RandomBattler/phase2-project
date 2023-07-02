import React from "react";

function Crypto({crypto, onTransact, prices}) {



    function handleSubmit(e)
    {
        e.preventDefault()
//check for valid entry
        const usd = parseFloat(e.target.value.value);
        onTransact(usd, crypto, e.nativeEvent.submitter.id === "buy");
    }


  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{crypto.name}</h3>
          <p className="card-text">{crypto.amount}:......{prices[crypto.name].usd}   
          ---------------{crypto.amount*crypto.price}
          
          </p>
          <form onSubmit={handleSubmit}>
            <input type="text" id="value" />
            <button type="submit" id="buy">Buy</button>
            <button type="submit" id="Sell">Sell</button>

        </form>
        </div>
      </div>
    </div>
  );
}
export default Crypto;