import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { CommentCancelAlert } from "./CommentCancelAlert";

const CommentListItem = ({ comment, i }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  console.log(comment, " comment Id");

  return (
    <div>
      <div
        key={comment.id || i}
        className="bg-white rounded-2xl p-5 flex items-center  justify-between gap-4 border "
      >
        <div className="flex items-center gap-8">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">
            <Image
              width={40}
              height={40}
              src={
                session?.user?.image ||
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
              }
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
            />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <h3 className="font-bold text-gray-800">
              User Name: {session?.user.name}
            </h3>
            <p className="font-medium">Title: {comment?.ideaTitle}</p>

            <p className="text-gray-700 font-bold">Comment:{comment.text}</p>

            <p className="text-sm text-gray-400">{comment.date}</p>
          </div>
        </div>

        <CommentCancelAlert comment={comment} />

        
      </div>
    </div>
  );
};

export default CommentListItem;
