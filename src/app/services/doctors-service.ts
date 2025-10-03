import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctors = [
    {
    name: "Др. Марія Коваленко",
    speciality: "Кардіолог, Аритмолог",
    description: "Спеціалізується на діагностиці та лікуванні серцево-судинних захворювань",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/cardiolog",
    seo: "Кардіолог",
    experience: "15+ років досвіду"
  },
    {
    name: "Др. Олена Сидоренко",
    speciality: "Дерматолог, Косметолог",
    description: "Лікування шкірних захворювань та косметологічні процедури",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/dermatolog",
    seo: "Дерматолог",
    experience: "14+ років досвіду"
  },
    {
    name: "Др. Андрій Мельник",
    speciality: "Невролог, Нейрохірург",
    description: "Діагностика та лікування неврологічних захворювань",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/nevrolog",
    seo: "Невролог",
    experience: "12+ років досвіду"
  },
    {
    name: "Др. Олександр Петренко",
    speciality: "Психіатр, Психотерапевт",
    description: "Лікування психічних розладів та психотерапевтична допомога",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/psihiatr",
    seo: "Психіатр",
    experience: "18+ років досвіду"
  },
    {
    name: "Др. Віктор Гриценко",
    speciality: "Пульманолог, Аллерголог",
    description: "Лікування захворювань органів дихання та алергічних реакцій",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/pulmanolog",
    seo: "Пульманолог",
    experience: "16+ років досвіду"
  },
    {
    name: "Др. Наталія Шевченко",
    speciality: "Сімейний лікар, Терапевт",
    description: "Первинна медична допомога та загальна діагностика",
    image: "assets/images/psihiatr/portrait-psi.jpeg",
    route: "/consultations/terapevt",
    seo: "Терапевт",
    experience: "13+ років досвіду"
  },
  ]
}
