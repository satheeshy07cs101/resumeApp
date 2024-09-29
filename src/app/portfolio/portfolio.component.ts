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
  gcp:boolean = false;
  javascript:boolean = false;
  oracle:boolean = false;
  kafka:boolean = false;
  maven:boolean = false;
  pcf:boolean = false;
  hibernate:boolean = false;
  datastore:boolean = false;
  jboss:boolean = false;
  tomcat:boolean = false;
  glassfish:boolean = false;
  weblogic:boolean = false;
  jsf:boolean = false;

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
    if(this.gcp){
      filterTags.push(Tag.GCP);
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
    if(this.pcf){
      filterTags.push(Tag.PCF);
    }
    if(this.hibernate){
      filterTags.push(Tag.HIBERNATE);
    }

    if(this.datastore){
      filterTags.push(Tag.DATASTORE);
    }

    if(this.jboss){
      filterTags.push(Tag.JBOSS);
    }

    if(this.tomcat){
      filterTags.push(Tag.TOMCAT);
    }
    if(this.jsf){
      filterTags.push(Tag.JSF);
    }
    if(this.weblogic){
      filterTags.push(Tag.WEBLOGIC);
    }
    if(this.glassfish){
      filterTags.push(Tag.GLASSFISH);
    }

    if(this.springboot || this.gcp || this.jsf || this.weblogic || this.glassfish || this.jboss || this.tomcat || this.pcf || this.datastore || this.hibernate  || this.maven || this.java || this.angular || this.typescript || this.kafka || this.javascript || this.oracle){
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
    this.gcp = false;
    this.javascript = false;
    this.oracle = false;
    this.kafka = false;
    this.maven = false;
    this.pcf = false;
    this.hibernate = false;
    this.datastore = false;
    this.jboss = false;
    this.tomcat = false;
    this.jsf = false;
    this.glassfish = false;
    this.weblogic = false;

    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
