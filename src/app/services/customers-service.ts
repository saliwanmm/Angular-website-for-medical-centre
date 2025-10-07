import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customers = [
    {
    name: "Черешня Мар'яна",
    info: "Пацієнт з 2014 року",
    review: "Чудова професійна клініка. Всі лікарі кваліфіковані та приємні від Бога. Хай у Вас і Ваших сім'ях буде здоров'я та злагода.",
    image: "assets/images/customers/3.jpeg"
  },
  {
    name: "Мар'ян Крістіна",
    info: "Пацієнт з 2019 року",
    review: "Звернулася у клініку 'Cardio' з приводу погіршення самопочуття, мені відразу поставили правильний діагноз. Величезна Вам подяка. Нехай Бог Вас береже.",
    image: "assets/images/customers/1.jpeg"
  },
  {
    name: "Товт Леонора",
    info: "Пацієнт з 2016 року",
    review: "Однозначно рекомендую клініку 'Cardio', де працюють чудо лікарі. Дуже уважні, професійні та чуйні. Дякую про турботу.",
    image: "assets/images/customers/2.jpeg"
  },
  ]
}
