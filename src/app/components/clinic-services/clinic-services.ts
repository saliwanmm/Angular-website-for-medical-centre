import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ServicesService } from '../../services/services-service';
import { ServicesInterface } from '../../interfaces/models-interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clinic-services',
  imports: [RouterLink, CommonModule],
  templateUrl: './clinic-services.html',
  styleUrl: './clinic-services.scss'
})
export class ClinicServices implements OnInit {

  services!: ServicesInterface[];

  constructor(
    private servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    this.services = this.servicesService.services
  }

}
