import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useAllHouse = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, isPending:isLoading, data: allHouse = []} = useQuery({
        queryKey: ['allHouse'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allHouse');
            return res.data;
        }
    })
    return [allHouse, isLoading, refetch];
};

export default useAllHouse;