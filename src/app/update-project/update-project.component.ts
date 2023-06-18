import { ProjectService } from './../service/http/ProjectService';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectValidation } from '../validations/ProjectValidation';
import { Project } from '../interfaces/Project';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {
  projectForm: FormGroup
  private project: Project

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private projectService: ProjectService
  ) {
    const idProject = this.activeRoute.snapshot.params['id']

    this.project = this.projectService.findById(idProject)

    this.projectForm = new ProjectValidation().getByProject(this.project)
  }

  save() {
    const projectValue = this.projectForm.value
    
    this.project.name = projectValue.name
    this.project.description = projectValue.description

    this.projectService.update(this.project)
    this.route.navigate(["/"])
  }
}
