import { useContext } from 'react';
import Link from 'next/link';
import CartContext from './context/cartContext';

function Navbar() {
  const { items } = useContext(CartContext);
  const totalItemsAmount = Object.values(items).reduce((acc, cur) => acc + cur, 0);

  return (
    <div className='w-full bg-purple-600 p-4 text-white'>
      <div className='w-9/12 m-auto flex justify-between'>
        <div className='font-bold'>
          <Link href='/' passHref>
            My e-commerce
          </Link>
        </div>
        <div className='font-bold underline'>
          <Link href='/cart' passHref>
            {totalItemsAmount} items in cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
