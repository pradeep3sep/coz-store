import {
  getDatabase,
  child,
  ref,
  onValue,
  query,
  orderByChild,
  equalTo,
  limitToFirst,
  limitToLast,
  startAt,
  startAfter,
  endAt,
  endBefore,
  set,
  update,
  remove,
  get,
  push,
} from "firebase/database";

//!this part is here the intilization
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyDG1f2riJeo92txh9ukjdyAx8d1JxVn5sQ",
    authDomain: "coz-store.firebaseapp.com",
    projectId: "coz-store",
    storageBucket: "coz-store.appspot.com",
    messagingSenderId: "416319577037",
    appId: "1:416319577037:web:dd1b235cfdd6b8fb1e8284"
};
const firebaseApp = initializeApp(firebaseConfig);
//! Intilization ends here


const db = getDatabase();

//!to inseret new data in firebase{"TheStudents" is the main and 14 is the first child}
// const db = getDatabase();
// set(ref(db, "TheStudents/" + 14),{
//   NameOfStd: "pradeep",
//   RollNo: 45,
//   Section: "D",
//   Gender: "male"
// }).then(()=> {
//   alert("data stored succesfully")
// }).catch((error)=> alert("erros"))

//! this is to get data from firebase{""TheStudents/" + 14" is the path from where we want to access}
// const db = getDatabase();
// const dbref = ref(db);
// get(child(dbref,"TheStudents/" + 14))
// .then((snapshot)=>{
//   if (snapshot) {
//     console.log(snapshot.val(),"snapshot is here");
//   } else {
//     alert("no data found")
//   }
// })
// .catch((error)=> alert(error))
export function GettingAllProducts() {
  const db = getDatabase();
  const dbref = ref(db);
  const promise = get(child(dbref, "productList"))
  const dataPromise = promise.then(snapshot => snapshot.val())
  return dataPromise
}

//! This is for the updation of the data
// const db = getDatabase();
// update(ref(db, "TheStudents/" + 14),{
//   NameOfStd: "pradeep",
//   RollNo: 45,
//   Section: "Ddddd",
//   Gender: "male"
// }).then(()=> {
//   alert("data updated succesfully")
// }).catch((error)=> alert("erros"))

//! This is for the deletion of the data {we here only need the path, not full data}
// const db = getDatabase();
// remove(ref(db, "TheStudents/" + 14)).then(()=> {
//   alert("data removed succesfully")
// }).catch((error)=> alert("erros"))

//! This is for when we want the realtime data which new data added/updated on firebase in client side without reloading the page
// const db = getDatabase();
// const dbref = ref(db,"TheStudents");
// onValue(dbref,(snapshot)=> {
//   console.log(snapshot.val(),"snapshot is here");
// })
//! This is the query function, getting the data of first 6 only from database, db k baad jo daala h wo path h
// const db = getDatabase();
// const que = query(ref(db,"productList"), limitToFirst(6));
// get(que)
// .then((snapshot)=>{
//   if (snapshot) {
//     console.log(snapshot.val(),"snapshot is here");
//   } else {
//     alert("no data found")
//   }
// })
// .catch((error)=> alert(error))
//! This is the query function, getting the data of last 6 only from database, db k baad jo daala h wo path h
// const db = getDatabase();
// const que = query(ref(db,"productList"), limitToLast(6));
// get(que)
// .then((snapshot)=>{
//   if (snapshot) {
//     console.log(snapshot.val(),"snapshot is here");
//   } else {
//     alert("no data found")
//   }
// })
// .catch((error)=> alert(error))
//! this is getting sorted data on the particlar basis like id, gender, which we pass in the orderByChild("id"),keep in mind that we have to update it in the firebase database rule also. mode of sorting is A-Z then a-z. for decendin we can use array.reverse
// const db = getDatabase();
// const que = query(ref(db,"productList"), orderByChild("id"));
// get(que)
// .then((snapshot)=>{
//   if (snapshot) {
//     console.log(snapshot.val(),"snapshot is here");
//   } else {
//     alert("no data found")
//   }
// })
// .catch((error)=> alert(error))

//! This is quey for getting data which start at(means all data after starts at 2), equalto, keep ind mind we can also change the orderbychild which means to have the data on the particluar basis. we can also use the combination like start to and end to.
//   const db = getDatabase();
// const que = query(ref(db,"productList"), orderByChild("id"), equalTo(2));
// get(que)
// .then((snapshot)=>{
//   if (snapshot) {
//     console.log(snapshot.val(),"snapshot iss here");
//   } else {
//     alert("no data found")
//   }
// })
// .catch((error)=> alert(error))

export function GettingDataOfParticluarId(passingid) {
  const que = query(
    ref(db, "productList"),
    orderByChild("id"),
    equalTo(passingid)
  );
  get(que)
    .then((snapshot) => {
      if (snapshot) {
        console.log(snapshot.val(), "snapshot iss here");
      } else {
        alert("no data found");
      }
    })
    .catch((error) => console.log(error));
}
