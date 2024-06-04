import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { URL,API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/moviesSlice";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(URL, API_OPTIONS)
      const json = await data.json();
      console.log("Now playing");
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;