import axios from "axios";
import { useEffect, useState } from "react";

export function useGetRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
        .get(url)
        .then((res) => {
            // console.log("REQUEST ID TRIPS", res.data.trips)
            // console.log("REQUEST DATA", res.data)
            setData(res.data);
        });
    }, [url]);

    return data
}
