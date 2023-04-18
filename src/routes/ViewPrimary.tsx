import { Form ,useParams,useSearchParams} from "react-router-dom";
import React from "react";

export default function ViewPrimary() {
    const { Id  } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    const test = searchParams.get("test");
    
  return (
    <div>
      {Id}{test}
    </div>
  );


}