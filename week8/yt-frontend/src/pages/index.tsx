
// import { VideoCard } from '../components/VideoCard'        // this works too 
import { VideoCard } from '@/components/VideoCard'
import { VideoGrid } from '../components/VideoGrid'
import AppBar from '@/components/AppBar'

export default function Home() {
  return (
    <div>
      {/* <VideoCard
        title={'here will come the title of the song'}
        channelName={'Firebase'}
        views={'5.1M'}
        timestamp={'1 month ago'}
        channelImage={'/thumb.png'}

      /> */}
      <AppBar />
      <VideoGrid />
    </div>


  )
}
