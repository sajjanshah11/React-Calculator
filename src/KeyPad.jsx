let KeyPad = (props)=>{
    return(
        <div className  = "btn">
            <button name = "1" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}} >1</button>
            <button name = "2" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>2</button>
            <button name = "3" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>3</button>
            <button name = "+" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>+</button><br/>

            <button name = "4" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>4</button>
            <button name = "5" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>5</button>
            <button name = "6" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>6</button>
            <button name = "-" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>-</button><br/>

            <button name = "7" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>7</button>
            <button name = "8" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>8</button>
            <button name = "9" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>9</button>
            <button name = "x" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>x</button>

            <button name = "0" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>0</button>
            <button name = "=" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>=</button>
            <button name = "c" onClick = {(e)=>{props.onKeyPadClickHandler(e.currentTarget.name)}}>c</button>

            


        </div>
    )
}

export default KeyPad