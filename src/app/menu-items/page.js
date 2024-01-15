'use client';
import Link from 'next/link';

import { useProfile } from '@/components/UseProfile';
import Right from '@/components/icons/Right';
import UserTabs from '@/components/layout/UserTabs';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MenuItemsPage() {
  const { loading, data } = useProfile();
  const [menuItems, setMenuItem] = useState([]);

  useEffect(() => {
    fetch('/api/menu-items').then((response) => {
      response.json().then((menuItems) => {
        setMenuItem(menuItems);
      });
    });
  }, []);

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin';
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link className="button" href="/menu-items/new">
          Create new menu item
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-4">Edit menu item:</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItems?.length > 0 &&
            menuItems.map((item) => (
              <Link
                href={'/menu-items/edit/' + item._id}
                className="bg-gray-200 rounded-lg p-4"
                key={item._id}
              >
                <div>
                  <Image
                    src={item.image}
                    alt="items"
                    width={200}
                    height={200}
                    className="rounded-md"
                  />
                </div>
                <div className="text-center">{item.name}</div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
