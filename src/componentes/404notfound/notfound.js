
import React from "react";
import "./notfound.css"

const notfound = () => {
    return(
        <div className="notfound">
            <header className="header" >
                <h3>404 NOT FOUND</h3>
            </header>
            <body className="notfound_body">
                <div>
                    <img alt="imgnotfound" src={require("./img/Scarecrow.png")} />
                </div>
                <div className="notfound_textContent">
                    <h1>I have bad news for you.</h1>
                    <div className="p_contener">
                        <p> 
                            The page you are looking for be removed or is temporarily unavailable
                        </p>
                    </div>
                    <button>BACK TO HOMEPAGE</button>
                </div>
            </body>

        </div>
    );

}
export default notfound;