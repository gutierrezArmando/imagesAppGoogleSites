import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarMovilComponent } from "../sidebar-movil/sidebar-movil.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, SidebarMovilComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
