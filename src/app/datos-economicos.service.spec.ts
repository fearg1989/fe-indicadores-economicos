import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatosEconomicosService } from './datos-economicos.service';

describe('DatosEconomicosService', () => {
  let service: DatosEconomicosService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [DatosEconomicosService]
  }));

   it('should be created', () => {
    const service: DatosEconomicosService = TestBed.get(DatosEconomicosService);
    expect(service).toBeTruthy();
   });

   it('should have getDatosEconomicos function', () => {
    const service: DatosEconomicosService = TestBed.get(DatosEconomicosService);
    expect(service.getDatosEconomicos).toBeTruthy();
   });
});
