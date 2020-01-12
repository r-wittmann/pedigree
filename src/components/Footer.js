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
                <h2>Footer</h2>
            </div>
        )
    }
}

export default Footer;
