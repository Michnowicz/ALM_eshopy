import "./Article.css"

export default function Article(props) {

    return(
        <div className={props.stock > 0 ? "article stockIn" : "article stockOut"} id={props.id}>
            <div className="articleTitle">
                {props.nom}
            </div>
            <img src={props.src}/>
            <div className="articleText">
                <p><b>prix:</b> {props.prix} €</p>
                <p><b>stock:</b>{props.stock}</p>
                <button id={props.stock > 0 ? "shown" : "hidden"} className={props.id} onClick={props.click}>Ajouter au panier</button>                
            </div>
        </div>
    )
}