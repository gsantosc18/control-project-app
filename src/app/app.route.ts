import { RouterModule, Routes } from "@angular/router"
import { CreateProjectComponent } from "./create-project/create-project.component"
import { ListProjectsComponent } from "./list-projects/list-projects.component"
import { NgModule } from "@angular/core"

export const routes: Routes = [
    {
        path: '', component: ListProjectsComponent
    },
    {
        path: 'createProject', component: CreateProjectComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule { }