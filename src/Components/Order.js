import React, { Component } from 'react'
import { TiDeleteOutline } from "react-icons/ti";

export class Order extends Component {
  render() {
    return (
        <div className='item'>
                <img src={"./img/" + this.props.item.img} alt="картинки нет"></img>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <TiDeleteOutline className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order