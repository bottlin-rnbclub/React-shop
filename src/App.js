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
          title: 'Cтул Буда',
          img: '5ea69d1fd4b498e558a9fd7999eec87ac6964a62.png',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '500.00'
        },
        {
          id: 2,
          title: 'Cтул жирный',
          img: '723fad9ff5c07e0321ffb5bc1a9e8a80.png',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '455.99'
        },
        {
          id: 3,
          title: 'Cтул 1с',
          img: 'Shaphikov.png',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '37.99'
        },
        {
          id: 4,
          title: 'Cтул легенда',
          img: 'WidBhz9REK8.png',
          desc: 'bim bim bam bam boom',
          category: 'chairs',
          price: '54.99'
        },
        {
          id: 5,
          title: 'Cтул бекэнд',
          img: 'photo_2024-05-01_16-33-24.png',
          desc: 'питонист, который любит кожаные дырки вместо дырок бекэнда',
          category: 'chairs',
          price: '13,37'
        },
        {
          id: 6,
          title: 'Cтул скуф', 
          img: 'skufjpg.png',
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
