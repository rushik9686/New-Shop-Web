from pymongo import MongoClient
from urllib.parse import quote_plus

# Define and encode your credentials
username = 'rushi9686'
password = 'rushi@9686'
encoded_username = quote_plus(username)
encoded_password = quote_plus(password)

# Define MongoDB connection details
host = 'soppingweb.zqoujww.mongodb.net'
retry_writes = 'true'
write_concern = 'majority'
app_name = 'Soppingweb'

# Construct the MongoDB URI
MONGO_URI = (
    f"mongodb+srv://{encoded_username}:{encoded_password}@{host}/"
    f"?retryWrites={retry_writes}&w={write_concern}&appName={app_name}"
)

# Initialize the MongoDB client
client = MongoClient(MONGO_URI)
