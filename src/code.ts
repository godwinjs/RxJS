// import * as Rx from "rxjs/Observable";
// const { Observable } = require('rxjs')
import { Observable } from 'rxjs'

const observable = new Observable((subscriber) => {
    subscriber.next(10)
    subscriber.complete()
})
console.log(observable)

const observer = {
    next: (value: number) => {console.log('Observer got a value of ' + value)},
    error: (err: any) => { console.log('observer got an error of' + err)},
    complete: () => {console.log('observer got a complete notification ')}
}

observable.subscribe(observer);