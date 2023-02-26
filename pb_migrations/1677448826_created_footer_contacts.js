migrate((db) => {
  const collection = new Collection({
    "id": "u0qwuamh67m7m44",
    "created": "2023-02-26 22:00:26.091Z",
    "updated": "2023-02-26 22:00:26.091Z",
    "name": "footer_contacts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ehm6dxnn",
        "name": "title",
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
        "id": "a3by18jn",
        "name": "contact_name",
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
        "id": "flkxkef9",
        "name": "contact_phone",
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
        "id": "5hkguoqh",
        "name": "contact_email",
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
  const collection = dao.findCollectionByNameOrId("u0qwuamh67m7m44");

  return dao.deleteCollection(collection);
})
