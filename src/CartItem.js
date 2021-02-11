import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={styles.title}>Phone</div>
                    <div style={styles.itemDetail}>Rs.999</div>
                    <div style={styles.itemDetail}>Qty:1</div>
                    <div className="cart-item-actions">
                        {/* Buttons  */}
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
        fonttype: 'bold'
    },
    itemDetail:{
        color: 'grey',
        fontsize:22,

    }
}
export default CartItem;