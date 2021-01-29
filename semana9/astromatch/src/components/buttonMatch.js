import { Button } from "../styleds/profileStyleds";

export default function ButtonMatch(props) {

    const handleClick = (event) => {
        event.preventDefault()
        props.sendDados()
        console.log("BUTTON: ", props.sendDados)
    }

  return (
    <>
      <Button 
      border="1px solid red" color="red" colorHover="white" bgHover="red">
        X
      </Button>
      <Button 
            sendDados={props.sendDados} onClick={handleClick}
            border="1px solid green" color="green" colorHover="white" bgHover="green">
        ♥️
      </Button>
    </>
  );
}
