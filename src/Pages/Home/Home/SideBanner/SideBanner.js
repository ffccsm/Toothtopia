import React from 'react';
import treatment from '../../../../images/treatment.png';
import PrimaryButton from '../../../../MyComponent/PrimaryButton';

const SideBanner = () => {
    return (
        <div className="hero py-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className='lg:w-1/2 rounded-md' alt='banner' />
                <div className=''>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa.</p>
                    <PrimaryButton>Details</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default SideBanner;