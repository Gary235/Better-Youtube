import colors from "@/utils/enums/colors";
import styled from "styled-components";

export const VideoItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s;
  border-radius: 0.5em;
  padding: 0.5em 0.5em 0.5em 0;

  &:hover {
    background: ${colors.metallicSilver}30;
    padding: 0.5em;
  }
`;

export const VideoItemPhoto = styled.img`
  width: ${({ isVideo }: { isVideo: boolean }) => (isVideo ? "30%" : "15%")};
  max-width: 10em;
  height: auto;
  min-width: 10em;
  margin: 0 1em 0 0;
  border-radius: 0.5em;
  border-radius: ${({ isVideo }: { isVideo: boolean }) =>
    isVideo ? "0.5em" : "50%"};
  background: transparent;
`;

export const VideoItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;
`;

export const VideoItemTitle = styled.h3`
  font-size: 1em;
  font-weight: 500;
  width: 100%;
  background: transparent;
`;

export const VideoItemDescription = styled.p`
  font-size: 0.8em;
  color: ${colors.metallicSilver};
  width: fit-content;
  background: transparent;
`;
