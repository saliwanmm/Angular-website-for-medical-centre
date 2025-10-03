import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers = [
    {
    name: "Олексій Петренко",
    info: "Пацієнт з 2020 року",
    review: "Дуже вдячний лікарям за професійний підхід та швидку діагностику. Врятували моє життя!",
    image: "assets/images/psihiatr/portrait-psi.jpeg"
  },
  {
    name: "Марія Сидоренко",
    info: "Пацієнт з 2019 року",
    review: "Сучасне обладнання та досвідчені лікарі. Рекомендую всім, хто турбується про здоровя серця.",
    image: "assets/images/psihiatr/portrait-psi.jpeg"
  },
  {
    name: "Віктор Коваленко",
    info: "Пацієнт з 2021 року",
    review: "Відмінний сервіс та індивідуальний підхід до кожного пацієнта. Дуже задоволена результатом!",
    image: "assets/images/psihiatr/portrait-psi.jpeg"
  },
  ]
}
