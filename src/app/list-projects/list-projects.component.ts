import { Component } from '@angular/core';
import { Project } from '../interfaces/Project';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent {
  title = "";
  listProjects: Array<Project> = [
    { name: "Blog pessoal", description: "Projeto para criação de um blog pessoal.", createdAt: new Date() }
  ]
}
