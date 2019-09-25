import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/core/profile/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/helpers/auth.guard';
import { FollowersComponent } from 'src/app/core/profile/followers/followers.component';
import { FollowingsComponent } from 'src/app/core/profile/followings/followings.component';
import { ArticlesComponent } from './articles/articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/articles', component: ArticlesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/articles/create', component: CreateArticleComponent, canActivate: [AuthGuard]},
  { path: 'dashboard/followers', component: FollowersComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/followings', component: FollowingsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
