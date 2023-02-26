migrate((db) => {
  const collection = new Collection({
    "id": "gjwtizb67x38i4i",
    "created": "2023-02-26 22:37:40.203Z",
    "updated": "2023-02-26 22:37:40.203Z",
    "name": "footer",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a2goplpu",
        "name": "contacts",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "u0qwuamh67m7m44",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i");

  return dao.deleteCollection(collection);
})
