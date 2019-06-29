import React from "react";
import PropTypes from "prop-types";

// import "./CommentSection.css";
import StyledCommentSection from "./StyledCommentSection";

export default function CommentSection({ commentData }) {
  return (
    <StyledCommentSection>
      <p className="commentUsername">
        <b>{commentData.username}</b>
        {commentData.text}
      </p>
    </StyledCommentSection>
  );
}

CommentSection.propTypes = {
  commentData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
