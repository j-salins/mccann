migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a2goplpu",
    "name": "contacts",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "u0qwuamh67m7m44",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
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
})
