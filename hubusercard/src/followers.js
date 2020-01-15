import React from "react";
import Card from "./Card"

const Followers = (props)=>{



    return(
        <div className="Followers">
            {
            props.followers.map(ele=>(

                <Card user={ele} click={props.click} />
            ))

             }


        </div>
    )
}
export default Followers