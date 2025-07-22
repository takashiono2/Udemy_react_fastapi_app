from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sales_info.db"

engine = create_engine(
  SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
#セッションファクトリの作成: データベースセッションを作成するためのファクトリ
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Baseクラスを定義、ORMマッピングの基底クラスとして使用
Base = declarative_base()