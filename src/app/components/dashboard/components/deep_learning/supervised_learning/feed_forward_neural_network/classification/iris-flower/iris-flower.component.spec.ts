import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrisFlowerComponent } from './iris-flower.component';

describe('IrisFlowerComponent', () => {
  let component: IrisFlowerComponent;
  let fixture: ComponentFixture<IrisFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrisFlowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IrisFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
