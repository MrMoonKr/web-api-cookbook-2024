/**
 * Example 5-1. Opening the database
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * Opens the database, creating the object store if needed.
 * Because this is asynchronous, it takes a callback function `onSuccess`. Once the
 * database is ready, `onSuccess` will be called with the database object.
 * 
 * @param {function(IDBDatabase)} onSuccess A callback function that is executed when the database is ready
 */
function openDatabase( onSuccess ) {

    // https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory

    // Open the database with global window.indexedDB
    const request = indexedDB.open( 'contacts' );

    // Create the object store if needed
    request.addEventListener( 'upgradeneeded', ( evt ) => {

        console.log( "!!! upgradeneeded !!! ", evt.newVersion, evt.oldVersion );
        
        const db = request.result;

        // https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase

        // The contact objects will have an `id` property which will
        // be used as the key. When you add a new contact object, you don't need to
        // set an `id` property; the `autoIncrement` flag means that the database will
        // automatically set an `id` for you.
        const objectStore = db.createObjectStore( 'contacts', {
            keyPath: 'id',
            autoIncrement: true
        } );

        //objectStore.createIndex( 'name', 'name', { unique: false } );
    } );

    // When the database is ready for use, it triggers a `success` event.
    request.addEventListener( 'success', ( evt ) => {

        const db = request.result;

        // Call the given callback with the database.
        onSuccess( db );
    } );

    // Always handle errors!
    request.addEventListener( 'error', ( evt ) => {

        console.error( 'Error opening database:', request.error );
    } );
}
