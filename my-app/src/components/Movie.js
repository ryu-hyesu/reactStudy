// 키가 정의되어 있지 않고, 여러 변수가 없기 때문에 오류 이는 App.js에서 받아올 것들.
import ProTypes from "prop-types";
import React from 'react';

function Movie({coverImage, title, summary, genres}){
    return (
        <div>
            <img src={coverImage}></img>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
            </ul>
        </div>
    );
}

Movie.prototype ={
    coverImage: ProTypes.string.isRequired,
    title: ProTypes.string.isRequired,
    summary: ProTypes.string.isRequired,
    genres: ProTypes.arrayOf(ProTypes.string).isRequired,
}

export default Movie;