from pydantic import BaseModel

class MyModel(BaseModel):
    class Config:
        from_attributes = True


class ProductBase(BaseModel):
    name: str
    price: float
    description: str
    image_url: str

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: str

    class Config:
        orm_mode = False
