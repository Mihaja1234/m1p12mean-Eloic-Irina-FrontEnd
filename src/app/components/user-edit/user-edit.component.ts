import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr'; // Importer ToastrService

@Component({
    selector: 'app-user-edit',
    imports: [CommonModule, FormsModule],
    templateUrl: './user-edit.component.html',
    styleUrl: './user-edit.component.css',
})
export class EditUserComponent implements OnInit {
    user: any = {}; // Objet pour stocker les données de l'utilisateur

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private router: Router,
        private toastr: ToastrService // Injecter ToastrService
    ) {}

    ngOnInit(): void {
        // Récupérer l'ID de l'utilisateur depuis l'URL
        const userId = this.route.snapshot.paramMap.get('id');

        // Charger les données de l'utilisateur
        if (userId) {
            this.userService.getUserById(userId).subscribe(
                (data) => {
                    this.user = data; // Assigner les données à l'objet user
                },
                (error) => {
                    this.toastr.error('Erreur lors du chargement des données', 'Erreur');
                }
            );
        }
    }

    updateUser(): void {
        this.userService.updateUser(this.user._id, this.user).subscribe(
            (response) => {
                this.toastr.success('Utilisateur mis à jour avec succès', 'Succès');
                this.router.navigate(['/users']); // Rediriger vers la liste des utilisateurs
            },
            (error) => {
                this.toastr.error('Erreur lors de la mise à jour', 'Erreur');
            }
        );
    }
}