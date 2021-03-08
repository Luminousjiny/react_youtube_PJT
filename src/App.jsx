import './app.module.css';
import { useEffect, useState } from 'react';
import VideoLlist from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAIAN4fWbhQxYcuLU-cnjAGihX695m5azE", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []); // 마운트가 되었을 때만 호출
  return (
    <>
      <SearchHeader />
      <VideoLlist videos={videos} />
    </>);
}

export default App;
