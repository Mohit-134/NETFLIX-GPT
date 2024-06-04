import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UPCOMING_URL,API_OPTIONS } from "../../utils/constants";
import { addUpComingMovies} from "../../utils/moviesSlice.js";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpComingMovies = async ()=>{
        const data = await fetch (UPCOMING_URL,API_OPTIONS);
        const json = data.json();
        console.log("upcoming")
        console.log(json.results);
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(()=>{
        getUpComingMovies();
    },[]);
}

export default useUpcomingMovies;