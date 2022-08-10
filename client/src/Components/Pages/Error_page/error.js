import React from "react";
import "./error.css";
import Navbar from "../../Static-components/Navbar/Navbar";

const error = () => {
    return (

        <div>
            <Navbar />
        
<div className="error_container"> 
<h1>
Looks like this webpage is missing or moved.
</h1>

<p>
<br></br>
<a href="/close">Go Back </a>
</p>

</div>
</div>

    );
};
export default error;