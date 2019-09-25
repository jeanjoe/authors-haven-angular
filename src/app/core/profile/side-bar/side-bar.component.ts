import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../profile.service';
import { User } from '../../interaces/user';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() articlesEmitter: EventEmitter<object> = new EventEmitter();

  currentUser: User;
  articles = [];
  followers = [];
  followings = [];
  loading = false;
  followerLoading = false;
  followingLoading = false;
  errorMessage = '';
  followerError = '';
  followingError = '';

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.fetchMyArticles();
    this.fetchMyFollowers();
    this.fetchMyFollowings();
  }

  fetchMyArticles = () => {
    this.loading = true;
    this.profileService.getMyArticles().subscribe(data => {
      this.articles = data.articles;
      this.articlesEmitter.emit(data.articles);
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
      this.errorMessage = err.error.message || err.statusText;
    });
  }

  fetchMyFollowers = () => {
    this.followerLoading = true;
    this.profileService.getMyFollowers().subscribe(data => {
      this.followers = data.followers;
      this.followerLoading = false;
    }, err => {
      this.followerLoading = false;
      this.followerError = err.error.message || err.statusText;
    });
  }

  fetchMyFollowings = () => {
    this.followerLoading = true;
    this.profileService.getMyFollowings().subscribe(data => {
      this.followings = data.followings;
      this.followingLoading = false;
    }, err => {
      this.followingLoading = false;
      this.followingError = err.error.message || err.statusText;
    });
  }

}
