from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from database import Base


class User(Base):
    # 「このクラスがどのデータベーステーブルにマッピングされるか」を明確に示す:
    __tablename__ = "users"

    # テーブルのカラム列にはColumnを仕様して、各カラムのデータ型を指定します。
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    # 「このクラスがどのデータベーステーブルにマッピングされるか」を明確に示す:
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")
