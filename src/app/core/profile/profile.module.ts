import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingsComponent } from './followings/followings.component';
import { ArticlesComponent } from './articles/articles.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    FollowersComponent,
    FollowingsComponent,
    ArticlesComponent,
    CreateArticleComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
