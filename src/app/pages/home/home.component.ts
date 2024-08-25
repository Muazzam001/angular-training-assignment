import { Component } from '@angular/core';
import { MobileMenuComponent } from "../../shared/components/mobile-menu/mobile-menu.component";
import { MobileSidebarComponent } from "../../shared/components/mobile-sidebar/mobile-sidebar.component";
import { TestComponent } from '../../shared/components/test/test.component';
import { FooterComponent } from './../../shared/components/footer/footer.component';
import { NavbarComponent } from './../../shared/components/navbar/navbar.component';
import { AboutComponent } from "./components/about/about.component";
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from "./components/intro/intro.component";
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { PortfoliosComponent } from "./components/portfolios/portfolios.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { ServicesComponent } from "./components/services/services.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MobileMenuComponent,
    MobileSidebarComponent,
    LeftSidebarComponent,
    NavbarComponent,
    IntroComponent,
    AboutComponent,
    ServicesComponent,
    SkillsComponent,
    ResumeComponent,
    PortfoliosComponent,
    BlogsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    TestComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
