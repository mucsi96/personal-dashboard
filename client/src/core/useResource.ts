import { useEffect, useState } from "react";

export function useResource<T>({
  url,
  method = "GET"
}: {
  url: string;
  method?: string;
}): [T | undefined, Error | undefined] {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.status === 200) {
          setData(json);
        } else {
          setError(new Error(json.message));
        }
      } catch (e) {
        setError(e);
      }
    })();
  }, [url]);

  return [data, error];
}
