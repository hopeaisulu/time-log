
import { useState, useEffect } from 'react';
import { LoggedTime } from '../../interfaces/TimeLog';

const LoggedTimesList = () => {
    const [loggedTimes, setLoggedTimes] = useState<LoggedTime[]>([]);

    const initialLoggedTimes: LoggedTime[] = [
        { id: 1, startTime: '10:00 AM', endTime: '11:00 AM', title: 'Title 1', date: '01/07/30' },
        { id: 2, startTime: '12:30 PM', endTime: '13:30 AM', title: 'Title 2', date: '02/07/30' },
        { id: 3, startTime: '3:45 PM', endTime: '5:00 AM', title: 'Title 3', date: '03/07/30' }
    ];

    useEffect(() => {
        setLoggedTimes(initialLoggedTimes);
    }, []);

    return (
        <div>
            <h2>Logged Times</h2>
            <ol>
                {loggedTimes.map(loggedTime => (
                    <li key={loggedTime.id}>{loggedTime.startTime} {loggedTime.endTime} {loggedTime.title}</li>
                ))}
            </ol>
        </div>
    );
};

export default LoggedTimesList;
