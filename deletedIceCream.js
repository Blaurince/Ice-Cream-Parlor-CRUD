import { client, iceCreamCollection} from "./mongoConnect.js"

client.connect();
const deletedIceCream = async () => {

    try {
      await client.connect()
      const itemDeleted = await iceCreamCollection.deleteOne({ name: "Papaya" });
      console.log(itemDeleted);
 
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }

}
deletedIceCream();