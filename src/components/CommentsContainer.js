import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentData = [
  {
    name: "Nanita",
    text: "Lorem ipsum",
    replies: [
      {
        name: "Nanita",
        text: "Lorem ipsum",
        replies: [
          {
            name: "Nanita",
            text: "Lorem ipsum",
            replies: [
              {
                name: "Nanita",
                text: "Lorem ipsum",
                replies: [
                  {
                    name: "Nanita",
                    text: "Lorem ipsum",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nanita",
    text: "Lorem ipsum",
    replies: [
      {
        name: "Nanita",
        text: "Lorem ipsum",
        replies: [],
      },
    ],
  },
  {
    name: "Nanita",
    text: "Lorem ipsum",
    replies: [
      {
        name: "Nanita",
        text: "Lorem ipsum",
        replies: [
          {
            name: "Nanita",
            text: "Lorem ipsum",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Nanita",
    text: "Lorem ipsum",
    replies: [
      {
        name: "Nanita",
        text: "Lorem ipsum",
        replies: [
          {
            name: "Nanita",
            text: "Lorem ipsum",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Nanita",
    text: "Lorem ipsum",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={commentData} />
      {/* <Comment data={commentData[0]} /> */}
    </div>
  );
};

export default CommentsContainer;
