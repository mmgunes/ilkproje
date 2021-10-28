/*
import React from "react";

const Kollapse = ()=>{
    return(
        <div>
                Buraya kodları yaz
        </div>
    )
}

export default Kollapse; 
*/

import React from "react";

const Kollapse = (props) => {
   // console.log(props)
    return (
        <div>
            <a className="btn btn-primary" data-bs-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls={props.href}>
                Link with href
            </a>

            <div className="collapse" id={props.href}>
                <div className="card card-body">
                    {props.children}
  {/* props ta Kollapse componenti(ana parent) children  da Kart componenti var */}
                </div>
            </div>
        </div>
    )
}

export default Kollapse;