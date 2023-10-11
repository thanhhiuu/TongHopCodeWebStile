import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card.js';

function Tags({ tags }) {

    const [video, setVideos] = useState([]);


    useEffect(() => {
        const fetch = async () => {
            try {
                const tag = await axios.get(`/video/tags?tags=${tags}`);
                setVideos(tag.data);
                console.log(tag.data);
            } catch (error) {
                console.log(" UseFetch - Tags" + error);
            }
        }
        fetch();
    }, [tags])
    return (
        <>
            {video.map((video) => (
                <Card type="sm" video={video} key={video._id} />
            ))}
        </>
    )
}

export default Tags
