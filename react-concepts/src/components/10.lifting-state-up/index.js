import React from "react";
import Calculator from "./calculator"
import Template from "./basic";

// 1. Lifting state up: 
//      + Often, several components need to reflect the same changing data (to be in sync).
//          We recommend lifting the shared state up to their closest common ancestor.
//      + Sharing state is accomplished by moving it up to the closest common ancestor of the components that need it.
//      + Instead of trying to sync the state between different components, you should rely on the top-down data flow.

function LiftingStateUp() {
    return (
        <>
            <Calculator />
            <Template />
        </>
    );
}

export default LiftingStateUp;