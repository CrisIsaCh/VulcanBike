import { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// CREAMOS CONTEXTO
const CartContext = createContext();

// CUSTOM HOOK
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider");
    }
    return context;
}


//PROVEEDOR
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    //ESTA EN EL CARRITO
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };
    //AGREGAR ITEM AL CARRITO
    const addItem = (item) => {
        if (isInCart(item)) {
            alert("EL PRODUCTO YA EXISTE EN EL CARRITO");
            return;

        }
        //crea una copia del carrito y le agrega item al final
        setCart([...cart, item]);
        alert("PRODUCTO AGREGADO AL CARRITO")

    };
    //ELIMINAR ITEM AL CARRITO

    const removeItem = (id) => {
        //crea un array con todos los productos que no tenga id
        const updatedCart = cart.filter(element => element.id !== id);
        setCart(updatedCart);
        alert("PRODUCTO ELIMINADO");
    }
    //VACIAR EL CARRITO
    const clearCart = () => {
        setCart([]);
    };

    //TOTAL DE ITEMS EN EL CARRTIO 
    const getTotalItems = () => {
        return cart.length;
    };
    //TOTAL A PAGAR

    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0)
    };

    //cHECKOUT
    const checkout = () => {
        alert("SU COMPRA HA SIDO REALIZADA");
        clearCart();
        navigate("/");
    };
    const values = {
        cart,
        addItem,
        clearCart,
        removeItem,
        getCartTotal,
        getTotalItems,
        checkout
    }


    return <CartContext.Provider value={values}>{children}</CartContext.Provider>

}