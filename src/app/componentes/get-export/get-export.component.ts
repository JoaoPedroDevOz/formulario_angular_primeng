import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { Cartas, GetRequest, Gosto } from '../../../gosto';
import { QrcExportService } from '../../services/qrc-export.service';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-get-export',
  templateUrl: './get-export.component.html',
  styleUrl: './get-export.component.scss'
})
export class GetExportComponent implements OnInit {
  gostos: Gosto = {
    serie: undefined,
    jogo: ''
  }

  listaGostos: Gosto[] = [];

  baralhos: Cartas = {
    baralho: ''
  }

  constructor() {}
    opMessage: Message[] = []

  verifyInputs(): boolean | void {
    let teste = true
    if (this.gostos.jogo && this.gostos.serie) {
      alert("dois inputs")
      return
    }

    if (!this.gostos.jogo && !this.gostos.serie) {
      alert("nenhum input")
      return
    }

    console.log(this.gostos);
  }

  ngOnInit(): void {
    // this.service.listar().subscribe((listaGostos) => {
    //   this.listaGostos = listaGostos;
    // })
  }

  adicionar() {
    this.listaGostos.push(this.gostos);
    // this.service.criar(this.gostos).subscribe();
  }

  limpar() {
    this.gostos.serie = undefined;
    this.gostos.jogo = '';
  }

  msgAlert(msg: string) {
    this.opMessage = [
      {
        severity: 'alert',
        detail: msg
      }
    ]
  }
}
