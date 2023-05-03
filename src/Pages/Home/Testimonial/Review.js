import React from 'react';

const Review = ({ review }) => {
    const { name, location, rev, img } = review;
    return (
        <div className="card hover:bg-base-100 hover:shadow-2xl border border-1 duration-300">
            <div className="card-body">

                <p className='mb-2'>{rev}</p>
                <div className="flex items-align">
                    <div className="mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img}  alt='img'/>
                        </div>

                    </div>
                    <div className=''>
                        <h5 className='font-bold'>{name}</h5>
                        <p>{location}</p>
                        <div className="rating py-1 rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;