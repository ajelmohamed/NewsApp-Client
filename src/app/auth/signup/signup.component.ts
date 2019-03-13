import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../../Models/User';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: AuthService,
        ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        const email = this.registerForm.get("username").value;
   const password = this.registerForm.get("password").value;
   const nom = this.registerForm.get("lastName").value;
   const prenom = this.registerForm.get("firstName").value;
        let user:User=new User();
         user.nomUser=nom;
         user.prenomUser=prenom;
         user.emailUser=email;
         user.passwordUser=password;
        this.userService.register(user)
            .pipe(first())
            .subscribe(
                data => {
                    //this.alertService.success('Registration successful', true);
                    //this.router.navigate(['/login']);
                },
                error => {
                   // this.alertService.error(error);
                    //this.loading = false;
                });
    }
}
