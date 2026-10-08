import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    console.log(id);

    const [itemDetail, setItemDetail] = useState(null)
    const [error, setErrors] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(itemDetail);
    console.log("antes del effect");


    useEffect(() => {
        console.log("dentro del effect");
        setItemDetail(null);
        setErrors(null);
        setLoading(true)

        fetch("/data/products.json")
            .then(res => res.json())
            .then(data => {
                console.log("llego el JSON");

                const item = data.find(product => String(product.id) === id)
                console.log(item);
                if (item) {
                    setItemDetail(item);
                    return;
                }
                throw new Error("elemento no encontrado")
            })
            .catch(error => setErrors(error.message))
            .finally(() => setLoading(false));


    }, [id]);
    console.log("despues del efect");

    if (loading) {
        return <p>Cargando...</p>
    }
    if (error) {
        return <p>{error}</p>
    }
    if (!itemDetail) {
        return <p>Producto no encontrado</p>
    }

    return (

        <section>
            <h1>Detalles del producto</h1>
            <div className="products-container">
                <ItemDetail item={itemDetail} />
            </div>


        </section>
    )
}