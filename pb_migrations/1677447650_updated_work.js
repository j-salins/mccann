migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9o7ow0exyt4lnn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0neolfik",
    "name": "colspan",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 2,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9o7ow0exyt4lnn")

  // remove
  collection.schema.removeField("0neolfik")

  return dao.saveCollection(collection)
})
