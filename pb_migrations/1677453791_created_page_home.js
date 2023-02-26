migrate((db) => {
  const collection = new Collection({
    "id": "qud8gxq22kadl7h",
    "created": "2023-02-26 23:23:11.232Z",
    "updated": "2023-02-26 23:23:11.232Z",
    "name": "page_home",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3vkcbpap",
        "name": "slogan",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("qud8gxq22kadl7h");

  return dao.deleteCollection(collection);
})
