import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const CommentListItem = ({ comment, i }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div>
      <div
        key={comment.id || i}
        className="bg-white rounded-2xl p-5 flex gap-4"
      >
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
          <h3 className="font-bold text-gray-800">{session?.user.name}</h3>

          <p className="text-gray-700">{comment.text}</p>

          <p className="text-sm text-gray-400">{comment.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentListItem;
