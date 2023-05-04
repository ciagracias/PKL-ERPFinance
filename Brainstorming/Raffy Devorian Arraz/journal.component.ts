import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColDef } from 'ag-grid-community';


export interface PeriodicElement {
  position: string;
  sald: string;
  kurs: string;
  position1: string;
  position2: string;
  nominal: string;
  debit: string;
  kredit: string;
  transaksi: string;
  saldo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "001", position1: "001", position2: '11 April 2023', transaksi: 'penjualan', nominal: '10000000', debit: '10000000', kredit: '10000000', saldo: 'Kas', sald: '0', kurs: 'IDR'},
  {position: "002", position1: "002", position2: '11 April 2023', transaksi: 'penjualan', nominal: '15000000', debit: '15000000', kredit: '15000000', saldo: 'Bank', sald: '0', kurs: 'IDR'},
  {position: "003", position1: "003", position2: '11 April 2023', transaksi: 'penjualan', nominal: '20000000', debit: '20000000', kredit: '20000000', saldo: 'Bank', sald: '0', kurs: 'IDR'},
  {position: "004", position1: "004", position2: '13 April 2023', transaksi: 'penjualan', nominal: '25000000', debit: '25000000', kredit: '25000000', saldo: 'Kas', sald: '0', kurs: 'IDR'},
  {position: "005", position1: "005", position2: '13 April 2023', transaksi: 'penjualan', nominal: '30000000', debit: '30000000', kredit: '30000000', saldo: 'Kas', sald: '0', kurs: 'IDR'},
  {position: '006', position1: "006", position2: '21 April 2023', transaksi: 'penjualan', nominal: '35000000', debit: '35000000', kredit: '35000000', saldo: 'Piutang', sald: '0', kurs: 'IDR'},
  {position: '007', position1: "007", position2: '22 April 2023', transaksi: 'penjualan', nominal: '40000000', debit: '40000000', kredit: '40000000', saldo: 'Hutang', sald: '0', kurs: 'IDR'},
  {position: '008', position1: "008", position2: '22 April 2023', transaksi: 'penjualan', nominal: '45000000', debit: '45000000', kredit: '45000000', saldo: 'Kas', sald: '0', kurs: 'IDR'},
  {position: '', position1: "", position2: '', transaksi: '', nominal: '', debit: '', kredit: '', saldo: '', sald: '' , kurs: ''},
  {position: '', position1: "", position2: '', transaksi: '', nominal: '', debit: '', kredit: '', saldo: '', sald: '' , kurs: ''},
  {position: '', position1: "", position2: '', transaksi: '', nominal: '', debit: '', kredit: '', saldo: '', sald: '' , kurs: ''},
];

  
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent {
  displayedColumns: string[] = ['position', 'position1',  'position2',  'nominal', 'transaksi', 'debit', 'kredit', 'saldo', 'sald', 'kurs',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

  
}
} 
