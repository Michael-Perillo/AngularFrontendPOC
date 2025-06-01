import { TestBed } from '@angular/core/testing';
import { FeaturesComponent } from './features.component';
import { provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';

describe('FeaturesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesComponent],
      providers: [
        provideBrowserGlobalErrorListeners(),
        provideZoneChangeDetection({ eventCoalescing: true }),
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(FeaturesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
