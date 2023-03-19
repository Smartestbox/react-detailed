import React, {useState} from 'react';

const ReactMemoExample = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Igor', 'Dima', 'Vanya', 'Alexander', 'Katya'])
    return (
        <div>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users} />
        </div>
    );
};

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: string[] }) => {
    console.log('Users')
    return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}
const Users = React.memo(SecretUsers)

export default ReactMemoExample;