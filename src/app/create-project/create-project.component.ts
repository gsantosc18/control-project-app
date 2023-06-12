import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../interfaces/Project';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  public project: Project = {
    name: "",
    description: "",
    createdAt: new Date()
  }
  @Output() onCreate = new EventEmitter()

  save() {
    this.onCreate.emit(this.project)
  }
}
