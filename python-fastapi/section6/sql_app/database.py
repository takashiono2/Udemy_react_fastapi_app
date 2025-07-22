from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQL_DATABASE_URL = "sqlite:///./sql_app.db"

# DB接続のためのエンジンを作成
# SQLiteを使用する場合は、接続引数にcheck_same_thread=Falseを指定
engine = create_engine(
  SQL_DATABASE_URL, connect_args={"check_same_thread": False}
)
#セッションファクトリの作成: データベースセッションを作成するためのファクトリ
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Baseクラスを定義、ORMマッピングの基底クラスとして使用
Base = declarative_base()