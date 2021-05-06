import { addNewContact, getContacts, getContactByID, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware 
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        },
        getContacts)

        .post(addNewContact);

    app.route('/contact/:contactID')

        .get(getContactByID)
        
        .put(updateContact)

        .delete(deleteContact);
}

export default routes;