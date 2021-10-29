import { FunctionComponent } from "react";

export default interface IGridFeedProps {
  items: any[];
  ItemComponent: FunctionComponent<any>;
  columns?: number;
}
