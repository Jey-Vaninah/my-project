import React from "react";
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/button";


const HOME_BOX_STYLE = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    alignItems: "center",
    color: "white",
};

const HOME_STYLE = {
    height: "100vh",
    width: "100%",
    backgroundImage: "url(/background.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div style={HOME_STYLE}>
            <div style={HOME_BOX_STYLE}>
                <h1 style={{fontSize:"3rem"}} >
                    Welcome to <span style={{ color: "green" }}>my project</span>{" "}
                </h1>
                <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                    <Button
                        text="Getting stared"
                        onClick={() => {
                            navigate("/increment");
                        }}
                    />
                    <Button
                        text="Github"
                        onClick={() => window.open("https://github.com/Jey-Vaninah/my-project.git")}
                    />
                </div>
            </div>
        </div>
    );
}