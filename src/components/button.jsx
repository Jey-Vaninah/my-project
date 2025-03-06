const BUTTON_STYLE = {
    background: "green",
    color: "white",
    border: "none",
    padding: 5,
    borderRadius: 4,
    cursor: "pointer",
    width:"10vw",
    
}

export const Button = ({ text, onClick }) =>{
    return(
        <button style={BUTTON_STYLE} onClick={onClick} >{text}</button>
    )
}