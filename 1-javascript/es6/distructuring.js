const user = {
	id: 49,
	name: "Youcef",
	notes: [12, 15, 3, 5],
};
// const name=user.name
// const id2=user.id
const { id: id2, name, age = 23 } = user;

console.log(id2, user.id);
/* ----------------- */
const colors = [240, 65, 255];
/* 
const r = color[0]
const g = color[1]
const b = color[2]
*/
const [r, g, b] = colors;
/*  */
/* const user2=user;
delete user2.notes; */
const { notes, ...user2 } = user;
console.log(user2);
const user3 = {
	id: user.id,
	name: user.name,
};
