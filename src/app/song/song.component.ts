import { Component, Input, OnInit } from "@angular/core";
import { SongModel } from "./song.model";

@Component({
  selector: "app-song",
  templateUrl: "./song.component.html",
  styleUrls: ["./song.component.scss"]
})
export class SongComponent implements OnInit {
  @Input() currentSong: SongModel;

  constructor() {}

  ngOnInit(): void {}
}
