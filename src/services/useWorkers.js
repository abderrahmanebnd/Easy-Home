import { useQuery } from "@tanstack/react-query";
import { getWorkers } from "./apiCharts";

export function useWorkers() {
  const {
    isLoading,
    data: workers,
    error,
  } = useQuery({
    queryKey: ["workers"],
    queryFn: () => getWorkers(),
  });
  return { isLoading, error, workers };
}
