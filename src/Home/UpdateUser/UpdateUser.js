import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
   const {id} = useParams();
    return (
        <div>
            <h1>Update User: {id}</h1>
        </div>
    );
};

export default UpdateUser;