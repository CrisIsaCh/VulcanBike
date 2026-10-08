import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import "./ItemDetail.css"
export const ItemDetail = ({ item }) => {
    return <div className="detail-wrapper">
        <Item {...item}>
            <Link to={'/cart'}>
            <button className="btn bg-primary primary">Agregar al Carrito</button>
            </Link>
        </Item>

    </div>
}