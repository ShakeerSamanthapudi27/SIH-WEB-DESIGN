//Normal Approach
/*export default function Button()
{
    function handleClick()
    {
        alert('Welcome to React');
        return('Hello');
    }
    return (<button onClick={handleClick}>Click Me </button>);
}*/
//Inline display
/*export default function Button()
{
    return (<button onClick={function handleClick(){ alert("Hi I was shorten")}}>Inline Define</button>);
}*/
//Arrow function
/*export default function Button()
{
    return (
        <br></br>
        <button onClick={()=>{alert('welcome More short with arrow function')}}>Arrow</button>
    
    );
}*/
//Arrow with Parameter
/*
export default function Button()
{
    const handleClick=(a)=>alert(a);
    return (<button onClick={()=>handleClick("Welcome")}></button>)
}*/
//Parameter with type
export default function Button()
{
    const handleClick=(a,b)=>{alert(a);alert(b.type)};
    return (<button onClick={(event)=>handleClick("React Headache",event)}>Click Me</button>);
}

