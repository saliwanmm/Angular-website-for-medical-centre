import { Routes } from '@angular/router';

import { HomePage } from './components/home-page/home-page';
import { ClinicServices } from './components/clinic-services/clinic-services';
import { About } from './components/about/about';
import { Contacts } from './components/contacts/contacts';
import { Consultations } from './components/consultations/consultations';
import { ConsultCardiolog } from './components/consult-cardiolog/consult-cardiolog';
import { ConsultDermatolog } from './components/consult-dermatolog/consult-dermatolog';
import { ConsultNevrolog } from './components/consult-nevrolog/consult-nevrolog';
import { ConsultPsihiatr } from './components/consult-psihiatr/consult-psihiatr';
import { ConsultPulmanolog } from './components/consult-pulmanolog/consult-pulmanolog';
import { ConsultTerapevt } from './components/consult-terapevt/consult-terapevt';
import { EkgExam } from './components/ekg-exam/ekg-exam';
import { UltrasoundExam } from './components/ultrasound-exam/ultrasound-exam';
import { HolterMonitoring } from './components/holter-monitoring/holter-monitoring';
import { BloodTest } from './components/blood-test/blood-test';
import { IridodiagnosticExam } from './components/iridodiagnostic-exam/iridodiagnostic-exam';

export const routes: Routes = [
    { path: "", component: HomePage },
    { path: "services", component: ClinicServices },
    { path: "services/ekg-exam", component: EkgExam },
    { path: "services/ultrasound-exam", component: UltrasoundExam },
    { path: "services/holter-monitoring", component: HolterMonitoring },
    { path: "services/blood-test", component: BloodTest },
    { path: "services/iridodiagnostic-exam", component: IridodiagnosticExam },
    { path: "consultations", component: Consultations },
    { path: "consultations/cardiolog", component: ConsultCardiolog },
    { path: "consultations/dermatolog", component: ConsultDermatolog },
    { path: "consultations/nevrolog", component: ConsultNevrolog },
    { path: "consultations/psihiatr", component: ConsultPsihiatr },
    { path: "consultations/pulmanolog", component: ConsultPulmanolog },
    { path: "consultations/terapevt", component: ConsultTerapevt },
    { path: "about", component: About },
    { path: "contacts", component: Contacts },
    { path: "**", redirectTo: "" },
];
