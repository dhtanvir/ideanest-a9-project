"use client";

import { useState } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");

  const comments = [
    {
      id: 1,
      name: "Md Shakil Ahmed",
      text: "Wow",
      date: "May 18, 2026",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(comment);

    setComment("");
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-6 space-y-6">

      {/* Title */}
      <h2 className="text-2xl font-bold">
        Comments ({comments.length})
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add your comment..."
          className="w-full h-32 border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-violet-500 resize-none bg-white"
        />

        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Post Comment
        </button>
      </form>

      {/* Comment List */}
      <div className="space-y-4">

        {comments.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 flex gap-4"
          >

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold">
              {item.name.charAt(0)}
            </div>

            {/* Content */}
            <div className="space-y-1">
              <h3 className="font-bold text-gray-800">
                {item.name}
              </h3>

              <p className="text-gray-700">
                {item.text}
              </p>

              <p className="text-sm text-gray-400">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}