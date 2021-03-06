import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

/**
 * @title Worksheet - To Be Named
 */

@Component({
  selector: 'requestForm',
  templateUrl: 'requestForm.html',
  styleUrls: ['requestForm.css']
})

export class requestForm implements OnInit {
  isLinear = false;
  testNameFormGroup: FormGroup;
  labInfoFormGroup: FormGroup;
  testInfoFormGroup: FormGroup;
  collectionInfoFormGroup: FormGroup;
  stabilityInfoFormGroup: FormGroup;
  reportInfoFormGroup: FormGroup;
  refRangeFormGroup: FormGroup;
  attachmentsFormGroup: FormGroup;
  reviewFormGroup: FormGroup;
  submitFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Monday', completed: false, color: 'primary'},
      {name: 'Tuesday', completed: false, color: 'accent'},
      {name: 'Wednesday', completed: false, color: 'warn'},
      {name: 'Thursday', completed: false, color: 'warn'},
      {name: 'Friday', completed: false, color: 'warn'},
      {name: 'Saturday', completed: false, color: 'warn'},
      {name: 'Sunday', completed: false, color: 'warn'}
    ]
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  ngOnInit() {
    this.testNameFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.labInfoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.testInfoFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      nextthirdCtrl: []
    });
    this.collectionInfoFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.stabilityInfoFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.reportInfoFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
    this.refRangeFormGroup = this._formBuilder.group({
      seventhCtrl: ['', Validators.required]
    });
    this.attachmentsFormGroup = this._formBuilder.group({
      eighthCtrl: ['', Validators.required]
    });
    this.reviewFormGroup = this._formBuilder.group({
      ninthCtrl: ['', Validators.required]
    });
    this.submitFormGroup = this._formBuilder.group({
      tenthCtrl: ['', Validators.required]
    });
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */