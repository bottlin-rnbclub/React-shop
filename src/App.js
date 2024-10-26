import React from 'react'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from './Components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул для школьника',
          img: 'stul_shkolnyy_na_polozyakh-3297400353.png',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '500.00'
        },
        {
          id: 2,
          title: 'Стул для кухни',
          img: '54954-stul-metallicheskiy-MC-12732-1-203812018.jpg',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '455.99'
        },
        {
          id: 3,
          title: 'Стул-кресло',
          img: 'picture-62600-96007715.jpg',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '37.99'
        },
        {
          id: 4,
          title: 'Стол для ПК',
          img: '1535755_v01_b-2772329884.jpg',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '54.99'
        },
        {
          id: 5,
          title: 'Деревянный стол',
          img: 'pjzaoy2ybjx-166494125.jpg',
          desc: 'питонист, который любит кожаные дырки вместо дырок бекэнда',
          category: 'chairs',
          price: '13,37'
        },
        {
          id: 6,
          title: 'Стол обеденный', 
          img: 'stol-OS2-150-133172522.jpg',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '150'
        },
        ]
    }
     this.addToOrder = this.addToOrder.bind(this)
     this.DeleteOrder = this.DeleteOrder.bind(this)/* этой темой мы показываем конструктору что можно юзать addToOrder с объектами */
  }
    render(){

    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.DeleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }

  DeleteOrder(id) {
    this.setState({orders: this.state.orders.filter(element => element.id !== id)})

  }
  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })

    if(!isInArray){
      this.setState({orders: [...this.state.orders, item] })
    }
  }
}
export default App;
