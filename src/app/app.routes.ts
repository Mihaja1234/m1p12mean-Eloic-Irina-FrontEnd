import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { EditUserComponent } from './components/user-edit/user-edit.component';

export const routes: Routes = [ 
    // Redirection par défaut
    { path: '', redirectTo: 'articles', pathMatch: 'full' },

    { path: 'articles', component: ArticleListComponent }, // Route pour article-list

    { path: 'utilisateur', component: UserListComponent },  // Route pour user-list

    { path: 'edit-user/:id', component: EditUserComponent },  ];

    
