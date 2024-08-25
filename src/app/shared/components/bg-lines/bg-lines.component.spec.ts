import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgLinesComponent } from './bg-lines.component';

describe('BgLinesComponent', () => {
  let component: BgLinesComponent;
  let fixture: ComponentFixture<BgLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgLinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
