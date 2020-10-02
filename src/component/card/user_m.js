import React from "react"

function UserCardMedium(props) {
    
    return(
        <div className="github-profile">
            <img src={props.avatar_url} className="img-m"/>
            <div className="info">
                <div className="name">{props.name}</div>
                <div className="card-m-details">{props.login}</div>
            </div>
        </div>
    );
}

export default UserCardMedium;