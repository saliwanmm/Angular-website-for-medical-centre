import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctors = [
    {
    name: "Лікар Леньо Любов Степанівна",
    speciality: "Кардіолог",
    description: "Діагностика та лікування серцево-судинних захворювань",
    image: "assets/images/cardiolog/cardio-portrait.jpeg",
    route: "/consultations/cardiolog",
    seo: "Кардіолог",
    experience: "40+ років досвіду"
  },
    {
    name: "Лікар Косач Лариса Іванівна",
    speciality: "Дерматолог",
    description: "Лікування шкірних захворювань.       ",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/dermatolog",
    seo: "Дерматолог",
    experience: "20+ років досвіду"
  },
    {
    name: "Лікар Макусій Любов Андріївна",
    speciality: "Невролог",
    description: "Діагностика та лікування неврологічних захворювань",
    image: "assets/images/nevrolog/nevrolog-port.jpeg",
    route: "/consultations/nevrolog",
    seo: "Невролог",
    experience: "40+ років досвіду"
  },
    {
    name: "Лікар Філик Віктор",
    speciality: "Психіатр, Психотерапевт",
    description: "Лікування психічних розладів та психотерапевтична допомога",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/psihiatr",
    seo: "Психіатр",
    experience: "40+ років досвіду"
  },
    {
    name: "Лікар Вайда Ірина Іванівна",
    speciality: "Пульмонолог",
    description: "Лікування захворювань органів дихання",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/pulmanolog",
    seo: "Пульманолог",
    experience: "40+ років досвіду"
  },
    {
    name: "Лікар Кобильник Надія Андріївна",
    speciality: "Сімейний лікар, Терапевт",
    description: "Первинна медична допомога та загальна діагностика",
    image: "assets/images/terapevt/terapevt-port.jpeg",
    route: "/consultations/terapevt",
    seo: "Терапевт",
    experience: "40+ років досвіду"
  },
  {
    name: "Лікар Леньо Любов Степанівна",
    speciality: "Ірідолог",
    description: "Обстеження орнанізму по райдужній оболочці ока",
    image: "assets/images/cardiolog/cardio-portrait.jpeg",
    route: "/consultations/iridolog",
    seo: "Ірідолог",
    experience: "40+ років досвіду"
  }
  ]
}
