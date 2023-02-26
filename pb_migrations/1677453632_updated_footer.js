migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvr248uf",
    "name": "phone",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  // remove
  collection.schema.removeField("zvr248uf")

  return dao.saveCollection(collection)
})
