import { useState } from 'react';

function calcTimeSince(props) {
    const currentTime = new Date().getTime();
    const dobTime = new Date(props.dob).getTime();

    const difference = currentTime - dobTime; // in milliseconds

    const days = Math.floor(difference / (1000 * 60 * 60 *24));
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);
    return `${years} years`;
}

function AgeStats (props) {
     return (
        <div>
            <h1>This is your age: { calcTimeSince(props) } </h1>

            <iframe src="https://giphy.com/embed/1PMVNNKVIL8Ig" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/80s-vintage-excited-1PMVNNKVIL8Ig">via GIPHY</a></p>
        </div>
    )
}

export default AgeStats;