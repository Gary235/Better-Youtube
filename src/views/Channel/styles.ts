import styled from "styled-components";
import colors from "@/utils/enums/colors";

export const ChannelInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePicture = styled.div`
  width: 8em;
  height: auto;
  aspect-ratio: 1;
  border-radius: 3em;
  margin: 0 0 2em;
  position: relative;
  background: url(${({ src }: { src: string }) => src}) no-repeat;
  background-size: cover;

  &::after {
    content: "";
    position: absolute;
    background: inherit;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(20px);
    opacity: 0.5;
    bottom: -0.5em;
  }
`;

export const ChannelTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
  margin: 0 0 0.25em;
  text-align: center;
`;

export const ChannelSecondary = styled.p`
  font-size: 1em;
  line-height: 1.4;
  color: ${colors.metallicSilver};
  text-align: center;
`;
