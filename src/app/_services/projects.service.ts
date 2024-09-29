import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Data distribution microservice in Spring Boot", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Distribution app that sync databases between multiple regions(USA,SA,INDIA)", description: "Designing data model entities in spring data JPA . Axon Avro schema creation & using maven JMeter for performance tests. Migrated legacy application in C++ to java distributed micro services application. Involving in requirement analysis and providing estimates.", tags: [Tag.JAVA, Tag.SPRINGBOOT,  Tag.KAFKA, Tag.PCF, Tag.ORACLE, Tag.MAVEN, Tag.HIBERNATE]},
    {id: 1, name: "Office Seating application in Google cloud platform", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Office seating application that manages office space ", description: "Design, develop and review the enhancements as individual contributor. Development of new features supported by application, maintenance, bug fixing ,unit testing. Mentoring junior team members and giving KT's on delivered functionality.  Involving in requirement analysis and providing estimates.", tags: [Tag.JAVA, Tag.ANGULAR, Tag.TYPESCRIPT, Tag.JAVASCRIPT, Tag.GCP, Tag.ORACLE, Tag.DATASTORE]},
    {id: 2, name: "Ericsson network management tool", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "This tool is to provide FCAPS support to Ericsson clients.", description: "Delivering the change requests in the Ericsson network management tool. This tool is to provide FCAPS support to Ericsson clients. Delivered the software that is scalable as requested by the customer.Worked majorly on Thread dumps and Heap dumps to debug the memory issues. Got a chance to learn telecom domain knowledge by working with onsite clients in Italy.", tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.ORACLE, Tag.KAFKA, Tag.MAVEN, Tag.JBOSS, Tag.TOMCAT]},
    {id: 3, name: "Spring Boot microservice app & Angular UI changes", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Writing Rest controllers in Spring MVC to serve UI requests.", description: "Writing Rest controllers in Spring MVC to serve UI requests . Worked on angular to parse the http response from the API calls to present it in DOM. worked on both backend and frontend. Delivered the project within a short deadline.", tags: [Tag.JAVA, Tag.SPRINGBOOT, Tag.ANGULAR, Tag.HIBERNATE, Tag.ORACLE, Tag.JBOSS]},
    {id: 4, name: "Glassfish,Jboss to weblogic server migration", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Migrating java apps from glassfish,jboss to weblogic server.", description: "Migrating the java applications (20 applications) that are hosted on Glassfish 3.1 and JBoss 4.2 to Weblogic 12.1.3 . This includes reconfiguring the authentication, annotations, and web descriptor filters as per Weblogic standards. Coordinating with Oracle team for setting up the new Weblogic environment. Documenting the configurations and modified components. upgrading the jar libraries to new versions. Handled the release process and moved the application.", tags: [Tag.JAVA, Tag.JSF, Tag.WEBLOGIC, Tag.JBOSS, Tag.GLASSFISH, Tag.ORACLE]},
  ];
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project {

    let project = this.projects.find(project=>project.id  === id);

    if(project === undefined){
      throw new TypeError('no matching project found' + id);
    }
    return project;
  }


  GetProjectsByFilter(filterTag: Tag[]) : Project[]{
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){

      let foundAll = true;
      filterTag.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  } 
}
