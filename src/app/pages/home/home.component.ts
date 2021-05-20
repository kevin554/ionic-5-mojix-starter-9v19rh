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

    let copy = JSON.parse(JSON.stringify(this.songs));

    if (searchTerm == "") {
      this.songs = this.allTheSongs;
      return;
    }

    this.songs = this.songs.filter(item => {
    if (item.artistName && searchTerm) {
      return (item.artistName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
  });
  }
}
