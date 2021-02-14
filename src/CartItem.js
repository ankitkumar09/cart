import React from 'react';

class CartItem extends React.Component{
    
    // testing () {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(() => {
  //     // setState acts like a synchronus call
  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log('state', this.state);
  //   });
  // }

    increaseQuantity = () => {
        // this.state.qty+=1;
        // console.log('this.state', this.state);

        // setState form 1 . REact will do shallow merging here and after 
        // setstate automatically re render or component
        // it changes only one particalur component
        // No mattar how many times form 1 is repeated react 
        // reads only the last setState object after all of them
        // this.setState({
        //     qty:this.state.qty+1
        // });
        // this.setState({
        //     qty:this.state.qty+10
        // });
        // this.setState({
        //     qty:this.state.qty+5
        // });
        // this.setState({
        //     qty:this.state.qty+1
        // });

        // setState form 2
        //if preveious state required we use form 2
        this.setState((prevState) =>{
            return{
                qty:prevState.qty +1
            }

        });
    }
     
    decreaseQuantity =()=>{
        const{qty}=this.state;
        if(qty==0){
            return;
        }
        this.setState((prevState) =>{
            return{
                qty:prevState.qty -1
            }
        },
        //if we need to know the current state of the component
        // ()=>{
        //   console.log('this.state ',this.state);

        // }
        );
    }
    
    render(){
        console.log("this.props", this.props);
        const{price, title, qty}= this.props.product; //object destructuring
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
                        onClick={this.increaseQuantity}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1613078446~hmac=39844957c5e37ddd3470f67e57f5c721"
                            onClick={this.decreaseQuantity}
                        />

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