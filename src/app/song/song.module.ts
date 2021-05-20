import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SongComponent } from "./song.component";

@NgModule({
  declarations: [SongComponent],
  exports: [SongComponent],
  imports: [CommonModule]
})
export class SongModule {}
