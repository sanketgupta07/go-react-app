import React from "react"
import UserCardMedium from "./user_m"

function UserCardListMedium (params) {    
    return (
        <div>
            {/* map the array of data to user and return UserCard with spred of user */}
            {params.users.map(user => <UserCardMedium key={user.id} {...user}/>)}
        </div>
    );    
}

export default UserCardListMedium;
