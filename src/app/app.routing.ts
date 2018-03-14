import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { WorkoutComponent } from './workout/index';
import { WorkoutlistComponent } from './workoutlist/workoutlist.component';
import { WorkouttransactionsListComponent } from './workouttransactionslist/workouttransactionslist.component';
import { WorkouttransactionsComponent} from './workouttransactions/workouttransactions.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/index';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'workout/:userId', component: WorkoutComponent },
    { path: 'workoutlist/:userId', component: WorkoutlistComponent },
    { path: 'workouttranslist/:workoutId', component: WorkouttransactionsListComponent },
    { path: 'workouttrans/:workoutId', component: WorkouttransactionsComponent },
    { path: 'logout', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);