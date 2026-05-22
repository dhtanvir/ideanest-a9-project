"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";
import CommentListItem from "./CommentListItem";

export default function CommentSection({ idea }) {
  const { _id, ideaTitle } = idea;
  // console.log(idea);

  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [refreshCont, setRefreshCont] = useState(0);

  // const params = useParams();
  // const commentId = params?.id;

  const getCommentsByIdeaId = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comment/${_id}`,
    );
    const result = await res.json();
    console.log(result, " result data ");
    setComments(result);
  };

  useEffect(() => {
    const getCommentsByIdeaId = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/comment/${_id}`,
      );
      const result = await res.json();
      console.log(result, " result data ");
      setComments(result.reverse());
    };
    getCommentsByIdeaId();
  }, [refreshCont]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setLoading(true);

    const newComments = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      userEmail: user?.email,
      ideasId: _id,
      ideaTitle: ideaTitle,
      text: comment,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };

    // console.log(newComments, "newComment Data");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComments),
      });

      const commentData = await res.json();
      // console.log(commentData, " comment data ");
      toast.success("comment added successfully");

      // if (commentData?.success) {
      //    setComment("");
      // }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setRefreshCont((x) => x + 1);
      setComment('')
    }
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-6 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold">Comments (0)</h2>
      {/* <h2 className="text-2xl font-bold">Comments ({comments.length})</h2> */}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add your comment..."
          className="w-full h-24 border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-violet-500 resize-none bg-white"
        />

        <button
          disabled={loading}
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-xl font-semibold transition disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </form>

      {/* Comment List */}
      <div className="space-y-4">
        {comments?.map((comment, i) => (
          <CommentListItem key={comment.id || i} comment={comment} />
        ))}
      </div>
      <Toaster />
    </div>
  );
}

// useEffect(() => {
//   const fetchComments = async () => {
//     if (!commentId) return;

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/comment/${commentId}`,
//       );
//       const data = await res.json();

//       setComments(data?.comments || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchComments();
// }, [commentId]);
