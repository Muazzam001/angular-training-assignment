import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { dataEducation, dataExperience } from './data';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  experienceData: any[] = dataExperience;
  educationData: any[] = dataEducation;
}
