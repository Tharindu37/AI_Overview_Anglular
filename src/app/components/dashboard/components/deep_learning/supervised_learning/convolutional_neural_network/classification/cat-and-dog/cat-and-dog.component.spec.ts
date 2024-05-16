import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAndDogComponent } from './cat-and-dog.component';

describe('CatAndDogComponent', () => {
  let component: CatAndDogComponent;
  let fixture: ComponentFixture<CatAndDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatAndDogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatAndDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
