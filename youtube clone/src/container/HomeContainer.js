import Index from "../components/Index";
import { connect, Connect } from "react-redux";
import {addToCart } from "../service/action/action";


const mapStateToProps = state =>({
    cardData:state
})


const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Index)

