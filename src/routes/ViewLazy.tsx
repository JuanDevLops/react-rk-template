import { Form ,useParams,useSearchParams} from "react-router-dom";
import React from "react";


export const ComponentLazy = function ViewLazy() {
  const { Id  } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const test = searchParams.get("test");
  
return (
  <div>
    {Id}{test}
  </div>
);
}

export default {ComponentLazy};