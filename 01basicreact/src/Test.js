import { useState } from "react"

const products=[
    {title:'Potato',isFruit:false,id:1},
    {title:'Apple',isFruit:true,id:2},
    {title:'banana',isFruit:true,id:3},
    {title:'Onion',isFruit:false,id:4},
  ]


function Test(){
   const itemlist=products.map(product =>
    <li
        key={product.id}
        style={{
            color: product.isFruit ?'red':'green'
        }}
        >
        {product.title}
    </li>
    )

    const [count,setCount]=useState(0);

    function clickhandle(){
        if(count <20){
        setCount(count +1);
    }
}
   
    return(
    <div>
        <ul>{itemlist}</ul>,
        <button onClick={clickhandle}>
        Click {count} times
        </button>
    </div>
            )
}




export default Test