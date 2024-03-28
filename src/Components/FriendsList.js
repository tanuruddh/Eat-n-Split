import React from 'react'
import Item from './Item'

const FriendsList = ({ friends, handleSelectedFriend, selectedFriend }) => {
    return (
        <>
            {
                friends.map((friend, index) => {
                    return (


                        <Item friend={friend} onSelection={handleSelectedFriend} key={index} selectedFriend={selectedFriend} />


                    )
                })
            }
        </>
    )
}

export default FriendsList
