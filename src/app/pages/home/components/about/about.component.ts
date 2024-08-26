import { NgFor, NgIf, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { dataDetail, dataInfo, dataSkills } from './data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, NgIf, PercentPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  infoData: any[] = dataInfo;
  skillsData: any[] = dataSkills;
  detailData: any[] = dataDetail;
}
