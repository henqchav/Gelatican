import type { APIRoute } from "astro";
import app from "../../../services/firebase/firebaseConfig";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({request, redirect}) => {
    try {
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
            return redirect("/Gelatican?email=false");
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
        return redirect("/Gelatican?success=false");
    }
    return redirect("/Gelatican?success=true");
};
