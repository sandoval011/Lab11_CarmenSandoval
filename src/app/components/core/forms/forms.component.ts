import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
  
  formsComponent!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formsComponent = this.formBuilder.group({
      recipeName: ['', Validators.required],
      numberOfPeople: [1, [Validators.required, Validators.min(1)]],
      publicationDate: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparationSteps: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formsComponent.valid) {
      const { recipeName, numberOfPeople, publicationDate, description, ingredients, preparationSteps } = this.formsComponent.value;
      console.log('Nombre de la receta:', recipeName);
      console.log('Número de personas:', numberOfPeople);
      console.log('Fecha de publicación:', publicationDate);
      console.log('Descripción:', description);
      console.log('Ingredientes:', ingredients);
      console.log('Pasos de preparación:', preparationSteps);
    }
  }
}
