import React from 'react';
import '../styles/physics.css';
import PhysicsYear from './PhysicsYear';
import PhysicsCourse from './PhysicsCourse';

function Physics() {
  return (
    <div className="physics-page">
      <div className="physics-content">
      <PhysicsYear 
          header="PHYSICS BA YEAR 3 - TÜ" 
          content={<p>Here is some other content for Header 2!</p>} 
        />
         <PhysicsYear 
          header="PHYSICS BA YEAR 2 - TÜ" 
          content={
            <><PhysicsCourse
              header="Loodusteadusliku meetodi seminar"
              content={<p>Here is some other content for Header 2!</p>} /><PhysicsCourse
                header="kompleks muutuja funktsioonid"
                content={<p>Here is some other content for Header 2!</p>} />
                <PhysicsCourse
                header="Optika"
                content={<p>Here is some other content for Header 2!</p>} />
                <PhysicsCourse
                header="Optika labor"
                content={<p>Here is some other content for Header 2!</p>} />
                <PhysicsCourse
                header="Globaalfüüsika"
                content={<p>Here is some other content for Header 2!</p>} />
                <PhysicsCourse
                header="Matemaailise füüsika võrrandid"
                content={<p>Here is some other content for Header 2!</p>} />
                <PhysicsCourse
                header="Analüütiline mehaanika"
                content={<p>Here is some other content for Header 2!</p>} /></>
          } 
        />
        <PhysicsYear 
          header="PHYSICS BA YEAR 1 - TÜ" 
          content={<p>Here is some other content for Header 2!</p>} 
        />
        <PhysicsYear 
          header="PHYSICS BA YEAR 1 - RUG" 
          content={<p>Here is some other content for Header 2!</p>} 
        />
      </div>
    </div>
);
}

export default Physics;
