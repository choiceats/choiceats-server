import * as pg from 'pg';
import { QueryResult } from 'pg';

const config = {
  user: 'nathannorton',
  database: 'nathannorton', 
  password: '', 
  host: 'localhost', 
  port: 5432, 
  max: 10, 
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);
pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

export const query = function (text: string, values: any[]) {
  return new Promise<QueryResult>((resolve, reject) => {
    pool.query(text, values, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res);
    });
  });
};

export const connect = function (callback: any) {
  return pool.connect(callback);
};