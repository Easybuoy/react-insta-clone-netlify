import styled from "styled-components";

const StyledCommentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.2rem 0;

  p {
    padding-left: 1rem;
    padding-right: 0.5rem;
    line-height: 1.5rem;
    margin: 0;
  }

  p b {
    padding-right: 0.5rem;
  }

  .commentUsername {
    width: 100%;
  }
`;

export default StyledCommentSection;
