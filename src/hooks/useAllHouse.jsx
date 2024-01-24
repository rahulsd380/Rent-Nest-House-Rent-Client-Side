import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useAllHouse = (search, sortByCity) => {
    const axiosPublic = useAxiosPublic();
    const {refetch, isPending:isLoading, data: allHouse = []} = useQuery({
        queryKey: ['allHouse', search, sortByCity],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allHouse?search=${search}`);
            return res.data;
        }
    })
    return [allHouse, isLoading, refetch];
};

export default useAllHouse;