'use client';
import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import type { UserContextType } from '@/context/UserContext';

export default function MyStation() {
  const { isLoggedIn, name } = useContext<UserContextType>(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-[120px] pb-[100px]">
      {isLoggedIn ? (
        <h1 className="text-black text-3xl font-bold">
          جایگاه من: {name}
        </h1>
      ) : (
        <h1 className="text-black text-xl font-semibold">
          لطفاً وارد شوید
        </h1>
      )}
    </div>
  );
}
