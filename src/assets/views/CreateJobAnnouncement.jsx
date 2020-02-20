import React from 'react';
import AboutJob from '../components/CreateJob/AboutJob';
import '../../App.css';
import './CreateJobAnnouncement.css';
<<<<<<< HEAD
import RouterJob from './RouterJob';
// import { Prueba } from '../components/router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const CreateJobAnnouncement = () => {
  return (
    
=======
import ApplicantJob from '../components/CreateJob/ApplicantJob';
import DateRangeJob from '../components/CreateJob/DateRangeJob';
// import { Prueba } from '../components/router';


const CreateJobAnnouncement = () => {
  return (
>>>>>>> b0fddde7030e45d95115531a1296764b4235ec06
    <div className="create-job-view col-12">
      <section className="container-title col-12">
        Estás creando un aviso
      </section>
      <section className="announcement-container">
<<<<<<< HEAD
        <div className="job-container col-8">
          <RouterJob />
        </div>
        <div className="frecuent-job-container col-3">
          Avisos frecuentes
      </div>
      </section>
    </div>
    
=======
      <div className="job-container col-8">
        <AboutJob />
      </div>
      <div className="frecuent-job-container col-3">
        Avisos frecuentes
      </div>
      </section>
    </div>
>>>>>>> b0fddde7030e45d95115531a1296764b4235ec06
  );
};

export default CreateJobAnnouncement;
