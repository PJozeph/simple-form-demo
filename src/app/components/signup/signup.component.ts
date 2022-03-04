import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public formGroup : FormGroup;
  public hobby : string = ''
  public result;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'name' : new FormControl(null,[Validators.required]),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'hobbies': new FormArray([])
    })
  }

  public addHobby() {
    (<FormArray>this.formGroup?.get('hobbies')).push(new FormControl(this.hobby));
    this.hobby = ''
  }

  public onSubmit() {
    this.result = this.formGroup.getRawValue();
  }

  public get hobbies() : FormArray{
    return <FormArray>this.formGroup.get('hobbies')
  }

}
