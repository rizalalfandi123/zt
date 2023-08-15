import React from "react"
import { useRef } from "react";
import LoadingBar, { type LoadingBarRef } from "react-top-loading-bar";

export const LazyLoadIndicator = () => {

  const ref = useRef<LoadingBarRef | null>(null)

  React.useEffect(() => {
    if (ref.current) {
      ref.current.staticStart()
    }
  }, [ref])

  return <LoadingBar height={4} color="#f11946" ref={ref} />;
};
