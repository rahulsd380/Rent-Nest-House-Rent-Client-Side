import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const useMyHouse = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const { refetch, data: allHouse =[] } = useQuery({
        queryKey: ['allHouse', user?.email],
        queryFn: async () => {
         const res = await axiosPublic.get(`allHouse?email=${user?.email}`);
        return res.data;
     } 
    })
    return [allHouse, refetch]
};

export default useMyHouse;