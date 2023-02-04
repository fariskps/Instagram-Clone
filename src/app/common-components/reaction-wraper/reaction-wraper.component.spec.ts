import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionWraperComponent } from './reaction-wraper.component';

describe('ReactionWraperComponent', () => {
  let component: ReactionWraperComponent;
  let fixture: ComponentFixture<ReactionWraperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionWraperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactionWraperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
