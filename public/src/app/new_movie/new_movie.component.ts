import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new_movie',
  templateUrl: './new_movie.component.html',
  styleUrls: ['./new_movie.component.css']
})
export class NewMovieComponent implements OnInit {
  error: string;
  backend = {};
  newMovie = {
    movie_title: '',
    ratings: { name: '', rating: '', review: '' }
  }
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }


  ngOnInit() {
  }

  movieSubmit() {
    let observable = this._httpService.addMovie(this.newMovie);
    observable.subscribe((data: any) => {
      if (data.error) {
        console.log(data.error)
        if (data.error.errors.name) {
          this.backend['name'] = data.error.errors.name.message
          console.log("adding backend name error")
        }
        if (data.error.errors.rating) {
          this.backend['rating'] = data.error.errors.rating.message
          console.log("adding backend rating error")
        }
        if (data.error.errors.content) {
          this.backend['content'] = data.error.errors.content.message
          console.log("adding backend content error")
        }
      }
      else {
        this.newMovie = {
          movie_title: '',
          ratings: { name: '', rating: '', review: '' }
        }
        this._router.navigate(['/movies']);
      }
    })
  }

}
