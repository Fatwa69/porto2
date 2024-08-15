import Image from "next/image";

const images = [
  { id: 1, img: "/products-serum-1.jpg" },
  { id: 2, img: "/products-serum-2.jpg" },
  { id: 3, img: "/products-mascara-1.jpg" },
  { id: 4, img: "/products-mascara-2.jpg" },
];

const ProductImages = () => {
  return (
    <div>
      {images.map((image) => (
        <div key={image.id} className="h-[500px] relative mb-4">
          <Image
            src={image.img}
            alt={`Product ${image.id}`}
            fill
            sizes="50vw"
            className="object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
