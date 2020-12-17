
import React from "react";



class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Marchelo'}
          fotoUsuario={'https://picsum.photos/200/300?grayscale'}
          fotoPost={'https://picsum.photos/200/300?grayscale'}
        />
        <Post
          nomeUsuario={'Luix'}
          fotoUsuario={'https://picsum.photos/200/300/?blur'}
          fotoPost={'https://picsum.photos/200/300/?blur6'}
        />
      </div>
    );
  }
}

export default App;


