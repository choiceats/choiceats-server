ChoicEats Server
=========
The server component for the ChoicEats application.

Development
-----------------

### Database
We are using the `db-migrate` package to maintain our database.  First you will
want to copy the `.env-sample` file named: `.env`.  Fill out the `DB_*` properties
with your local database values.

Next, run:
```
yarn migrate:up
```
to update your database to the current version.

#### Adding a change to the database
To make a change to the scheme, run:
```
yarn migrate:new <migration_name>
```
This will create a new file in `resources/db-migrate/migrations` that you will
have to fill out.  See the [db-migrate docs](https://db-migrate.readthedocs.io/en/latest/API/SQL/)
for more info.


#### Seeder
If you have a brand new database, there is a seeding app to fill in some data.

```
# Build the seeder
node ./node_modules/.bin/babel resources/seed/ --out-dir build/seeder/

# Run it
node ./build/seeder/seeder.js
```

### Server
First, compile the server code:
```
yarn build-server
```

Second, start up the client:
```
yarn start
```
￼
This will listen to file changes and reload the server when
you run `yarn build` again.


### Graphical Interface

After starting your server navigate to `http://localhost:4000/graphiql` for
an interactive query runner.

example queries


get all recipes
```
{
  recipes {
    id
    name
    author
    ingredients
    instructions
  }
}
```

select single recipe
```
{
  recipe(id: 4) {
    id
    name
    author
    ingredients
    instructions
  }
}
```

delete recipe
```
mutation deleteRecipe {
  deleteRecipe(id: 4) {
    id
    count
  }
}
```

insert recipe
```
mutation insertRecipe {
  insertRecipe(payload: {name: "test2", instructions: "bob", authorId: "2", ingredients: "pineapple"}) {
    id
    name
    instructions
    author
    ingredients
  }
}
```

update recipe
```
mutation insertRecipe {
  insertRecipe(payload: {id: 4, name: "test2"}) {
    id
    name
    instructions
    author
    ingredients
  }
}
```

### Map ports


To fake server listening on port 80, run 

```
sudo iptables -A PREROUTING -t nat -p tcp --dport 80 -j REDIRECT --to-port 4000
sudo iptables -A OUTPUT -t nat -p tcp --dport 80 -j REDIRECT --to-port 4000
```
