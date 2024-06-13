import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useDebounce } from "@/hooks/useDebounce";
import type { Word } from "fwew.js";
import { oddballs } from "fwew.js";
import { useEffect, useState } from "react";

export function useOddballs() {
  const { resultsLanguage } = useResultsLanguageContext();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Word[][]>([]);
  const [resultCount, setResultCount] = useState(0);
  const debounce = useDebounce();
  let abortController = new AbortController();

  const execute = async () => {
    setLoading(true);

    let data: Word[][];

    try {
        data = await oddballs({
          signal: abortController.signal,
        });
    } catch (e: any) {
      setResults([]);
      setResultCount(0);
      setLoading(false);
      return;
    }

    setResults(data);
    setResultCount(
      // number of actual results = total number of words - number of "blank header words"
      data.reduce((acc, cur) => acc + cur.length, 0) - data.length
    );
    setLoading(false);
  };

  const cancel = () => {
    abortController.abort();
    abortController = new AbortController();
    setLoading(false);
  };

  useEffect(() => {
    debounce(execute);
    return cancel;
  }, [resultsLanguage]);

  return {
    results,
    resultCount,
    loading,
    execute,
    cancel,
  } as const;
}
