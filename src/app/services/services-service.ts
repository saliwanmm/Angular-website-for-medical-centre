import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  services = [
    {
    title: "ЕКГ обстеження",
    description: "Діагностика роботи серця та виявлення порушень ритму.",
    image: "assets/images/ekg/ekg.jpg",
    route: "/services/ekg-exam",
    seo: "ЕКГ обстеження",
  },
    {
    title: "Eхоскопічне дослідження",
    description: "Відображає розміри серця, відображає стан клапанів.",
    image: "assets/images/ultrasound/eho.jpg",
    route: "/services/ultrasound-exam",
    seo: "Ехоскопія",
  },
    {
    title: "Холтерівське моніторування",
    description: "Добове спостереження роботи серця.",
    image: "assets/images/holter/holter.jpg",
    route: "/services/holter-monitoring",
    seo: "Холтер",
  },
    {
    title: "Аналіз крові",
    description: "Аналіз крові на глюкозу, холестерин, сечову кислоту.",
    image: "assets/images/blood-test/blood.jpg",
    route: "/services/blood-test",
    seo: "Аналіз крові",
  },
    {
    title: "Іридодіагностика",
    description: "Метод, який дає правильно виставити діагноз по райдужній оболонці ока",
    image: "assets/images/irudodiahnostuka/irudodiahnostuka.jpg",
    route: "/services/iridodiagnostic-exam",
    seo: "Іридодіагностика",
  }
  ]
}
