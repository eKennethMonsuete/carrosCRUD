import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarroComponent } from './update-carro.component';

describe('UpdateCarroComponent', () => {
  let component: UpdateCarroComponent;
  let fixture: ComponentFixture<UpdateCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
