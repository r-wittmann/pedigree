import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div style={{
                height: 58,
                width: "100vw",
                backgroundColor: "#8B2332",
                color: "white",
                position: "fixed",
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <div style={{display: "flex", marginLeft: "10vw", marginRight: "10vw"}}>
                    <h2>Footer</h2>
                </div>
            </div>
        )
    }
}

export default Footer;
