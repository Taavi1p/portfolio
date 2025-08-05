import React, { useEffect } from 'react';
import '../styles/physics.css';
import PhysicsYear from './PhysicsYear';
import PhysicsCourse from './PhysicsCourse';
import PdfLink from './PdfLink'; 
import PageWrapper from "./PageWrapper";

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

//mechanics
import PDF25 from "../images/physics/RUG/Mechanics/exam_M1.pdf"
import PDF26 from "../images/physics/RUG/Mechanics/exam_M2.pdf"
import PDF27 from "../images/physics/RUG/Mechanics/exam_M3.pdf"
import PDF28 from "../images/physics/RUG/Mechanics/resit.pdf"

//calculus 2
import PDF29 from "../images/physics/RUG/Calculus 2/MidtermExam.pdf"
import PDF30 from "../images/physics/RUG/Calculus 2/FinalExam.pdf"
import PDF31 from "../images/physics/RUG/Calculus 2/ResitExam.pdf"
import PDF32 from "../images/physics/RUG/Calculus 2/ResitExam-Solutions.pdf"

//Linear algebra
import PDF33 from "../images/physics/RUG/Linear algebra/midterm.pdf"
import PDF34 from "../images/physics/RUG/Linear algebra/final.pdf"
import PDF35 from "../images/physics/RUG/Linear algebra/mock_midterm.pdf"
import PDF36 from "../images/physics/RUG/Linear algebra/mock_final.pdf"

//em
import PDF37 from "../images/physics/RUG/EM/test_1.pdf"
import PDF38 from "../images/physics/RUG/EM/test_2.pdf"
import PDF39 from "../images/physics/RUG/EM/test_3.pdf"
import PDF40 from "../images/physics/RUG/EM/answers_5.pdf"
import PDF41 from "../images/physics/RUG/EM/answers_6.pdf"
import PDF42 from "../images/physics/RUG/EM/answers_2.pdf"

//optika labor
import PDF43 from "../images/physics/Year_2/labor/1.2.pdf"
import PDF44 from "../images/physics/Year_2/labor/2.1.pdf"
import PDF45 from "../images/physics/Year_2/labor/4.1.pdf"
import PDF46 from "../images/physics/Year_2/labor/5.4.pdf"
import PDF47 from "../images/physics/Year_2/labor/6.1.pdf"
import PDF48 from "../images/physics/Year_2/labor/7.2.pdf"
import PDF49 from "../images/physics/Year_2/labor/8.4.pdf"

//kvant
import PDF50 from "../images/physics/Year_3/kvant/KT_1.pdf"
import PDF51 from "../images/physics/Year_3/kvant/KT_2.pdf"
import PDF52 from "../images/physics/Year_3/kvant/KT_3.pdf"
import PDF53 from "../images/physics/Year_3/kvant/KT_4.pdf"
import PDF54 from "../images/physics/Year_3/kvant/KT_5.pdf"
import PDF55 from "../images/physics/Year_3/kvant/KT_6.pdf"
import PDF56 from "../images/physics/Year_3/kvant/KT_7.pdf"
import PDF57 from "../images/physics/Year_3/kvant/kontrolltöö_1.pdf"
import PDF58 from "../images/physics/Year_3/kvant/kontrolltöö_2.jpg"
import PDF59 from "../images/physics/Year_3/kvant/eksam.jpg"

//tuum
import PDF60 from "../images/physics/Year_3/tuum/Alfaspektromeetria.pdf"
import PDF61 from "../images/physics/Year_3/tuum/Gammaspektromeetria.pdf"
import PDF62 from "../images/physics/Year_3/tuum/Käsimõõteseadmed.pdf"
import PDF63 from "../images/physics/Year_3/tuum/LSC.pdf"
import PDF64 from "../images/physics/Year_3/tuum/Modelleerimine.pdf"

//matfüs
import PDF65 from "../images/physics/Year_3/matfüs/KT_3.pdf"
import PDF66 from "../images/physics/Year_3/matfüs/KT_4.pdf"
import PDF67 from "../images/physics/Year_3/matfüs/eksam.pdf"

//bakatöö
import PDF68 from "../images/physics/thesis/bachelors_thesis.pdf"
import PDF69 from "../images/physics/thesis/thesis_presentation.pdf"  

//termodünaamika
import PDF70 from "../images/physics/Year_3/termo/konspekt.pdf"
import PDF71 from "../images/physics/Year_3/termo/termo_kontrolltöö.pdf"
import PDF72 from "../images/physics/Year_3/termo/SF_kontrolltöö.pdf"
import PDF73 from "../images/physics/Year_3/termo/eksam.pdf"

function Physics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
    <div className="physics-page">
      <div className="physics-content">
        <PhysicsYear 
          header="BACHELOR'S THESIS" 
          content={
          <><div className='thesis-content'>
              <div className='thesis-text'>Siseelektronide seoseenergiate arvutamine pinnastruktuurides</div>
              <PdfLink url={PDF68} text="thesis draft (est)" />
              <PdfLink url={PDF69} text="thesis presentation (eng)" />
            </div>
          </>
          }
        ></PhysicsYear>
      <PhysicsYear 
          header="PHYSICS BA YEAR 3 - TÜ" 
          content={
            <><PhysicsCourse
              header="Termodünaamika ja statistiline füüsika"
              content={<><p>Raske aine, halvad materjalid, halvasti õpetetud.</p>
              <PdfLink url={PDF70} text="konspekt"/>
              <PdfLink url={PDF71} text="termo_KT"/>
              <PdfLink url={PDF72} text="stat_KT"/>
              <PdfLink url={PDF73} text="eksam"/></>
              } />
            <PhysicsCourse
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
                <PhysicsCourse
                header="Kvantmehaanika"
                content={<><p>Nii teistsugune kogu ülejäänud füüsikast. Juba Schrodingeri võrrandist aru saamine võtab nii palju aega.</p>
                      <PdfLink url={PDF50} text="Kodutöö 1" />
                      <PdfLink url={PDF51} text="Kodutöö 2" />
                      <PdfLink url={PDF52} text="Kodutöö 3" />
                      <PdfLink url={PDF53} text="Kodutöö 4" />
                      <PdfLink url={PDF54} text="Kodutöö 5" />
                      <PdfLink url={PDF55} text="Kodutöö 6" />
                      <PdfLink url={PDF56} text="Kodutöö 7" />
                      <PdfLink url={PDF57} text="Kontrolltöö 1" />
                      <PdfLink url={PDF58} text="Kontrolltöö 2" />
                      <PdfLink url={PDF59} text="eksam" />
                  </>  
                }/>
                <PhysicsCourse
                header="Tuumafüüsika eksperimentaalmeetodid"
                content={<><p>Väga huvitav aine, protokollid jäid tihti arusaamatuks, mida täpselt mõõdan ja arvutan.</p>
                  <PdfLink url={PDF60} text="Alfaspektromeetria" />
                  <PdfLink url={PDF61} text="Gammaspektromeetria" />
                  <PdfLink url={PDF62} text="Käsimõõteseadmed" />
                  <PdfLink url={PDF63} text="LSC" />
                  <PdfLink url={PDF64} text="Modelleerimine" />
                </>
              }/>
              </>}/>
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
                content={<p>Hea kursus, hästi õpetetud. Kontrolltööd väga lihtsad. Eksam liiga loengute spetsiifiline. Kontrolltöödest pole pilti kahjuks kuna neid ei saanud tagasi.</p>} />
                <PhysicsCourse
                header="Optika labor"
                content={<><p>Kursus, mis võtab kõge rohkem aega 4. semestril. Soovitan väga varakult kõik ära teha.</p>
                  <PdfLink url={PDF43} text="protokoll 1.2" />
                  <PdfLink url={PDF44} text="protokoll 2.1" />
                  <PdfLink url={PDF45} text="protokoll 4.1" />
                  <PdfLink url={PDF46} text="protokoll 5.4" />
                  <PdfLink url={PDF47} text="protokoll 6.1" />
                  <PdfLink url={PDF48} text="protokoll 7.2" />
                  <PdfLink url={PDF49} text="protokoll 8.4" />
                  </>
                } />
                <PhysicsCourse
                header="Globaalfüüsika"
                content={<p>Huvitav kursus, mitte super raske.</p>} />
                <PhysicsCourse
                header="Matemaailise füüsika võrrandid"
                content={<><p>Mõtetult spetsiifilised teemad, mida saab ainult slaididelt õppida, mis ei ole heal tasemel. Kursus peaks olema rahvusvahelise õpiku põhjal.</p>
                <PdfLink url={PDF65} text="Kodutöö_3" />
                <PdfLink url={PDF66} text="Kodutöö_4" />
                <PdfLink url={PDF67} text="eksam" />
                </>
                } />
                <PhysicsCourse
                header="Analüütiline mehaanika"
                content={<p>Lahe teema, salidid ei ole mugavad õppematerjalid. peab ise materjale leidma, mida on tegelt palju.</p>} />
                <PhysicsCourse
                header="Insenerigraafika"
                content={<p>Lahe ja kasulik aine</p>}/></>
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
                <PhysicsCourse
                header="Füüsikaline maailmapilt"
                content={<p>Huvitavad loengud, lihtsad testid.</p>}/>
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
                content={<><p>Also incredibly hard course.</p>
                 <PdfLink url={PDF25} text="exam_1"/>
                 <PdfLink url={PDF26} text="exam_2" />
                 <PdfLink url={PDF27} text="exam_3" />
                 <PdfLink url={PDF28} text="resit" />
                 </>} />
                <PhysicsCourse
                header="Physics lab 1"
                content={<p>Took ridicoulous amount of time. Learned a lot about scientific writing.</p>} />
                <PhysicsCourse
                header="Calculus 2"
                content={<><p>Great course. Amazingly taught. Hard exams.</p>
                 <PdfLink url={PDF29} text="midterm"/>
                 <PdfLink url={PDF30} text="exam" />
                 <PdfLink url={PDF31} text="resit" />
                 <PdfLink url={PDF32} text="resit_solutions" />
                 </>} />
                <PhysicsCourse
                header="Linear Algebra"
                content={<><p>Enjoyed a lot! not super hard.</p>
                 <PdfLink url={PDF33} text="midterm"/>
                 <PdfLink url={PDF34} text="final" />
                 <PdfLink url={PDF35} text="mock_midterm" />
                 <PdfLink url={PDF36} text="mock_final" />
                 </>} />
                <PhysicsCourse
                header="computational methods"
                content={<p>Learned about graphs and best-fit lines. Most of the skills are now useless due to chatGPT.</p>} />
                <PhysicsCourse
                header="Physics of Modern technology"
                content={<p>Hard course, badly taught. No book, just based on slides.</p>} />
                <PhysicsCourse
                header="Electricity and Magnetism"
                content={<><p>Great course amazingly taught. Great professors!</p>
                 <PdfLink url={PDF37} text="test 1"/>
                 <PdfLink url={PDF38} text="test 2" />
                 <PdfLink url={PDF39} text="test 3" />
                 <PdfLink url={PDF40} text="test 5" />
                 <PdfLink url={PDF41} text="test 6" />
                 <PdfLink url={PDF42} text="test 2 answres" />
                 </>} />
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
    </PageWrapper>
);
}

export default Physics;
