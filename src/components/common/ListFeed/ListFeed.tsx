import React from "react";

import { FeedContainer } from "./styles";
import IListFeedProps from "./types";

const ListFeed = (props: IListFeedProps) => {
  const { items, ItemComponent } = props;

  return (
    <FeedContainer>
      {items &&
        items.map((item, id) => (
          <ItemComponent key={`list-component-${id}`} {...item} />
        ))}
    </FeedContainer>
  );
};

export default ListFeed;
