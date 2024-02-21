import './App.css'

import Article from './components/Article/Article.jsx'
import Panier from './components/Panier/Panier.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Data from "./components/Article/articles.json"
import { useState } from 'react'

function App() {

  let [argent, setArgent] = useState(20)
  let [data, setData] = useState(Data)
  let [basket, setBasket] = useState([])


  let handleAddCart = (e) => {
    let index = e.target.className

    if (argent >= data[index].prix) {
      //soustrait le prix de l'objet au portefeuille
    setArgent(argent - data[index].prix)

    //modifie le stock
    let newData = data.map( (d, i) => {
      if (index == i) {
        return {...d,stock : d.stock - 1}
      }
      return d
    })
    setData(newData)

    //MAJ Panier
    let newBasket = [...basket]
    let flag = false

    for (let i = 0; i < newBasket.length; i++) {
      if (newBasket[i].nom === data[index].nom) {
        newBasket[i].qte +=1
        flag = true
      }
      
    }
    if (flag == true) {
      setBasket(newBasket)
    } else {
      let basket2 = data[index]
      basket2.qte = 1
      setBasket([...basket, basket2])
    }
    }
    
  }



  function handleRemove(e) {
    

    //soustrait le prix de l'objet au portefeuille
    let prix = parseFloat(e.target.id)
    setArgent(argent + prix)

    //modifie le stock
    let name = e.target.getAttribute("name")
    let newData = data.map( (d) => {
      if (name == d.nom) {
        return {...d,stock : d.stock + 1}
      }
      return d
    })
    setData(newData)

    //Maj panier

    let newBasket = basket.map((b, i) => {
        //soustraction de quantité
        if (b.nom == name) {
          return {...b,qte : b.qte -= 1}
        }
        return b
      }
    ) // pk ça marche? je met jamais a jour setBasket pourtant la qte est bien modifiée
  }





  return (
    <div className='App'>
      <Navbar/>
      <div className='AppCore'>
        <div className='container'>
          <h2 className="portefeuille">Portefeuille: {argent}€</h2>
          <div className='Articles'>
            {
              data.map (
                (d, index) =>
                (<Article key={index} id={index} nom={d.nom} src={d.src} prix={d.prix} stock={d.stock} click={handleAddCart}/>)
              )
            }
          </div>
          
        </div>

        <Panier data={basket} click={handleRemove}/>

      </div>
    </div>
  )
}

export default App
