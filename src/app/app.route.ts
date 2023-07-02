import { RouterModule, Routes } from "@angular/router"
import { CreateProjectComponent } from "./create-project/create-project.component"
import { ListProjectsComponent } from "./list-projects/list-projects.component"
import { NgModule } from "@angular/core"
import { UpdateProjectComponent } from "./update-project/update-project.component"
import { TasksComponent } from "./tasks/tasks.component"
import { CreateTaskComponent } from "./tasks/create-task/create-task.component"
import { UpdateTaskComponent } from "./tasks/update-task/update-task.component"

export const routes: Routes = [
    {
        path: '', component: ListProjectsComponent
    },
    {
        path: 'createProject', component: CreateProjectComponent
    },
    {
        path: 'updateProject/:id', component: UpdateProjectComponent
    },
    {
        path: "projects/:projectId/tasks", component: TasksComponent
    },
    {
        path: "projects/:projectId/createTask", component: CreateTaskComponent
    },
    {
        path: "projects/:projectId/updateTask/:taskId", component: UpdateTaskComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule { }