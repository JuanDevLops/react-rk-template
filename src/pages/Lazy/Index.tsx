import { Form ,useParams,useSearchParams} from "react-router-dom";
import React from "react";
import MainLayout from "../../layouts/MainLayout";


export const ComponentLazy = function ViewLazy() {
  const { Id  } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const test = searchParams.get("test");
  
return (
  <MainLayout>
 <div>
    {Id}{test}
  </div>
  </MainLayout> 
);
}

export default {ComponentLazy};