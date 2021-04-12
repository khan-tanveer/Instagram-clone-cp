import React, { useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import firebase from "firebase";
import { db } from "./firebase";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";

const Posts = ({ postId, user, username, caption, imageUrl }) => {
  const [comments, setComments] = useState([]);

  // form k liye hai .........................................
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      comment: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post">
      {/* header => avatar + username ............................................*/}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="khanTanveer"
          src="data:image/jpeg;base64,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"
        />
        <h3>{username}</h3>
      </div>

      {/* Image */}
      <img className="post__image" src={imageUrl} alt="" />

      {/* icons */}
      <div className="post__iconslcs">
        <FavoriteBorderIcon className="post__icon" />
        <ChatBubbleOutlineIcon className="post__icon" />
        <ScreenShareIcon className="post__icon" />
      </div>

      {/* username + caption */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>

      {/* commets */}

      <div className="post__comments">
        {comments?.map((comment) => (
          <p>
            <strong>{comment?.username} : </strong>
            {comment?.comment}
          </p>
        ))}
      </div>

      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            post
          </button>
        </form>
      )}
    </div>
  );
};

export default Posts;
