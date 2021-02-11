import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile phone',
            qty: 1,
            img:'',
        }
        this.increaseQuantity=this.increaseQuantity.bind(this);
    }

    increaseQuantity(){
        console.log('this.state', this.state);
    }
    
    render(){
        const{price, title, qty}= this.state; //object destructuring
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={styles.title}>{title}</div>
                    <div style={styles.itemDetail}>Rs. {price}</div>
                    <div style={styles.itemDetail}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons  */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1613078289~hmac=f87d744804e32b4d33abecc2167924bb"
                        onClick={this.increaseQuantity.bind(this)}
                        />

                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1613078446~hmac=39844957c5e37ddd3470f67e57f5c721"/>

                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1613078474~hmac=0fd953d57f0e684c61b6ee785270649b"/>
                        
                    </div>
                </div>
            </div>

        )
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    },
    title:{
        color: 'black',
        fontsize: 25,
    },
    itemDetail:{
        color: 'grey',
        fontsize:22,

    }
}
export default CartItem;