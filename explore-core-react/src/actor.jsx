export default function Actor({actor}) {
    const {nayok, naika, sinema} = actor
    return(
        <div className="card">
            <p>nayok : {nayok}</p>
            <p>naika : {naika}</p>
            <p>sinema : {sinema}</p>
        </div>
    )
}