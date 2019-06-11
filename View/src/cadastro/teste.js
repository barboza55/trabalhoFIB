import React from 'react';

class Teste extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <span style={{ position: 'absolute' }}>
                    Relative e Absolute
                </span>
                <div
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        width: '300px',
                        height: 'max-content',
                        border: '1px solid blue'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: '30px',
                            top: '-5px',
                            backgroundColor: 'blue',
                            width: '100px',
                            height: '100px'
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'red',
                            width: '100px',
                            height: '100px'
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: 'yellow',
                            width: '100px',
                            height: '100px'
                        }}
                    />
                </div>
                <div
                    style={{
                        position: 'relative',
                        left: '100px',
                        minWidth: '100px'
                    }}
                >
                    Fixed e Sticky
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        display: 'inline',
                        width: '204px',
                        height: '1000px',
                        border: '2px solid blue'
                    }}
                >
                    <div
                        style={{
                            fontWeight: 'bold',
                            position: 'fixed',
                            backgroundColor: 'yellow',
                            width: '100px',
                            height: '100px'
                        }}
                    >
                        Fixed
                    </div>
                    <div
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            position: 'sticky',
                            top: '0px',
                            marginLeft: '100px',
                            backgroundColor: 'red',
                            width: '100px',
                            height: '100px'
                        }}
                    >
                        Sticky
                    </div>
                </div>
                <div
                    style={{
                        position: 'relative',
                        left: '90px',
                        minWidth: '90px'
                    }}
                >
                    Flex e Block
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        width: '500px',
                        height: '300px',
                        border: '3px solid blue'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            width: '150px',
                            height: '150px'
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'yellow',
                                width: '75px',
                                height: '75px'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: 'red',
                                width: '75px',
                                height: '75px'
                            }}
                        />
                    </div>
                    <div
                        style={{
                            marginLeft: '5px',
                            width: '150px',
                            height: '150px'
                        }}
                    >
                        <span
                            style={{
                                backgroundColor: 'yellow',
                                height: '75px'
                            }}
                        >
                            Spans
                        </span>
                        <span
                            style={{
                                color: 'white',
                                fontWeight: 'bold',

                                backgroundColor: 'red',
                                height: '75px'
                            }}
                        >
                            Display Block
                        </span>
                        <span
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                backgroundColor: 'blue',
                                height: '75px'
                            }}
                        >
                            Exemplo
                        </span>
                    </div>
                </div>
                <div
                    style={{
                        minWidth: '100px',
                        position: 'relative',
                        left: '99px'
                    }}
                >
                    Float e Clear
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        width: '300px',
                        height: 'max-content',
                        border: '4px solid blue'
                    }}
                >
                    <div
                        style={{
                            float: 'left',
                            backgroundColor: 'yellow',
                            width: '100px',
                            height: '100px'
                        }}
                    >
                        Flutuando a esquerda
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <div
                            style={{
                                clear: 'left',
                                backgroundColor: 'blue',
                                color: 'white',
                                fontWeight: 'bold'
                            }}
                        >
                            Elemento com Clear
                        </div>
                        sed tempus lacus. Nunc magna nibh, commodo eget elit ut,
                        ultricies lobortis sem. Fusce suscipit mauris tincidunt
                        porta maximus. Nam eu congue magna, id euismod lacus.
                        Phasellus id dolor erat. Vivamus tristique nunc
                        scelerisque sapien convallis sagittis. Aliquam aliquet
                        egestas lacus venenatis pellentesque. Nulla vel enim
                        quam. Nulla facilisi. Aliquam erat volutpat. Morbi eu
                        quam a felis ultrices elementum ut faucibus tortor.
                        Proin suscipit ex nulla, vel dictum justo hendrerit id.
                        Fusce magna mi, viverra a vestibulum in, convallis sit
                        amet justo.
                    </div>
                </div>
            </div>
        );
    }
}

export default Teste;
