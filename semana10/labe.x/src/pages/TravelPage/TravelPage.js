import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function TravelPage() {

  const history = useHistory()

  useEffect(()=>{
    const token = window.localStorage.getItem('token')

    if ( token === null) {
      history.push('/login')
      console.log("token null")
    } else {
      history.push("/viagens")
    }
  }, [history])

    return (
      <div>
        <h1>Viagens</h1>
      </div>
    );
  }
  
  export default TravelPage;
  