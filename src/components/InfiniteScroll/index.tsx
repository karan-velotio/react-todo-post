import React, { CSSProperties, ReactNode } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Loader from "src/components/Loader";

interface IInfiniteScrollProps {
  dataLength: number;
  next: () => void;
  hasMore: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

const InfiniteScrollBox: React.FC<IInfiniteScrollProps> = ({
  dataLength,
  next,
  hasMore,
  style,
  children,
}) => {
  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={next}
      hasMore={hasMore}
      loader={<Loader />}
      style={style}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScrollBox;
