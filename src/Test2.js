const Test2 = (prop) =>{
    const plus = () => {
        console.log("prop driling")
        prop.prop.setNum(prop.prop.num + 1)
    }
    return(
        <>
        <h1>{prop.prop.num}</h1>
        <button onClick={plus}>드릴링 더하기</button>
        </>
    )
}

export default Test2;