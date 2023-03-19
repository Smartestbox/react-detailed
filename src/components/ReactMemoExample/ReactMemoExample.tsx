import React, {useState} from 'react';

const ReactMemoExample = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Igor', 'Dima', 'Alexander', 'Katya'])
    return (
        <div>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
            <MemoizedNewMessagesCounter count={counter}/>
            <MemoizedUsers users={users} />
        </div>
    );
};

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const MemoizedNewMessagesCounter = React.memo(NewMessagesCounter)

const Users = (props: { users: string[] }) => {
    console.log('Users')
    return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}
const MemoizedUsers = React.memo(Users)

export default ReactMemoExample;