import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #a7a9ac;

  .logo {
    display: flex;
  }

  .logo i {
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .logo p {
    padding: 0 1rem;
    font-family: "Rochester", cursive;
    font-weight: bolder;
    font-size: 1.5rem;
  }

  .searchInput {
    border: 1px solid #a7a9ac;
    align-items: center;
    display: flex;
    border-radius: 0.2rem;
    height: 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 20%;
    margin-top: 2rem;
  }
  .searchInput i {
    color: #a7a9ac;
    padding: 0 0.3rem 0 5rem;
    text-align: center;
    align-items: center;
  }

  .searchInput input {
    border: none;
    color: #a7a9ac;
    outline: none;
    background-color: inherit;
  }

  .searchContent i {
    padding: 0 1rem;
    color: #a7a9ac;
    border: none;
    margin-top: 2rem;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    .searchContent {
      display: none;
    }
    .searchInput i {
      display: none;
    }
    .searchInput {
      margin-top: 0.5rem;
    }
    .searchInput input {
      text-align: center;
    }

    .logo p {
      display: none;
    }

    .logo hr {
      display: none;
    }
  }
`;

export default StyledSearchBar;
