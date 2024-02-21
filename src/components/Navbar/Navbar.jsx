import "./Navbar.css"
import CBD from "../../assets/cbd.png"

export default function Navbar(props) {

    return (
        <div className="Navbar">
            <div className="leftDiv">
                <div className="logo">
                    <img src={CBD}/>
                </div>
            </div>
            <div className="rightDiv">
                <div className="link" onMouseEnter={props.handleOver} onMouseLeave={props.handleOut}>
                    <p className="linkText">ACCEUIL</p>
                </div>
                <div className="link" onMouseEnter={props.handleOver} onMouseLeave={props.handleOut}>
                    <p className="linkText">PRODUIT</p>
                    <div className="arrow"></div>
                </div>
                <div className="link" onMouseEnter={props.handleOver} onMouseLeave={props.handleOut}>
                    <p className="linkText">MAGASINS</p>
                </div>
                <div className="link" onMouseEnter={props.handleOver} onMouseLeave={props.handleOut}>
                    <p className="linkText">CONTACT</p>
                </div>
                <div className="link2" onMouseEnter={props.handleOver} onMouseLeave={props.handleOut}>
                    <input type="text" placeholder="recherche"/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
    )
}