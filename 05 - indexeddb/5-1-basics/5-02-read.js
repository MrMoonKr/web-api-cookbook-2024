/**
 * Example 5-2. Reading the contacts
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Reads the contacts from the database, and renders them in the table.
 * @param {IDBDatabase} contactsDB The IndexedDB database.
 * @param {function(Array)} onSuccess A callback function that is executed when the contacts are loaded
 */
function getContacts( contactsDB, onSuccess ) {

    const request = contactsDB
        .transaction( [ 'contacts' ], 'readonly' )
        .objectStore( 'contacts' )
        .getAll();


    // When the data has been loaded, the database triggers a `success` event on the
    // request object.
    request.addEventListener( 'success', ( evt ) => {
        console.log( 'Got contacts:', request.result );
        onSuccess( request.result );
    } );

    request.addEventListener( 'error', ( evt ) => {
        console.error( 'Error loading contacts:', request.error );
    } );
}
