import "./Image.css";


function Image(props) {

  const className = [
    "Image", props.align,
  ]

  const style = {
    width: props.width,
    height: props.height
  }


  return (
    <img style={style} src={props.url} className="Image right"/>
  );
}

export default Image;