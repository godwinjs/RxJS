// import * as Rx from "rxjs/Observable";
// const { Observable } = require('rxjs')
import { Observable } from 'rxjs'
import { map, pluck } from 'rxjs/operators'

const users = {
    data: [
        {
            status: 'active',
            age: 32
        },
        {
            status: 'active',
            age: 14
        },
        {
            status: 'inactive',
            age: 13
        },
        {
            status: 'active',
            age: 24
        },
        {
            status: 'inactive',
            age: 56
        },
        {
            status: 'active',
            age: 17
        },
        {
            status: 'inactive',
            age: 19
        },
        {
            status: 'inactive',
            age: 18
        }
    ]
}
const users2 = {
    data: [
        {
            status: 'active',
            age: 32
        },
        {
            status: 'active',
            age: 14
        },
        {
            status: 'inactive',
            age: 13
        },
        {
            status: 'active',
            age: 24
        },
        {
            status: 'inactive',
            age: 56
        },
        {
            status: 'active',
            age: 17
        },
        {
            status: 'inactive',
            age: 19
        },
        {
            status: 'inactive',
            age: 18
        }
    ]
}
type usersObj = {
    data: [{status: string, age: number}]
}

const observable = new Observable((subscriber) => {
    subscriber.next(users)
    subscriber.complete()
}).pipe(
    pluck('data'),
    map((value: [{status: string, age: number}]) => {
        console.log('(2) got data from first operator', value)
        return value.filter(user => user.status ==="active")
    }),
    map((value: [{status: string, age: number}]) => {
        
        console.log('(3) got data from second operator', value)
        return value.reduce((sum: number, user) => {

            return (sum + user.age/value.length)
        }, 0)
    }),
    map((value: number) => {
        
        console.log('(4) got data from third operator', value)
        if(value < 23){
            throw new Error('Average Age is too young');
        }
        return value;
    })
)

// console.log(observable)

const observer = {
    next: (value: any) => {console.log('Observer got a value of ' + value)},
    error: (err: any) => { console.log('observer got an error of ' + err)},
    complete: () => {console.log('observer got a complete notification ')}
}


observable.subscribe(observer);