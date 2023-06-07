import React from "react";
import "./Style.css";

function Shimmer() {
  return (
<div className="restaurentCardContainer">
    {Array(10).fill("").map(e=><div className="Shimmercard"></div>)}
</div>

  )
}


export default Shimmer;
