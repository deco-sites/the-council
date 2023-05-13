export interface UserProps {
  image: {
    url: string;
    description?: string;
  };
  name: string;
  description: string;
}

export default function User({ description, name, image }: UserProps) {
  return (
    <div class={"w-full"}>
      <img
        class={"mb-[6%] object-cover block object-[50% 50%]"}
        src={image.url}
        alt={image.description}
      />

      <div>
        <h2
          class={"max-w-[75%] text-xl font-sans leading-6 text-left text-gray-800 font-light"}
        >
          {name}
        </h2>
        <div class={"mt-[6%] max-w-[75%] "}>
          <p class={"text-gray-800 font-poppins font-medium"}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
