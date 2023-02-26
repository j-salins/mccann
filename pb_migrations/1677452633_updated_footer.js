migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qsax3lly",
    "name": "social",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "e4gb9ubaz1teytc",
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
})
