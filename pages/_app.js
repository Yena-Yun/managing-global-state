import { useState } from 'react';
import CartContext from '../components/context/cartContext';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import itemsArray from '../data/items';

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState({});

  /**
   * 장바구니 수량 추가 시 items 객체에 담기는 형태 ({ id: 수량 })
   * 
   * {
   *  "8321-k532": 4,
   *  "9126-b921": 2
   * }
   */

  return (
    <>
      <Head>
        <link
          href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
          rel='stylesheet'
        />
      </Head>
      <CartContext.Provider value={{ items, setItems }}>
        <Navbar />
        <div className='w-9/12 m-auto pt-10'>
          <Component {...pageProps} />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default MyApp;
