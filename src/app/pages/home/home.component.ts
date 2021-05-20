import {
  AfterViewInit,
  Component,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, AfterViewInit {
  allTheSongs;
  songs;
  userWantsMovies = false;

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit() {
    this.apiService.searchSongs('waka', '').subscribe(data => {
      this.allTheSongs = data.results;
      this.songs = data.results;
    });
  }

  search(event) {
    let searchTerm = event.srcElement.value;

    if (searchTerm == '') {
      this.songs = JSON.parse(JSON.stringify(this.allTheSongs));
      return;
    }

    this.songs = this.songs.filter(item => {
      if (item.artistName && searchTerm) {
        return (
          item.artistName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }

  toggleMedia(event) {
    this.userWantsMovies = !this.userWantsMovies;

    this.songs = JSON.parse(JSON.stringify(this.allTheSongs));
    this.songs = this.songs.filter(item => {
      // console.log(item.kind);
      return this.userWantsMovies ? item.kind.trim() == 'music-video' : true;
    });
  }
}
