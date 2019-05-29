import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FridgeService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    })
  };

  getFridge(): Observable<object> {
    return this.httpClient
      .get(`https://team-recipes.herokuapp.com/fridge`, this.httpOptions)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  addIngredient(ingredientId: string): Observable<Object> {
    return this.httpClient.post(
      `https://team-recipes.herokuapp.com/fridge/add/${ingredientId}`,
      JSON.stringify(ingredientId),
      this.httpOptions
    );
  }

  deleteIngredient(ingredientId: string): Observable<object> {
    return this.httpClient.delete(
      `https://team-recipes.herokuapp.com/delete/${ingredientId}`,
      this.httpOptions
    );
  }

  clearFridge(): Observable<object> {
    return this.httpClient.delete(
      `https://team-recipes.herokuapp.com/fridge/clear`,
      this.httpOptions
    );
  }
}
