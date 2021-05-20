import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ApiService } from "./api/api.service";
import { SongComponent } from "./song/song.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}
