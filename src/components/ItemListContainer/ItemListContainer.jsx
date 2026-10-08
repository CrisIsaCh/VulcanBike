import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("/data/products.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al cargar los productos");
                }
                return res.json();
            })
            .then((data) => {
                return setProducts(data);
            })
            .catch((error) => {
                return setErrors(error.message)
            })
            .finally(() => setLoading(false))

    }, [])

    if (loading) {
        return <p>Cargando...</p>
    }
    if (errors) return <p>{errors}</p>

    console.log(products);

    return <section>
        <h1>Productos</h1>
        <ItemList list={products} />

    </section>




};