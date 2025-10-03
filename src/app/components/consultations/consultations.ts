import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DoctorInterface } from '../../interfaces/models-interfaces';
import { DoctorsService } from '../../services/doctors-service';

@Component({
  selector: 'app-consultations',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './consultations.html',
  styleUrl: './consultations.scss'
})
export class Consultations implements OnInit {

  doctors!: DoctorInterface[]

  constructor(
    private doctorsService: DoctorsService
  ) {}

  ngOnInit(): void {
    this.doctors = this.doctorsService.doctors
  }
  
}
