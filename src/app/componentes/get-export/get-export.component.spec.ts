import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExportComponent } from './get-export.component';
import { GetRequest } from '../../../gosto';

describe('GetExportComponent', () => {
  let component: GetExportComponent;
  let fixture: ComponentFixture<GetExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve retornar mensagem se obj.serie não for um número', () => {
    const obj: GetRequest = { nome: 'Teste', serie: NaN };
    expect(component.verifySerie()).toBe(false);
  });

  it('deve aceitar série como 0', () => {
    const obj: GetRequest = { nome: 'Teste', serie: 0 };
    expect(component.verifySerie()).toBe(true);
  });

  it('deve aceitar série como um número válido', () => {
    const obj: GetRequest = { nome: 'Teste', serie: 5 };
    expect(component.verifySerie()).toBe(true);
  });

  it('deve retornar mensagem se série for undefined', () => {
    const obj: GetRequest = { nome: 'Teste' }; // série undefined
    expect(component.verifySerie()).toBe(false);
  });
});
