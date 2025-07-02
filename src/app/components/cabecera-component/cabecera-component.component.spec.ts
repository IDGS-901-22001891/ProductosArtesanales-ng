import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraComponentComponent } from './cabecera-component.component';

describe('CabeceraComponentComponent', () => {
  let component: CabeceraComponentComponent;
  let fixture: ComponentFixture<CabeceraComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
