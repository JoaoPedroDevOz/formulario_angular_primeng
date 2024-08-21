import { TestBed } from '@angular/core/testing';

import { QrcExportService } from './qrc-export.service';

describe('QrcExportService', () => {
  let service: QrcExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrcExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
