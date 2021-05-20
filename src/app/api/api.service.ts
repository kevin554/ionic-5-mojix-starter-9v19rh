import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SongResponse } from "../song/song.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  searchSongs(search: string, media: string): Observable<SongResponse> {
    const path = `https://itunes.apple.com/search?term=${search}&media=${media}`;
    return this.http.get<SongResponse>(path);
  }
}
