from fastapi import FastAPI
from . import crud, schemas

app = FastAPI()

@app.get("/products/")
def read_products():
    products = crud.get_products()
    return products

@app.get("/products/{product_id}")
def read_product(product_id: str):
    product = crud.get_product(product_id)
    return product

@app.post("/products/")
def create_product(product: schemas.ProductCreate):
    new_product = crud.create_product(product)
    return new_product
