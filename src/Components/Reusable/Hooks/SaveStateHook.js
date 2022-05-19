import {useRef, useState} from "react"

export default function useAsyncReference(value) 
{   
   const ref = useRef(value);   
   const [, forceRender] = useState(false);    
   const updateState = (newState) => 
   {     
      ref.current = newState;     
      forceRender(s => !s);   
   }    
return [ref, updateState]; 
}