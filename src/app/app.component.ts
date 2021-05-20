import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ApiService } from "./api/api.service";
import { SongResponse } from "./song/song.model";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  /* ******** INTRUCTIONS **************
     1. Fill the list with the info provided by the API
     2. Use the Song component to display the song info
     3. Use the search bar to search the results and fill the list. (DO NOT add an extra button).
     4. Modify the stylesheets to get the desired UI
     5. Color the rows using an algorithm using the indexes of the loop. Choose one:
        a) Fibonnacci sequence
        b) Prime numbers
        c) Odd/Even.
     6. Modify the selector to support Music/Movie toogle.

     ******** EXTRAS **************
     1. Use environment variables to fill the default values
     2. Display image of the desired song/video (thumbnail).
  */

  constructor(private api: ApiService) {}

  ngAfterViewInit(): void {
    const artist = "Shakira";
    const media = "musicVideo"; // Or movie
    this.api.searchSongs(artist, media).subscribe(
      (data: SongResponse) => {
        console.log("Data", data);
        console.log("Data", data.results[0]);
      },
      error => {}
    );
  }
}
