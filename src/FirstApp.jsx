import PropTypes from 'prop-types'; //npm i prop-types  definir el tipo a las proporties


const newMessage = {
    message: 'hola Mundo',
    title: 'Fernando'
};

const getresult = (a ,b )=> {
    return  a + b ;
}
export const FirstApp = ({title, subtitle}) => {
    // console.log(props);

    return (
        <>
            <h1>Hola Mundo. { 1 + 1  }</h1>
            <h2>{title}</h2>
            {/*<code>{ JSON.stringify( newMessage)}</code>*/}
            <p>{ subtitle  }</p>
            <p>{ getresult(1,10)}</p>
        </>
    )
}



FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Fernando Herrera',
    subTitle: 'No hay subtítulo',
    title: 'No hay título',
}
