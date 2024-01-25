import "../../css/PropsComponent.css"

function PropsComponent(props) {
    //const StyleAttrs = {
        //backgroundColor: "brown",
    //}
    return (
        <div>
        {/* <div style={StyleAttrs}> */}
            <h2> Hello, {props.name} This is {props.course} class</h2>
        </div>
    )
}
export default PropsComponent;

//example 2
// function LoginComponent(props){
//    return(
//        <div>
//            Hi, my username is {props.name} and mailid is {props.email}.
//         </div>
//     )
// }
// export default LoginComponent;