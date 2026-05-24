"use client";
import CommentListItem from "@/components/CommentListItem";
import { authClient } from "@/lib/auth-client";
import { Separator } from "@heroui/react";
import React, { useEffect, useState } from "react";

const InteractionsPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user ");

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getCommentsByIdeaId = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/comments-by-userId/${user?.id}`,
      );
      const result = await res.json();
      console.log(result, " result data ");
      setComments(result.reverse());
    };
    if (user) {
      getCommentsByIdeaId();
    }
  }, [user]);

  return (
    <div className="container mx-auto space-y-8">
      <div className="py-5">
        <h1 className="text-3xl font-bold">My Interactions</h1>
        <p>View ideas you have liked and comments you have made.</p>
      </div>
      <div className="py-2">
        <p className="text-2xl font-bold">Comments({comments?.length})</p>

        <div>
          <Separator className="bg-black/20 my-2" />
          {comments?.length ? (
            <>
              {/* Comment List */}
              <div className="space-y-4">
                {comments?.map((comment, i) => (
                  <CommentListItem key={comment.id || i} comment={comment} />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-center py-10 space-y-3">
                <h1 className="text-2xl font-bold ">
                  This collection has no data
                </h1>
                <p className="text-sm text-blue-400">
                  Comment First Your Ideas....
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractionsPage;
