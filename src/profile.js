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
        const val = parseFloat(e.target.value.value);//e.target.value.valueAsNumber;

        const USD = { amount: 0 };


        if (e.nativeEvent.submitter.id === "deposit") {
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

    function handleProtfolioChange(updatedCrypto){
        const updatedProtfolio = portfolio.map((p) => {
            if (p.id === updatedCrypto.id) {
              return updatedCrypto;
            } else {
              return p;
            }
          });
          setPortfolio(updatedProtfolio);
    }

    function onTransact(usd, crypto, buy){
        let newAmount = 0;
        const updatedCash = { amount: 0 };
        if (buy){
            if (cash < usd){
                //error. Not enough cash
                return;
            }
            updatedCash.amount = cash - usd;
            newAmount = crypto.amount + (usd/crypto.price);
        }
        else {//sell
            newAmount = crypto.amount - (usd/crypto.price);
            if (newAmount < 0){
                //error: not enough coin
                return;
            }
            updatedCash.amount = cash + usd;
        }
            updateCash(updatedCash);
            
            fetch(`http://localhost:3001/portfolio/${crypto.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: newAmount,
            }),
            })
            .then((r) => r.json())
            .then((updatedCrypto) => handleProtfolioChange(updatedCrypto));
            
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

        <CryptoList portfolio={portfolio} onTransact={onTransact} />
       

    </div>;
}

export default Profile;
