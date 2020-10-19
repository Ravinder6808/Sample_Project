import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {   MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';




@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatRadioModule,
        MatIconModule,
        MatNativeDateModule,
        MatTableExporterModule,
        MatPaginatorModule,
        MatTableModule



    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatRadioModule,
        MatIconModule,
        MatNativeDateModule,
        MatTableExporterModule,
        MatPaginatorModule,
        MatTableModule

    ]
})
export class MaterialModule { }
