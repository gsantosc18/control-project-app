import { Component } from '@angular/core';
import { Project } from '../interfaces/Project';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from "../service/dialog/DialogService";

import { PaginatorConfig, PaginatorIntl } from "./custom/PaginatorIntl";
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl }],
})
export class ListProjectsComponent {
  listProjects: Array<Project> = [
    { name: "Blog pessoal", description: "Projeto para criação de um blog pessoal.", createdAt: new Date() },
    { name: "Blog pessoal", description: "Projeto para criação de um blog pessoal.", createdAt: new Date() },
    { name: "Blog pessoal", description: "Projeto para criação de um blog pessoal.", createdAt: new Date() },
    { name: "Blog pessoal", description: "Projeto para criação de um blog pessoal.", createdAt: new Date() },
    { name: "Blog pessoal", description: "Projeto para criação de um blog pessoal.", createdAt: new Date() },
  ]

  config: PaginatorConfig = { length: 5, options: [5, 10, 25] }

  constructor(
    public dialog: MatDialog
  ){}

  openDialog(project: Project): void {
    this.dialog.open(DialogService, {
      data: {
        title: project.name,
        content: `Deseja realmente apagar o projeto ${project.name}?`,
        onSuccess(): void {
          console.log("O projeto foi deletado!")
        }
      }
    })
  }
}
