import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
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
    valid=false;
    file:File;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: AuthService,
        ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            file:[]

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    
    selectFile(event)
  {
     let reader=new FileReader();
     if(event.target.files && event.target.files.length>0)
     {
        this.file=event.target.files[0];
        console.log(this.file);
     }
  }

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
         const donn:FormData=new FormData();
  
         donn.append('image',this.file);
       
         donn.append("user",new Blob([JSON.stringify(user)], {
              type: "application/json"
         })
       );

        this.userService.register(donn)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/acceuil']);
                },
                error => {
                    this.valid=true;
                    this.loading = false;
                });
    }
}
