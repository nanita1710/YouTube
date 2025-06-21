import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="ml-5 pl-5 border border-l-gray-500 ">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
