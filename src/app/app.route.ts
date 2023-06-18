import { RouterModule, Routes } from "@angular/router"
import { CreateProjectComponent } from "./create-project/create-project.component"
import { ListProjectsComponent } from "./list-projects/list-projects.component"
import { NgModule } from "@angular/core"
import { UpdateProjectComponent } from "./update-project/update-project.component"

export const routes: Routes = [
    {
        path: '', component: ListProjectsComponent
    },
    {
        path: 'createProject', component: CreateProjectComponent
    },
    {
        path: 'updateProject/:id', component: UpdateProjectComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule { }