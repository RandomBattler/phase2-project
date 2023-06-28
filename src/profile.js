import React, {useState, useEffect} from "react";
import Crypto from "./Crypto";

function Profile() {
    const [cash, setCash] = useState();
    const [portfolio, setPortfolio] = useState([]);
    const [value, setValue] = useState("");

    
    useEffect(() => {
        fetch(" http://localhost:3001/cash")
          .then((r) => r.json())
          .then((s) => setCash(s.amount));
      }, []);

    useEffect(() => {
      fetch(" http://localhost:3001/portfolio")
        .then((r) => r.json())
        .then((s) => setPortfolio(s));
    }, []);

    function updateBalance(USD){
            fetch(" http://localhost:3001/cash",{
                method:'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(USD)
            })
              .then((r) => r.json())
              .then((s) => setCash(s.amount));
    }

    function handleSubmit(e) {
        e.preventDefault()
        const val = e.target.value.valueAsNumber;
        const USD = {amount: 0};
       
        
        if(e.nativeEvent.submitter.id == "deposit"){
            USD.amount = cash + val
            
            updateBalance(USD);
        }
        else{
            if (val > cash){
                //add error message
                return;
            }
            USD.amount = cash - val
            updateBalance(USD);
        }


    }

  return <div>
    <h1>Profile Page</h1>
    <form onSubmit={handleSubmit}>
    <h3>Cash: $ {cash}</h3>
    <input type="number"  id="value" min="0" value={value}
     onChange={(e) => setValue(e.target.value)} />
     <button type="submit" id="deposit">Deposit</button>
     <button type="submit" id="withdraw">Withdraw</button>
    
    </form>
    

    <h2>Crypto</h2>
      {
        portfolio.map((c) => (
          <Crypto key={c.id} crypto={c}  />
        ))}

    </div>;
}

export default Profile;
