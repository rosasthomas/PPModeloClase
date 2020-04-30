import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaAdminComponent } from './pelicula-admin.component';

describe('PeliculaAdminComponent', () => {
  let component: PeliculaAdminComponent;
  let fixture: ComponentFixture<PeliculaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
