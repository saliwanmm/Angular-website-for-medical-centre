import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DoctorsService } from '../../services/doctors-service';
import { CustomerInterface, DoctorInterface, ServicesInterface } from '../../interfaces/models-interfaces';
import { CustomersService } from '../../services/customers-service';

import { ServicesService } from '../../services/services-service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit {

  doctors!: DoctorInterface[];
  customers!: CustomerInterface[];
  services!: ServicesInterface[];

  constructor(
    private doctorsService: DoctorsService, 
    private customerService: CustomersService,
    private servicesService: ServicesService,
  ) {}

  ngOnInit(): void {
    this.doctors = this.doctorsService.doctors
    this.customers = this.customerService.customers
    this.services = this.servicesService.services
  }
}
