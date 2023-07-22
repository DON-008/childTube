import {Component, Inject ,OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { Title,Meta } from '@angular/platform-browser';
import { ChildService } from 'src/app/shared/services/child.service';
import { MoviewModalComponent } from '../../shared/modals/moview-modal/moview-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];
  headerBGUrl:string = '';
  headerTitle:string = '';

  constructor(private service: ChildService,public dialog: MatDialog) {
  
    }
    ngOnInit(){

      this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
    }
    
     // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovieResult = result.results;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original'+this.trendingMovieResult[0].poster_path;
      this.headerTitle = this.trendingMovieResult[0].title;
      // this.trendingMovieResult
    });
  }

  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }




  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }

  movieClicked(movie:any){
    this.headerBGUrl = 'https://image.tmdb.org/t/p/original'+movie.poster_path;
    this.headerTitle = movie.title;
  }
 

  openDialog() {
    this.dialog.open(MoviewModalComponent, {
      data: {
        movieData :{link:'https://www.youtube-nocookie.com/embed/i8eBBG46H8A'},
      },
      width: '90vw',
      height:'80vh'
    });
  }
  }


