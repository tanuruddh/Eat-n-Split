import img from '../Images/alex.jpeg'

const Item = ({ friend, onSelection, selectedFriend }) => {
    const toggle = friend === selectedFriend;
    const photo = friend.photo || img;
    return (
        <div className='flex lg:max-w-[35rem] lg:max-h-[15vh] mb-14 align items-center lg:justify-between gap-10 max-w-[90vw] mx-5'>
            <img className="h-[90px] w-[90px] rounded-full" src={photo} alt="" />
            <div className=' flex flex-col justify-center lg:min-w-[16rem] w-[50vw]'>
                <h3 className='lg:font-bold lg:text-2xl font-medium'>{friend.name}</h3>
                <p className={friend.amount <= 0 ? friend.amount === 0 ? "" : "text-red-500" : "text-green-600"}>{friend.amount <= 0 ? friend.amount === 0 ? `you and ${friend.name} are even` : `You owe ${friend.name} ${friend.amount} rupee` : `${friend.name} owe you ${friend.amount} rupee`}</p>
            </div>
            <button className=' h-[3.5rem] w-[8rem] bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl' onClick={() => { onSelection(friend) }}>{toggle ? "Close" : "Select"}</button>



        </div>
    )
}

export default Item
