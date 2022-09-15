import React from 'react';
import Item from "./Item";

const GetItem = ( { items } ) => {
return <div className="row"> 
    {items.map(item => (
      <div className= "col-md-3">
  
    
        <Item item={item} />
      </div>
  ))}
  </div>;

};

export default GetItem;
