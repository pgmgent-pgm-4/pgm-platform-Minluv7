/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';
import { ROUTES } from '../../routes';

function FirstServices({ services }) {
  return (
    <div className="row">
      <h1>Service</h1>
      {services
          && services.map((service) => (
            <div className="col" key={service.id}>
              <div className="card">
                <h1 className="card-title">{service.title}</h1>
                {!!service.picture && (
                  <img src={service.picture.url} className="card-img-top" alt="avatar" />
                )}
                {!service.picture && (
                  <img src="no-img.jpg" className="card-img-top" alt="avatar" />
                )}
                <p>{service.synopsis}</p>
                <Link to={`${ROUTES.Services}/${service.id}`} className="stretched-link" />
              </div>
            </div>
          ))}
    </div>
  );
}

export default FirstServices;
