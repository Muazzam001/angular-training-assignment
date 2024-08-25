import { AsyncPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { share } from 'rxjs';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterModule, AsyncPipe, NgClass],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  activeFragment: any;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.gotoTop();
  }

  ngOnInit() {
    // this.gotoTop();
    this.activeFragment = this.activatedRoute.fragment.pipe(share());

    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      // console.log("Hash fragment: ", fragment);
      if (fragment) {
        this.jumpToSection(fragment);
        // } else {
        //   this.gotoTop();
      }
    });
  }

  jumpToSection(section: string | null) {
    if (section) {
      document.getElementById(section)?.scrollIntoView({
        behavior: 'smooth',
        block: "start",
        inline: "nearest"
      });
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
