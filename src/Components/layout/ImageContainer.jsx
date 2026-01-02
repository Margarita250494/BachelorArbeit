import {clsx} from 'clsx'

function ImageContainer({image, imageAlt, isBig}) {
  return (
    <div className="mb-8 lg-xl:mb-0 w-full lg-xl:w-[50%] max-w-full flex justify-center">
      <img
        src={image}
        alt={imageAlt}
        className={clsx(
          isBig ? "w-full h-full lg-xl:w-[80%] lg-xl:h-auto"
            : 'w-[80%] h-[80%] lg-xl:h-auto')}
        loading="lazy"
      />
    </div>
  );
}

export default ImageContainer;