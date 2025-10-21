import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SidebarMovilComponent } from "./components/sidebar-movil/sidebar-movil.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, SidebarComponent, SidebarMovilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'imagesAppGoogleSites';
}
