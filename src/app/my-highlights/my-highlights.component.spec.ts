import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHighlightsComponent } from './my-highlights.component';

describe('MyHighlightsComponent', () => {
  let component: MyHighlightsComponent;
  let fixture: ComponentFixture<MyHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
