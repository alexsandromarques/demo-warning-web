import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../gasto';
import { Router, ActivatedRoute } from '@angular/router';
import { TagService } from 'src/app/tag/tag.service';
import { Tag } from 'src/app/tag/tag';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-gasto-form',
  templateUrl: './gasto-form.component.html',
  styleUrls: ['./gasto-form.component.css']
})
export class GastoFormComponent implements OnInit {

  id: number;
  gasto: Gasto = new Gasto();
  submitted = false;
  
  tags: Tag[] = [];
  tagsSelecionadas: Tag[] = [];
  dropdownSettings: IDropdownSettings;

  constructor(private gastoService: GastoService,
    private tagService: TagService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.carregarGarco();
    this.carregarTags();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };

  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  carregarTags() {
    console.log("carregar tags");
    this.tagService.getTags().subscribe(
      data => {
        this.tags = data;
        console.log(this.tags);
      },
      error => console.log("erro" + error));
  }

  carregarGarco() {
    this.id = this.route.snapshot.params['id'];
    
    if (this.id > 0) {
      this.gastoService.getGasto(this.id).subscribe(
        data => {
          this.gasto = data;
          this.tagsSelecionadas = data.tags;
          console.log("tags: " + this.gasto.tags);
        }, 
        error => console.log(error));

    }
  }

  newGasto(): void {
    this.submitted = false;
    this.gasto = new Gasto();
  }

  list() {
    this.router.navigate(['gastos']);
  }

  save() {
    console.log("tagsSelecionadas: " + this.tagsSelecionadas);
    
    this.gasto.tags = this.tagsSelecionadas;
    this.gastoService.salvarGasto(this.gasto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gasto = new Gasto();
    this.submitted = true;
  }

  onSubmit() {
    this.save();
  }

}
