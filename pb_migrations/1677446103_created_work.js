migrate((db) => {
  const collection = new Collection({
    "id": "v9o7ow0exyt4lnn",
    "created": "2023-02-26 21:15:03.009Z",
    "updated": "2023-02-26 21:15:03.009Z",
    "name": "work",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xamcr0jw",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rd1u0zhb",
        "name": "description",
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
        "id": "jpnrorzh",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/jpeg"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v9o7ow0exyt4lnn");

  return dao.deleteCollection(collection);
})
