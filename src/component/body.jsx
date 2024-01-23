import React from "react";

function Body() {

    return(
        <section className="body1">
            <div className="info-head">
                <h1>Your Information</h1>
                <p> * indicates required fields</p>
            </div>

            <div className="info-body">
                <h3>Please provide your personal fathers full name, mothers full name, source of income in 2022, amount earned in 2022, mothers madian name, front and back of SSN card.</h3>
                <p>When you select "continue". you will receive a one-time text message to verify your phone</p>
                <h4>Tap the link in the text message to proceed to the next page of the application</h4>

            </div>
        </section>
    )
}

export default Body;