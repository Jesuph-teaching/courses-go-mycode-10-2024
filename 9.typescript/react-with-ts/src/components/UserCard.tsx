interface Props {
  name: string;
  age: number;
}

export default function UserCard({ age, name }: Props) {
  return (
    <div>
      <h3>{name}</h3>
      <h5>{age}</h5>
    </div>
  );
}
