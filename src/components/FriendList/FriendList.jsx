import PropTypes from "prop-types";
import {FriendListItem} from './FriendListItem'
import {Section, FriendsList} from '../FriendList/FriendList.styled'

export const FriendList = (({friends}) => {
    
    return (
        <Section>
        <FriendsList className="friend-list">
            {friends.map((friend) => {
                
                return ( 
               
                <FriendListItem
                friend = {friend}
                key= {friend.id}
                />
            )
            })}
        </FriendsList>
        </Section>
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