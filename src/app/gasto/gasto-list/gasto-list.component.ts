import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasto } from '../gasto';
import { GastoService } from '../gasto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gasto-list',
  templateUrl: './gasto-list.component.html',
  styleUrls: ['./gasto-list.component.css']
})
export class GastoListComponent implements OnInit {

  gastos: Gasto[] = [];
  public paginaAtual = 1;

  constructor(private gastoService: GastoService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.gastoService.getGastos().subscribe(
      data => this.gastos = data,
      error => console.log("erro" + error));
  }

  delete(id: number) {
    this.gastoService.deleteGasto(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  details(id: number) {
    this.router.navigate(['details', id]);
  }

  update(id: number) {
    this.router.navigate(['update', id]);
  }
}
