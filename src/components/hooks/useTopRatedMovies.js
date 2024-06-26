import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TOP_RATED_URL,API_OPTIONS } from "../../utils/constants";
import { addTopRatedMovies } from "../../utils/moviesSlice";


const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
      const data = await fetch(TOP_RATED_URL, API_OPTIONS)
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    }
    useEffect(()=>{
      getTopRatedMovies();
    },[]);
}


export default useTopRatedMovies;