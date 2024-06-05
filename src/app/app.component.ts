import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkModeService } from './services/dark-mode.service';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dark-light';
  darkModeService: DarkModeService = inject(DarkModeService)
}
