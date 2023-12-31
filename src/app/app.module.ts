import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api"

import { AppRoutingModule } from "./app-routing.module"
import { InMemoryDataService } from "./in-memory-data.service"

import { AppComponent } from "./app.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { HeroDetailComponent } from "./hero-detail/hero-detail.component"
import { HeroListComponent } from "./hero-list/hero-list.component"
import { MessagesComponent } from "./messages/messages.component";
import { HeroSearchComponent } from './hero-search/hero-search.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
