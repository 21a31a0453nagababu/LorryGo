import React, {useState} from 'react';

import Header from '../Header';

import sandImage from '../../assets/images/sand.jpg';
import bricksImage from '../../assets/images/bricks.jpg';
import cementImage from '../../assets/images/cement.jpg';
import redDustImage from '../../assets/images/red-dust.jpg';
import riceImage from '../../assets/images/rice.jpg';
import vegetablesImage from '../../assets/images/vegetables.jpg';
import oilImage from '../../assets/images/oil.jpg';
import smallchipsImage from '../../assets/images/smallchips.jpg';
import logisticsImage from '../../assets/images/logistics.jpg';
import IronImage from '../../assets/images/iron.jpg';

import './index.css' 


const initialMaterials = [
    { id: 1, name: 'Sand', cost: 20000, unit: '3 units', image: sandImage },
    { id: 2, name: 'Bricks', cost: 1000, unit: '500 pieces', image: bricksImage },
    { id: 3, name: 'Cement', cost: 4000, unit: '20 bags', image: cementImage },
    { id: 4, name: 'Red Dust', cost: 2500, unit: '3 units', image: redDustImage },
    { id: 5, name: 'Rice', cost: 900, unit: '20 kgs', image: riceImage },
    { id: 6, name: 'Vegetables', cost: 30, unit: '5 kgs', image: vegetablesImage },
    { id: 7, name: 'Oil', cost: 150, unit: '1 liter', image: oilImage },
    { id: 8, name: 'smallchips', cost: 15000, unit: '3 units', image: smallchipsImage},
    { id: 9, name: 'logistics', cost: 500, unit: '4 units', image: logisticsImage },
    { id: 10, name: 'Iron', cost: 40, unit: '1 kg', image: IronImage },
    
  ];
  
  const Materials=({ addToCart }) =>{
    const [materials]=useState(initialMaterials)

    return( 
        <>
        <div>
         <Header />
         <div className="materials">
            <h1>Available Materials</h1>
            <div className="material-list">
                {materials.map((material)=>(
                    <div key={material.id} className="material-item">
                        <img src={material.image} alt={material.name}  />
                        <h3>{material.name}</h3>
                        <p>Cost: ₹{material.cost}</p>
                        <p>Quantity: {material.unit}</p>
                        <button onClick={() => addToCart(material)}>Add to Cart</button>
                    </div>
                 

                ))}

            </div>

        </div>
        </div>
        </>
    );
  };
  export default Materials