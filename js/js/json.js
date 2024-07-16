const person = {
  name: "이름",
  age: 30,
  job: "FE",
};

const personStr = JSON.stringify(person);
console.log(personStr); // {"name":"이름","age":30,"job":"FE"}
console.log(JSON.parse(personStr)); // {name: '이름', age: 30, job: 'FE'}

const jsonData = [
  {
    _id: "5e80777f673acf89c007ff91",
    age: 27,
    eyeColor: "green",
    name: "Angelina Chang",
    gender: "female",
    email: "angelinachang@kangle.com",
    phone: "+1 (938) 477-2821",
  },
  {
    _id: "5e80777feee717674b817fd2",
    age: 25,
    eyeColor: "green",
    name: "Deidre Cobb",
    gender: "female",
    email: "deidrecobb@kangle.com",
    phone: "+1 (938) 477-2824",
  },
  {
    _id: "5e80777fac368a4578dda85d",
    age: 25,
    eyeColor: "blue",
    name: "Jolene Franks",
    gender: "female",
    email: "jolenefranks@kangle.com",
    phone: "+1 (985) 536-3981",
  },
];

const tdArr = [];
for (el of jsonData) {
  tdArr.push(`<tr>
            <td>${el.name}</td>
            <td>${el.gender}</td>
            <td>${el.age}</td>
            <td>${el.phone}</td>
        </tr>`);
}

const tableTemplat = `<table>
        <thead>
          <tr>
            <th>이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>휴대폰</th>
          </tr>
        </thead>
        <tbody>
        ${tdArr.join("")}
        </tbody>
    </table>`;

document.body.innerHTML = tableTemplat;

const x = [1,2,3,4,5];
const [a,b] = x.splice(0,2);
console.log(a,b);
console.log(x);
