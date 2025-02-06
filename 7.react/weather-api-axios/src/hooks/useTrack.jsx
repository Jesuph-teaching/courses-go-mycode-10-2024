import { useEffect, useState } from "react";

export default function useTrack() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (counter >= 10) {
      setMessage("You are going the good way");
    } else if (counter <= -10) {
      setMessage("You are going the bad way");
    }
    /*  return ()=>{
        // clean up the code
    } */
  }, [counter]);
  return {
    counter,
    setCounter,
    message,
  };
}
