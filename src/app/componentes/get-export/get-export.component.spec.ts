import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetExportComponent } from './get-export.component';

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
});
