function Button(props){
    console.log(props)
    return <button style={{
        backgroundColor: props.backgroundColor,
        padding: "10px",
        margin: "20px",
        color: props.color,
        fontWeight: "900",
        fontSize: "1.5em",
        borderRadius: "30px",
        text: props.text

    }
        }>
            {props.text}
            {/* {^^^ can inject text via props} */}
            {props.children}
            </button>
}
export default Button