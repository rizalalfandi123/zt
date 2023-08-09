import React from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

export const useModalState = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const open = React.useMemo(() => {
    const value = queryString.parse(location.search)["modal-new-project"];

    return value === "true";
  }, [location.search]);

  const onOpenChange = (nextValue: boolean) => {
    if (nextValue) {
      navigate(queryString.stringifyUrl({ query: { "modal-new-project": true }, url: location.pathname }));
    } else {
      navigate(-1);
    }
  };

  return { open, onOpenChange };
};
