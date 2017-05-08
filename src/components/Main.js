require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import ReactDOM from 'react-dom';
//获取图片相关的数据
let imageDatas = require('json!../data/imageDatas.json');

let yeomanImage = require('../images/yeoman.png');

//利用自执行函数，将图片名信息转成图片URL路径信息

imageDatas = ((imageDatasArr) => {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

class ImgFigure extends React.Component {
  render(){
    return(
      <figure>
        <img src={this.props.data.imageURL} alt={this.props.data.title} />
        <figcaption>
            <h2 className="img-title">
              {this.props.data.title}
            </h2>
            <div className="img-back">
              <p>
                {this.props.data.desc}
              </p>
            </div>
        </figcaption>
      </figure>
    )
  }
}


class AppComponent extends React.Component {
  render() {
    var controllerUnits = [],
      imgFigures = [];
    imageDatas.forEach((value, index) => {
      imgFigures.push(<ImgFigure data={value} key={index} />);
    });
    return (
      <section className="stage">
        <section>
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
