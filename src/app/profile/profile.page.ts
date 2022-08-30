import { Component, OnInit } from "@angular/core";

//importamos para utilizar api
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})



export class ProfilePage implements OnInit {
  //guardamos nuestras propiedades
  profileId: string;
  chracter;

  //instanciamos lo que importamos
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    //de la url actual quiero extraer el parametro id y guardamos el parametro con profileId
    this.profileId = this.activatedRoute.snapshot.paramMap.get("id");
    this.http
    //realiza peticion concaquenada con id
      .get("https://rickandmortyapi.com/api/character/" + this.profileId)
      .subscribe((res) => {
        //guardamos peticion dentro de la propiedad chracter
        this.chracter = res;
      });
  }
}
