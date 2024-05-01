import { VideoCard } from "./VideoCard"


const VIDEOS = [{

  title: 'here will come the title of the song',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

},
{
  title: 'here will video 12',
  channelName: 'T series',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',
},
{

  title: 'here will come video 3 of the song',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

},
{

  title: '4th video ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

},
{

  title: 'last one ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

}, {

  title: 'last one ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

}, {

  title: 'last one ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

}, {

  title: 'last one ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

}, {

  title: 'last one ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

}, {

  title: 'last one ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

}, {

  title: 'last one ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

}, {

  title: 'last one ',
  channelName: 'Firebase',
  views: '5.1M',
  timestamp: '1 month ago',
  channelImage: '/thumb.png',

},]



export const VideoGrid = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {VIDEOS.map(video => <div>
      <VideoCard
        title={video.title}
        channelName={video.channelName}
        views={video.views}
        timestamp={video.timestamp}
        channelImage={video.channelImage}
      />
    </div>)}
  </div>
}








