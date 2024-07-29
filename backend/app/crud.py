from bson.objectid import ObjectId
from . import db, schemas

def get_products():
    products_collection = db.db['products']
    return list(products_collection.find({}))

def get_product(product_id: str):
    products_collection = db.db['products']
    product = products_collection.find_one({"_id": ObjectId(product_id)})
    return product

def create_product(product: schemas.ProductCreate):
    products_collection = db.db['products']
    product_dict = product.dict()
    result = products_collection.insert_one(product_dict)
    return {"_id": str(result.inserted_id)}
