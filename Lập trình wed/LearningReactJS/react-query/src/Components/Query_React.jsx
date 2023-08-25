import React, { useState } from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
function Query_React() {
    const [update, setUpdate] = useState("in")
    const { isLoading, data, isError, refetch } = useQuery('data', () => {
        return axios.get(`https://newsapi.org/v2/top-headlines?country=${update}&category=business&apiKey=12c6f4f8c006432a807fcedec1165904`).then(res => res.data)
    })
    if (isLoading) {
        return <h1>Loading...</h1>
    } else if (isError) {
        return <h1>Lỗi rồi ba ơi</h1>
    }
    const clickUpdate = () => {
        if (isLoading) {
            return <h1>Loanding...</h1>
        } else {
            setUpdate("us");
            refetch();
        }
    }
    return (
        <div>
            <h1>Thong tin về tin tức mới nhất</h1>
            {data.articles.map(item => (
                <li key={item.url}>{item.author}</li>
            ))}
            <button onClick={clickUpdate}  >Update Data</button>
        </div>
    )
}

export default Query_React
