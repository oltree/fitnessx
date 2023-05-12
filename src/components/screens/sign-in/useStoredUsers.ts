import { useEffect, useState } from 'react';

import { AuthUserType } from '@/types/user.type';

export const useStoredUsers = (): AuthUserType[] => {
  const [users, setUsers] = useState<AuthUserType[]>([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  return users;
};

export type storedUsersReturnType = ReturnType<typeof useStoredUsers>;
