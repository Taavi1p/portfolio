import React, { useEffect } from 'react';
import '../styles/physics.css';
import PhysicsYear from './PhysicsYear';
import PhysicsCourse from './PhysicsCourse';
import PdfLink from './PdfLink'; 

import PDF1 from "../images/physics/Year_3/KF/MD_homework_Taavi.pdf"
import PDF2 from "../images/physics/Year_3/KF/homework_2.pdf"

import PDF3 from "../images/physics/Year_3/MF/kt2.pdf"
import PDF4 from "../images/physics/Year_3/MF/kt3.pdf"
import PDF5 from "../images/physics/Year_3/MF/kt4.pdf"
import PDF6 from "../images/physics/Year_3/MF/kt5.pdf"

import PDF7 from "../images/physics/Year_2/complex/kt1.pdf"
import PDF8 from "../images/physics/Year_2/complex/kt2.pdf"
import PDF9 from "../images/physics/Year_2/complex/kt3.pdf"
import PDF10 from "../images/physics/Year_2/complex/kt4.pdf"

//Calculus 1
import PDF11 from "../images/physics/RUG/Calculus 1/final.pdf"
import PDF12 from "../images/physics/RUG/Calculus 1/midterm.pdf"

//Mechanics and relativity
import PDF13 from "../images/physics/RUG/Relativity/Daan letter.png"
import PDF14 from "../images/physics/RUG/Relativity/Exam 1_2021-2022-solutions.pdf"
import PDF15 from "../images/physics/RUG/Relativity/Exam 1_2021-2022.pdf"
import PDF16 from "../images/physics/RUG/Relativity/Exam 2_2021-2022.pdf"
import PDF17 from "../images/physics/RUG/Relativity/Exam 2, solution manual(2).pdf"
import PDF18 from "../images/physics/RUG/Relativity/failing_average.png"
import PDF19 from "../images/physics/RUG/Relativity/grade problems.png"
import PDF20 from "../images/physics/RUG/Relativity/low_averge.png"
import PDF21 from "../images/physics/RUG/Relativity/M&R_R_Resit_Rubric_2022-2023.pdf"
import PDF22 from "../images/physics/RUG/Relativity/M&R_R3_rubric.pdf"
import PDF23 from "../images/physics/RUG/Relativity/R1 2022-23.pdf"
import PDF24 from "../images/physics/RUG/Relativity/Rubric_R2_2022-2023b.pdf"

import PDF25 from "../images/physics/RUG/Calculus 1/midterm.pdf"


function Physics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="physics-page">
      <div className="physics-content">
      <PhysicsYear 
          header="PHYSICS BA YEAR 3 - TÜ" 
          content={
            <><PhysicsCourse
              header="Kompuuterfüüsika"
              content={<><p>Lahe aine, aga mitte väga tõsine.</p>
              <PdfLink url={PDF1} text="Kodutöö 1" />
              <PdfLink url={PDF2} text="Kodutöö 2" /></>
              } />
              <PhysicsCourse
                header="Mikromaailma füüsika"
                content={<><p>Lahe aine, enamjaolt hästi õpetatud.</p>
                  <PdfLink url={PDF3} text="Kodutöö 2" />
                  <PdfLink url={PDF4} text="Kodutöö 3" />
                  <PdfLink url={PDF5} text="Kodutöö 4" />
                  <PdfLink url={PDF6 } text="Kodutöö 5" />
                  </>
                } />
                </>
          } 
        />
         <PhysicsYear 
          header="PHYSICS BA YEAR 2 - TÜ" 
          content={
            <><PhysicsCourse
              header="Loodusteadusliku meetodi seminar 2"
              content={<p>Hea aine, et leida bakatöö juhendaja. Võtab väga palju aega kuid otseseid kodutöid pole.</p>} /><PhysicsCourse
                header="kompleksmuutuja funktsioonid"
                content={<><p>Lahe teema, palju mahukam kui 3 EAP.</p>
                  <PdfLink url={PDF7} text="Kodutöö 1" />
                  <PdfLink url={PDF8} text="Kodutöö 2" />
                  <PdfLink url={PDF9} text="Kodutöö 3" />
                  <PdfLink url={PDF10} text="Kodutöö 4" />
                  </>
                } />
                <PhysicsCourse
                header="Optika"
                content={<p>Hea kursus, hästi õpetetud. Kontrolltööd väga lihtsad. Eksam liiga loengute spetsiifiline. KOntrolltäädest pole pilti kahjuks kuna neid ei saanud tagasi.</p>} />
                <PhysicsCourse
                header="Optika labor"
                content={<p>Kursus, mis võtab kõge rohkem aega 4. semestril. Soovitan väga varakult kõik ära teha.</p>} />
                <PhysicsCourse
                header="Globaalfüüsika"
                content={<p>Huvitav kursus, mitte super raske.</p>} />
                <PhysicsCourse
                header="Matemaailise füüsika võrrandid"
                content={<p>Mõtetult spetsiifilised teemad, mida saab ainult slaididelt õppida, mis ei ole heal tasemel. Kursus peaks olema rahvusvahelise õpiku põhjal.</p>} />
                <PhysicsCourse
                header="Analüütiline mehaanika"
                content={<p>Lahe teema, salidid ei ole mugavad õppematerjalid. peab ise materjale leidma, mida on tegelt palju.</p>} /></>
          } 
        />
        <PhysicsYear 
          header="PHYSICS BA YEAR 1 - TÜ" 
          content={
            <><PhysicsCourse
              header="Materjaliteaduse ülevaate kursus"
              content={<p>Pigem lihtne kursus. Kontrolltöö küsimused piisavalt üldised, et ei pea õppima loengute põhjal.</p>} />
              <PhysicsCourse
                header="Keemia alused"
                content={<p>Hea aine, hästi õpetatud. Meie aastal oli 3. kontrollöö väga raske.</p>} />
                <PhysicsCourse
                header="Labori praktikum - keemia"
                content={<p>Pigem raske kursus.</p>} />
                <PhysicsCourse
                header="Tõenäosusteooria ja matemaatiline statistika"
                content={<p>Keskmise raskusastmega kursus, head veebileongud, pole mõtet kohale minna. Teine kontrolltöö palju raskem kui esimene.</p>} />
              </>
          } 
        />
        <PhysicsYear 
          header="PHYSICS BA YEAR 1 - RUG" 
          content={
            <><PhysicsCourse
              header="Calculus 1"
              content={<><p>Very difficult course for the first period but obiously very necessary. The class average failed the first test.</p>
                <PdfLink url={PDF11} text="final" />
                <PdfLink url={PDF12} text="midterm" /></>
              } />
              <PhysicsCourse
                header="Relativity"
                content={<><p>The hardest courses I have ever taken, amplified by the fact it was on the first period.</p>
                  <PdfLink url={PDF13} text="Daan letter" />
                  <PdfLink url={PDF14} text="exam 1 solutions" />
                  <PdfLink url={PDF15} text="exam 1" />
                  <PdfLink url={PDF16} text="exam 2" />
                  <PdfLink url={PDF17} text="exam 2 solutions" />
                  <PdfLink url={PDF18} text="failing class average" />
                  <PdfLink url={PDF19} text="grade problems" />
                  <PdfLink url={PDF20} text="class average" />
                  <PdfLink url={PDF21} text="resit" />
                  <PdfLink url={PDF22} text="exam 3 " />
                  <PdfLink url={PDF23} text="exam 1" />
                  <PdfLink url={PDF24} text="exam 2" />
                  </>
                } />
                <PhysicsCourse
                header="Mechanics"
                content={<p>Also incredibly hard course.</p>} />
                <PhysicsCourse
                header="Physics lab 1"
                content={<p>Took ridicoulous amount of time. Learned a lot about scientific writing.</p>} />
                <PhysicsCourse
                header="Calculus 2"
                content={<p>Great course. Amazingly taught. Hard exams.</p>} />
                <PhysicsCourse
                header="Linear Algebra"
                content={<p>Enjoyed a lot! not super hard.</p>} />
                <PhysicsCourse
                header="computational methods"
                content={<p>Learned about graphs and best-fit lines. Most of the skills are now useless due to chatGPT.</p>} />
                <PhysicsCourse
                header="Physics of Modern technology"
                content={<p>Hard course, badly taught. No book, just based on slides.</p>} />
                <PhysicsCourse
                header="Electricity and Magnetism"
                content={<p>Great course anazingly taught. Great professors!</p>} />
                <PhysicsCourse
                header="Mathematical physics"
                content={<p>Not well taught, quite boring course.</p>} />
                <PhysicsCourse
                header="Physics Lab 2"
                content={<p>Great course, we chose too hard of a project tho.</p>} /></>
          } 
        />
      </div>
    </div>
);
}

export default Physics;