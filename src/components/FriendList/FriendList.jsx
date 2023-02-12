import PropTypes from "prop-types";
import {FriendListItem} from './FriendListItem'

export const FriendList = (({friends}) => {
    
    return (
        <ul className="friend-list">
            {friends.map((friend) => {
                
                return ( 
               
                <FriendListItem
                friend = {friend}
                key= {friend.id}
                />
            )
            })}
        </ul>
    )
})

FriendList.propTypes = {
    friends : PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }))
}