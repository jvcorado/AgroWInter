import { Button } from "../Button";

export const Section2 = () => {
  return (
    <section
      className="p-10 lg:p-40  lg:items-center lg:text-center flex flex-col justify-center items-start gap-4"
      style={{
        backgroundImage:
          "linear-gradient(86deg, rgba(4,52,66,1) 32%, rgba(22,83,54,1) 100%)",
      }}
    >
      <h1 className="text-3xl font-bold lg:text-5xl text-card">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
        dolorem.
      </h1>
      <p className="text-xl lg:text-2xl text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        labore et repellat suscipit cum possimus reiciendis repellendus,
        perferendis eos odit!
      </p>
      <div className="w-full lg:w-4/12  flex items-start justify-start">
        <Button bg={"bg-gradient-card-2"}></Button>
      </div>
    </section>
  );
};
