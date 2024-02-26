import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState();

  const getTasks = async () => {
    let unsubscribe;
    try {
      const collectionRef = collection(db, "tasks");

      const queryTasks = query(
        collectionRef,
        where("uid", "==", auth.currentUser.uid),
        orderBy("createdAt")
      );
      unsubscribe = onSnapshot(queryTasks, (snapshot) => {
        let docs = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });

        setTasks(docs);
      });
    } catch (err) {
      console.error(err);
    }

    return () => unsubscribe();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return { tasks };
};
