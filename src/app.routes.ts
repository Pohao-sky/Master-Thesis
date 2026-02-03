import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { MethodologyComponent } from './components/methodology.component';
import { ResultsComponent } from './components/results.component';
import { ReferencesComponent } from './components/references.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'methodology', component: MethodologyComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'references', component: ReferencesComponent },
  { path: '**', redirectTo: 'home' }
];