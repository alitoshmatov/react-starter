import React, { ReactElement } from "react";
import { useQuery } from "react-query";

interface props {
  request: () => Promise<any>;
  name: string;
  children(data: any): ReactElement;
}

export const ApiProvider = ({ request, name, children }: props) => {
  const { data, error, isLoading } = useQuery<{}>([name], request);

  if (isLoading) return <>Loading...</>;
  if (error)
    return (
      <>
        Error <button>Try again</button>
      </>
    );
  if (data) return children({ data: data });
};
