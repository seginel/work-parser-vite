import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface MyDB extends DBSchema {
    images: {
        key: string;
        value: string;
    };
}

export let idb: IDBPDatabase<MyDB>;

export async function initIdb() {
    idb = await openDB<MyDB>('my-db', 1, {
        upgrade(db) {
            db.createObjectStore('images');
        },
    });
}
