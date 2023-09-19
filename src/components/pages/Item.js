import { Fragment } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom"

const Item=(props)=>{
    const params=useParams()
    const item=params.item
    return(
    <Fragment>
        <img src={item.imageURL} alt={item.title} />
        {item.title}
        {`$${item.price}`}
    </Fragment>)
}

export default Item;