const Card =(props)=>{
    return(
        <div className={props.className}>
            <img src={props.src} alt="" />
            <h3>{props.name}</h3>
            <p>{props.phone} </p>
            <p>{props.address}</p>
            <button className={props.btnClass}>{props.btn}</button>
        </div>


/* <Card
            className ="first-person"
             src = {facebook}
            name = "Halimah YUsuf"
            phone = "+234 810 3444 645"
            address = "25, Usa way Ilorin"
            btn = "Let's chat"
            btnClass = "btn-1"

            />

            <Card
            name = "Mustapha Kalid"
            phone = "+127 8784 283"
            btn = "Learn"
            btnClass = "btn-1"

            />

            <Card
            className = "aliu"
            name = "Aliiu Owozs"
            address = "no1 jetemiodara street"
            phone ="0916787235"
            btn = "Contact"
            btnClass ="btn-1"
            
            /> */
    )
}

export default Card;