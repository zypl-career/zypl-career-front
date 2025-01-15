import React from 'react';
import { UserEdit } from '@features';
import { Navbar } from '@entities';
import { Footer } from '@widgets';

const UserEditPage = () => {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <UserEdit />
      <Footer />
    </main>
  );
};

export default UserEditPage;
