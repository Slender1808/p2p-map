/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

export default function Home() {
  let [position, setPosition] = useState([0, 0]);
  let [image, setImage] = useState([2, 2]);
  let [zoom, setZoom] = useState(3);
  const [size, setSize] = useState();

  useEffect(() => {
    setSize(window.screen.availWidth);
    setPosition([-window.screen.availWidth / 2, -window.screen.availWidth / 2]);
  }, []);

  /*
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log("visivel");
        setImages;
      }
    });
  }, []);
  */

  return (
    <div>
      <Head>
        <title>P2P Map</title>
        <meta name="description" content="P2P Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Draggable
          position={{ x: position[0], y: position[1] }}
          bounds={{
            top: -(256 * zoom) * size,
            left: -(256 * zoom) * size,
            right: 256 * zoom * size,
            bottom: 256 * zoom * size,
          }}
          onDrag={(e, p) => {
            setPosition([p.x, p.y]);
            /*
            const sizeX = size / 2;
            const sizeY = size / 2;

            const xDif = -sizeX - p.x;

            if (xDif > sizeX) {
              console.log("p +x", xDif, p.x);
              setPosition([-sizeX, -sizeY]);
            } else if (xDif < -sizeX) {
              console.log("p -x", xDif, p.x);
              setPosition([-sizeX, -sizeY]);
            }

            const yDif = -sizeY - p.y;
            if (yDif > sizeY) {
              console.log("p +y", yDif, p.y);
              setPosition([-sizeX, -sizeY]);
            } else if (yDif < -sizeY) {
              console.log("p -y", yDif, p.y);
              setPosition([-sizeX, -sizeY]);

              if(image[1] - 1 > 0){
                setImage([image[0], image[1] - 1]);
              }

              console.log(image);
              
            }
            */
          }}
          /*onStart={(e,p) => {
            position = [p.x, p.y]
            console.log("start",position);
          }}*/
          onStop={(e, p) => {
            const sizeX = size / 2;
            const sizeY = size / 2;

            const xDif = -sizeX - p.x;

            if (xDif > sizeX) {
              console.log("p +x", xDif, p.x);
              setPosition([-sizeX, -sizeY]);

              if (image[0] + 1 > 0) {
                setImage([image[0] + 1, image[1]]);
              }
            } else if (xDif < -sizeX) {
              console.log("p -x", xDif, p.x);
              setPosition([-sizeX, -sizeY]);

              if (image[0] - 1 > 0) {
                setImage([image[0] - 1, image[1]]);
              }
            }

            const yDif = -sizeY - p.y;
            if (yDif > sizeY) {
              console.log("p +y", yDif, p.y);
              setPosition([-sizeX, -sizeY]);

              if (image[1] + 1 > 0) {
                setImage([image[0], image[1] + 1]);
              }
            } else if (yDif < -sizeY) {
              console.log("p -y", yDif, p.y);
              setPosition([-sizeX, -sizeY]);

              if (image[1] - 1 > 0) {
                setImage([image[0], image[1] - 1]);
              }

              console.log(image);
            }
          }}
          handle=".center"
        >
          <div className="center">
            <div className="parent">
              <img
                className="sentinela00"
                src={`https://tile.openstreetmap.org/${zoom}/${image[0] - 1}/${
                  image[1] - 1
                }.png`}
                alt="map"
                height={256}
                width={256}
              />
              <img
                className="sentinela01"
                src={`https://tile.openstreetmap.org/${zoom}/${image[0]}/${
                  image[1] - 1
                }.png`}
                alt="map"
                height={256}
                width={256}
              />
              <img
                className="sentinela02"
                src={`https://tile.openstreetmap.org/${zoom}/${image[0] + 1}/${
                  image[1] - 1
                }.png`}
                alt="map"
                height={256}
                width={256}
              />
              <img
                className="sentinela10"
                src={`https://tile.openstreetmap.org/${zoom}/${image[0] - 1}/${
                  image[1]
                }.png`}
                alt="map"
                height={256}
                width={256}
              />
              <img
                src={`https://tile.openstreetmap.org/${zoom}/${image[0]}/${image[1]}.png`}
                alt="map"
                height={256}
                width={256}
              />
              <img
                className="sentinela12"
                src={`https://tile.openstreetmap.org/${zoom}/${image[0] + 1}/${
                  image[1]
                }.png`}
                alt="map"
                height={256}
                width={256}
              />
              <img
                className="sentinela20"
                src={`https://tile.openstreetmap.org/${zoom}/${image[0] - 1}/${
                  image[1] + 1
                }.png`}
                alt="map"
                height={256}
                width={256}
              />
              <img
                className="sentinela21"
                src={`https://tile.openstreetmap.org/${zoom}/${image[0]}/${
                  image[1] + 1
                }.png`}
                alt="map"
                height={256}
                width={256}
              />
              <img
                className="sentinela22"
                src={`https://tile.openstreetmap.org/${zoom}/${image[0] + 1}/${
                  image[1] + 1
                }.png`}
                alt="map"
                height={256}
                width={256}
              />
            </div>
          </div>
        </Draggable>
      </main>

      <footer></footer>
    </div>
  );
}
