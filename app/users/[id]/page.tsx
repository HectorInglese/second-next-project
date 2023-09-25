import UserCard from '@/components/UserCard';
import React from 'react'

const fetchUser = async (id: string) => {
    const data = await fetch(`https://reqres.in/api/users/${id}`)
    const json = await data.json()
    return json.data;
};

const UserByID = async ({ params }: { params: { id: string } }) => {

    const user = await fetchUser(params.id);

    return (
        <UserCard user={user} />
    )
}

export default UserByID