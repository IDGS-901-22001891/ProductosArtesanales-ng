import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProductosComponentComponent } from './listado-productos-component.component';

describe('ListadoProductosComponentComponent', () => {
  let component: ListadoProductosComponentComponent;
  let fixture: ComponentFixture<ListadoProductosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoProductosComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoProductosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
