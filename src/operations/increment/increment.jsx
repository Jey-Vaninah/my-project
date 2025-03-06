
import { useNavigate } from "react-router-dom"
import { Box } from "../../components/box";
import { Button } from "../../components/button";

const INCREMENT_BOX_STYLE = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,.5)",
  alignItems: "center",
  color: "white",
};

const INCREMENT_STYLE = {
  height: "100vh",
  width: "100%",
  backgroundImage: "url(/background.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};


export const Increment = () => {
  const navigate = useNavigate()
  return (
    <div style={INCREMENT_STYLE}>
      <div style={INCREMENT_BOX_STYLE}>
        <h1 style={{ fontSize: "3rem" }} > Do your increment </h1>
        <div style={{ position: "absolute", top: 30, left: 30 }}>
          <Button
            text="Back"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <Box/>
      </div>
    </div>
  )
}
