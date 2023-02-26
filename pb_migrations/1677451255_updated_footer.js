migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fk6nkgpn",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vvvlqygu",
    "name": "address",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rj4qosbn",
    "name": "email",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qsax3lly",
    "name": "social",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "v9o7ow0exyt4lnn",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  // remove
  collection.schema.removeField("fk6nkgpn")

  // remove
  collection.schema.removeField("vvvlqygu")

  // remove
  collection.schema.removeField("rj4qosbn")

  // remove
  collection.schema.removeField("qsax3lly")

  return dao.saveCollection(collection)
})
