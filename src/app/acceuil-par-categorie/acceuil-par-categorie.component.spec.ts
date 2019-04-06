import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilParCategorieComponent } from './acceuil-par-categorie.component';

describe('AcceuilParCategorieComponent', () => {
  let component: AcceuilParCategorieComponent;
  let fixture: ComponentFixture<AcceuilParCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilParCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilParCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
