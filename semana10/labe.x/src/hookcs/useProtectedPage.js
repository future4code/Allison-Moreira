import { useEffect } from "react";
import { useHistory } from "react-router-dom";


export const useProtectedPage = (Route) => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token === null) {
            history.push("/login")
        } else {
            history.push(Route)
        }

    }, [history, Route])
};