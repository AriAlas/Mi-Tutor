//This should be used for exporting stateless components

import React from "./node_modules/react";


export const FormInput = (props) =>(
<div>
    <h1>{props.name}</h1>
    <h2>{props.city ? props.city : "No city defined"}</h2>
    </div>
)




// let names = ["Justin", "Alexa","Scott"]
// let user=names.filter(name => name === "Justin");
// console.log(user);