import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  noc: string;
  position: number;
  tanggal: string;
  nominal: number;
  tujuan:string;
  debit:number;
  kredit:number;
  jenis:string;
  saldo:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, noc: '001', tanggal: '11 April 2023', nominal:10000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 2, noc: '002', tanggal: '11 April 2023', nominal:15000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 3, noc: '003', tanggal: '11 April 2023', nominal:20000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 4, noc: '004', tanggal: '11 April 2023', nominal:25000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 5, noc: '005', tanggal: '11 April 2023', nominal:30000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 6, noc: '006', tanggal: '11 April 2023', nominal:35000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 7, noc: '007', tanggal: '11 April 2023', nominal:40000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 8, noc: '008', tanggal: '11 April 2023', nominal:45000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 9, noc: '009', tanggal: '11 April 2023', nominal:15000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
  {position: 10, noc:'010', tanggal: '11 April 2023', nominal:30000000, tujuan:'Penjualan', debit:10000000, kredit:1000000, jenis:'kas', saldo:0},
];

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent {
  displayedColumns: string[] =  ['position', 'noc', 'tanggal', 'nominal','tujuan','debit','kredit','jenis','saldo',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
