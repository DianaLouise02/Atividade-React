
const Header = () => {
    const headerStyle = {
        backgroundColor: 'black',
        padding: '0', // Remover o padding para ocupar toda a altura
        height: '300px', // Aumentar a altura do cabeçalho
        textAlign: 'center',
        borderBottom: '2px solid black',
        marginBottom: '200px',
        width: '100%', // Garantir que o cabeçalho ocupe toda a largura da tela
        overflow: 'hidden' // Garantir que a imagem não ultrapasse os limites do cabeçalho



    };




    const imageStyle = {
        maxWidth: '100%',
        height: '100%',

        objectFit: 'cover' // Manter a proporção da imagem
    };


    return (
        <header style={headerStyle}>
            <img
                src="https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-06-image1-1-1568x882-1024x576.png"
                alt="Logo"
                style={imageStyle}
            />

        </header>
    );
};

export default Header;