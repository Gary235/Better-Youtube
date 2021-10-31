import { Link } from "react-router-dom";
import styled from "styled-components";

import colors from "@/utils/enums/colors";

export const SearchItemContainer = styled(Link)`
  width: 100%;
  align-self: center;
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

  @media (max-width: 1000px) {
    flex-wrap: ${({ isVideo }: { isVideo: boolean }) =>
      isVideo ? "wrap" : "nowrap"};
    justify-content: center;
  }
`;

export const SearchItemPhoto = styled.img`
  margin: 0 1em 0 0;
  height: auto;
  max-width: 10em;
  width: ${({ isVideo }: { isVideo: boolean }) => (isVideo ? "30%" : "15%")};
  min-width: ${({ isVideo }: { isVideo: boolean }) =>
    isVideo ? "10em" : "7em"};
  border-radius: ${({ isVideo }: { isVideo: boolean }) =>
    isVideo ? "0.5em" : "50%"};

  @media (max-width: 1000px) {
    max-width: unset;
    min-width: unset;
    width: ${({ isVideo }: { isVideo: boolean }) => (isVideo ? "100%" : "7em")};
    margin: ${({ isVideo }: { isVideo: boolean }) =>
      isVideo ? "0" : "0 2em 0 0"};
  }
`;

export const SearchItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 1em 0 0;
  }
`;

export const SearchItemTitle = styled.h3`
  font-size: 1em;
  font-weight: 500;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SearchItemDescription = styled.p`
  font-size: 0.8em;
  margin: 0.5em 0;
  color: ${colors.metallicSilver};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SearchItemChannelTitle = styled.p`
  font-size: 0.8em;
  font-weight: 500;
  color: ${colors.metallicSilver};
  transition: color 0.2s;
`;

export const SearchItemChannelInfo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1em 0 0;

  &:hover {
    ${SearchItemChannelTitle} {
      color: ${colors.awesomeRed};
    }
  }
`;

export const SearchItemChannelPhoto = styled.img`
  margin: 0 0.5em 0 0;
  border-radius: 50%;
  width: 1.5em;
  height: auto;
  aspect-ratio: 1;
`;
