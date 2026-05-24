"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { BeatLoader } from "react-spinners";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if (userData.isPending) {
    return (
      <p className="text-center py-20">
        <BeatLoader className="mx-auto" color="#3498db" />
      </p>
    );
  }

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-center text-2xl font-bold">Profile</h1>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt={user?.name || "User"}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted">{user?.email}</p>

        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;
