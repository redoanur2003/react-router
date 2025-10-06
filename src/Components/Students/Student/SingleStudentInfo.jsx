import React from 'react';
import { useLoaderData } from 'react-router';
const SingleStudentInfo = () => {

    const student = useLoaderData();
    // console.log(student);
    const { subjects, name, semester, credits_completed, year } = student;
    const { Math, Physics, Chemistry, Computer, English } = subjects;
    return (
        <>
            <div className={`${student.id % 2 !== 0 && 'bg-green-500 border-2 border-red-800' || 'bg-blue-600 border-2 border-gray-700'} mb-4 p-4 rounded-2xl text-2xl`}>
                <h2 className='mb-4'>Single student info</h2>
                <h3>Student name: {name}</h3>
                <h4>Year:{year}</h4>
                <p>Semester:{semester}</p>
                <h4>credits completed{credits_completed}</h4>
                <div className='grid grid-cols-3 gap-3'>
                    <h3>Chemistry: {Chemistry}</h3>
                    <h3>Physics: {Physics} </h3>
                    <h3> Math: {Math}</h3>
                    <h3>Computer: {Computer}</h3>
                    <h3>English: {English}</h3>

                </div>
            </div>
        </>
    );
};

export default SingleStudentInfo;