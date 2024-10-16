import Image from "next/image";

export const ImageList = () => {
  return (
    <>
      <Image
        src="https://picsum.photos/600/400?random=1"
        width={600}
        height={400}
        alt=""
      />
      <Image
        src="https://picsum.photos/600/400?random=2"
        width={600}
        height={400}
        alt=""
      />
      <Image
        src="https://picsum.photos/600/400?random=3"
        width={600}
        height={400}
        alt=""
      />
      <Image
        src="https://picsum.photos/600/400?random=4"
        width={600}
        height={400}
        alt=""
      />
      <Image
        src="https://picsum.photos/600/400?random=5"
        width={600}
        height={400}
        alt=""
      />
      <Image
        src="https://picsum.photos/600/400?random=6"
        width={600}
        height={400}
        alt=""
      />
    </>
  );
};
