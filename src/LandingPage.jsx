import { useState } from "react";
import { AppBar } from "./AppBar";

export function LandingPage(){
   const [username,setUsername] = useState("");
   return(
   <div>
      <AppBar username={username}></AppBar>
   </div>
 );
}