# from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI
from typing import Union

app = FastAPI()

# fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

class Person(BaseModel):
    name: str
    age: int
    gender: Union[str | None] = None

@app.post("/person")
def create_person(person: Person):
    return person
# @app.get("/items/")
# def read_item(item_id: int):
#     return fake_items_db[item_id]

# @app.post("/items/")
# async def read_item(item: Item):
#     return item




# @app.get("/items/{item_id}")
# async def read_item(item_id):
#     return {"item_id": item_id}

# @app.get("/items/")
# async def read_item(skip: int = 0, limit: int = 10):
#     await asyncio.sleep(2)
#     return {
#         "message": "スリープしました",
#         "items": fake_items_db[skip : skip + limit]
#     }
