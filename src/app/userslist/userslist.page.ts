import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-userslist",
  templateUrl: "./userslist.page.html",
  styleUrls: ["./userslist.page.scss"],
})


export class UserslistPage implements OnInit {
  characters = [];

  constructor(private http: HttpClient) {}

//cada vez que refresque la pagina hará la peticion de la api
  async ngOnInit() {
    this.http
      .get<any>("https://rickandmortyapi.com/api/character")
      .subscribe((res) => {
        console.log(res)
        this.characters = res.results;
      });
  }

}
