'use client';

import { useProfile } from '@/components/UseProfile';
import UserForm from '@/components/layout/UserForm';
import UserTabs from '@/components/layout/UserTabs';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function EditUserPage() {
  const { loading, data } = useProfile();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/users').then((response) => {
      response.json().then((users) => {
        const user = users.find((u) => u._id === id);
        setUser(user);
      });
    });
  }, [id]);

  async function handleSaveButtonClick(e, data) {
    e.preventDefault();

    const promise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _id: id }),
      });

      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(promise, {
      loading: 'Saving user...',
      success: 'User saved',
      error: 'Error occured while saving user!',
    });
  }

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin;';
  }
  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <UserForm user={user} onSave={handleSaveButtonClick} />
    </section>
  );
}
