import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useFeaturedHouse = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, isPending:isLoading, data: featuredHouse = []} = useQuery({
        queryKey: ['featuredHouse'],
        queryFn: async () => {
            const res = await axiosPublic.get('/featuredHouse');
            return res.data;
        }
    })
    return [featuredHouse, isLoading, refetch];
};

export default useFeaturedHouse;