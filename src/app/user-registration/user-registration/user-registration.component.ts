import { Component, OnDestroy,  OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  private ageValueChanges: Subscription;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [],
        lastName: [],
        email: [],
        age: []
      }),
      address: this.fb.group({
        street: [],
        number: [],
        postal: [],
        company: [] 
      }),
      colors: this.fb.array(['red', 'green', 'blue']),
    });

    const companyFormControl = this.userForm.get("address.company");

    this.ageValueChanges = this.userForm.get("basicInfo.age").valueChanges.subscribe(age => {
      if (age > 18) {
        companyFormControl.setValidators(Validators.required);
      } else {
        companyFormControl.clearValidators();
      }
      companyFormControl.updateValueAndValidity();
    });
  }

  ngOnDestroy(): void {
    this.ageValueChanges?.unsubscribe()
  }
}
