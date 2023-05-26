import { useContext } from 'react';
import CartContext from '../components/context/cartContext';
import data from '../data/items';

/* 매번 선언될 필요가 없는 함수이므로 컴포넌트 바깥에 선언 */
function getFullItem(id) {
  const itemIndex = data.findIndex((item) => item.id === id);
  return data[itemIndex];
}

function Cart() {
  const { items } = useContext(CartContext);

  const totalPrice = Object.keys(items)
    .map((id) => getFullItem(id).price * items[id])
    .reduce((acc, cur) => acc + cur, 0);
  
  const itemInfo = Object.keys(items).map((id) => {
    const item = getFullItem(id); // 상품 정보
    return { item, amount: items[id] }; // + 상품 수량
  })

  return (
    <div>
      <h1 className='text-xl font-bold'> Total: ${totalPrice} </h1>
      <div>
        {itemInfo.map(({ item, amount }) => (
          <div key={item.id}>
            x{amount} {item.name} (${amount * item.price})
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
