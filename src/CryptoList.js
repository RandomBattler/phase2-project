import React from "react";
import Crypto from "./Crypto";

function CryptoList({portfolio}) {

    return (
        <div>
            <h2>Crypto</h2>
            {
                portfolio.map((c) => (
                    <Crypto key={c.id} crypto={c} />
                ))}
        </div>
    );
}


export default CryptoList;