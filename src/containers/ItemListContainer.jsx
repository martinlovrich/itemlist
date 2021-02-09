import * as React from "react";
import ItemCount from "../components/itemcount";
import fichaDeProductos from "../datosdementira";
import ItemList from "../components/itemlist/index";

const ItemListContainer = ({greeting}) => {

    const [products, setProducto] = React.useState([]);

React.useEffect(() => {
    const promesaLista = new Promise ((resolve,reject) => {
        setTimeout(() => resolve(fichaDeProductos), 5000);
    });

    promesaLista.then((resultado) => setProducto (resultado));
}, []);

    return(
        <>
        <a className="h2">{greeting} </a>
        <div>
            <ItemList products={products} />
        </div>
        <div>
        <ItemCount/>
        </div>
        
        </>
    );
};

export default ItemListContainer;