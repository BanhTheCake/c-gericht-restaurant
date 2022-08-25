import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import meal from '../../assets/meal.mp4';
import './Intro.scss';
import { GiPauseButton } from 'react-icons/gi';
import { BsFillPlayFill } from 'react-icons/bs';
import { debounce } from 'lodash';

const Intro = () => {
    const [isPlay, setIsPlay] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const videoRef = useRef(null);
    const hoverRef = useRef(null);
    const clearTimeHover = useRef(null);

    const playing = useCallback(() => {
        setIsPlay(true);
    }, [setIsPlay]);

    const pause = useCallback(() => {
        setIsPlay(false);
    }, [setIsPlay]);

    useEffect(() => {
        const videoCurrent = videoRef.current;
        videoCurrent.addEventListener('play', playing);
        videoCurrent.addEventListener('pause', pause);

        return () => {
            videoCurrent.removeEventListener('play', playing);
            videoCurrent.removeEventListener('pause', pause);
        };

    }, [playing, pause]);

    // const handleHover = useCallback(() => {
    //     if (clearTimeHover.current) clearTimeout(clearTimeHover.current);

    //     setIsHover(true);
    //     clearTimeHover.current = setTimeout(() => {
    //         setIsHover(false);
    //     }, 2000);

    // }, []);

    const handleHoverDebounce = useMemo(() => {
        const func = () => {
            setIsHover(false)
        }
        return debounce(func, 1000)
    }, [])

    const handleHover = useCallback(() => {
        setIsHover(true);
        handleHoverDebounce()
    }, [handleHoverDebounce]);

    const handleMouseOut = useCallback(() => {
      if (clearTimeHover.current) clearTimeout(clearTimeHover.current)

      setIsHover(false)

    }, [])

    useEffect(() => {

      const hoverCurrent = hoverRef.current
      hoverCurrent.addEventListener('mousemove', handleHover);
      hoverCurrent.addEventListener('mouseleave', handleMouseOut);

      return () => {
        hoverCurrent.removeEventListener('mousemove', handleHover);
        hoverCurrent.removeEventListener('mouseleave', handleHover);
      };

    }, [handleHover]);

    const handleClick = () => {
        if (isPlay) {
            videoRef.current.pause();

        } else {
            videoRef.current.play();
        }
    };

    return (
        <section id="INTRO">
            <div ref={hoverRef} className="intro__video">
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    width="100%"
                    height="100%"
                    src={meal}
                    type="video/mp4"
                ></video>
                <div className={`intro__overlay ${isHover ? 'active' : ''}`}>
                    <div className="intro__circle" onClick={handleClick}>
                        {isPlay ? <BsFillPlayFill /> : <GiPauseButton />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
