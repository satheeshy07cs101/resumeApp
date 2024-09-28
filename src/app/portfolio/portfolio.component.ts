import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit  {

  projects  = {} as Project[];
  isCollapased: boolean = true;
  filtering:boolean = false;

  typescript: boolean = false;
  angular:boolean = false;
  java:boolean = false;
  springboot:boolean = false;
  csharp:boolean = false;
  javascript:boolean = false;
  oracle:boolean = false;
  kafka:boolean = false;
  maven:boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService ){
    this.titleService.setTitle('Satheesh Vykuntapu- Portfolio');
  }
  ngOnInit(): void {
   
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.oracle){
      filterTags.push(Tag.ORACLE);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.springboot){
      filterTags.push(Tag.SPRINGBOOT);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.kafka){
      filterTags.push(Tag.KAFKA);
    }
    if(this.maven){
      filterTags.push(Tag.MAVEN);
    }

    if(this.springboot || this.csharp || this.maven || this.java || this.angular || this.typescript || this.kafka || this.csharp || this.javascript || this.oracle){
      this.filtering = true;
    }else{
      this.filtering = false;
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags);

  }

  ResetFilter(){

    this.typescript  = false;
    this.angular = false;
    this.java = false;
    this.springboot = false;
    this.csharp = false;
    this.javascript = false;
    this.oracle = false;
    this.kafka = false;
    this.maven = false;

    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
