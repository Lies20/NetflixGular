import { ComponentFixture, TestBed } from '@angular/core/testing';

import { inscriptionComponent } from './inscription.component';

describe('InscriptionComponent', () => {
  let component: inscriptionComponent;
  let fixture: ComponentFixture<inscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [inscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(inscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
