migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o40l4t5s8jkds1l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qed6jkdx",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("o40l4t5s8jkds1l")

  // remove
  collection.schema.removeField("qed6jkdx")

  return dao.saveCollection(collection)
})
