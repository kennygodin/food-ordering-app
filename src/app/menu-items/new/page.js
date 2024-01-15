'use client';
import { useProfile } from '@/components/UseProfile';
import UserTabs from '@/components/layout/UserTabs';
import MenuItemForm from '@/components/layout/MenuItemForm';
import Left from '@/components/icons/Left';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function NewMenuItem() {
  const { loading, data } = useProfile();
  const [redirectToItems, setRedirectToItems] = useState(false);

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin.';
  }

  async function handleFormSubmit(e, data) {
    e.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/menu-items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving this tasty item',
      success: 'Menu item saved',
      error: 'Error!',
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect('/menu-items');
  }
  return (
    <div className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-8">
        <Link href="/menu-items" className="button">
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <MenuItemForm onSubmit={handleFormSubmit} menuItem={null} />
    </div>
  );
}
