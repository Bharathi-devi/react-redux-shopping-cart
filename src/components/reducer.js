import {INCREASE,DECREASE,REMOVE,CLEAR_CART,GET_TOTAL,GET_AMOUNT, TOGGLE_AMOUNT} from '../components/actionTypes';
import cartItems from '../cart-items';
 
const initialStore = {
    cart:cartItems,
    total:0,
    amount:0
  
  };
export default function reducer(state =initialStore,action)
{

 switch(action.type)
 {
     case CLEAR_CART:return  {...state,cart:[]};
     case REMOVE: 
            return {...state, cart: state.cart.filter((item)=> item.id !== action.payload.id)}
      case INCREASE: 
               
               const tempCart = state.cart.map((item)=>{
                   
                       if(item.id===action.payload.id)
                       {
                           item.amount+=1;
                       }
                        return item;
                    
                    });
                return {...state, cart:tempCart}   
    
      case DECREASE: {
      let temCart = [];
      if(action.payload.amount === 1 )
      {
          temCart= state.cart.filter((item)=>item.id !== action.payload.id);
      }else{
       temCart=state.cart.map((item)=>{
                if(item.id===action.payload.id){
                item.amount-=1;
                 
            }
          return item;
        });}
       return {...state, cart:temCart} };
       case GET_TOTAL: 
          let {total, amount} = state.cart.reduce((cartTotal,item)=>{
                const {price,amount}= item;
                cartTotal.total+=price*amount;
                cartTotal.amount+=amount;
                return cartTotal;
          }, {
              total:0,
              amount:0
          });
          total=parseFloat(total.toFixed(2));
          return {...state, total,amount}
        // case TOGGLE_AMOUNT: 
        //   const totalamount = state.cart.reduce((total,item)=>{
        //        return total+(item.price*item.amount);
        //   }, 0);
        //   return {...state, amount:totalamount}
     default: return state
 }

}
