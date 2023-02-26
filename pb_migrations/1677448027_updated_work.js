migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9o7ow0exyt4lnn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1xg1dqyn",
    "name": "field",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9o7ow0exyt4lnn")

  // remove
  collection.schema.removeField("1xg1dqyn")

  return dao.saveCollection(collection)
})
