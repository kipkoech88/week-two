import React, {useState} from 'react';

const InputField = ()=>{
    const [input, setInput] = useState("");
    const [historyList, setHistoryList]=useState([]);

    return (
        <div>
            <input type="text" placeholder="enter some text"
        onChange={(e)=>{
            console.log(e.target.value)
            setInput(e.target.value)
            setHistoryList([...historyList, e.target.value]);
        }}
    />
    <div>
    {input}
    </div>
    <hr/><br/>
    <ul>
        {historyList.map((ob)=>{
            return <div>{ob}</div>
        })}
    </ul>
        </div>
    )
}

export default InputField