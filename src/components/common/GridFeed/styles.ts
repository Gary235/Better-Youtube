import styled from "styled-components";

export const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14.5em, 1fr));
  grid-template-columns: repeat(
    ${({ columns }: { columns: number }) => (columns ? columns : "auto-fit")},
    minmax(14.5em, 1fr)
  );
  gap: 1em 1.75em;
  width: 100%;
  place-content: center;
`;
