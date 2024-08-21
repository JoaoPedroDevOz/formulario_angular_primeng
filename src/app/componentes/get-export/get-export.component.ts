import { Component, Input, OnInit } from '@angular/core';
import { threadId } from 'node:worker_threads';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { numberValidator } from '../../utils/validmci';
import { Cartas, Gosto } from '../../../gosto';
import { QrcExportService } from '../../services/qrc-export.service';
@Component({
  selector: 'app-get-export',
  templateUrl: './get-export.component.html',
  styleUrl: './get-export.component.scss'
})
export class GetExportComponent implements OnInit {
  gostos: Gosto = {
    serie: '',
    jogo: ''
  }

  listaGostos: Gosto[] = [];

  baralhos: Cartas = {
    baralho: ''
  }

  constructor(private service: QrcExportService) {}


  ngOnInit(): void {
    this.service.listar().subscribe((listaGostos) => {
      this.listaGostos = listaGostos;
    })
  }

  adicionar() {
    this.listaGostos.push(this.gostos);
    // this.service.criar(this.gostos).subscribe();
  }

  limpar() {
    this.gostos.serie = '';
    this.gostos.jogo = '';
  }
}
