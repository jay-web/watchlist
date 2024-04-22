

import { IMovie } from "../../types";
import { StyledList } from "./style";

interface ListProps {
  movies: IMovie[];
  showCheck?: boolean;
  render: (value: IMovie, index: number, array: IMovie[]) => JSX.Element;
  thisArg?: any;
}

const List = ({ movies, render }: ListProps) => {
  return <StyledList>{movies?.map(render)}</StyledList>;
};

export default List;
