import styled from "styled-components";

const StyledPostContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;

  .card {
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
    margin: 2rem auto;
    border: 1px solid #a7a9ac;
    border-radius: 0.2rem;
    -webkit-box-shadow: 0px 0px 5px 0px #a7a9ac;
    -moz-box-shadow: 0px 0px 5px 0px #a7a9ac;
    box-shadow: 0px 0px 5px 0px #a7a9ac;
  }

  .card .card-user-detail {
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
  }

  .card .card-user-detail img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0 1rem;
  }
  .card .card-image img {
    width: 100%;
    height: 500px;
  }

  .card .card-footer i {
    padding: 1rem 1rem 0 1rem;
    cursor: pointer;
  }

  .card .card-footer p {
    padding-left: 1rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .card .card-time {
    border-bottom: 1px solid #a7a9ac;
    margin: 0 1rem;
    color: #a7a9ac;
  }

  .card .card-time p {
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media (max-width: 1075px) {
    .card {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    .card {
      width: 90%;
    }
  }
`;

export default StyledPostContainer;
