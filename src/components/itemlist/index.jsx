

const ItemList = ({products}) => {
    return (
    <div>
        <ul>
        {products.map((product)=>{
            return <li>{product.name}</li>
        })}
        </ul>
    </div>
    )
    
};

export default ItemList;