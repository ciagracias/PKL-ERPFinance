import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  potion : number;
  coa : string;
  tanggal : string;
  nominal : number;
  Tujuan : string ;
  debit : number;
  kredit : number;
  jenis : string;
  saldo : string;
  kurs : string ;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {potion : 1, coa: '001', tanggal: '11 april 2023', nominal: 10000000 , Tujuan :'penjualan', debit : 10000000, kredit : 10000000, jenis : 'kas', saldo : '0', kurs : 'IDR' },
  {potion : 2, coa: '002', tanggal: '11 april 2023', nominal: 15000000 , Tujuan :'penjualan', debit : 15000000, kredit : 15000000, jenis : 'bank', saldo : '0', kurs : 'IDR' },
  {potion : 3, coa: '003', tanggal: '11 april 2023', nominal: 20000000 , Tujuan :'penjualan', debit : 20000000, kredit : 20000000, jenis : 'bank', saldo : '0', kurs : 'IDR' },
  {potion : 4, coa: '004', tanggal: '13 april 2023', nominal: 25000000 , Tujuan :'penjualan', debit : 25000000, kredit : 25000000, jenis : 'kas', saldo : '0', kurs : 'IDR' },
  {potion : 5, coa: '005', tanggal: '13 april 2023', nominal: 30000000 , Tujuan :'penjualan', debit : 30000000, kredit : 30000000, jenis : 'kas', saldo : '0', kurs : 'IDR' },
  {potion : 6, coa: '006', tanggal: '21 april 2023', nominal: 35000000 , Tujuan :'penjualan', debit : 35000000, kredit : 35000000, jenis : 'piutang', saldo : '0', kurs : 'IDR' },
  {potion : 7, coa: '007', tanggal: '22 april 2023', nominal: 40000000 , Tujuan :'penjualan', debit : 40000000, kredit : 40000000, jenis : 'hutang', saldo : '0', kurs : 'IDR' },
  {potion : 8, coa: '008', tanggal: '22 april 2023', nominal: 45000000 , Tujuan :'penjualan', debit : 45000000, kredit : 45000000, jenis : 'kas', saldo : '0', kurs : 'IDR' },
];

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent {
  displayedColumns: string[] = ['potion', 'coa', 'tanggal', 'nominal','Tujuan','debit','kredit','jenis','saldo','kurs'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
