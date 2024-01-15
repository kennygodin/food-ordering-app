'use client';

import SectionHeaders from '@/components/layout/SectionHeaders';
import CartProduct from '@/components/menu/CartProduct';
import { CartContext, cartProductPrice } from '@/components/AppContext';

import { useContext, useEffect, useState } from 'react';
import AddressInputs from '@/components/layout/AddressInputs';
import { useProfile } from '@/components/UseProfile';
import { toast } from 'react-hot-toast';

export default function CartPage() {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  let subtotal = 0;
  for (const p of cartProducts) {
    subtotal += cartProductPrice(p);
  }

  const [address, setAddress] = useState({});
  const { data: profileData } = useProfile();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.href.includes('canceled=1')) {
        toast.error('Payment failed!');
      }
    }
  }, []);

  useEffect(() => {
    if (profileData?.city) {
      const { phone, streetAddress, postalCode, city, country } = profileData;
      const addressFromProfile = {
        phone,
        streetAddress,
        postalCode,
        city,
        country,
      };

      setAddress(addressFromProfile);
    }
  }, [profileData]);
  function handleAddressChange(propName, value) {
    setAddress((prevAddress) => {
      return { ...prevAddress, [propName]: value };
    });
  }

  async function proceedToCheckout(ev) {
    ev.preventDefault();
    // address and shopping cart product

    const promise = new Promise((resolve, reject) => {
      fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address,
          cartProducts,
        }),
      }).then(async (response) => {
        if (response.ok) {
          resolve();
          const link = await response.json();
          window.location = link;
        } else {
          reject();
        }
      });
    });

    await toast.promise(promise, {
      loading: 'Preparing your order...',
      success: 'Redirecting to payment...',
      error: 'Something went wrong... Please try again later',
    });
  }

  if (cartProducts?.length === 0) {
    return (
      <section className="mt-8 text-center">
        <SectionHeaders mainHeader="Cart" />
        <p className="mt-4">Your shopping cart is empty!</p>
      </section>
    );
  }

  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>
      <div className="mt-8 grid md:grid-cols-2 md:gap-8">
        <div>
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, idx) => (
              <CartProduct
                key={product._id}
                product={product}
                onRemove={removeCartProduct}
              />
            ))}
          <div className="p-4 text-right pr-16 flex justify-end items-center">
            <div className="text-gray-500">
              Subtotal: <br /> Delivery: <br /> Total:
            </div>
            <div className="font-semibold pl-2 text-right">
              ${subtotal} <br /> $5 <br /> ${subtotal + 5}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded-lg">
          <h2>Checkout</h2>
          <form onClick={proceedToCheckout}>
            <AddressInputs
              addressProps={address}
              setAddressProps={handleAddressChange}
            />
            <button type="submit">Pay ${subtotal + 5}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
