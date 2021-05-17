import React, { useState, useEffect } from "react";
import "./CartItem.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CartItem = () => {
  let [products, setProducts] = useState();
  let [count, setCount] = useState(0);
  let [cart, setCart] = useState([])

  useEffect(function mockServerCall() {
    setProducts();
    setTimeout(() => {
      //   let response   = await fetch (apiUrl)
      // let products = await response.json()
      // if (response.ok) {
      // setProduct(products)
      // }
      setProducts([
        {
          name: "Product 1",
          price: "10.99",
        },
        {
            name: "Product 2",
            price: "99.99",
          },
      ]);
    }, 2000);
  }, [count]);

  if (!products) {
    return (
      <div>
        <p>Fetching products...</p>
      </div>
    );
  }

  return (
    <div className="cartitem">
      <div className="productcart_image">
        <img
          src="https://via.placeholder.com/500x500"
          alt="can you guys give me a break"
        />
        <button onClick={() => setCount(count => count + 1)}>Increase count</button>
        <p>The count is {count} </p>
      </div>
      {products.map((product, idx) => {
        return (
          <>
          <div key={idx}>
          <Link to={`/product/${111}`} className="item_name">
              <p>{product.name}</p>
            </Link>

            <p className="cartproduct_price">{product.price}</p>
            <select className="item_select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>

            <button className="item_delete" onClick={()=> setCart((prev) => [...prev, product])}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
           
          </>
        );
      })}
    </div>
  );
};

export default CartItem;

// (Commodore 64,white,Aug 1982,commodore international,995,170kb,VIC-11,n/a)


// ('Sega Genesis','black','Oct 1988','Sega','399','Disc','Motorola 68000,7.6 mghz')

// ('Sony Playstation','gray','Dec 1994','Sony','80','Memory Card','LSI R3000','33.86MHz')

// ( '64 (NUS-001) - Rare Genuine USA NTSC Gold N64 Nintendo Console','Gold','June 1996','Nintendo','399','256 mb',	'64-bit NEC VR4300','93.75 MHz')

// ( 'Cuphead Xbox One X Edition' ,'Yellow','2017','Microsoft','3000','1TB','8 core x86 CPU' ,'2.3GHz')

// ('24K Gold-Dipped PlayStation 3','Gold', '????','Sony','5000','500gb',	
// 'Octa Core 3.2 GHz ADM 3.2-GHz Cell Broadband Engine','3.2 ghz')

// ('Lara Croft Gem-Studded Xbox 360','Gemstones','Apr 2006','Microsoft','11,000','20gb','3.2 GHz PowerPC Tri-Core Xenon','700 mhz')

// ('The 10 Million Model PS1','black','Dec 1997','Sony','7500','Memory Card','LSI R3000','33.86MHz')

// ('Pokemon Stadium N64 Battle Set' ,'Black','Apr 1999','Nintendo','500','256 mb',	'64-bit NEC VR4300','93.75 MHz')


// ('Code Veronica Dreamcast','Red','February 2000','Sega','1700','100 mb disc','Hitachi SH-4 32-bit RISC,200 mghz')
