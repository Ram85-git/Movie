const Mov = (props) => {
    return(
        <div className="mov">
            <img src={props.img} alt=""/>
            <p>{props.title}</p>
            <p> year:{props.year}</p>

        </div>
    )
}
export default Mov

