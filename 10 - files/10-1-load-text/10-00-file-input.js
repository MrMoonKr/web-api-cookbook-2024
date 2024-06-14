
/**
 * 
 * @param {File} file 
 */
function loadFileAsArrayBuffer( file ) {

    const extension = file.name.split( '.' ).pop().toLocaleLowerCase();
    const reader = new FileReader();

    reader.readAsArrayBuffer( file );
}

/**
 * 
 * @param {File} file 
 */
function loadFileAsText( file ) {

    const reader = new FileReader();

    reader.readAsText( file );
}

/**
 * 
 * @param {File} file 
 */
function loadFile( file ) {

    const isImage = file.type.startsWith( 'image/' );
    const reader = new FileReader();

    reader.addEventListener( 
        'load',
        ( event ) => {

            console.log( event.target.result );
        }
    )

    reader.readAsDataURL( file );
}


const form = document.createElement('form');

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.id = 'select-file';

fileInput.addEventListener( 'change', ( event ) => {

    /**
     * @type {HTMLInputElement}
     */
    const target = event.target;
    const { form, files } = target;
    const file = files?[ 0 ] : null;


    //const file = event.target.files[ 0 ];
} );

form.appendChild( fileInput );