import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// import { useEffect, useState } from "react";
// import { useCouchDB } from "./lib/hooks/use-couch-db";

// type Model = {
//   name: string;
//   _id: string;
//   _rev: string;
// };

// function App() {
//   const [doc, setDoc] = useState<Model[]>([]);

//   const [name, setName] = useState<string>("");

//   const { db } = useCouchDB();

//   const createData = () => {
//     db.put({ _id: Math.random().toString(), name });
//     getAllDocuments();
//   };

//   const deleteData = (data: Model) => {
//     db.remove(data);
//     getAllDocuments();
//   };

//   const getAllDocuments = async () => {
//     const res = await db.allDocs<Model>({
//       include_docs: true,
//       descending: true,
//     });

//     const data = res.rows.map((row) => row.doc) as Array<Model>;

//     setDoc(data);
//   };

//   useEffect(() => {
//     getAllDocuments();
//   }, []);

//   console.log({ doc });

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center">
//       <ol>
//         {doc.map((da, index) => {
//           return (
//             <div className="flex gap-2 my-2" key={index}>
//               <li>{da?.name}</li>
//               <button
//                 className="bg-red-500 text-white p-1 rounded"
//                 onClick={() => deleteData(da)}
//               >
//                 delete
//               </button>
//             </div>
//           );
//         })}
//       </ol>

//       <div className="flex gap-1">
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button onClick={createData}>submit</button>
//       </div>
//     </div>
//   );
// }

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
