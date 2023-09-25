"use client"

import userInterface from "@/interfaces/userInterface";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const UserCard = ({ user }: { user: userInterface }) => {
    const router = useRouter();
    return (
        <Card
            key={user.id}
            shadow="md"
            radius="sm"
            className="cursor-pointer"
            onPress={() => { router.push(`/users/${user.id}`) }}
            isPressable
            isHoverable
        >
            <CardHeader className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src={user.avatar} />
                <Divider orientation="vertical" className="mx-1" />
                <div className="flex flex-col items-start justify-around">
                    <h4 className="text-small font-bold leading-none text-default-600">{user.first_name} {user.last_name}</h4>
                    <h5 className="text-small tracking-tight text-default-400">{user.email}</h5>
                </div>
            </CardHeader>
        </Card>
    )
}

export default UserCard;