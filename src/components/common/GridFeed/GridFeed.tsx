import React from "react";

import { FeedContainer } from "./styles";
import IGridFeedProps from "./types";

const GridFeed = (props: IGridFeedProps) => {
  const { items, ItemComponent, columns = 0 } = props;

  return (
    <FeedContainer columns={columns}>
      {items &&
        items.map((item, id) => (
          <ItemComponent key={`grid-component-${id}`} {...item} />
        ))}
    </FeedContainer>
  );
};

export default GridFeed;
