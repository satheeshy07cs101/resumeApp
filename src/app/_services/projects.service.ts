import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Data distribution microservice in Spring Boot", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Distribution app that sync databases between multiple regions(USA,SA,INDIA)", description: "Designing data model entities in spring data JPA , Axon Avro schema creation & using maven JMeter for performance tests, Migrated legacy application in C++ to java distributed micro services application, Involving in requirement analysis and providing estimates.", tags: [Tag.SPRINGBOOT, Tag.JAVA, Tag.KAFKA, Tag.ORACLE, Tag.MAVEN]},
    {id: 1, name: "Office Seating application in Google cloud platform", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Office seating application that manages office space ", description: "Design, develop and review the enhancements as individual contributor ,Development of new features supported by application, maintenance, bug fixing ,unit testing, Mentoring junior team members and giving KT's on delivered functionality,  Involving in requirement analysis and providing estimates.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.KAFKA, Tag.ORACLE]},
    {id: 2, name: "Sample .Net App", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ORACLE ,Tag.CSHARP, Tag.JAVA]},
    {id: 3, name: "Web API Project", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.JAVA]},
    {id: 4, name: "Chrome Extension", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    {id: 5, name: "Mobile App", pictures: ["satheesh.jpeg","satheesh.jpeg","satheesh.jpeg"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA]}
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
