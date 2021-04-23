import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <section class="hero is-black is-bold">

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Login</h1>
        </div>
      </div>

    </section>

    <section class="hero is-white is-bold">
      <div class="container centerall">

        <!-- login form -->
        <form (ngSubmit)="submitForm()" #loginForm="ngForm">

          <!-- email -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input 
                class="input" 
                name="email" 
                type="email" 
                placeholder="Email" 
                [(ngModel)]="email"
                #emailInput="ngModel"
                required
                email>
              
              <div class="help is-error is-danger" *ngIf="emailInput.invalid && emailInput.touched">
                Please enter a valid email.
              </div>


              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <!-- password -->
          <div class="field">
            <div class="control has-icons-left">
              <input 
                class="input" 
                name="password" 
                type="password" 
                placeholder="Password" 
                [(ngModel)]="password"
                #passInput="ngModel" 
                required>

              <div class="help is-error is-danger" *ngIf="passInput.invalid && passInput.touched">
                Please enter password
              </div>

              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <!-- submit -->
          <div class="field">
            <div class="control">
              <button class="button is-success" [disabled]="loginForm.invalid">
                Login
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
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `Your email is ${this.email}. Your password is ${this.password}`;

    //grab all the fields and values
    alert(message);
  }

}
