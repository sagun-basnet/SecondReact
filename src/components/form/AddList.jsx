import { useState } from "react";

const AddList = () => {

    // const arr = [1, 2, 3, 4, 5]
    // arr.push(6);


    const [data, setData] = useState([]);
    const initial = {
        title: "",
        description: "",
        type: {}
    }

    const [add, setAdd] = useState(initial);


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);
        setData((prev) => (prev.push(add))
        );
        setAdd(initial)

        console.log(data);
    }

    const handleChange = (e) => {
        setAdd(prev => ({ ...prev, [e.target.name]: e.target.value }));

    }
    return (
        <>
            <h1> Add List </h1>
            <form onSubmit={handleSubmit} action="" className="flex flex-col p-4 bg-slate-500 w-[22rem] gap-4 rounded-lg"  >
                <input value={add.title} onChange={handleChange} type="text" name="title" placeholder="Enter Title" required className="p-2 rounded-md outline-none" />
                <textarea value={add.description} onChange={handleChange} className="p-2 rounded-md outline-none resize-none" name="description" id="" placeholder="Enter Description" required></textarea>
                <select value={add.type} onChange={handleChange} name="type" id="" className="rounded-lg w-1/2 outline-none p-2" required>
                    <option value="">--Select priority--</option>
                    <option value={true}>Important</option>
                    <option value={false}>Normal</option>
                </select>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 p-2 px-4 rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddList;