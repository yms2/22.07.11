import React from "react";

// function(){}
// const 함수명 = ()=>{}

function Hello({name,color, isSpecial}){ //컴포넌트명 첫자가 반드시 대문자.
    // const name = 'Hello' //props
    
    return(
        <div style={{color}}>
            
            {/*<h2>{name}</h2>*/}
            {/* {isSpecial ? <b>★★★</b> : null}안녕하세요 {name} */}
            {isSpecial && <b>★★★★★</b>} 안녕하세요 {name}

        </div>
    )
}

export default Hello;