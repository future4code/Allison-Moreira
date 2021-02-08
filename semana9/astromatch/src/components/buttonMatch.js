import { Button } from "../styleds/profileStyleds";

export default function ButtonMatch(props) {

    const onCLickNo = () => {
      console.log("filho: ")
    // const body = {
    //   id: props.dados.id,
    //   choice: false,
    // };
  };

  const onCLickYes = () => {
    console.log("filho: ")
    // const body = {
    //   id: props.dados.id,
    //   choice: true,
    // };
  };

  return (
    <>
      <Button
        onClick={() => onCLickNo(this)}
        border="1px solid red"
        color="red"
        colorHover="white"
        bgHover="red"
      >
        X
      </Button>
      <Button
        onClick={() => onCLickYes(this)}
        border="1px solid green"
        color="green"
        colorHover="white"
        bgHover="green"
      >
        ♥️
      </Button>
    </>
  );
}
  // const handleClickNo = (event) => {
  //   console.log(props.onCLickNo); 
  // };

  // const handleClickYes = (event) => {
  //   console.log(props.onCLickYes);
  // }; 