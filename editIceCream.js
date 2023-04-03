import { client, iceCreamCollection } from "./mongoconnect.js";

client.connect()

const editIceCream = async () => {
    
       const updatediceCream = await iceCreamCollection.findOneAndUpdate(     
       {
          name: 'Papaya'
       },
       {
        "$Set": {
             "name" : "rocky road"
            }
       }
    )

    console.log(updatediceCream)
};
  
   
  
  editIceCream()

