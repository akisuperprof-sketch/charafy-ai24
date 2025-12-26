import type { HistoryItem } from '../types';

const DB_NAME = 'CharafyHistoryDB';
const STORE_NAME = 'history';
const DB_VERSION = 1;

const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

export const saveHistoryItem = async (item: HistoryItem): Promise<void> => {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put(item);
        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });
    } catch (error) {
        console.error('Failed to save history item:', error);
        throw error;
    }
};

export const getHistoryItems = async (): Promise<HistoryItem[]> => {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.getAll();
        return new Promise((resolve, reject) => {
            request.onsuccess = () => {
                const items = request.result as HistoryItem[];
                // Sort by timestamp desc (newest first)
                items.sort((a, b) => b.timestamp - a.timestamp);
                resolve(items);
            };
            request.onerror = () => reject(request.error);
        });
    } catch (error) {
        console.error('Failed to get history items:', error);
        return [];
    }
};

export const deleteHistoryItem = async (id: string): Promise<void> => {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.delete(id);
        return new Promise((resolve, reject) => {
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });
    } catch (error) {
        console.error('Failed to delete history item:', error);
        throw error;
    }
};
