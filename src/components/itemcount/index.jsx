import React, { useState } from 'react';

const ItemCount = () => {
  const [contador, setContador] = useState(1);
  
  return (
    <>
    
      <button onClick={() => setContador(contador + 1)}>
        +
      </button>
      <p>{contador}</p>
      <button onClick={() => setContador(contador - 1)}>
        -
      </button>
    </>
  );
}

export default ItemCount;