import { Component } from '@angular/core';
import { TestComponent } from '../../shared/components/test/test.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
