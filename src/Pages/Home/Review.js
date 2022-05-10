import React from "react";


const Review = ({ review }) => {
  const { name, state, description, img } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={img} />
            </div>
          </div>
          <div>
          <h2 className="card-title">{name}</h2>
          <p>{state}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
