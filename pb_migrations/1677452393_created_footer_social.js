migrate((db) => {
  const collection = new Collection({
    "id": "e4gb9ubaz1teytc",
    "created": "2023-02-26 22:59:53.452Z",
    "updated": "2023-02-26 22:59:53.452Z",
    "name": "footer_social",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5vhdorxd",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "chib0gr7",
        "name": "links",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "listRule": null,
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e4gb9ubaz1teytc");

  return dao.deleteCollection(collection);
})
