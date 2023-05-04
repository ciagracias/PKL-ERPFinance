import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  position: number;
  tanggal: string;
  weight: string;
  symbol: string;
  debit: string;
  kredit: string;
  jenis: string;
  saldo: number;
  kurs: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 2, name: '001', tanggal: '11 April 2023', weight: '10.000.000', symbol: 'Penjualan', debit: '10.000.000', kredit: '10.000.000', jenis: 'Kas', saldo: 0, kurs: 'IDR'},
  {position: 2, name: '002', tanggal: '11 April 2023', weight: '15.000.000', symbol: 'Penjualan', debit: '15.000.000', kredit: '15.000.000', jenis: 'Bank', saldo: 0, kurs: 'IDR'},
  {position: 3, name: '003', tanggal: '11 April 2023', weight: '20.000.000', symbol: 'Penjualan', debit: '20.000.000', kredit: '20.000.000', jenis: 'Bank', saldo: 0, kurs: 'IDR'},
  {position: 4, name: '004', tanggal: '13 April 2023', weight: '25.000.000', symbol: 'Penjualan', debit: '25.000.000', kredit: '25.000.000', jenis: 'Kas', saldo: 0, kurs: 'IDR'},
  {position: 5, name: '005', tanggal: '13 April 2023', weight: '30.000.000', symbol: 'Penjualan', debit: '30.000.000', kredit: '30.000.000', jenis: 'Kas', saldo: 0, kurs: 'IDR'},
  {position: 6, name: '006', tanggal: '21 April 2023', weight: '35.000.000', symbol: 'Penjualan', debit: '35.000.000', kredit: '35.000.000', jenis: 'Piutang', saldo: 0, kurs: 'IDR'},
  {position: 7, name: '007', tanggal: '22 April 2023', weight: '40.000.000', symbol: 'Penjualan', debit: '40.000.000', kredit: '40.000.000', jenis: 'Hutang', saldo: 0, kurs: 'IDR'},
  {position: 7, name: '008', tanggal: '22 April 2023', weight: '45.000.000', symbol: 'Penjualan', debit: '45.000.000', kredit: '45.000.000', jenis: 'Kas', saldo: 0, kurs: 'IDR'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jurnal';
  displayedColumns: string[] = ['position', 'name', 'tanggal', 'weight', 'symbol', 'debit', 'kredit', 'jenis', 'saldo', 'kurs'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
