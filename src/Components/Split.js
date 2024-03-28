import React, { useState } from 'react'

const Split = ({ selectedFriend, setSplit }) => {
    const [billValue, setBillValue] = useState(0);
    const [urExpences, setUrExpences] = useState(0);
    let friendsExpences = billValue && urExpences ? billValue - urExpences : billValue;
    const [payer, setPayer] = useState("you");

    const handleForm = (e) => {
        e.preventDefault();
        setSplit(payer === 'you' ? friendsExpences : -urExpences);
        setBillValue("");
        setUrExpences(0);
        setPayer("you");

    }

    return (

        <form className='flex flex-col gap-2  lg:ml-[10vw] bg-amber-100 lg:max-w-[35vw] lg:max-h-[50vh] lg:p-12 mb-10 w-[100vw]  p-10' >
            <h2 className='lg:text-4xl lg:font-bold text-2xl font-medium'>SPLIT A BILL WITH {selectedFriend.name}</h2>
            <div className='w-[100%] h-16 flex items-center lg:ml-7 lg:text-2xl'>
                <label className='lg:w-[12vw] w-[40vw]' htmlFor="name">Bill Value</label>
                <input className='w-[15rem] ml-10' type="text" id='name' value={billValue} onChange={e => setBillValue(Number(e.target.value))} />
            </div>
            <div className='w-[100%] h-16 flex items-center lg:ml-7 lg:text-2xl'>
                <label className='lg:w-[12vw] w-[40vw]' htmlFor="name">Your Expences </label>
                <input className='w-[15rem] ml-10' type="text" id='name' value={urExpences} onChange={e => setUrExpences(Number(e.target.value) > billValue ? urExpences : Number(e.target.value))} required />
            </div>
            <div className='w-[100%] h-16 flex items-center lg:ml-7 lg:text-2xl'>
                <label className='lg:w-[12vw] w-[40vw]' htmlFor="name">Sahars Expences </label>
                <input className='w-[15rem] ml-10' type="text" id='name' value={friendsExpences} disabled />
            </div>
            <div className='w-[100%] h-16 flex items-center lg:ml-7 lg:text-2xl'>
                <label className='lg:w-[12vw] w-[50vw]' htmlFor="name">Who is paying the bill</label>
                <select className='w-[5rem] ml-10  md:w-1/2 lg:w-1/3 xl:w-1/4 border rounded px-3 py-2' id='name' value={payer} onChange={e => setPayer(e.target.value)} >
                    <option className='text-sm' value="you" >You</option>
                    <option className='text-sm' value="friend">{selectedFriend.name}</option>
                </select>
            </div>
            <button className='ml-[15vw] mt-10 mb-5 h-[3.5rem] w-[8rem] bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl' onClick={handleForm}>Add</button>
        </form>
    )
}

export default Split
