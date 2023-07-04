import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dcplanner',
  templateUrl: './dcplanner.component.html',
  styleUrls: ['./dcplanner.component.scss']
})
export class DcplannerComponent implements OnInit {

  newform: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newform = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  createNewTask()
  {
      console.log(this.newform.value)
  }

}
