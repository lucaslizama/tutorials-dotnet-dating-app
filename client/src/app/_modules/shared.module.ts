import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		TabsModule.forRoot(),
		ToastrModule.forRoot({
			positionClass: 'toast-bottom-right',
		}),
		BsDropdownModule.forRoot(),
		NgxGalleryModule,
		NgxSpinnerModule.forRoot({
			type: 'line-scale-party',
		}),
	],
	exports: [BsDropdownModule, ToastrModule, TabsModule, NgxGalleryModule, NgxSpinnerModule],
})
export class SharedModule {}
