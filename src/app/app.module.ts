import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NavigationComponent } from './navigation/navigation.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AppRouteModule } from './app.route';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListProjectsComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    TasksComponent,
    CreateTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule, 
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    AppRouteModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
