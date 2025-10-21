import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SidebarMovilComponent } from "../sidebar-movil/sidebar-movil.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, DashboardComponent, SidebarMovilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
