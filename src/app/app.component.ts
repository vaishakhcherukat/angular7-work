import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  public registrationForm: FormGroup;
  public person = {
    name: { prefix: '', first: '', middle: '', last: '', suffix: '', nickname: '' },
    company: { name: '', title: '' },
    addresses: [ {  addressLine1: '', addressLine2: '', city: '', state: '', postal: '', country: '', label: '' } ],
    phones: [ { number: '', extension: '', label: '' } ],
    emails: [ { address: '', label: '' } ]
  }


  public registerUser(form): void {
    console.log(this.person)
  }

  /**
   * @desc add new address on clicking (+) button.
   */
  public addNewAddress(): void {
    console.log(this.person.addresses);
    this.person.addresses.push(
      {  addressLine1: '', addressLine2: '', city: '', state: '', postal: '', country: '', label: '' }
    )
    console.log(this.person.addresses);
  }

  /**
   * @desc remove address on clicking (-) button.
   * @param item address to be removed. 
   */
  public removeAddress(item): void {
    let index = this.person.addresses.indexOf(item);
    if (index > -1) {
      this.person.addresses.splice(index, 1);
    }
  }

  /**
   * @desc add new address on clicking (+) button.
   */
  public addNewPhone(): void {
    this.person.phones.push(
      { number: '', extension: '', label: '' }
    )
  }

  /**
   * @desc remove address on clicking (-) button.
   * @param item address to be removed. 
   */
  public removePhone(item): void {
    let index = this.person.phones.indexOf(item);
    if (index > -1) {
      this.person.phones.splice(index, 1);
    }
  }

    /**
   * @desc add new address on clicking (+) button.
   */
  public addNewEmail(): void {
    this.person.emails.push(
      { address: '', label: '' }
    )
  }

  /**
   * @desc remove address on clicking (-) button.
   * @param item address to be removed. 
   */
  public removeEmail(item): void {
    let index = this.person.emails.indexOf(item);
    if (index > -1) {
      this.person.emails.splice(index, 1);
    }
  }


}
