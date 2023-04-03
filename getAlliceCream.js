import { client, iceCreamCollection} from "./mongoConnect.js"
 

client.connect()
const getAllIceCream = async () => {
   
    try {
      await client.connect()
      const allIceCream = await iceCreamCollection.find().toArray()
       console.log(allIceCream)

    } catch (error) {
      console.log(error)
    } finally {
      await client.close()
    }
}

getAllIceCream()