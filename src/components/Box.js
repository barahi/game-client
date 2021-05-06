import {useState} from 'react'

const Boxes = ()=>{
    const [value,setValue] = useState(" ");     
    return(
        <div className="boxes">
            { value }
        </div>
    )
}

export default Boxes;