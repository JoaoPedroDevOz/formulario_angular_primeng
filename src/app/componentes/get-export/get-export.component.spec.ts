import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetExportComponent } from './get-export.component';
import { QrcExportService } from '../../services/qrc-export.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { AppRoutingModule } from '../../app-routing.module';

describe('GetExportComponent', () => {
  let component: GetExportComponent;
  let fixture: ComponentFixture<GetExportComponent>;
  let service: QrcExportService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetExportComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ButtonModule,
        FormsModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        IconFieldModule,
        InputIconModule,
        PanelModule,
        MessagesModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(GetExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(window, 'alert');
    spyOn(component, 'msgAlert');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call msgAlert if serie is NaN', () => {
    component.gostos = { jogo: '', serie: 'invalid' as any }; // Invalid serie input
    component.verifyInputs();
    fixture.detectChanges();
    expect(component.msgAlert).toHaveBeenCalledWith('Não é permitido');
  });

  it('should call msgAlert with "Não é permitido" if serie is not a number and jogo is null', () => {
    component.gostos = { jogo: '', serie: 'invalid' as any };
    component.verifyInputs();
    fixture.detectChanges();
    expect(component.opMessage.length).toBe(1);
    expect(component.opMessage[0].detail).toBe('Não é permitido');
  });
});
