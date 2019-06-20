import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionUpdateComponent } from './auction-update.component';

describe('AuctionUpdateComponent', () => {
  let component: AuctionUpdateComponent;
  let fixture: ComponentFixture<AuctionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
