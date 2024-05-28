import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  {
  registerForm!: FormGroup;

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
    }
  }
}