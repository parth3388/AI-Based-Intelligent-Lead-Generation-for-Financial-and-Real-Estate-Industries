import sqlite3

def create_user_table():

    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        password TEXT,
        role TEXT
    )
    """)

    conn.commit()
    conn.close()


def add_user(username,password,role):

    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO users(username,password,role) VALUES(?,?,?)",
        (username,password,role)
    )

    conn.commit()
    conn.close()