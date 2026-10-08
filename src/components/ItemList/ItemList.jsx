import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css"
export const ItemList = ({ list }) => {
    console.log(list);



    if (!list.length) {
        return <p>No hay productos</p>

    }

    return (
        <div className="products-container">
            {list.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                <Item  {...product} />
                </Link>

            ))}


        </div>

    )




};