import {useState} from 'react'
import './Box.css';

const Box = ({boxClick, row, col}) => {
    const [value, setValue] = useState(" ");

    const clickHandler = (e) => {
      e.preventDefault();
      console.log(row, col)
      setValue(boxClick(row, col));
    }

    return(
        <div className="box" onClick={clickHandler}>
            { value }
        </div>
    )
}

export default Box;