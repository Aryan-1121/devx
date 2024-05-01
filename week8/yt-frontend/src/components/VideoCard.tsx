

export function VideoCard(props: any) {
  return <div>
    <img className="rounded-xl" src="/image.png" />


    <div className="grid grid-cols-12 pt-2" >
      <div className="col-span-1">
        <img className="w-12 rounded-full" src={props.channelImage} />
      </div>
      <div className="col-span-11">
        <div >
          {/* here will come the title of the song */}
          {props.title}
        </div>
        <div className="text-gray-500 ">
          {/* Firebase */}
          {props.channelName}
        </div>
        <div className="text-gray-500 text-sm">
          {/* 5.1M views • 1 month ago */}
          {props.views} views • {props.timestamp}
        </div>
      </div>
    </div>
  </div>

}



