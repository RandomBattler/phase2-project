import React from "react";
import Crypto from "./Crypto";

function CryptoList({portfolio, onTransact}) {

    return (
        <div>
            <h2>Crypto</h2>
            {
                portfolio.map((c) => (
                    <Crypto key={c.id} crypto={c} onTransact={onTransact} />
                ))}
        </div>
    );
}


export default CryptoList;