import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Avg = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("/Student.json")
            .then((res) => res.json())
            .then((data) => {
                const formatted = data.map((student) => ({
                    name: student.name,
                    Average:
                        (student.subjects.Math +
                            student.subjects.English +
                            student.subjects.Physics +
                            student.subjects.Chemistry +
                            student.subjects.Computer) /
                        5,
                }));
                setStudents(formatted);
            })
            .catch((err) => console.error("Error loading JSON:", err));
    }, []);
    console.log(students)

    return (
        <div>
            <h1>Here are Average mark line graph.</h1>
            <LineChart width={800} height={500} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'Average'}></Line>
                <Tooltip></Tooltip>
            </LineChart>

        </div>
    );
};

export default Avg;