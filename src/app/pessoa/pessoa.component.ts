import { Component, OnInit } from '@angular/core';
import { PessoaService, Conf } from '../pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private servicePessoa:PessoaService) { }

public config: Conf;
public rows:any = [];
public columns = [
  { prop: 'nome' },
  { name: 'Idade' },
  { name: 'Genero' }
];

  ngOnInit() {
   // this.rows = this.servicePessoa.getPessoa().subscribe(data => {
     // this.config = data;
    //});
    this.rows = this.servicePessoa.getPessoa();


  }

  

 
  

}
