import {
  async,
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder }
from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RioFormError } from './form-error';

describe('Component: Form Error', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RioFormError]);
  beforeEach(inject([TestComponentBuilder],
    function (tcb: TestComponentBuilder) {
      builder = tcb;
    }));

  it('should be hidden with visible is false',
    async(inject([], () => {
      return builder.createAsync(RioFormError)
        .then((fixture: ComponentFixture<any>) => {
          fixture.componentInstance.qaid = 'form-error-1';
          const compiled = fixture.debugElement.nativeElement;
          fixture.componentInstance.visible = false;
          fixture.detectChanges();
          expect(compiled.querySelector('div').getAttribute('class')
            .split(' ')).toContain('display-none');
          fixture.componentInstance.visible = true;
          fixture.detectChanges();
          expect(compiled.querySelector('div').getAttribute('class')
            .split(' ')).not.toContain('display-none');
        });
    }))
  );
});

