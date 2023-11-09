import { Location } from "@angular/common"
import { Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Hero } from "../hero.model"
import { HeroService } from "../hero.service"

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
})
export class HeroDetailComponent {
  hero?: Hero

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    )
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(
        _ => this.goBack()
      )
    }
  }

  goBack(): void {
    this.location.back()
  }
}
