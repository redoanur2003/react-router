import React, { use } from 'react';
import Student from './Student/Student';

const Students = ({ studentData }) => {
    const data = use(studentData)
    // console.log(data)
    return (
        <div>
            <h4>Getting all Student info</h4>
            <div className='grid grid-cols-2 gap-5 w-auto md:grid-cols-3 '>
                {data.map(studentInfo =>
                    <Student key={studentInfo.id} studentInfo={studentInfo} ></Student>
                )}
            </div>
        </div>
    );
};

export default Students;