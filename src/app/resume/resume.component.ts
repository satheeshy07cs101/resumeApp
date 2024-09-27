
import { CommonModule, NgIf } from '@angular/common';
import { Component , Renderer2} from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import {AccordionModule} from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule, CommonModule, NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen:boolean = false;
  isCertificationOpen:boolean = false;
  isSkillsOpen:boolean = false;
  


  constructor(private titleService: Title, private renderer: Renderer2 ){
    this.titleService.setTitle('Satheesh Vykuntapu- Resume');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'Resume.pdf');
    link.setAttribute('download', 'Resume.pdf' );
    link.click();
    link.remove();
  }
}
