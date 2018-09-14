import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Conf{
  pessoas: string;
}

@Injectable()
export class PessoaService {
  /*pessoas = [
     { nome: 'abraao', idade: '23', genero: 'M' },
     { nome: 'abraao', idade: '20', gnero: 'M' },
     { nome: 'abraao', idade: '21', genero: 'M' },
     { nome: 'abraao', idade: '20', genero: 'M' },
     { nome: 'abraao', idade: '20', genero: 'M' },
     { nome: 'abraao', idade: '20', genero: 'M' },
     { nome: 'abraao', idade: '20', genero: 'M' },
   ];
  
*/ 

  pessoa: string;
  //url_pessoas = 'assets/pessoas.json'
  //public rows: any;
  constructor(private httpClient: HttpClient) { }

  getPessoa() {
    return this.httpClient.get<Conf>('assets/data/pessoas.json')
    //return this.pessoas;
  }

 
}


