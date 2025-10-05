import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Student = ({ studentInfo }) => {
    // console.log(studentInfo)
    const { subjects, name, semester, credits_completed, year } = studentInfo;
    const { Math, Physics, Chemistry, Computer, English } = subjects;
    const avg = (Math + Physics + Chemistry + Computer + English) / 5;
    const [show, setShow] = useState(false);
    return (
        <div className={`${studentInfo.id % 2 !== 0 && 'bg-green-500 border-2 border-red-800' || 'bg-blue-600 border-2 border-gray-700'} mb-4 p-4 rounded-2xl text-2xl`}>
            <h3>Student name: {name}</h3>
            <h4>Year:{year}</h4>
            <p>Semester:{semester}</p>
            <h4>credits completed{credits_completed}</h4>
            <h2>Average:{avg}</h2>
            <NavLink><button onClick={() => setShow(!show)} className='btn btn-primary mt-3'> {show ? 'Close' : 'Show mark'}</button></NavLink>
        </div>
    );
};

export default Student;
// credits_completed
// :
// 18
// id
// :
// 1
// name
// :
// "Redoan"
// semester
// :
// "Spring 2025"
// subjects
// :
// Chemistry
// :
// 84
// Computer
// :
// 95
// English
// :
// 78
// Math
// :
// 87
// Physics
// :
// 90
// [[Prototype]]
// :
// Object
// year
// :
// "1st Year"