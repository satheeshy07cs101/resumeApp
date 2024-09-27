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
  python:boolean = false;
  csharp:boolean = false;
  javascript:boolean = false;
  react:boolean = false;
  nodejs:boolean = false;


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
    if(this.react){
      filterTags.push(Tag.REACT);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS);
    }

    if(this.python || this.csharp || this.java || this.angular || this.typescript || this.nodejs || this.csharp || this.javascript || this.react){
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
    this.python = false;
    this.csharp = false;
    this.javascript = false;
    this.react = false;
    this.nodejs = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
