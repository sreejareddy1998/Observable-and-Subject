import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.Observable();
    this.subjectAsObservable();
  }
  Observable() {
    let observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    let observer1 = {
      next: (data: number) => {
        console.log('observer1' + ' ' + data);
      },
      error: (err: any) => {
        console.log('err' + err);
      },
      complete: () => {
        console.log('observer1 completed');
      },
    };
    let observer2 = {
      next: (data: number) => {
        console.log('observer2' + ' ' + data);
      },
      error: (err: any) => {
        console.log('err' + err);
      },
      complete: () => {
        console.log('observer2 completed');
      },
    };
    observable$.subscribe(observer1);
    observable$.subscribe(observer2);
  }
  subjectAsObservable() {
    // let observable$ = of(1, 2, 3, 4);
    let subject = new Subject<number>();

    let observer1 = {
      next: (data: number) => {
        console.log('observer1' + ' ' + data);
      },
      error: (err: any) => {
        console.log('err' + err);
      },
      complete: () => {
        console.log('observer1 in subject completed');
      },
    };
    let observer2 = {
      next: (data: number) => {
        console.log('observer2' + ' ' + data);
      },
      error: (err: any) => {
        console.log('err' + err);
      },
      complete: () => {
        console.log('observer2 in subject completed');
      },
    };
    subject.subscribe(observer1);
    subject.subscribe(observer2);
    subject.next(1);
    subject.next(2);
    subject.next(3);
    // observable$.subscribe(subject);
  }
}
