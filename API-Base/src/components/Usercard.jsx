import React from "react";

const Usercard = (props) => {
  console.log(props.data);

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center ">
        <img className="rounded-full" src={props.data.picture.large} />
      </div>

      <h1 className="text-3xl font-semibold mt-10">
        {props.data.name.title} {props.data.name.first} {props.data.name.last}
      </h1>
      <h2 className="text-xl font-semibold mt-2">{props.data.phone}</h2>
      <h2 className="text-xl font-semibold mt-1">{props.data.email}</h2>
      <h2 className="mt-1 font-semibold ">Age - {props.data.dob.age}</h2>
      <p className="mt-1 font-semibold ">
        {props.data.location.state},{props.data.location.city}-
        {props.data.location.postcode}
      </p>
      <p className="mt-1 font-semibold ">Ragisterd from last  {props.data.registered.age} years</p>
    </div>
  );
};
export default Usercard;
