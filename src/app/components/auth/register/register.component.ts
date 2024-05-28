import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required], 
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, email, phone, password, confirmPassword } = this.registerForm.value; 
      console.log('Formulario enviado');
      console.log('Usuario:', username);
      console.log('Correo electrónico:', email);
      console.log('Teléfono:', phone); 
      console.log('Contraseña:', password);
      console.log('Confirmar contraseña:', confirmPassword);
      
      this.submitted = true;

      this.registerForm.reset();
      setTimeout(() => {
        this.submitted = false;
      }, 2000); 
    }
  }
}