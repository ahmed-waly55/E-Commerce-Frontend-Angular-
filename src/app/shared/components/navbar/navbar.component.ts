import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite)=>{
       initFlowbite()
    })
  }

}
