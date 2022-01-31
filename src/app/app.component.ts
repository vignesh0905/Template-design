import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiNotificationsService} from '@taiga-ui/core';
import {TUI_MOBILE_AWARE} from '@taiga-ui/kit';
import { Detail } from './details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_MOBILE_AWARE,
            useValue: true,
        },
        {
            provide: TUI_IS_IOS,
            useValue: false,
        },
        {
            provide: TUI_IS_ANDROID,
            useValue: true,
        },
    ],
})
export class AppComponent implements OnInit {
  title = 'taiga-ui-design';
  personalDetail = true;
  addressDetail = false;
  officeAddress = false;
  detailsForm = this.fb.group({
    name: [null, Validators.required],
    age: [null, Validators.required],
    location: [null, Validators.required],
    address: this.fb.array([]),
    officeAddress: [null, Validators.required]
  });
  readonly items = [
    {
        text: 'Personal Details',
        icon: 'tuiIconCard',
    },
    {
        text: 'Home Address',
        icon: 'tuiIconCall',
    },
    {
        text: 'Office Address',
        icon: 'tuiIconSettings',
    }
  ];

activeItemIndex = 0;

constructor(
    @Inject(TuiNotificationsService)
    private readonly notifications: TuiNotificationsService,
    private fb: FormBuilder,
) {}

ngOnInit(): void {
  this.addAddressForm()
}

addAddressGroup(addressArray){
  return this.fb.group({
    number: [null, Validators.required],
    streetName: [null, Validators.required],
    city: [null, Validators.required]
  })
}

get address(): FormArray{
  return this.detailsForm.get('address') as FormArray;
}

addAddressForm(details = new Detail()){
  const addressGroup = this.addAddressGroup(details);
  this.address.push(addressGroup);
}

removeJournalVoucher(index: number) {
  this.address.removeAt(index);
}

onClick(item: string) {
    if(item === 'Personal Details'){
      this.personalDetail = true;
      this.addressDetail = false;
      this.officeAddress = false;
    }else if (item === 'Home Address'){
      this.personalDetail = false;
      this.addressDetail = true;
      this.officeAddress = false;
    }else if(item === 'Office Address'){
      this.personalDetail = false;
      this.addressDetail = false;
      this.officeAddress = true;
    }
    // this.notifications.show(item).subscribe();
}

createPersonalDetailsForm(details, valid){
  console.log(this.detailsForm.value);
}
}
