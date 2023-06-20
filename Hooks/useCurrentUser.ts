import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR("/api/currentUser", fetcher);
    return {
        data,
        isLoading,
        error,
        mutate
    }
}

export default useCurrentUser