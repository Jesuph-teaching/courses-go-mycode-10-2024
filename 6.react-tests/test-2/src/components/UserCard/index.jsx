import './style.css'
export default function UserCard({name,bio}) {

  return (
    <div className={"user-card "}>
        <h1>{name||'no name'}</h1>
        <p>
           {bio||'empty bio'}
        </p>
    </div>
  )
}
