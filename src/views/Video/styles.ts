import colors from "@/utils/enums/colors";
import styled from "styled-components";

export const VideoContainer = styled.div`
  width: fit-content;
  padding: 0 2em 2em;
`;

export const VideoInfo = styled.div`
  padding: 1.5em 0;
  border-bottom: 1px solid ${colors.weakGray};
`;

export const VideoTitle = styled.h1`
  font-size: 1em;
  font-weight: 500;
`;

export const VideoDescription = styled.p`
  font-size: 0.9em;
  line-height: 1.5;
  max-width: 800px;
  width: fit-content;
`;

export const VideoSecondary = styled.p`
  margin: 0.5em 0 0;
  font-size: 0.8em;
  font-weight: 500;
  color: ${colors.metallicSilver};
  cursor: ${({ isButton }: { isButton?: boolean }) =>
    isButton ? "pointer" : "auto"};
`;

export const ChannelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0 1em;
  margin: 1.5em 0;
`;

export const ChannelProfilePicture = styled.img`
  width: 2.75em;
  aspect-ratio: 1;
  border-radius: 0.5em;
`;

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em 0;
  margin-right: auto;
`;

export const ChannelTitle = styled.h2`
  font-size: 0.9em;
  font-weight: 500;
`;

export const ChannelSecondary = styled.p`
  font-size: 0.7em;
  color: ${colors.metallicSilver};
`;
