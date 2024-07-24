/**
 * Example 5-3. Adding a contact
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Adds a new contact to the database, then re-renders the table.
 * @param {IDBDatabase} contactsDB The IndexedDB database.
 * @param {Object}contact The new contact object to add
 * @param {Function}onSuccess A callback function that is executed when the contact is added
 */
function addContact( contactsDB, contact, onSuccess ) {

    const request = contactsDB
        .transaction( [ 'contacts' ], 'readwrite' )
        .objectStore( 'contacts' )
        .add( contact );

    request.addEventListener( 'success', () => {
        console.log( 'Added new contact:', contact );
        onSuccess();
    } );

    request.addEventListener( 'error', () => {
        console.error( 'Error adding contact:', request.error );
    } );
}
