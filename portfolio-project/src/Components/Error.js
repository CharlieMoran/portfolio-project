import Image from "../assets/error.jpg"

export default function Error() {
    return (
      <div>
        <img src={Image}></img>
        <h1>404 Error, Page not found</h1>
      </div>
    );
  }