import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {JobsComponent} from './pages/jobs/jobs.component';
import {AuthGuard} from "./guards/auth.guard";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {PostJobComponent} from "./pages/post-job/post-job.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'jobs', component: JobsComponent, canActivate: [LoggedInGuard]},
  {path: 'post_job', component: PostJobComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
