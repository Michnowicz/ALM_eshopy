import "./Panier.css"


export default function Panier(props) {

    return (
        <div className="Panier">
            <div className="mainCont">
                <h2>Panier</h2>
                <div className="cont">
                    {
                        props.data.map(
                            (d, i) => (
                                <div key={i} className="basket" id={d.qte > 0 ? "shown" : "hidden"}>
                                    <img src={d.src} />
                                    <div className="basketInfo">
                                        <p><b>{d.nom}</b></p>
                                        <p><b>quantité: </b>{d.qte}</p>
                                    </div>
                                    <div className="del">
                                        <button name={d.nom} id={d.prix} onClick={props.click}><i name={d.nom} id={d.prix} className="fa-solid fa-trash"></i></button>
                                    </div>
                                    
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            
        </div>
    )
}