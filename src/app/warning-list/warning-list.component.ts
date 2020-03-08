import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Warning } from '../warning';
import { WarningService } from '../warning.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warning-list',
  templateUrl: './warning-list.component.html',
  styleUrls: ['./warning-list.component.css']
})
export class WarningListComponent implements OnInit {

  warnings: Warning[] = [];
  public paginaAtual = 1;

  constructor(private warningService: WarningService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.warningService.getwarningList()
      .subscribe(
        data => this.warnings = data,
        error => console.log("erro" + error));
  }

  delete(id: number) {
    this.warningService.deletewarning(id)
      .subscribe(
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
    console.log("update...");
    this.router.navigate(['update', id]);
  }
}
