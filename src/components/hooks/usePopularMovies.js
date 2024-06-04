import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { POPULAR_URL,API_OPTIONS } from "../../utils/constants";
import { addPopularMovies } from "../../utils/moviesSlice";


const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch(POPULAR_URL, API_OPTIONS)
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
      getPopularMovies();
    },[]);
}

export default usePopularMovies;