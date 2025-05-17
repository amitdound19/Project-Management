import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveprojectComponent } from './saveproject.component';

describe('SaveprojectComponent', () => {
  let component: SaveprojectComponent;
  let fixture: ComponentFixture<SaveprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
