import React from "react";
import PropTypes from "prop-types";

import StyledNewComment from "./StyledNewComment";

export default function NewComment({ handleClick, index }) {
  return (
    <StyledNewComment>
      <input
        placeholder="Add a comment..."
        onKeyUp={e => {
          handleClick(e, index);
        }}
      />
      <i className="fas fa-ellipsis-h" />
    </StyledNewComment>
  );
}

NewComment.propTypes = {
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
