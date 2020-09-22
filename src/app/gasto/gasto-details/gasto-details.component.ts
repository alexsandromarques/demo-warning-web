import { Component, OnInit } from '@angular/core';
import { Gasto } from '../gasto';
import { Router, ActivatedRoute } from '@angular/router';
import { GastoService } from '../gasto.service';

@Component({
  selector: 'app-gasto-details',
  templateUrl: './gasto-details.component.html',
  styleUrls: ['./gasto-details.component.css']
})
export class GastoDetailsComponent implements OnInit {

  id: number;
  gasto: Gasto;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gastoService: GastoService) { }

  ngOnInit(): void {

    this.gasto = new Gasto();

    this.id = this.route.snapshot.params['id'];

    this.gastoService.getGasto(this.id)
      .subscribe(data => {
        console.log(data)
        this.gasto = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['gastos']);
  }

}
