import { TestBed } from '@angular/core/testing';

import { FragmentRenderService } from './fragment-render.service';

describe('FragmentRenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FragmentRenderService = TestBed.get(FragmentRenderService);
    expect(service).toBeTruthy();
  });
});
