import PouchDb from "pouchdb-browser";
import React from "react";

export function useCouchDB() {
  const localDbName = "test";

  // const remoteDbUrl = "http://localhost:5984/coba";

  const [
    localDb,
    // remoteDb
  ] = React.useMemo(
    () => [
      new PouchDb(localDbName),
      //  new PouchDb(remoteDbUrl, {auth: {password: 'password', username: 'admin'}})
    ],
    [],
  );

  // React.useEffect(() => {
  //   const syncDb = localDb.sync(remoteDb, {
  //     live: true,
  //     retry: true,
  //   });

  //   return () => {
  //     syncDb.cancel();
  //   };
  // }, [localDb, remoteDb]);

  return {
    db: localDb,
  };
}
