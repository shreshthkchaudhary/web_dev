import { useRef } from "react"


function Trial(){
    const ref=useRef(null)
    console.log(ref)

    const handlePlay = () => {
        return ref.current.play();
    };

    const handlePause = () => {
        return ref.current.pause();
    };

    return(
        <div>
            <video
            ref={ref}
            controls
            src="https://www.pexels.com/download/video/36520697/"
            height={300}
            >
            </video>
            <br />
            <button onClick={handlePause}>pause</button>
            <button onClick={handlePlay}>play</button>


        </div>
    )
}
export default Trial