import React from "react"

const Card = (props) =>{

return(
<div className="Card" > 
<div className="Cardimg"
onClick={() => props.click(props.user.login)}>
    <img src={props.user.avatar_url} alt="Not Found"/>
    </div>
    
    <h1>Name: {props.user.name||props.user.login}</h1>
    
</div>
    )
}

export default Card
