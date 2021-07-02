import Proptypes from "prop-types";
import { useEffect, useRef } from "react";

// to change video src dinamically we should update the src prop of source then callthe dom video method load() 
// video component, allows dinamically changing the src correctly calling the load dom method after changing src
function Video({ url, className }) {
  const videoRef = useRef();
  const previousUrl = useRef(url);

  useEffect(() => {
    if (previousUrl.current === url) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
      console.log(videoRef.current.error);
    }

    previousUrl.current = url;
  }, [url]);

  return (
    <video ref={videoRef} className={className} controls autoPlay>
      <source src={url} />
      Sorry but your browser does not support HTML5 Video.
    </video>
  );
}

Video.propTypes = {
  src: Proptypes.string,
  class: Proptypes.string
};

export default Video;
