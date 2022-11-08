import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PaymentsApiService } from 'src/app/shared/services/api/payments/payments-api.service';

@Component({
  selector: 'app-form-final-shop',
  templateUrl: './form-final-shop.component.html',
  styleUrls: ['./form-final-shop.component.scss'],
  providers: [MessageService]
})
export class FormFinalShopComponent implements OnInit {

    public formFinalPayment: FormGroup = new FormGroup({});

    constructor(
        private fb: FormBuilder,
        private paymentApiService: PaymentsApiService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this._initForm();
    }

    private _initForm(){
        this.formFinalPayment = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['',Validators.required],
            country: ['',Validators.required],
            address: ['',Validators.required],
            city: ['',Validators.required],
            zip: ['',Validators.required],
            phone: ['',Validators.required],
            email: ['',Validators.required],
            cardNumber: ['',Validators.required],
            cardName: ['',Validators.required],
            cardDate: ['',Validators.required],
            cardCvv: ['',Validators.required],
            checkBox: ['',Validators.required],

        })
    }

    public onSubmit(){
        if (this.formFinalPayment.valid) {
            this.paymentApiService.createPayment(this.formFinalPayment.value).subscribe(
                () => {
                    this.messageService.add({severity:'success', summary:'Success', detail:'Payment created'});
                },(error) => {
                    this.messageService.add({severity:'error', summary:'Error', detail:'Payment not created'});
                }
            )
        } else {
            this.messageService.add({severity:'error', summary:'Error', detail:'Form not valid'});
        }
    }

}
