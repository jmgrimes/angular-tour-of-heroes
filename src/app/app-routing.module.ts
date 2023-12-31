import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component"
import { HeroDetailComponent } from "./hero-detail/hero-detail.component"
import { HeroListComponent } from "./hero-list/hero-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "heroes", component: HeroListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
