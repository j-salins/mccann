migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o40l4t5s8jkds1l")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o40l4t5s8jkds1l")

  collection.listRule = null

  return dao.saveCollection(collection)
})
