import React, { useState, useEffect } from "react";
import Crypto from "./Crypto";
import CryptoList from "./CryptoList";

function Profile() {
    const [cash, setCash] = useState();
    const [portfolio, setPortfolio] = useState([]);


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

    function updateCash(USD) {
        fetch(" http://localhost:3001/cash", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(USD)
        })
            .then((r) => r.json())
            .then((s) => setCash(s.amount));
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(parseFloat(e.target.value.value));
        const val = parseFloat(e.target.value.value);//e.target.value.valueAsNumber;

        console.log(val);
        const USD = { amount: 0 };


        if (e.nativeEvent.submitter.id == "deposit") {
            USD.amount = cash + val

            updateCash(USD);
        }
        else {
            if (val > cash) {
                //add error message
                return;
            }
            USD.amount = cash - val
            updateCash(USD);
        }
    }

    //update balance
    let balance = cash;
    portfolio.forEach(c => balance += (c.amount * c.price));

    return <div>
        <h1>Profile Page</h1>
        <h2>Balance: ${balance}</h2>
        <form onSubmit={handleSubmit}>
            <h3>Cash: $ {cash}</h3>
            <input type="text" id="value" />
            <button type="submit" id="deposit">Deposit</button>
            <button type="submit" id="withdraw">Withdraw</button>

        </form>

        <CryptoList portfolio={portfolio} />
       

    </div>;
}

export default Profile;
