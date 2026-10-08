import "./Item.css"
export const Item =({name,price,description,category,image,children}) => {

    return(
        <article className="card">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p> ${price}</p>
            

            {children}

        </article>

    )
    
    
}