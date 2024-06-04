import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpComingMovies from "./hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GptSearch";


const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpComingMovies();

 const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

 return (
  
  <div>
    <Header />
    {showGptSearch ? (
      <GPTSearch />
    ) : (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}
  </div>
  );
};
export default Browse;