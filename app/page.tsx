import UserCard from '@/components/UserCard';
import userInterface from '@/interfaces/userInterface';
import React from 'react'

const fetchUsers = async () => {
  const data = await fetch('https://reqres.in/api/users')
  const json = await data.json()
  return json.data;
}

const MainPage = async () => {

  const users = await fetchUsers();

  return (
    <div className='gap-2 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] '>
      {users.map((user: userInterface) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
export default MainPage;