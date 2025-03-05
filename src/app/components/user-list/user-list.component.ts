import { Component,OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: any[] =[];

  newUser = {name:'', age:'', sex:'',city:''};

   constructor(private userService: UserService,private router: Router) {}

   ngOnInit(): void {
    this.loadUsers();
    }

    addUser(): void {
      if (this.newUser.name && this.newUser.age && this.newUser.sex && this.newUser.city) {
        this.userService.addUser(this.newUser).subscribe(() => {
          this.loadUsers(); // Recharge la liste  après ajout
            this.newUser = {name:'', age:'', sex:'',city:''}; // Réinitialise le formulaire
        });
      }
    }

   loadUsers(): void {
    this.userService.getUsers().subscribe(data => this.users =
    data);
    }

    navigateToEdit(userId: string): void {
        this.router.navigate(['/edit-user', userId]);
    }

    deleteUser(id: string): void {
      this.userService.deleteUser(id).subscribe(() =>
        this.loadUsers());
      }
}
