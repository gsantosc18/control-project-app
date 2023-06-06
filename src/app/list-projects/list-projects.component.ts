import { Component } from '@angular/core';
import { Project } from '../interfaces/Project';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from "../service/dialog/DialogService";

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

  constructor(
    public dialog: MatDialog
  ){}

  openDialog(project: Project): void {
    this.dialog.open(DialogService, {
      data: {
        title: project.name,
        content: `Deseja realmente apagar o projeto ${project.name}?`,
        onSuccess(): void {
          
        }
      }
    })
  }
}
