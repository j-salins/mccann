migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gjwtizb67x38i4i")

  collection.viewRule = ""

  return dao.saveCollection(collection)
})
