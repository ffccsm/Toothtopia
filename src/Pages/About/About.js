import React from 'react';

const About = () => {
  return (
    <div className='px-4 md:px-10 lg:px-20'>
      <h2 className='text-3xl font-semibold text-center text-primary mt-8 mb-6 md:mb-10'>
        Development Credit
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='max-w-xs mx-auto'>
            <img
              className='rounded-t-lg w-full'
              src='https://i.ibb.co/vhMtk4s/IMG-0742.jpg'
              alt='Developer'
            />
            <div className='p-4'>
              <h2 className='text-lg font-medium'>Md Sohel Hossain</h2>
              <p className='text-sm'>Senior Developer</p>
              <div className='mt-4 flex justify-end'>
                <button className='btn btn-primary text-xs'>See More</button>
              </div>
            </div>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl'>
          <div className='max-w-xs mx-auto'>
            <img
              className='rounded-t-lg w-full'
              src='https://i.ibb.co/jrjT7kY/Parves.jpg'
              alt='Developer'
            />
            <div className='p-4'>
              <h2 className='text-lg font-medium'>Md Parvez Musharraf</h2>
              <p className='text-sm'>Full stack web developer</p>
              <div className='mt-4 flex justify-end'>
                <button className='btn btn-primary text-xs'>See More</button>
              </div>
            </div>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl'>
          <div className='max-w-xs mx-auto'>
            <img
              className='rounded-t-lg w-full'
              src='https://i.ibb.co/bBsmQN2/Arif.jpg'
              alt='Developer'
            />
            <div className='p-4'>
              <h2 className='text-lg font-medium'>Md. Ariful Islam</h2>
              <p className='text-sm'>Devops engineer</p>
              <div className='mt-4 flex justify-end'>
                <button className='btn btn-primary text-xs'>See More</button>
              </div>
            </div>
          </div>
        </div>

        <div className='card bg-base-100 shadow-xl'>
          <div className='max-w-xs mx-auto'>
            <img
              className='rounded-t-lg w-full'
              src='https://i.ibb.co/bgb7Hbm/Aysa.jpg'
              alt='Developer'
            />
            <div className='p-4'>
              <h2 className='text-lg font-medium'>Aysha</h2>
              <p className='text-sm'>Senior Devops engineer</p>
              <div className='mt-4 flex justify-end'>
                <button className='btn btn-primary text-xs'>See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
