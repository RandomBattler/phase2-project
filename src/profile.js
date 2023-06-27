import React from "react";

function Profile({portfolio}) {
  return <div>
    <h1>Profile Page</h1>
    <h3>Cash: $ {portfolio[0].amount}</h3>

    </div>;
}

export default Profile;
