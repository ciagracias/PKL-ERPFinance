import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  nominal: string;
  tujuan: string;
  debit: string;
  kredit: string;
  jenis: string;
  saldo: number;
  kurs: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '1', weight: '11 April 2023', nominal: '10.000', tujuan: 'Penjualan', debit: '10.000', kredit:'10.000', jenis:'Kas', saldo: 0, kurs: 'IDR'},
  {position: 2, name: '2', weight: '11 April 2023', nominal: '15.000', tujuan: 'Penjualan', debit: '15.000', kredit:'15.000', jenis:'Bank', saldo: 0, kurs: 'IDR'},
  {position: 3, name: '3', weight: '11 April 2023', nominal: '20.000', tujuan: 'Penjualan', debit: '20.000', kredit:'20.000', jenis:'Bank', saldo: 0, kurs: 'IDR'},
  {position: 4, name: '4', weight: '13 April 2023', nominal: '25.000', tujuan: 'Penjualan', debit: '25.000', kredit:'25.000', jenis:'Kas', saldo: 0, kurs: 'IDR'},
  {position: 5, name: '5', weight: '13 April 2023', nominal: '30.000', tujuan: 'Penjualan', debit: '30.000', kredit:'30.000', jenis:'Kas', saldo: 0, kurs: 'IDR'},
  {position: 6, name: '6', weight: '21 April 2023', nominal: '35.000', tujuan: 'Penjualan', debit: '35.000', kredit:'35.000', jenis:'Piutang', saldo: 0, kurs: 'IDR'},
  {position: 7, name: '7', weight: '22 April 2023', nominal: '40.000', tujuan: 'Penjualan', debit: '40.000', kredit:'40.000', jenis:'Hutang', saldo: 0, kurs: 'IDR'},
  {position: 8, name: '8', weight: '22 April 2023', nominal: '45.000', tujuan: 'Penjualan', debit: '45.000', kredit:'45.000', jenis:'Kas', saldo: 0, kurs: 'IDR'},
];




@Component({
  selector: 'app-jurnal',
  templateUrl: './jurnal.component.html',
  styleUrls: ['./jurnal.component.scss']
})
export class JurnalComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'tujuan', 'debit', 'kredit', 'jenis', 'saldo', 'kurs'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }


