migrate((db) => {
  const collection = new Collection({
    "id": "o40l4t5s8jkds1l",
    "created": "2023-02-17 15:56:05.182Z",
    "updated": "2023-02-17 15:56:05.182Z",
    "name": "team",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2oi2ww0w",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 4,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "e4akyeqn",
        "name": "occupation",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 4,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hvzyleqx",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o40l4t5s8jkds1l");

  return dao.deleteCollection(collection);
})
