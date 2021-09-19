import styled from "styled-components";

export const CardContainer = styled.article`
  max-width: 614px;
  margin: 0 auto 1.5rem auto;
  border: 1px solid var(--light-grey);
  background-color: var(--bg-white);

  figcaption,
  p,
  .like {
    padding: 0.5rem 1rem;
  }

  figure img {
    width: 100%;
    display: block;
    margin-bottom: 1em;
  }

  figcaption {
    font-size: 1.5rem;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.875rem 1rem;

    .container {
      display: flex;
      align-items: center;
    }

    img {
      width: 2rem;
      border-radius: 50%;
      border: 1px solid var(--light-grey);
    }

    p {
      font-size: 0.875rem;
      font-weight: 600;
    }
  }

  .date {
    font-size: 0.6rem;
    color: var(--md-grey);
    text-transform: uppercase;
  }

  .like {
    display: flex;
  }
`;
