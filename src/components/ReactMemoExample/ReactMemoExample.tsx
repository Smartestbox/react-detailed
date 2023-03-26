import React, {useCallback, useMemo, useState} from 'react';

// export const ReactMemoExample = () => {
//     const [counter, setCounter] = useState<number>(0)
//     const [users, setUsers] = useState<string[]>(['Igor', 'Dima', 'Alexander', 'Katya'])
//
//     return (
//         <div>
//             {/*<button onClick={()=>setCounter(counter + 1)}>+</button>*/}
//             {/*<MemoizedNewMessagesCounter count={counter}/>*/}
//             {/*<MemoizedUsers users={users} />*/}
//         </div>
//     );
// };

// export const UseMemoExample = () => {
//     const [a, setA] = useState(5)
//     const [b, setB] = useState(5)
//
//     let resultA = 1;
//     let resultB = 1;
//
//     resultA = useMemo(() => {
//         let tempResultA = 1;
//         for(let i = 1; i <= a; i++) {
//             let fake = 0
//             while(fake < 100000000) {
//                 fake++
//             }
//             tempResultA *= i
//         }
//         return resultA
//     }, [a])
//
//
//
//     for(let i = 1; i <= b; i++) {
//         resultB *= i
//     }
//
//     return (
//         <div>
//             <input value={a} onChange={(e)=> setA(Number(e.currentTarget.value))}/>
//             <input value={b} onChange={(e)=> setB(Number(e.currentTarget.value))}/>
//             <hr/>
//             <div>
//                 Result for a: {resultA}
//             </div>
//             <div>
//                 Result for b: {resultB}
//             </div>
//         </div>
//     );
// }

// const NewMessagesCounter = (props: { count: number }) => {
//     return <div>{props.count}</div>
// }
// const MemoizedNewMessagesCounter = React.memo(NewMessagesCounter)
//
// const Users = (props: { users: string[] }) => {
//     console.log('Users')
//     return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
// }
// const MemoizedUsers = React.memo(Users)

type UsersSecret = {
    users: string[]
}
export const UsersSecret: React.FC<UsersSecret> = ({
                                                       users,
                                                   }) => {
    console.log('USERS SECRET')
    return (
        <>
            {users.map((u, i) => <div key={i}>{u}</div>)}
        </>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Igor', 'Dima', 'Alexander', 'Katya'])

    const newArray = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1), [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}


export const UseCallbackExample = () => {
    console.log('UseCallbackExample')
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<string[]>(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook2 = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook = useCallback(() => {
        const newBooks = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book addBook={memoizedAddBook}/>
        </>
    )
}


type BookSecretPropsType = {
    addBook: () => void
}

const BookSecret: React.FC<BookSecretPropsType> = ({
                                                       addBook,
                                                   }) => {
    console.log('BookSecret')
    return (
        <div>
            <button onClick={() => addBook()}>Add Book</button>
        </div>
    )
}

const Book = React.memo(BookSecret)