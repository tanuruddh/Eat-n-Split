import React, { useState } from 'react'

const AddFriend = ({ onAddFriend }) => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
        const arr = { name: name.toUpperCase(), photo: url, amount: 0 }
        onAddFriend(arr);
        setName("");
        setUrl("");
    }
    return (
        <div className=' lg:ml-[10vw] bg-amber-100 lg:max-w-[25vw] lg:max-h-[30vh]'>
            <form className='flex flex-col ' onSubmit={handleForm} >
                <div className='lg:w-[80vw] h-16 flex items-center ml-7 lg:text-2xl'>
                    <label className='lg:w-[7vw] w-[30%]' htmlFor="name">Friend Name </label>
                    <input className='lg:w-[15rem] w-[50%] ml-10' type="text" id='name' value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className='lg:w-[80vw] h-16 flex items-center ml-7 lg:text-2xl'>
                    <label className='lg:w-[7vw] w-[30%]' htmlFor="name">Photo url </label>
                    <input className='lg:w-[15rem] w-[50%] ml-10' type="text" id='name' value={url} onChange={e => setUrl(e.target.value)} />
                </div>
                <button className='ml-[15vw] mt-10 mb-5 h-[3.5rem] w-[8rem] bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl' >Add</button>
            </form>
        </div>
    )
}

export default AddFriend
