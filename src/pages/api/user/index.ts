import type { APIRoute } from "astro";
import app from "../../../services/firebase/firebaseConfig";
import { getFirestore } from "firebase-admin/firestore";
export const prerender = false; // Esto asegura que la página se renderice bajo demanda

export const POST: APIRoute = async ({ request, redirect }) => {
    try {
    //   // Log the request headers
    //   console.log('Request Headers:', JSON.stringify([...request.headers]));
      
    //   // Debugging: Log the request's Content-Type
    //   console.log(`Request Content-Type: ${request.headers.get("content-type")}`);
    //   console.log(request);
  
    //   // Ensure the request's Content-Type is multipart/form-data
    //   if (!request.headers.get("content-type")?.includes("multipart/form-data")) {
    //     console.error("Request Content-Type is not multipart/form-data.");
    //     return redirect("/?error=invalid_content_type");
    //   }
  
      const formData = await request.formData();
      const name = formData.get("floating_first_name")?.toString();
      const lastName = formData.get("floating_last_name")?.toString();
      const email = formData.get("floating_email")?.toString();
      const number = formData.get("floating_number")?.toString();
      const petName = formData.get("floating_pet_name")?.toString();
      const breedName = formData.get("floating_breed_name")?.toString();
  
      const db = getFirestore(app.app);
      const userRef = db.collection("users");
      const existingUser = await userRef.where("email", "==", email).get();
      if (!existingUser.empty) {
        return redirect("/?email=false");
      }
      await userRef.add({
        name,
        lastName,
        email,
        number,
        petName,
        breedName,
      });
    } catch (error) {
      console.error(error);
      return redirect("/?success=false");
    }
    return redirect("/?success=true");
  };
  