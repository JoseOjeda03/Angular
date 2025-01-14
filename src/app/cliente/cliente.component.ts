import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from './cliente.service';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title: string='Cliente';
  clientes: Cliente[]=[];

  

  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void{
    this.clienteService.getClientes().subscribe(response =>{
      this.clientes=response;
    });

  }



 



}