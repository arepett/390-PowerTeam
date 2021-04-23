import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
    <section class="hero is-black is-bold">

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Sign Up</h1>
        </div>
      </div>

    </section>

    <section class="hero is-white is-bold">
      <div class="container centerall">

        <!-- login form -->
        <form (ngSubmit)="submitForm()" #loginForm="ngForm">

          <!-- username -->
          <div class="field">
            <label class="label">Username</label>
              <input 
                class="input" 
                name="username" 
                type="username" 
                [(ngModel)]="username"
                #usernameInput="ngModel"
                required>
              
              <div class="help is-error is-danger" *ngIf="usernameInput.invalid && usernameInput.touched">
                Please enter a username.
              </div>
          </div>

          <!-- email -->
          <div class="field">
            <label class="label">Email</label>
              <input 
                class="input" 
                name="email" 
                type="email" 
                [(ngModel)]="email"
                #emailInput="ngModel"
                required
                email>
              
              <div class="help is-error is-danger" *ngIf="emailInput.invalid && emailInput.touched">
                Please enter a valid email.
              </div>
          </div>

          <!-- password -->
          <div class="field">
            <label class="label">Password</label>
              <input 
                class="input" 
                name="password" 
                type="password" 
                [(ngModel)]="password"
                #passInput="ngModel" 
                required>

              <div class="help is-error is-danger" *ngIf="passInput.invalid && passInput.touched">
                Please enter password
              </div>
          </div>

          <!-- submit -->
          <div class="field">
            <div class="control">
              <button class="button is-success" [disabled]="loginForm.invalid">
                Sign up
              </button>
            </div>
          </div>

        </form>

      </div>
    </section>
  `,
  styles: [`
    .bg {
      background-color: #333;
    }
    .centerall {
        height: 70vh;
        padding: 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
      }
  `]
})
export class SignupComponent implements OnInit {
  username!: string;
  email!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `Your username is ${this.username}. Your email is ${this.email}. Your password is ${this.password}`;

    //grab all the fields and values
    alert(message);
  }

}
