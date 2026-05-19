import React from 'react';

const MyIdeasPage = () => {
    return (
        <div className='container mx-auto'>
           <div>
             <h1 className="text-3xl font-bold  mt-10">My Ideas</h1>
            <p>Manage and edit your submitted startup concepts.</p>
           </div>
           <div className='py-10'>
                <p className="text-sm text-center ">You have to shared any ideas yet</p>
                <p className="text-sm text-blue-500 text-center ">Submit your first idea</p>
           </div>
        </div>
    );
};

export default MyIdeasPage;