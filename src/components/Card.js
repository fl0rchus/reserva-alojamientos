import React from "react";

export default function Card(props) {
  const {
    country,
    price,
    rooms,
    photo,
    slug,
    name,
    description,
    city
  } = props.data;

  let icons = [];
  for (let i = 0; i < price; i++) icons.push(true);

  return (
    <>
      <div className="card mt-5 mr-4 mb-3">
        <img src={photo} className="card-img-top img-fluid" alt={slug} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="hotel-info">
            <li className="list-group-item d-flex">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {city}, {country}
            </li>
            <div className="info-2">
              <li className="list-group-item d-flex">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                {rooms} Habitaciones
              </li>
              <li className="list-group-item d-flex bg-dark price">
                {icons.map((item, index) => {
                  return <Icon key={`${index}`} />;
                })}
              </li>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex align-center justify-content-center">
          <p className="btn btn-success">Reservar</p>
        </div>
      </div>
    </>
  );
}

function Icon() {
  return (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
