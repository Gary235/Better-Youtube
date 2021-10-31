import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "@/utils/enums/colors";

export const ThumbnailContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 1em;
  text-decoration: none;
  transition: all 0.2s;
  border-radius: 0.5em;

  &:hover {
    background: ${colors.metallicSilver}30;
    padding: 0.5em;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.35em;
`;

export const ThumbnailInfo = styled.div`
  width: 100%;
  font-weight: 500;
  padding: 0.25em 0 0.5em;
  background: transparent;
`;

export const ThumbnailTitle = styled.h3`
  font-size: 0.9em;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
`;

export const ThumbnailChannel = styled(Link)`
  padding: 0.5em 0 0;
  font-size: 0.8em;
  color: ${colors.metallicSilver};
  white-space: nowrap;
  overflow: hidden;
  background: transparent;
  text-overflow: ellipsis;
  transition: color 0.2s;

  &:hover {
    color: ${colors.awesomeRed};
  }
`;

export const ThumbnailStatistics = styled.div`
  width: 100%;
  padding: 0.75em 0 0.25em;
  display: flex;
  justify-content: space-between;
  background: transparent;
`;

export const ThumbnailSecondary = styled.p`
  font-size: 0.7em;
  color: ${colors.dimGray};
  background: transparent;
`;
